/*
	This file contains the magic items found in WotC publications that have been
	excluded from the first round of transcriptions

	These items include all artifacts and some intelligent items

	As wel as items that are not normally usable by players such as plot devices
*/
{ // pub_20141104_RoT.js
	// Artifact
	MagicItemsList["draakhorn"] = {
		name : "Draakhorn",
		source : [["RoT", 93]],
		type : "wondrous item",
		rarity : "artifact",
		description : "",
		descriptionFull : "The Draakhorn was a gift from Tiamat in the war between dragons and giants. It was once the horn of her ancient red dragon consort, Ephelomon, that she gave to dragonkind to help them in their war against the giants. The Draakhorn is a signaling device, and it is so large that it requires two Medium creatures (or one Large or larger) to hold it while a third creature sounds it, making the earth resonate to its call. The horn has been blasted with fire into a dark ebony hue and is wrapped in bands of bronze with draconic runes that glow with purple eldritch fire.\n   The low, moaning drone of the Draakhorn discomfits normal animals within a few miles, and it alerts all dragons within two thousand miles to rise and be wary, for great danger is at hand. Coded blasts were once used to signal specific messages. Knowledge of those codes has been lost to the ages.\n   Those with knowledge of the Draakhorn's history know that it was first built to signal danger to chromatic dragons\u2014a purpose the Cult of the Dragon has corrupted to call chromatic dragons to the Well of Dragons from across the North.\n   Within 50 feet of any enclosed space where the horn is blown, the air begins to shimmer from the sound. Any character within 20 feet of the entry to the enclosed space must succeed on a DC 12 Strength check to continue pushing against the pressure of the sound. A failure indicates the character can advance no farther toward the entry.\n   For any character entering the enclosed space, the sound fades to silence\u2014because any creature that enters the enclosed space is temporarily deafened and must make a DC 12 Constitution saving throw. Success indicates the deafness ends 2 minutes after the Draakhorn ceases to sound. Failure indicates the character remains deafened for 1 hour after the Draakhorn ceases to sound.\n   While the horn is sounding, a creature must make a DC 15 Constitution saving throw the first time on a turn the creature enters a 150-foot cone in front of the horn or starts its turn there. On a failed save, the creature takes 27 (6d8) thunder damage and is knocked prone. On a successful save, the creature takes half damage and isn't knocked prone."
	}
}
{ // pub_20141209_DMG.js
	// Intelligent Items with sub-choices
	MagicItemsList["moonblade"] = {
		name : "Moonblade",
		source : [["D", 217]],
		type : "weapon (longsword)",
		rarity : "legendary",
		description : "",
		descriptionFull : "Of all the magic items created by the elves, one of the most prized and jealously guarded is a moon blade. In ancient times, nearly all elven noble houses claimed one such blade. Over the centuries, some blades have faded from the world, their magic lost as family lines have become extinct. Other blades have vanished with their bearers during great quests. Thus, only a few of these weapons remain.\n   A moonblade passes down from parent to child. The sword chooses its bearer and remains bonded to that person for life. If the bearer dies, another heir can claim the blade. If no worthy heir exists, the sword lies dormant. It functions like a normal longsword until a worthy soul finds it and lays claim to its power.\n   A moonblade serves only one master at a time. The attunement process requires a special ritual in the throne room of an elven regent or in a temple dedicated to the elven gods.\n   A moonblade won't serve anyone it regards as craven, erratic, corrupt, or at odds with preserving and protecting elvenkind. If the blade rejects you, you make ability checks, attack rolls, and saving throws with disadvantage for 24 hours. If the blade accepts you, you become attuned to it and a new rune appears on the blade. You remain attuned to the weapon until you die or the weapon is destroyed.\n   A moonblade has one rune on its blade for each master it has served (typically 1d6+1). The first rune always grants a +1 bonus to attack and damage rolls made with this magic weapon. Each rune beyond the first grants the moon blade an additional property. The DM chooses each property or determines it randomly on the Moon Blade Properties table.\n\n" + toUni("d100") + "\t" + toUni("Property") + "\n01-40\tIncrease the bonus to attack and damage rolls by 1, to a maximum of +3. Reroll if the moonblade already has a +3 bonus.\n41-80\tThe moonblade gains a randomly determined minor property (see \"Special Features\" DMG p143).\n81-82\tThe moonblade gains the finesse property.\n83-84\tThe moonblade gains the thrown property (range 20/60 feet).\n85-86\tThe moonblade functions as a defender.\n87-90\tThe moon blade scores a critical hit on a roll of 19 or 20.\n91-92\tWhen you hit with an attack using the moon blade, the attack deals an extra 1d6 slashing damage.\n93-94\tWhen you hit a creature of a specific type (such as dragon, fiend, or undead) with the moonblade, the target takes an extra 1d6 damage of one of these types: acid, cold, fire, lightning, or thunder.\n95-96\tYou can use a bonus action to cause the moonblade to flash brightly. Each creature that can see you and is within 30 feet of you must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until you take a short rest while attuned to the weapon.\n97-98\tThe moonblade functions as a ring of spell storing.\n99\tYou can use an action to call forth an elfshadow, provided that you don't already have one serving you. The elfshadow appears in an unoccupied space within 120 feet of you. It uses the statistics for a shadow, except it is neutral, immune to effects that turn undead, and doesn't create new shadows. You control this creature, deciding how it acts and moves. It remains until it drops to 0 hit points or you dismiss it as an action.\n00\tThe moonblade functions as a vorpal sword.\n\n\n   " + toUni("Sentience") + ". A moon blade is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 10, and a Charisma of 12. It has hearing and darkvision out to a range of 120 feet.\n   The weapon communicates by transmitting emotions, sending a tingling sensation through the wielder's hand when it wants to communicate something it has sensed. It can communicate more explicitly, through visions or dreams, when the wielder is either in a trance or asleep.\n   " + toUni("Personality") + ". Every moonblade seeks the advancement of elvenkind and elven ideals. Courage, loyalty, beauty, music, and life are all part of this purpose.\n   The weapon is bonded to the family line it is meant to serve. Once it has bonded with an owner who shares its ideals, its loyalty is absolute.\n   If a moon blade has a flaw, it is overconfidence. Once it has decided on an owner, it believes that only that person should wield it, even if the owner falls short of elven ideals.",
		attunement : true,
		weight : 3
	}
	// Artifacts
	MagicItemsList["axe of the dwarvish lords"] = {
		name : "Axe of the Dwarvish Lords",
		source : [["D", 221]],
		type : "weapon (battleaxe)",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "Seeing the peril his people faced, a young dwarf prince came to believe that his people needed something to unite them. Thus, he set out to forge a weapon that would be such a symbol.\n   Venturing deep under the mountains, deeper than any dwarf had ever delved, the young prince came to the blazing heart of a great volcano. With the aid of Moradin, the dwarven god of creation, he first crafted four great tools: the Brutal Pick, the Earthheart Forge, the Anvil of Songs, and the Shaping Hammer. With them, he forged the Axe of the Dwarvish Lords.\n   Armed with the artifact, the prince returned to the dwarf clans and brought peace. His axe ended grudges and answered slights. The clans became allies, and they threw back their enemies and enjoyed an era of prosperity. This young dwarf is remembered as the First King. When he became old, he passed the weapon, which had become his badge of office, to his heir. The rightful inheritors passed the axe on for many generations.\n   Later, in a dark era marked by treachery and wickedness, the axe was lost in a bloody civil war fomented by greed for its power and the status it bestowed. Centuries later, the dwarves still search for the axe, and many adventurers have made careers of chasing after rumors and plundering old vaults to find it.\n   " + toUni("Magic Weapon") + ". The Axe of the Dwarvish Lords is a magic weapon that grants a +3 bonus to attack and damage rolls made with it. The axe also functions as a belt of dwarvenkind, a dwarven thrower, and a sword of sharpness.\n   " + toUni("Random Properties") + ". The axe has the following randomly determined properties:\n \u2022 2 minor beneficial properties\n \u2022 1 major beneficial property\n \u2022 2 minor detrimental properties\n   " + toUni("Blessings of Moradin") + ". If you are a dwarf attuned to the axe, you gain the following benefits:\n \u2022 You have immunity to poison damage.\n \u2022 The range of your darkvision increases by 60 feet.\n \u2022 You gain proficiency with artisan's tools related to blacksmithing, brewing, and stonemasonry.\n   " + toUni("Conjure Earth Elemental") + ". If you are holding the axe, you can use your action to cast the Conjure Elemental spell from it, summoning an earth elemental. You can't use this property again until the next dawn.\n   " + toUni("Travel the Depths") + ". You can use an action to touch the axe to a fixed piece of dwarven stonework and cast the Teleport spell from the axe. If your intended destination is underground, there is no chance of a mishap or arriving somewhere unexpected. You can't use this property again until 3 days have passed.\n   " + toUni("Curse") + ". The axe bears a curse that affects any non-dwarf that becomes attuned to it. Even if the attunement ends, the curse remains. With each passing day, the creature's physical appearance and stature become more dwarflike. After seven days, the creature looks like a typical dwarf, but the creature neither loses its racial traits nor gains the racial traits of a dwarf. The physical changes wrought by the axe aren't considered magical in nature (and therefore can't be dispelled), but they can be undone by any effect that removes a curse, such as a Greater Restoration or Remove Curse spell.\n   " + toUni("Destroying the Axe") + ". The only way to destroy the axe is to melt it down in the Earthheart Forge, where it was created. It must remain in the burning forge for fifty years before it finally succumbs to the fire and is consumed.",
		attunement : true,
		weight : 4,
		cursed : true
	}
	MagicItemsList["book of exalted deeds"] = {
		name : "Book of Exalted Deeds",
		source : [["D", 222]],
		type : "wondrous item",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "The definitive treatise on all that is good in the multiverse, the fabled Book of Exalted Deeds figures prominently in many religions. Rather than being a scripture devoted to a particular faith, the book's various authors filled the pages with their own vision of true virtue, providing guidance for defeating evil.\n   The Book of Exalted Deeds rarely lingers in one place. As soon as the book is read, it vanishes to some other corner of the multiverse where its moral guidance can bring light to a darkened world. Although attempts have been made to copy the work, efforts to do so fail to capture its magical nature or translate the benefits it offers to those pure of heart and firm of purpose.\n   A heavy clasp, wrought to look like angel wings, keeps the book's contents secure. Only a creature of good alignment that is attuned to the book can release the clasp that holds it shut. Once the book is opened, the attuned creature must spend 80 hours reading and studying the book to digest its contents and gain its benefits. Other creatures that peruse the book's open pages can read the text but glean no deeper meaning and reap no benefits. An evil creature that tries to read from the book takes 24d6 radiant damage. This damage ignores resistance and immunity, and can't be reduced or avoided by any means. A creature reduced to 0 hit points by this damage disappears in a blinding flash and is destroyed, leaving its possessions behind.\n   Benefits granted by the Book of Exalted Deeds last only as long as you strive to do good. If you fail to perform at least one act of kindness or generosity within the span of 10 days, or if you willingly perform an evil act, you lose all the benefits granted by the book.\n   " + toUni("Random Properties") + ". The Book of Exalted Deeds has the following random properties:\n \u2022 2 minor beneficial properties\n \u2022 2 major beneficial properties\n   " + toUni("Increased Wisdom") + ". After you spend the requisite amount of time reading and studying the book, your Wisdom score increases by 2, to a maximum of 24. You can't gain this benefit from the book more than once.\n   " + toUni("Enlightened Magic") + ". Once you've read and studied the book, any spell slot you expend to cast a cleric or paladin spell counts as a spell slot of one level higher.\n   " + toUni("Halo") + ". Once you've read and studied the book, you gain a protective halo. This halo sheds bright light in a 10-foot radius and dim light for an additional 10 feet. You can dismiss or manifest the halo as a bonus action. While present, the halo gives you advantage on Charisma (Persuasion) checks made to interact with good creatures and Charisma (Intimidation) checks made to interact with evil creatures. In addition, fiends and undead within the halo's bright light make attack rolls against you with disadvantage.\n   " + toUni("Destroying the Book") + ". It is rumored that the Book of Exalted Deeds can't be destroyed as long as good exists in the multiverse. However, drowning the book in the River Styx removes all writing and imagery from its pages and renders the book powerless for 1d100 years.",
		weight : 5,
		attunement : true,
		prerequisite : "Requires attunement by a creature of good alignment",
		prereqeval : function(v) { return (/good/i).test(What("Alignment")); }
	}
	MagicItemsList["book of vile darkness"] = {
		name : "Book of Vile Darkness",
		source : [["D", 222]],
		type : "wondrous item",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "The contents of this foul manuscript of ineffable wickedness are the meat and drink of those in evil's thrall. No mortal was meant to know the secrets it contains, knowledge so horrid that to even glimpse the scrawled pages invites madness.\n   Most believe the lich-god Vecna authored the Book of Vile Darkness. He recorded in its pages every diseased idea, every unhinged thought, and every example of blackest magic he came across or devised. Vecna covered every vile topic he could, making the book a gruesome catalog of all mortal wrongs.\n   Other practitioners of evil have held the book and added their own input to its catalog of vile knowledge. Their additions are clear, for the writers of later works stitched whatever they were writing into the tome or, in some cases, made notations and additions to existing text. There are places where pages are missing, torn. or covered so completely with ink, blood, and scratches that the original text can't be divined.\n   Nature can't abide the book's presence. Ordinary plants wither in its presence, animals are unwilling to approach it, and the book gradually destroys whatever it touches. Even stone cracks and turns to powder if the book rests on it long enough.\n   A creature attuned to the book must spend 80 hours reading and studying it to digest its contents and reap its benefits. The creature can then freely modify the book's contents, provided that those modifications advance evil and expand the lore already contained within.\n   Whenever a non-evil creature attunes to the Book of Vile Darkness, that creature must make a DC 17 Charisma saving throw. On a failed save, the creature's alignment changes to neutral evil.\n   The Book of Vile Darkness remains with you only as long as you strive to work evil in the world. If you fail to perform at least one evil act within the span of 10 days, or if you willingly perform a good act, the book disappears. If you die while attuned to the book, an entity of great evil claims your soul. You can't be restored to life by any means while your soul remains imprisoned.\n   " + toUni("Random Properties") + ". The Book of Vile Darkness has the following random properties:\n \u2022 3 minor beneficial properties\n \u2022 1 major beneficial property\n \u2022 3 minor detrimental properties\n \u2022 2 major detrimental properties\n   " + toUni("Adjusted Ability Scores") + ". After you spend the requisite amount of time reading and studying the book, one ability score of your choice increases by 2, to a maximum of 24. Another ability score of your choice decreases by 2, to a minimum of 3. The book can't adjust your ability scores again.\n   " + toUni("Mark of Darkness") + ". After you spend the requisite amount of time reading and studying the book, you acquire a physical disfigurement as a hideous sign of your devotion to vile darkness. An evil rune might appear on your face, your eyes might become glossy black, or horns might sprout from your forehead. Or you might become wizened and hideous, lose all facial features, gain a forked tongue, or some other feature the DM chooses. The mark of darkness grants you advantage on Charisma (Persuasion) checks made to interact with evil creatures and Charisma (Intimidation) checks made to interact with non-evil creatures.\n   " + toUni("Command Evil") + ". While you are attuned to the book and holding it, you can use an action to cast the Dominate Monster spell on an evil target (save DC 18). You can't use this property again until the next dawn.\n   " + toUni("Dark Lore") + ". You can reference the Book of Vile Darkness whenever you make an Intelligence check to recall information about some aspect of evil, such as lore about demons. When you do so, double your proficiency bonus on that check.\n   " + toUni("Dark Speech") + ". While you carry the Book of Vile Darkness and are attuned to it, you can use an action to recite word from its pages in a foul language known as Dark Speech. Each time you do so, you take 1d12 psychic damage, and each non-evil creature within 15 feet of you takes 3d6 psychic damage.\n   " + toUni("Destroying the Book") + ". The Book of Vile Darkness allows pages to be torn from it, but any evil lore contained on those pages finds its way back into the book eventually, usually when a new author adds pages to the tome.\n   If a solar tears the book in two, the book is destroyed for 1d100 years, after which it reforms in some dark corner of the multiverse.\n   A creature attuned to the book for one hundred years can unearth a phrase hidden in the original text that, when translated to Celestial and spoken aloud, destroys both the speaker and the book in a blinding flash of radiance. However, as long as evil exists in the multiverse, the book reforms 1d10 \xD7 100 years later.\n   If all evil in the multiverse is wiped out, the book turns to dust and is forever destroyed.",
		attunement : true,
		weight : 5
	}
	MagicItemsList["hand of vecna"] = {
		name : "Hand of Vecna",
		source : [["D", 224]],
		type : "wondrous item",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "Seldom is the name of Vecna spoken except in a hushed voice. Vecna was, in his time, one of the mightiest of all wizards. Through dark magic and conquest, he forged a terrible empire. For all his power, Vecna couldn't escape his own mortality. He began to fear death and take steps to prevent his end from ever coming about.\n   Orcus, the demon prince of undeath, taught Vecna a ritual that would allow him to live on as a lich. Beyond death, he became the greatest of all liches. Even though his body gradually withered and decayed, Vecna continued to expand his evil dominion. So formidable and hideous was his temper that his subjects feared to speak his name. He was the Whispered One, the Master of the Spider Throne, the Undying King, and the Lord of the Rotted Tower.\n   Some say that Vecna's lieutenant Kas coveted the Spider Throne for himself, or that the sword his lord made for him seduced him into rebellion. Whatever the reason, Kas brought the Undying King's rule to an end in a terrible battle that left Vecna's tower a heap of ash. Of Vecna, all that remained were one hand and one eye, grisly artifacts that still seek to work the Whispered One's will in the world.\n   The Eye of Vecna and the Hand of Vecna might be found together or separately. The eye looks like a bloodshot organ torn free from the socket. The hand is a mummified and shriveled left extremity.\n   To attune to the eye, you must gouge out your own eye and press the artifact into the empty socket. The eye grafts itself to your head and remains there until you die. Once in place, the eye transforms into a golden eye with a slit for a pupil, much like that of a cat. If the eye is ever removed, you die.\n   To attune to the hand, you must lop off your left hand at the wrist and the press the artifact against the stump. The hand grafts itself to your arm and becomes a functioning appendage. If the hand is ever removed, you die.\n   " + toUni("Random Properties") + ". The Eye of Vecna and the Hand of Vecna each have the following random properties:\n \u2022 1 minor beneficial property\n \u2022 1 major beneficial property\n \u2022 1 minor detrimental property\n\n" + toUni("Properties of the Hand") + ". Your alignment changes neutral evil, and you gain the following benefits:\n \u2022 Your Strength score becomes 20, unless it is already 20 or higher.\n \u2022 Any melee spell attack you make with the hand, and any melee weapon attack made with a weapon held by it, deals an extra 2d8 cold damage on a hit.\n \u2022 The hand has 8 charges. You can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: Finger of Death (5 charges), Sleep (1 charge), Slow (2 charges), or Teleport (3 charges). The hand regains 1d4+4 expended charges daily at dawn. Each time you cast a spell from the hand, it casts the Suggestion spell on you (save DC 18), demanding that you commit an evil act. The hand might have a specific act in mind or leave it up to you.\n\n" + toUni("Properties of the Eye and Hand") + ". If you are attuned to both the hand and eye, you gain the following additional benefits:\n \u2022 You are immune to disease and poison.\n \u2022 Using the eye's X-ray vision never causes you to suffer exhaustion.\n \u2022 You experience premonitions of danger and, unless you are incapacitated, can't be surprised.\n \u2022 If you start your turn with at least 1 hit point, you regain 1d10 hit points.\n \u2022 If a creature has a skeleton, you can attempt to turn its bones to jelly with a touch of the Hand of Vecna. You can do so by using an action to make a melee attack against a creature you can reach, using your choice your melee attack bonus for weapons or spells. On a hit, the target must succeed on a DC 18 Constitution saving throw or drop to 0 hit points.\n \u2022 You can use an action to cast Wish. This property can't be used again until 30 days have passed.\n\n" + toUni("Destroying the Eye and Hand") + ". If the Eye of Vecna and the Hand of Vecna are both attached to the same creature, and that creature is slain by the Sword of Kas, both the eye and the hand burst into flame, turn to ash, and are destroyed forever. Any other attempt to destroy the eye or hand seems to work, but the artifact reappears in one of Vecna's many hidden vaults, where it waits to be rediscovered.",
		attunement : true
	}
	MagicItemsList["eye of vecna"] = {
		name : "Eye of Vecna",
		source : [["D", 224]],
		type : "wondrous item",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "Seldom is the name of Vecna spoken except in a hushed voice. Vecna was, in his time, one of the mightiest of all wizards. Through dark magic and conquest, he forged a terrible empire. For all his power, Vecna couldn't escape his own mortality. He began to fear death and take steps to prevent his end from ever coming about.\n   Orcus, the demon prince of undeath, taught Vecna a ritual that would allow him to live on as a lich. Beyond death, he became the greatest of all liches. Even though his body gradually withered and decayed, Vecna continued to expand his evil dominion. So formidable and hideous was his temper that his subjects feared to speak his name. He was the Whispered One, the Master of the Spider Throne, the Undying King, and the Lord of the Rotted Tower.\n   Some say that Vecna's lieutenant Kas coveted the Spider Throne for himself, or that the sword his lord made for him seduced him into rebellion. Whatever the reason, Kas brought the Undying King's rule to an end in a terrible battle that left Vecna's tower a heap of ash. Of Vecna, all that remained were one hand and one eye, grisly artifacts that still seek to work the Whispered One's will in the world.\n   The Eye of Vecna and the Hand of Vecna might be found together or separately. The eye looks like a bloodshot organ torn free from the socket. The hand is a mummified and shriveled left extremity.\n   To attune to the eye, you must gouge out your own eye and press the artifact into the empty socket. The eye grafts itself to your head and remains there until you die. Once in place, the eye transforms into a golden eye with a slit for a pupil, much like that of a cat. If the eye is ever removed, you die.\n   To attune to the hand, you must lop off your left hand at the wrist and the press the artifact against the stump. The hand grafts itself to your arm and becomes a functioning appendage. If the hand is ever removed, you die.\n   " + toUni("Random Properties") + ". The Eye of Vecna and the Hand of Vecna each have the following random properties:\n \u2022 1 minor beneficial property\n \u2022 1 major beneficial property\n \u2022 1 minor detrimental property\n\n" + toUni("Properties of the Eye") + ". Your alignment changes to neutral evil, and you gain the following benefits:\n \u2022 You have truesight.\n \u2022 You can use an action to see as if you were wearing a ring of X-ray vision. You can end this effect as a bonus action.\n \u2022 The eye has 8 charges. You can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: Clairvoyance (2 charges), Crown of Madness (1 charge), Disintegrate (4 charges), Dominate Monster (5 charges), or Eyebite (4 charges). The eye regains 1d4+4 expended charges daily at dawn. Each time you cast a spell from the eye, there is a 5% chance that Vecna tears your soul from your body, devours it, and then takes control of the body like a puppet. If that happens, you become an NPC under the DM's control.\n\n" + toUni("Properties of the Eye and Hand") + ". If you are attuned to both the hand and eye, you gain the following additional benefits:\n \u2022 You are immune to disease and poison.\n \u2022 Using the eye's X-ray vision never causes you to suffer exhaustion.\n \u2022 You experience premonitions of danger and, unless you are incapacitated, can't be surprised.\n \u2022 If you start your turn with at least 1 hit point, you regain 1d10 hit points.\n \u2022 If a creature has a skeleton, you can attempt to turn its bones to jelly with a touch of the Hand of Vecna. You can do so by using an action to make a melee attack against a creature you can reach, using your choice your melee attack bonus for weapons or spells. On a hit, the target must succeed on a DC 18 Constitution saving throw or drop to 0 hit points.\n \u2022 You can use an action to cast Wish. This property can't be used again until 30 days have passed.\n\n" + toUni("Destroying the Eye and Hand") + ". If the Eye of Vecna and the Hand of Vecna are both attached to the same creature, and that creature is slain by the Sword of Kas, both the eye and the hand burst into flame, turn to ash, and are destroyed forever. Any other attempt to destroy the eye or hand seems to work, but the artifact reappears in one of Vecna's many hidden vaults, where it waits to be rediscovered.",
		attunement : true
	}
	MagicItemsList["sword of kas"] = {
		name : "Sword of Kas",
		source : [["D", 226]],
		type : "weapon (longsword)",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "When Vecna grew in power, he appointed an evil and ruthless lieutenant, Kas the Bloody Handed, to act as his bodyguard and right hand. This despicable villain served as advisor, warlord, and assassin. His successes earned him Vecna's admiration and a reward: a sword with as dark a pedigree as the man who would wield it.\n   For a long time, Kas faithfully served the lich but as Kas's power grew, so did his hubris. His sword urged him to supplant Vecna, so that they could rule the lich's empire in Vecna's stead. Legend says Vecna's destruction came at Kas's hand, but Vecna also wrought his rebellious lieutenant's doom, leaving only Kas's sword behind. The world was made brighter thereby.\n   The Sword of Kas is a magic, sentient longsword that grants a +3 bonus to attack and damage rolls made with it. It scores a critical hit on a roll of 19 or 20, and deals an extra 2d10 slashing damage to undead.\n   If the sword isn't bathed in blood within 1 minute of being drawn from its scabbard, its wielder must make a DC 15 Charisma saving throw. On a successful save, the wielder takes 3d6 psychic damage. On a failed save, the wielder is dominated by the sword, as if by the Dominate Monster spell, and the sword demands that it be bathed in blood. The spell effect ends when the sword's demand is met.\n   " + toUni("Random Properties") + ". The Sword of Kas has the following random properties:\n \u2022 1 minor beneficial property\n \u2022 1 major beneficial property\n \u2022 1 minor detrimental property\n \u2022 1 major detrimental property\n\n" + toUni("Spirit of Kas") + ". While the sword is on your person, you add a d10 to your initiative at the start of every combat. In addition, when you use an action to attack with the sword, you can transfer some or all of its attack bonus to your Armor Class instead. The adjusted bonuses remain in effect until the start of your next turn.\n   " + toUni("Spells") + ". While the sword is on your person, you can use an action to cast one of the following spells (save 18) from it: Call Lightning, Divine Word, or Finger of Death. Once you use the sword to cast a spell, you can't cast that spell again from it until the next dawn.\n   " + toUni("Sentience") + ". The Sword of Kas is a sentient chaotic evil weapon with an Intelligence of 15, a Wisdom of 13, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet.\n   The weapon communicates telepathically with its wielder and can speak, read, and understand Common\n   " + toUni("Personality") + ". The sword's purpose is to bring ruin to Vecna. Killing Vecna's worshipers, destroying the lich's works, and foiling his machinations all help to fulfill this goal.\n   The Sword of Kas also seeks to destroy anyone corrupted by the Eye and Hand of Vecna. The sword's obsession with those artifacts eventually becomes a fixation for its wielder.\n   " + toUni("Destroying the Sword") + ". A creature attuned to both the Eye of Vecna and the Hand of Vecna can use the wish property of those combined artifacts to unmake the Sword of Kas. The creature must cast the Wish spell and make a Charisma check contested by the Charisma check of the sword. The sword must be within 30 feet of the creature, or the spell fails. If the sword wins the contest, nothing happens, and the Wish spell is wasted. If the sword loses the contest, it is destroyed.",
		attunement : true,
		weight : 3
	}
	MagicItemsList["wand of orcus"] = {
		name : "Wand of Orcus",
		source : [["D", 227]],
		type : "wand",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "The ghastly Wand of Orcus rarely leaves Orcus's side. The device, as evil as its creator, shares the demon lord's aims to snuff out the lives of all living things and bind the Material Plane in the stasis of undeath. Orcus allows the wand to slip from his grasp from time to time. When it does, it magically appears wherever its master senses an opportunity to achieve some fell goal.\n   Made from bones as hard as iron, the wand is topped with a magically enlarged skull that once belonged to a human hero slain by Orcus. The wand can magically change in size to better conform to the grip of its user. Plants wither, drinks spoil, flesh rots, and vermin thrive in the wand's presence.\n   Any creature besides Orcus that tries to attune to the wand must make a DC 17 Constitution saving throw. On a successful save, the creature takes 10d6 necrotic damage. On a failed save, the creature dies and rises as a zombie.\n   In the hands of one who is attuned to it, the wand can be wielded as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The wand deals an extra 2d12 necrotic damage on a hit.\n   " + toUni("Random Properties") + ". The Wand of Orcus has the following random properties:\n \u2022 2 minor beneficial properties\n \u2022 1 major beneficial property\n \u2022 2 minor detrimental properties\n \u2022 1 major detrimental property\nThe detrimental properties of the Wand of Orcus are suppressed while the wand is attuned to Orcus himself.\n\n" + toUni("Protection") + ". You gain a +3 bonus to Armor Class while holding the wand.\n   " + toUni("Spells") + ". The wand has 7 charges. While holding it, you can use an action and expend 1 or more of its charges to cast one of the following spells (save DC 18) from it: Animate Dead (1 charge), Blight (2 charges), Circle of Death (3 charges), Finger of Death (3 charges), Power Word Kill (4 charges), or Speak with Dead (1 charge). The wand regains 1d4+3 expended charges daily at dawn.\n   While attuned to the wand, Orcus or a follower blessed by him can cast each of the wand's spells using 2 fewer charges (minimum of 0).\n   " + toUni("Call Undead") + ". While you are holding the wand, you can use an action to conjure skeleton and zombie, calling forth as many of them as you can divide 500 hit points among, each undead having average hit points. The undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of you and obey your commands until they are destroyed or until dawn of the next day, when they collapse into inanimate piles of bones and rotting corpses. Once you use this property of the wand, you can't use it again until the next dawn.\n   While attuned to the wand, Orcus can summon any kind of undead, not just skeletons and zombies. The undead don't perish or disappear at dawn the following day, remaining until Orcus dismisses them.\n   " + toUni("Sentience") + ". The Wand of Orcus is a sentient, chaotic evil item with an Intelligence of 16, a Wisdom of 12, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet.\n   The wand communicates telepathically with its wielder and can speak, read, and understand Abyssal and Common.\n   " + toUni("Personality") + ". The wand's purpose is to help satisfy Orcus's desire to slay everything in the multiverse. The wand is cold, cruel, nihilistic, and bereft of humor. In order to further its master's goals, the wand feigns devotion to its current user and makes grandiose promises that it has no intention of fulfilling, such as vowing to help its user overthrow Orcus.\n   " + toUni("Destroying the Wand") + ". Destroying the Wand of Orcus requires that it be taken to the Positive Energy Plane by the ancient hero whose skull surmounts it. For this to happen, the long-lost hero must first be restored to life\u2014no easy task, given the fact that Orcus has imprisoned the hero's soul and keeps it hidden and well guarded.\n   Bathing the wand in positive energy causes it to crack and explode, but unless the above conditions are met, the wand instantly reforms on Orcus's layer of the Abyss.",
		attunement : true,
		weight : 4
	}
}
{ // pub_20160906_SKT.js
	MagicItemsList["wyrmskull throne"] = { // artifact
		name : "Wyrmskull Throne",
		source : [["SKT", 237]],
		type : "wondrous item",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "Built by dwarven gods and entrusted to the rulers of Shanatar, an ancient dwarven empire. The Wyrmskull Throne was a symbol of dwarven power and pride for ages untold. The throne hovers a foot off the ground and is a massive thing made of polished obsidian with oversized feet\u2014the impaled skulls of four ancient blue dragons. Runes glisten in the carved obsidian winking to life with blue energy when the throne's powers are activated.\n   After the fall of Shanatar, the Wyrmskull Throne fell into the clutches of less honorable creatures. A band of adventurers wrested the throne from the aquatic elf tyrant Gantar Kraok and sold it to the storm giant Neri for a considerable fortune. Neri had the throne magically enlarged and gave it to her husband, King Hekaton, as a gift, along with one of the Ruling Scepters of Shanatar, which she had found in a wreck at the bottom of the Trackless Sea. Only a creature attuned to a Ruling Scepter and in possession of it can harness the powers of the Wyrmskull Throne, which has become the centerpiece of King Hekaton's throne room in the undersea citadel of Maelstrom. Fear of the throne's power has helped prevent evil giants from challenging or threatening Hekaton's leadership.\n   Any creature not attuned to a Ruling Scepter who sits on the throne is paralyzed and encased in a magical force field. While encased, the creature can't be touched or moved from the throne. Touching a Ruling Scepter to the force field dispels the field, though the creature remains paralyzed until it is separated from the throne.\n   Any creature seated on the throne can hear faint Whispers in Draconic\u2014the whisperings of four blue dragons whose skulls adorn the throne. Although powerless, these spirits try to influence the decisions of the throne's master\n   " + toUni("Properties of the Throne") + ". The throne has 9 charges and regains all expended charges daily at dawn. A creature that sits on the throne while attuned to a Ruling Sceptor in its possession can harness the throne's properties, which are as follows:\n   The throne gains a flying speed of 30 feet and can hover and flies where the creature wills. This property doesn't expend any charges.\n   Both the throne and the creature sitting on it can move through earth and stone without disturbing the material they move through. This property doesn't expend any charges.\n   As an action, the creature can expend 1 charge to cast Lightning Bolt (spell save DC 19) from the throne. The spell is cast as though using a 9th-level spell slot and deals 49 (14d6) lightning damage. The bolt discharges from the mouth of one of the throne's blue dragon skulls.\n   As an action, the creature can expend 2 charges to cast the Globe of Invulnerability spell from the throne. The globe encloses both the creature and the throne.\n   As an action, the creature can expend 3 charges to create a spectral image of an ancient blue dragon that surrounds both it and the throne. The spectral dragon lasts for 1 minute. At the end of each of the creature's turns, the spectral dragon makes one bite attack and two claw attacks against targets of the creature's choice. These attacks have the same attack bonus, reach, and damage as an ancient blue dragon's bite and claw attacks.\n   " + toUni("Destroying the Throne") + ". The Wyrmskull Throne can be destroyed by breaking at least five Ruling Scepters of Shanatar simultaneously on it. This fact has never been recorded or sung of among the dwarves or any bards or storytellers, and it can't be discovered with an ability check. Characters who want to destroy the throne must go on a quest to learn the method for doing so. The throne's destruction triggers an explosion, as shards of obsidian fly out in all directions. Each creature and object within a 30-foot-radius sphere centered on the throne must succeed on a DC 21 Dexterity saving throw, taking 70 (20d6) slashing damage on a failed save, or half as much damage on a successful one."
	}
}
{ // pub_20170919_ToA.js
	MagicItemsList["ring of winter"] = {
		name : "Ring of Winter",
		source : [["ToA", 207]],
		type : "ring",
		rarity : "artifact",
		notLegalAL : true,
		description : "",
		descriptionFull : "Artus Cimber has kept this item in his possession for over a century. The Ring of Winter is a golden band that resizes to fit snugly on the finger of its wearer. A thin layer of frost coats the outside of the ring, which normal heat can't melt. The ring feels ice cold to the touch and initially numbs the hand that wears it, but this cold ceases to be felt by one who is attuned to this ring.\n   The Ring of Winter is sentient and tries to take control of any creature that wears it (see \"Sentient Magic Items\" chapter 7 of the Dungeon Master's Guide). If it succeeds, the ring compels its wearer to cause undue harm to everyone and everything around it, in a cold-hearted attempt to incur the wrath of enemies and bring the wearer's doom.\n   " + toUni("Sentience") + ". The Ring of Winter is a sentient chaotic evil item with an Intelligence of 14, a Wisdom of 14, and a Charisma of 17. The ring communicates by transmitting emotion to the creature carrying or wielding it, and it has hearing and normal vision out to a range of 60 feet. The ring craves destruction, and it likes inflicting indiscriminate harm on others.\n   " + toUni("Nondetection") + ". The Ring of Winter defies attempts to magically locate it. Neither the ring nor its wearer can be targeted by any divination magic or perceived through magical scrying sensors.\n   " + toUni("Frozen Time") + ". As long as you wear the ring, you don't age naturally. This effect is similar to suspended animation, in that your age doesn't catch up to you once the ring is removed. The ring doesn't protect its wearer from magical or supernatural aging effects, such as the Horrifying Visage of a ghost.\n   " + toUni("Cold Immunity") + ". While attuned to and wearing the ring, you have immunity to cold damage and don't suffer any ill effects from extreme cold (see chapter 5 of the Dungeon's Master Guide).\n   " + toUni("Magic") + ". The Ring of Winter has 12 charges and regains all its expended charges daily at dawn. While wearing the ring, you can expend the necessary number of charges to activate one of the following properties:\n \u2022 You can expend 1 charge as an action and use the ring to lower the temperature in a 120-foot-radius sphere centered on a point you can see within 300 feet of you. The temperature in that area drops 20 degrees per minute, to a minimum of -30 degrees Fahrenheit. Frost and ice begin to form on surfaces once the temperature drops below 32 degrees. This effect is permanent unless you use the ring to end it as an action, at which point the temperature in the area returns to normal at a rate of 10 degrees per minute.\n \u2022 You can cast one of the following spells from the ring (spell save DC 17) by expending the necessary number of charges: Bigby's Hand (2 charges; the hand is made of ice, is immune to cold damage, and deals bludgeoning damage instead of force damage as a clenched fist), Cone of Cold (2 charges), flesh to ice (3 charges; as Flesh to Stone except that the target turns to solid ice with the density and durability of stone), Ice Storm (2 charges), Otiluke's Freezing Sphere (3 charges), Sleet Storm (1 charge), Spike Growth (1 charge; the spikes are made of ice), or Wall of Ice (2 charges).\n \u2022 You can expend the necessary number of charges as an action and use the ring to create either an inanimate ice object (2 charges) or an animated ice creature (4 charges). The ice object can't have any moving parts, must be able to fit inside a 10-foot cube, and has the density and durability of metal or stone (your choice). The ice creature must be modeled after a beast with a challenge rating of 2 or less. The ice creature has the same statistics as the beast it models, with the following changes: the creature is a construct with vulnerability to fire damage, immunity to cold and poison damage, and immunity to the following conditions: charmed, exhaustion, frightened, paralyzed, petrified, and poisoned. The ice creature obeys only its creator's commands. The ice object or creature appears in an unoccupied space within 60 feet of you. It melts into a pool of normal water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8 of the Dungeon Master's Guide to determine the hit points of an inanimate object if they become necessary.\n\n" + toUni("Other Properties") + ". The Ring of Winter is rumored to possess other properties that can be activated only by an evil being whose will the ring can't break. Frost giants have long believed that the ring can be used to freeze entire worlds, while a djinni in the service of a Calishite pasha once claimed that the ring could be used to summon and control white dragons, as well as the mighty ice primordial named Cryonax.\n   " + toUni("Destroying the Ring") + ". The ring is nigh indestructible, resisting even the most intense magical heat. If it is placed on the finger of the powerful archfey known as the Summer Queen, the ring melts away and is destroyed forever.",
		attunement : true,
		weight : 1
	}
	MagicItemsList["staff of the forgotten one"] = {
		name : "Staff of the Forgotten One",
		source : [["ToA", 208]],
		type : "staff",
		rarity : "artifact",
		storyItemAL : true,
		description : "",
		descriptionFull : "This crooked staff is carved from bone and topped with the skull of a forgotten archmage whom Acererak destroyed long ago. Etched into the skull's forehead is Acererak's rune, which is known on many worlds as a sign of death.\n   " + toUni("Beneficial Properties") + ". While the staff is on your person, you gain the following benefits:\n \u2022 Your proficiency bonus to Intelligence (Arcana) and Intelligence (History) checks is doubled.\n \u2022 You can't be blinded, charmed, deafened, frightened, petrified, or stunned.\n \u2022 Undead with a challenge rating of 2 or lower will neither threaten nor attack you unless you harm them.\n \u2022 You can wield the staff as a +3 quarterstaff that deals an extra 10 (3d6) necrotic damage on a hit.\n\n" + toUni("Invoke Curse") + ". The Staff of the Forgotten One has 7 charges and regains 1d4+3 expended charges daily at dawn. While holding the staff, you can use an action to expend 1 charge and target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw (using your spell save DC) or be cursed. While cursed in this way, the target can't regain hit points and has vulnerability to necrotic damage. A Greater Restoration, Remove Curse, or similar spell ends the curse on the target.\n   " + toUni("The Forgotten One") + ". The bodiless life force of a dead archmage empowers the staff and is imprisoned within it. The rune carved into the staff's skull protects Acererak from this spirit's vengeance. Each time a creature other than Acererak expends any of the staff's charges, there is a 50% chance that the life force tries to possess the staff wielder. The wielder must succeed on a DC 20 Charisma saving throw or be possessed, becoming an NPC under the DM's control. If the intruding life force is targeted by magic such as a Dispel Evil and Good spell, it becomes trapped in the staff once more. Once it takes control of another creature, the insane spirit of the dead archmage attempts to destroy the staff.\n   " + toUni("Destroying the Staff") + ". A creature in possession of the staff can use an action to break it over one knee or a solid surface. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. Each creature in the area must make a DC 18 Dexterity saving throw, taking 132 (24d10) force damage on a failed save, or half as much damage on a successful one. When the staff is destroyed, the life force of the Forgotten One is released to the afterlife. Where it goes is anyone's guess.",
		attunement : true,
		weight : 4
	}
}
{ // pub_20180723_WGtE.js
	// Eldritch Machines are not portable and are plot devices
	// It doesn't really make sense to add them to a character sheet
	MagicItemsList["dimensional seal"] = {
		name : "Dimensional Seal",
		source : [["WGtE", 118]],
		type : "eldritch machine",
		rarity : "legendary",
		description : "",
		descriptionFull : "A dimensional seal is a massive stone slab covered with a complex pattern of runes and sigils. The seal projects an invisible field with a radius of two miles. This field blocks all forms of conjuration magic and any other effect that involves teleportation or planar travel. It also negates the effects of any manifest zone within the field.\n   Dimensional seals are usually found in the Eldeen Reaches and the Shadow Marches, as relics of the conflict between the Gatekeeper druids and the daelkyr. The techniques used to create these seals have been long lost. It's said that as a whole, the dimensional seals keep the daelkyr bound in Khyber and prevent Xoriat from becoming coterminous with Eberron. If enough of these seals are destroyed, there could be serious consequences for the world."
	}
	MagicItemsList["mabaran resonator"] = {
		name : "Mabaran Resonator",
		source : [["WGtE", 118]],
		type : "eldritch machine",
		rarity : "legendary",
		description : "",
		descriptionFull : "This horrific device draws on the power of Mabar, infusing the dead with the malign energies of the Endless Night. While it is active, any creature that dies within two miles of the resonator reanimates in one round as a zombie under the control of creature attuned to the device. At the DM's discretion, more powerful creatures can return as other forms of undead.",
		attunement : true
	}
	MagicItemsList["master's call"] = {
		name : "Master's Call",
		source : [["WGtE", 119]],
		type : "eldritch machine",
		rarity : "legendary",
		description : "",
		descriptionFull : "While this looks like a scrap heap assembled from shattered constructs and wreckage from the Mournland, this eldritch machine possesses tremendous power. You gain the following benefits while you are attuned to the master's call and within one mile of the device.\n \u2022 You can sense the presence and location of all warforged within ten miles.\n \u2022 You have advantage on any Charisma-based check made against a warforged.\n \u2022 While you are in contact with the master's call, you can use an action to target a warforged within ten miles of the device. You can send a telepathic message of up to 25 words to the target. They must make a Wisdom saving throw, with a difficulty of 14 + your Intelligence modifier. On a failed save, the target is affected by a Suggestion compelling them to follow your command. This effect doesn't require concentration; it lasts for eight hours, until you choose to end it, or until the victim successfully fulfils the command, whichever comes first. You can control up to eight warforged at once using this effect."
	}
	MagicItemsList["storm sphere"] = {
		name : "Storm Sphere",
		source : [["WGtE", 119]],
		type : "eldritch machine",
		rarity : "very rare",
		description : "",
		descriptionFull : "This eldritch machine is a form of dragonmark focus item; you must have the Greater Mark of Storms to attune to this device. Storm spires allow House Lyrandar to influence the weather, which can be a boon for the local population or a curse if the Lyrandar baron chooses to demand payment for desired conditions. You gain the following benefits while you are attuned to a storm spire.\n \u2022 You can sense weather patterns within a 100-mile radius of the spire and accurately predict the weather for up to 24 hours.\n \u2022 While you are within 60 feet of the spire, you can use an action to cast any of the following spells: Call Lightning, Gust of Wind. You cast these as 5th level spells, and Intelligence is your spellcasting ability.\n \u2022 While you are within 5 feet of the spire, you can cast Control Weather as a ten-minute ritual. This allows you to pick a point within 100 miles of the spire and influence the weather within a 10-mile radius of that point. Maintaining this effect requires concentration.\n \u2022 You can also use an action to influence the weather within a ten-mile radius of the spire itself; you don't have to use concentration to maintain this effect, and you can sustain this at the same time that you're manipulating distant weather.",
		attunement : true
	}
	MagicItemsList["spell sink"] = {
		name : "Spell Sink",
		source : [["WGtE", 119]],
		type : "eldritch machine",
		rarity : "legendary",
		description : "",
		descriptionFull : "This device creates an Antimagic Field that covers a three-mile radius around the spell sink. The form that it takes will depend on the nature of its creator. The Ashbound druids despise unnatural magic, and if they create a spell sink it will be a living artifact\u2014a twisted tree that consumes the mystical energies around it. Conversely, a mad artificer would create a massive vessel of dragonshards and exotic metals. It might be that the sole purpose of the device is to negate magic, or it could be that it is absorbing all magical energies in the area and storing that power for a cataclysmic effect!"
	}
}
{ // pub_20180918_WDH.js
	MagicItemsList["stone of golorr"] = {
		name : "Stone of Golorr",
		source : [["WDH", 192]],
		type : "wondrous item",
		rarity : "artifact",
		storyItemAL : true,
		description : "",
		descriptionFull : "The Stone of Golorr is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.\n   " + toUni("Random Properties") + ". The Stone of Golorr has the following properties, determined by rolling on the tables in the \"Artifacts\" section in chapter 7 of the Dungeon Master's Guide:\n \u2022 1 minor beneficial property\n \u2022 1 minor detrimental property\n\n" + toUni("Legend Lore") + ". The Stone of Golorr has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the Legend Lore spell.\n   By using the stone to cast legend lore, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.\n   The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.\n   " + toUni("Failed Memory") + ". When your attunement to the Stone of Golorr ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A Remove Curse spell cast on you has a 20% chance of restoring the lost knowledge and memories, and a Greater Restoration spell does so automatically.\n   " + toUni("Sentience") + ". The Stone of Golorr is a sentient lawful evil magic item with an Intelligence of 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. In addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.\n   The Stone of Golorr hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see \"Sentient Magic Items\" in chapter 7 of the Dungeon Master's Guide).\n   " + toUni("Personality") + ". The Stone of Golorr has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.\n   " + toUni("Destroying the Stone") + ". While in stone form, the aboleth isn't a creature and isn't subject to effects that target creatures. The Stone of Golorr is immune to all damage. Casting an Antipathy/Sympathy spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed, and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.",
		attunement : true
	}
}
{ // pub_20181107_LLoK.js
	MagicItemsList["deck of several things"] = { // plot device
		name : "Deck of Several Things",
		source : [["LLoK", 53]],
		type : "wondrous item",
		rarity : "legendary",
		storyItemAL : true,
		description : "",
		descriptionFull : "Stored in a leather pouch, this unique deck contains twenty-two colored cards made of some strong but unknown metal, each of which features a design printed as a mosaic of raised dots. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n   Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.\n\n" + toUni("1d22\tPlaying Card\tCard") + "\n1\tAce of diamonds\tVizier\n2\tKing of diamonds\tSun\n3\tQueen of diamonds\tMoon\n4\tJack of diamonds\tStar\n5\tTwo of diamonds\tComet\n6\tAce of hearts\tThe Fates\n7\tKing of hearts\tThrone\n8\tQueen of hearts\tKey\n9\tJack of hearts\tKnight\n10\tTwo of hearts\tGem\n11\tAce of clubs\tTalons\n12\tKing of clubs\tThe Void\n13\tQueen of clubs\tFlames\n14\tJack of clubs\tSkull\n15\tTwo of clubs\tIdiot\n16\tAce of spades\tDonjon\n17\tKing of spades\tRuin\n18\tQueen of spades\tEuryale\n19\tJack of spades\tRogue\n20\tTwo of spades\tBalance\n21\tJoker (with TM)\tFool\n22\tJoker (no TM)\tJester\n\n\n   " + toUni("Balance") + ". Your mind suffers a wrenching alteration, causing your alignment to change for the duration of the adventure. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.\n   " + toUni("Comet") + ". If you single-handedly defeat the next hostile monster or group of monsters you encounter, you have advantage on ability checks made using one skill of your choice for the duration of the adventure. Otherwise, this card has no effect.\n   " + toUni("Donjon") + ". You are instantly teleported to and confined within the prison of the Monastery of the Distressed Body (area M6). Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You draw no more cards.\n   " + toUni("Euryale") + ". The card's medusa-like visage curses you. You take a -1 penalty on saving throws for the duration of the adventure.\n   " + toUni("The Fates") + ". Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other point during the adventure.\n   " + toUni("Flames") + ". The Grand Master of the Monastery of the Distressed Body becomes your enemy. The bone devil seeks your ruin, savoring your suffering before attempting to slay you. If the Grand Master has already been defeated, you gain the enmity of Garret Levistusson's patron\u2014a similarly powerful devil.\n   " + toUni("Fool") + ". For the duration of the adventure, you lose proficiency with one skill or gain disadvantage on all checks made with one skill (with the skill and the penalty determined by the DM). Discard this card and draw from the deck again, counting both draws as one of your declared draws.\n   " + toUni("Gem") + ". The 1,000 gp hoard of the leprechaun from the Wilderness Encounters table (see appendix A) appears at your feet. If that treasure has already been claimed, you gain an equivalent hoard.\n   " + toUni("Idiot") + ". Reduce your Intelligence by 1d4 + 1 (to a minimum score of 1) for the duration of the adventure. You can draw one additional card beyond your declared draws.\n   " + toUni("Jester") + ". You gain proficiency in a skill of your choice for the duration of the adventure, or you can draw two additional cards beyond your declared draws.\n   " + toUni("Key") + ". A common or uncommon magic weapon with which you are proficient, or a spell scroll featuring a spell of a level you can cast, appears in your hands. The DM chooses the weapon or spell, which you possess for the duration of this adventure.\n   " + toUni("Knight") + ". You gain the service of any of the NPCs in the \"Hirelings\" section not currently with the party, who appears in a space you choose within 30 feet of you. The NPC serves you loyally for the duration of the adventure, believing that the fates have drawn them to you. You control this character.\n   " + toUni("Moon") + ". You are granted the ability to cast any spell of 5th level or lower, and can use that ability 1d3 times for the duration of the adventure.\n   " + toUni("Rogue") + ". An NPC of the DM's choice becomes secretly hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Any enchantment spell cast on the NPC at 6th level or higher can end the NPC's hostility toward you.\n   " + toUni("Ruin") + ". All forms of wealth that you carry or own, other than magic items, are lost to you. This wealth can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Skull") + ". You summon an avatar of death\u2014a mechanical skeleton (use bone naga statistics) clad in a tattered black robe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.\n   " + toUni("Star") + ". Increase one of your ability scores by 1 for the duration of the adventure. The score can exceed 20 but can't exceed 24.\n   " + toUni("Sun") + ". You gain proficiency in the skill of your choice for the duration of the adventure. In addition, a common or uncommon wondrous item appears in your hands. The DM chooses the item, which you possess for the duration of this adventure.\n   " + toUni("Talons") + ". Every magic item you wear or carry is lost to you. These items can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Throne") + ". You gain proficiency in the Persuasion skill and you double your proficiency bonus on checks made with that skill for the duration of the adventure. In addition, the Monastery of the Distressed Body's brains in jars regard you thereafter as the monastery's rightful master. You must defeat or otherwise clear out the Grand Master and its servants before you can claim the monastery as yours.\n   " + toUni("Vizier") + ". At any one time you choose within the duration of the adventure, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.\n   " + toUni("The Void") + ". This black card spells disaster. Your soul is drawn from your body and held within machinery in either the control room of the Monastery of the Distressed Body (area M8) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure. While your soul is trapped in this way, your body is incapacitated. Divination, Contact Other Plane, or a similar spell of 4th level or higher reveals the location of the machinery that holds your soul. You draw no more cards."
	}
}
{ // pub_20190917_DiA.js
	MagicItemsList["sword of zariel"] = {
		name : "Sword of Zariel",
		source : [["DiA", 225]],
		type : "weapon (longsword)",
		rarity : "artifact",
		storyItemAL : true,
		description : "",
		descriptionFull : "This longsword belonged to the angel Zariel before her fall from grace. Fashioned from celestial steel, it gives off a faint glow and hum. The weapon chooses who can attune to it and who can't. It desires a wielder who embodies bravery and heroism.\n   "+
		toUni("Attunement") + ".The sword allows you to attune to it immediately, without having to take a short rest. The first time you attune to the sword, you are transformed into a heavenly, idealized version of yourself, blessed with otherworldly beauty and a touch of heaven in your heart. Neither magic nor divine intervention can reverse this transformation. Your alignment becomes lawful good, and you gain the following traits:\n \u2022  " + toUni("Angelic Language") + ". You can speak, read, and write Celestial.\n \u2022  " + toUni("Celestial Resistance") + ". You have resistance to necrotic and radiant damage.\n \u2022  " + toUni("Divine Presence") + ". Your Charisma score becomes 20, unless it is already 20 or higher.\n \u2022  " + toUni("Feathered Wings") + ". You sprout a beautiful pair of feathered wings that grant you a flying speed of 90 feet and the ability to hover. If you already have a different kind of wings, these new wings replace the old ones, which fall off.\n \u2022  " + toUni("Truesight") + ". Your eyes become luminous pools of silver. You can see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, perceive the original form of a shapechanger or a creature that is transformed by magic, and see into the Ethereal Plane, all within a range of 60 feet.\n \u2022  " + toUni("New Personality") + ". You gain new personality traits, determined by rolling once on each of the following tables. These traits override any conflicting personality trait, ideal, bond, or flaw.\n\n"+
		toUni("d8\tPersonality Trait")+
		"\n 1\tI treat all beings, even enemies, with respect."+
		"\n 2\tI won't tell a lie."+
		"\n 3\tI enjoy sharing my philosophical worldview and experiences with others."+
		"\n 4\tI cut right to the chase in every conversation."+
		"\n 5\tI often quote (or misquote) religious texts."+
		"\n 6\tI anger quickly when I witness cruelty or injustice."+
		"\n 7\tMy praise and trust are earned and never given freely."+
		"\n 8\tI like everything clean and organized.\n\n"+
		toUni("d6\tIdeal")+
		"\n 1\tCharity. I always help those in need. (Good)"+
		"\n 2\tFaith. I choose to follow the tenets of a particular lawful good deity to the letter. (Lawful)"+
		"\n 3\tResponsibility. It is the duty of the strong to protect the weak. (Lawful)"+
		"\n 4\tRespect. All people deserve to be treated with dignity. (Good)"+
		"\n 5\tHonor. The way I conduct myself determines my reward in the afterlife. (Lawful)"+
		"\n 6\tRedemption. All creatures are capable of change for the better. (Good)\n\n"+
		toUni("d6\tBond")+
		"\n 1\tI have a favorite religious hymn that I constantly hum."+
		"\n 2\tI must keep a written record of my beliefs and the sins that I witness. When finished, this book will be my gift to the multiverse."+
		"\n 3\tI have cherished memories of Idyllglen, though I've only seen this bucolic town in dreams."+
		"\n 4\tI would die for those who fight beside me, regardless of their faults."+
		"\n 5\tI seek to honor the angel Zariel by destroying fiends and other evildoers wherever I find them."+
		"\n 6\tThe Sword of Zariel has chosen me. I shall not fail to wield it justly.\n\n"+
		toUni("d6\tFlaw")+
		"\n 1\tI am too quick to judge others."+
		"\n 2\tI offer forgiveness too readily."+
		"\n 3\tI will sacrifice innocent lives for the greater good."+
		"\n 4\tFlaw? What flaw? I am flawless. Utter perfection!"+
		"\n 5\tI allow nothing to stand in the way of my crusade to eradicate evil from the multiverse."+
		"\n 6\tI ignore those who do not support my plans, for my calling is higher than all others.\n\n"+
		toUni("Holy Light") + ".The sword sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Fiends find the sword's light disconcerting and painful, even if they can't see it, and have disadvantage on attack rolls made within the weapon's radius of bright light.\n   As a bonus action, you can intensify the sword's light, causing it to shed bright light in a 15-foot radius and dim light for an additional 15 feet, or reduce its glow to its normal intensity.\n   "+
		toUni("Random Properties") + ".The sword has 2 minor minor beneficial properties.\n   "+
		toUni("Searing Radiance") + ".The sword deals an extra 9 (2d8) radiant damage to any creature it hits, or 16 (3d10) radiant damage if you're wielding the weapon with two hands. An evil creature that takes this radiant damage must succeed on a DC 17 Constitution saving throw or be blinded until the end of its next turn.\n   "+
		toUni("Sentience") + ".The Sword of Zariel is a sentient, lawful good item with an Intelligence of 10, a Wisdom of 20, and a Charisma of 18. It has hearing and normal vision out to a range of 30 feet.\n   The sword communicates by transmitting emotion to the creature carrying or wielding it.\n   "+
		toUni("Truth Seer") + ".While holding the sword, you gain advantage on all Wisdom (Insight) checks.\n   "+
		toUni("Destroying the Sword") + ".\n   Zariel can destroy the sword simply by grasping it. She couldn't bring herself to do so when she was an angel, but as an archdevil she has no compunction about ridding the multiverse of the weapon. The sword is also destroyed if it's used to shatter the Companion (see \"Shattering the Companion\"), unless the blade is wielded by an angel of challenge rating 15 or higher, or a good-aligned cleric or paladin of at least 10th level.\n   If Zariel is killed for good (that is, if she dies in the Nine Hells), the sword becomes no harder to destroy than a normal longsword.",
		attunement : true,
		prerequisite : "Requires attunement by a creature the sword deems worthy"
	}
}
{ // pub_20200915_IDRotF.js
	MagicItemsList["chwinga charms"] = { // contains contributions by Nod_Hero on Discord
		name : "Chwinga Charms",
		source : ["F"],
		type : "wondrous item",
		rarity : "rare",
		descriptionFull : "This tiny object looks like a snowflake. Different types of chwinga charms exist, each with a different effect.",
		allowDuplicates : true,
		choices : ["Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Heroism", "Snowball Strike", "The Ice Troll", "The Snow Walker", "The Traveler's Haven", "Vitality"],
		"animal conjuring" : {
			description : "This tiny object looks like a snowflake. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
				name : "1 charge",
				spells : ["conjure animals"],
				selection : ["conjure animals"],
				firstCol : 1
			}]
		},
		"biting cold" : {
			description : "This tiny object looks like a snowflake. As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"bounty" : {
			description : "This tiny object looks like a snowflake. As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
				name : "1 charge",
				spells : ["create food and water"],
				selection : ["create food and water"],
				firstCol : 1
			}]
		},
		"cold resistance" : {
			description : "This tiny object looks like a snowflake. As an action, I can expend the charm to give myself resistance to cold damage for 24 hours.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		},
		"heroism" : {
			description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		},
		"snowball strike" : {
			description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
			usages : 5,
			recovery : "never",
			action : [["bonus action", ""]]
		},
		"the ice troll" : {
			description : "This tiny object looks like a snowflake. As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
			usages : 1,
			recovery : "never",
			action : [["reaction", ""]]
		},
		"the snow walker" : {
			description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			action : [["action", ""]]
		},
		"the traveler's haven" : {
			description : "This tiny object looks like a snowflake. As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
			usages : 3,
			recovery : "never",
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
				name : "1 charge",
				spells : ["leomund's tiny hut"],
				selection : ["leomund's tiny hut"],
				firstCol : 1
			}]
		},
		"vitality" : {
			description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
			usages : 1,
			recovery : "never",
			action : [["action", ""]]
		}
	};
}
{ // pub_20201117_TCoE.js
	MagicItemsList["baba yaga's mortar and pestle"] = { // contains contributions by lizrdgizrd
		name : "Baba Yaga's Mortar and Pestle",
		source : [["T", 121]],
		type : "wondrous item",
		rarity : "artifact",
		description : "I can expand the mortar to fit up to a Large creature. I can make the pestle a quarterstaff and back at will. When hitting with a melee attack I can add 1d8 force for each charge expended up to 3. Holding both, I can fill the mortar with any nonmagical plant, fluid or mineral worth 10 gp by speaking its name.",
		descriptionFull : "The creations of the immortal Bab Yaga defy the laws of mortal magic. Among the notorious implements that cement her legend on countless worlds are the artifacts that propel her through the planes: Baba Yaga's Mortar and Pestle. These signature tools of Baba Yaga are a single artifact for purposes of attunement. Should the two objects become separated, the pestle appears next to the mortar at the next dawn.\n  Random Properties. This artifact has the following random properties, which you can determine by rolling on the teables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Properties of the Mortar. The mortar is a Tiny wooden bowl. However, the mortar increases in size to accommodate anything you place inside, expanding--if there's enough space--up to Large size, meaning it can hold even a Large creature.\n  Properties of the Pestle. The pestle is a 6-inch-long, worn wooden tool. Once during your turn while you are holding the pestle, you can extend it into a quarterstaff or shrink it back into a pestle (no action required). As a quarterstaff, the pestle is a magic weapon that grants a +3 bonus to attack and damage rolls made with it.\n  The pestle has 12 charges. When you hit with a melee attack using the pestle, you can expend up to 3 of its charges to deal an extra 1d8 force damage for each charge expended. The pestle regains all expended charges daily at dawn.\n  Perfect Tools. While holding the mortar and pestle, you can use your action to say the name of any nonmagical plant, mineral, or fluid worth 10 gp or less. The mortar instantly fills with the desired amount of that material. Once you use this action you can't do so again until you finish a short or long rest.\n  You can also use the artifact as alchemist's supplies, brewer's supplies, cook's utensils, an herbalism kit, and a poisoner's kit. You have advantage on any check you make using the artifact as one of these tools.\n  Primal Parts. As an action while the pestle and the mortar is within 5 geet of you, you can command the pestle to grind. For the next minute, or until you use your action to verbally command it to stop, the pestle moves on its own, grinding the contents of the mortar into a mush or fine powder that's equally useful for cooking or alchemy. At the start of each of your turns, whatever is in the mortar takes 4d10 force damage. If this reduces the target's hit points to 0, the target is reduce to powder, pulp, or paste, as appropriate. Only magic items are unaffected. If you wish, when the pestle stops, you can have the mortar separate its contents--like powdered bone, crushed herbs, pulped organs--into separate piles.\n  Traverse the Night. If you are holding the pestle while you are inside the mortar, you can use your action to verbally command the mortar to travel to a specific place or creature. You don't need to know where your destination is, but it must be a specific destination--not just the nearest river or a red dragon's lair. If the stated destination is within 1,000 miles of you, the mortar lifts into the air and vanishes. You and any creatures in the mortar travel through a dreamlike sky, with hazy reflections of the world passing by below. Creatures might see images of you streaking through the sky between your point of origin and the destination. You arrive at the location 1 hour later or, if it is night, 1 minute later.\n  Bones Know Their Home. When you command the mortar to travel, you can instead throw out the dust or paste of something ground by the mortar and name a location on a different plane of existence or a different world on the Material Plane. If that material came from a creature native to the named plane or world, the mortar travels through an empty night sky to an unoccupied space at that destination, arriving in 1 minute.\n  Destroying the Mortar and Pestle. The mortar and pestle are destroyed if they are crushed underfoot by the Dancing Hut of Baba Yaga or by Baba Yaga herself.",
		attunement : true,
		usages : 12,
		recovery : "dawn",
		action : [
			["action", "Traverse the Night"],
			["action", "Primal Parts"],
			["action", "Perfect Tools"]
		],
		weaponOptions : [{
			name : "Baba Yaga's Pestle",
			source : [["T", 121]],
			regExpSearch : /^(?=.*pestle)(?=.*yaga's)(?=.*baba).*$/i,
			description : "Versatile (1d8); 1-3 charges per attack add 1d8 force damage per charge",
			modifiers : [3,3],
			type : "simple",
			ability : 1,
			abilitytodamage : true,
			damage : [1, 6, "bludgeoning"],
			range : "Melee",
			tooltip : "I have to expand Baba Yaga's Pestle into a quarterstaff before I may use it as a weapon.",
			defaultExcluded : true
		}]
	}
	MagicItemsList["crook of rao"] = { // contains contributions by lizrdgizrd
		name : "Crook of Rao",
		source : [["T", 123]],
		type : "wondrous item",
		rarity : "artifact",
		description : "While holding the crook, I can expend 1 or more charges to cast one of its spells. I can spend 10 minutes to banish all fiends below CR 19 within 1 mile to their home plane for 100 years.",
		descriptionFull : "Ages ago, the serene god Rao created a tool to shield his fledgling faithful against the evils of the Lower Planes. Yet, as eons passed, mortals developed their own methods of dealing with existential threats, and the crook was largely forgotten. In recent ages, though, the Crook of Rao was rediscovered and leveraged against the rising power of the Witch Queen Iggwilv (one of the names of the wizard Tasha). Although she was defeated, Iggwilv managed to damage the crook during the battle, infecting it with an insidious curse--and the potential for future victory. In the aftermath, the crook was again lost. Occasionally it reappears, but the famed artifact is not what it was. Whether or not the artifact's bearers realize its full threat, few risk using the Crook of Rao--potentially for the final time.\n  Random Properties. The artifact has the following random properties, which you can determine by reolling on the tables in the \"Arifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Spells. The crook has 6 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 18) from it: aura of life (2 charges), aura of purity (2 charges), banishment (1 charge), beacon of hope (1 charge), mass cure wounds (3 charges). The crook regains 1d6 expended charges daily at dawn.\n  Absolute Banishment. While you are attuned to the crook and holding it, you can spend 10 minutes to banish all but the mightiest fiends within 1 mile of you. Any fiend with a challenge rating of 19 or higher is unaffected. Each banished fiend is sent back to its home plane and can't return to the plane the Crook of Rao banished it from for 100 years.\n\nSee the Notes section for further information.",
		toNotesPage : [{
			name : "Crook of Rao",
			note : [
				"\nFailing Matrix",
				"Whenvever the Crook of Rao's Absolute Banishment property is used, or when its last charge is expended, roll on the Extraplanar Reversal table. Any creature conjured as a result of this effect appear in random unoccupied spaces within 60 feet of you and are not under your control.",
				"\nExtraplanar Reversal",
				" d100   Effect",
				"01-25   A portal to a random plane opens. The portal closes after 5 mintues.",
				"26-45   2d4 imps and 2d4 quasits appear.",
				"46-60   1d8 succubi/incubi appear.",
				"61-70   1d10 barbed devils and 1d10 vrocks appear.",
				"71-80   1 arcanoloth, 1 night hag, and 1 rakshasa appear.",
				"81-85   1 ice devil and 1 marilith appear.",
				"86-90   1 balor and 1 pit fiend appear. At the DM's discretion, a portal opens\n       into the presence of a archdevil or demon lord instead, then closes\n       after 5 minutes.",
				"91-00   Iggwilv's Curse (see the Iggwilv's Curse property).",
				"\nIggwilv's Curse",
				"When the Crook was last used against Iggwilv, the Witch Queen lashed out at the artifact, infecting its magical matrix. Over the years, this curse has spread within the crook, threatening to violently pervert its ancient magic. If this occurs, the Crook of Rao, as it is currently known, is destroyed, its magical matrix inverting and exploding into a 50-foot diameter portal. This portal functions as a permanent gate spell cast by Iggwilv. The gate then, once per round on an initiateve count 20, audibly speaks a fiend's name in Iggwilv's voice, doing so until the gate calls on every fiend ever banished by the Crook of Rao. If the fiend still exists, it is drawn through the gate. This process takes eighteen years to complete, at the end of which the gate becomes a permanent portal to Pazunia, the first layer of the Abyss.",
				"\nDestroying or Repairing the Crook",
				"The Crook of Rao can either be destroyed or repaired by journeying to Mount Celestiaand obtaining a tear from the eternally serene god Rao. One way to make the emontionless god cry would be to reunite Rao with the spirit of his first worshipper who sought revelations byond the multiverse long ago. The Crook dissolves if immersed in teh god's tear for a year and a day. If washed in the tear daily for 30 days the Crook loses its Failing Matrix Property.",
			]
		}],
		attunement : true,
		usages : 6,
		recovery : "dawn",
		action : ["action", "Absolute Banishment"],
		spellcastingBonus : [{
			name : "Aura of Life",
			spells : ["aura of life"],
			selection : ["aura of life"],
			firstCol : "2c",
			allowUpCasting : true,
			fixedDC : 18,
		},{
			name : "Aura of Purity",
			spells : ["aura of purity"],
			selection : ["aura of purity"],
			firstCol : "2c",
			allowUpCasting : true,
			fixedDC : 18,
		},{
			name : "Banishment",
			spells : ["banishment"],
			selection : ["banishment"],
			firstCol : "1c",
			allowUpCasting : true,
			fixedDC : 18,
		},{
			name : "Beacon of Hope",
			spells : ["beacon of hope"],
			selection : ["beacon of hope"],
			firstCol : "1c",
			allowUpCasting : true,
			fixedDC : 18,
		},{
			name : "Mass Cure Wounds",
			spells : ["mass cure wounds"],
			selection : ["mass cure wounds"],
			firstCol : "3c",
			allowUpCasting : true,
			fixedDC : 18,
		}]
	}
	MagicItemsList["demonomicon of iggwilv"] = { // contains contributions by lizrdgizrd
		name : "Demonomicon of Iggwilv",
		source : [["T", 125]],
		type : "wondrous item",
		rarity : "artifact",
		description : "While holding the Demonomicon, when I make an Intelligence check regarding demons or a Wisdom check related to the Abyss I can add double my proficiency bonus to the check. When I make a spell damage roll against a fiend I apply the maximum damage.",
		descriptionFull : "An expansive treatise documenting the Abyss's infinite layers and inhabitants, the Demonomicon of Iggwilv is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 minor detrimental property\n  1 major detrimental property\n  Spells. The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast Tasha's hideous laughter from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it: magic circle (1 charge), magic jar (2 charges), planar ally (3 charges), planar binding (2 charges), plane shift (to layers of the Abyss only; 3 charges), summon fiend (3 charges).\n  Abyssal Reference. You can reference the Demonomicon whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.\n\nSee the Notes section for further information.",
		attunement : true,
		toNotesPage : [{
			name : "Demonomicon of Iggwilv",
			note : [
				"\nFiendish Scourging",
				"Your magic causes pain to fiends. While carrying the book, when you make a damage roll for a spell you cast against a fiend, you use the maximum possible result instead of rolling.",
				"\nEnsnarement",
				"While carrying the book, whenever you cast the magic circle spell naming only fiends, or the planar binding spell targeting a fiend, the spell is cast at 9th level, regardless of what level spell slot you used, if any. Additionally, the fiend has disadvantage on its saving throw against the spell.",
				"\nContainment",
				"The first 10 pages of the Demonomicon are blank. As an action while holding the book, you can target a fiend that you can see that is trapped within a magic circle. The fiend must succeed on a DC 20 Charisma saving throw with disadvantage or become trapped within one of the Demonomicon's empty blank pages, which fills with writing detailing the trapped creature's widely known name and depravities. Once Used, this action can't be used again until the next dawn.\n  When you finish a long rest, if you and the Demonomicon are on the same plan of existence, the trapped creature of the highest challenge rating within the book can attempt to possess you. You must make a DC 20 Charisma saving throw. On a failure, you are possessed by the creature, which controls you like a puppet. The possessing creature can release you as an action, appearing in the closest unoccupied space. On a successful save, the fiend can't try to possess you again for 7 days.\n  When the tome is discovered it has 1d4 fiends occupying its pages, typically an assortment of demons.",
				"\nDestroying the Demonomicon",
				"To destroy the book, six different demon lords must each tear out a sixth of the book's pages. If this occurs, the pages reappear after 24 hours. Before all those hours pass, anyone who opens the book's remaining binding is transported to a nascent layer of the Abyss that lies hidden within the book. At the heart of this dadly, semi-sentient domain lies a long-lost artifact, Fraz-Urb'luu's Staff. If the staff is dragged from the pocket plane, the tome is reduced to a mundane and quite out-of-date copy of the Tome of Zyx, the work that served as the foundation for the Demonomicon. Once the staff emerges, the demon lord Fraz-Urb'luu instantly knows.",
			]
		}],
		usages : 8,
		recovery : "dawn",
		action : ["action", "Containment"],
		spellcastingBonus : [{
			name : "Magic Circle",
			spells : ["magic circle"],
			selection : ["magic circle"],
			firstCol : "1c",
			allowUpCasting : true,
			fixedDC : 20,
		},{
			name : "Magic Jar",
			spells : ["magic jar"],
			selection : ["magic jar"],
			firstCol : "3c",
			allowUpCasting : true,
			fixedDC : 20,
		},{
			name : "Planar Ally",
			spells : ["planar ally"],
			selection : ["planar ally"],
			firstCol : "3c",
			allowUpCasting : true,
			fixedDC : 20,
		},{
			name : "Planar Binding",
			spells : ["planar binding"],
			selection : ["planar binding"],
			firstCol : "2c",
			allowUpCasting : true,
			fixedDC : 20,
		},{
			name : "Plane Shift (Abyss)",
			spells : ["plane shift"],
			selection : ["plane shift"],
			firstCol : "3c",
			allowUpCasting : true,
			fixedDC : 20,
		},{
			name : "Summon Fiend",
			spells : ["summon fiend"],
			selection : ["summon fiend"],
			firstCol : "3c",
			allowUpCasting : true,
			fixedDC : 20,
		}]
	}
	MagicItemsList["mighty servant of leuk-o"] = { // contains contributions by lizrdgizrd
		name : "Mighty Servant of Leuk-o",
		source : [["T", 131]],
		type : "wondrous item",
		rarity : "artifact",
		description : "While attuned to this construct, I can enter it and control it along with one other creature. See the Notes section for full information and stat block.",
		descriptionFull : "  Named for the warlord who infamously employed it, the Mighty Servant of Leuk-o is a fantastically powerful, 10-foot-tall machine that turns into an animate construct when piloted. Crafted of a gleaming black alloy of unknown origin, the servant is often described as a combination of a disproportioned dwarf and an oversized beetle. The servant contains enough space for 1 ton of cargo and a crew compartment within, from which up to two Medium creatures can control it--and potentially execute a spree of unstoppable destruction.\n  Tales of the servant's origins involve more conjecture than fact, often referring to otherworldly beings, the mysterious Barrier Peaks in Oerth, and the supposedly related device known as the Machine of Lum the Mad. The best details on the device's origins and operation can be found in the Mind of Metal, a tome of artificer's secrets that connects the device to the traditions of the lost Olman people, and which was written by Lum the Mad's several tiems over granddaughter, Lum the Maestro, while she reconstructed the long disassembled Mighty Servant of Leuk-o.\n  Dangerous Attunement. Two creatures can be attuned to the servant at a time. If a third creature tries to attune to it, nothing happens.\n  The servant's controls are accessed by a hatch in its upper back, which is easily opened while there are no creatures attuned to the artifact.\n  Attuning to the artifact requires two hours, which can be undertaken as part of a long rest, during which time you must be inside the servant, interating with its controls. While crew memebers are attuning themselves, any creature or structure outside and within 50 feet of the servant has a 25 percent chance of being accidentally targeted by one of its Destructive Fist attacks once during the attunement. This process must be undergone every time a creature attunes itself to the artifact.\n\n  See the Notes section for further information.",
			toNotesPage : [{
			name : "Mighty Servant of Leuk-o",
			note : [
				"\nControlling the Servant.",
				"  While any creatures are attuned to the artifact, attuned creatures can open the hatch as easily as any other door. Other creatures can open the hatch as an action with a successful DC 25 Dexterity check using thieve's tools. A knock spell cast on the hatch also opens it until the start of the caster's next turn.\n  A creature can enter or exit through the hatch by spending 10 feet of momvement. Those inside the servant have total cover from effects originating outside it. The controls within it allow creatures to see outside without obstruction.\n  While you are inside the servant, you can command it by using the controls. During your turn (for either attuned creature), you can command it in the following ways:\n \u2022 Open or close the hatch (no action required, once per turn)\n \u2022 Move the servant up to its speed (no action requred)\n \u2022 As an action, you can command the servant to take one of the actions in its stat block or some other action.\n \u2022 When a creature provokes an opportunity attack from the servant, you can use your reaction to command the servant to make one Destructive Fist attack against that creature.\n  While there are no attuned creatures inside the servant, it is an inert object.\n ",
				"\nGhost in the Machine.",
				"  Upon his death, the soul of the mighty warlord Leuk-o was drawn into the artifact and has become its animating force. The servant has been known to attack or move of its own accord, particularly if doing so will cause destruction. Once every 24 hours, the servant, at the DM's discretion, takes one action while uncrewed.\n  If the servant loses half of its hit points or more, each creature attuned to it must succeed on a DC 20  Wisdom saving throw or be charmed for 24 hours. While charmed in this way, the creature goes on a destructive spree, seeking to destroy structures and attack any unattuned creatures within sight of the servant, starting with those threatening the artifact--preferably using the servant, if possible.",
				"\nSelf-Destruct",
				"  By inputting a specific series of lever pulls and button presses, the servant's two crew members can cause it to explode. The self-destruct code is not revealed to crew members when they attune to the artifact. If the code is discovered (the DM determines how), it requires two attuned crew members to be inside the servant and spend their actions on 3 consecutive rounds performing the command. Should the crew members begin the process of entering the code, though, the servant uses its Ghost in the Machine property and turns the crew memebers against each other.\n  If the crew members successfully implement the code, at the end of the third round, the servant explodes. Every creature in a 100-foot-radius sphere centered on the servant must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 87 (25d6) force damage, 87 (25d6) lightning damage, and 87 (25d6) thunder damage. On a successful save, a creature takes half as much damage. Objects and structures in the area take triple damage. Creatures inside the servant are slain instantly and leave behind no remains.\n  This does not destroy the servant permanently. Rather, 2d6 days later, its parts--left arm, left leg, right arm, right leg, lower torso, and upper torso--drop from the sky in random places within 1,000 miles of the explosion. If brought within 5 feet of one another, the pieces reconnect and reform the servant.",
				"\nDestroying the Servant",
				"  The servant can be destroyed in two ways. After it has self-destructed, its disconnected pieces can be melted down in on of the forge-temples of its ancient Olman creators. Alternatively, if the servant strikes the Machine of Lum the Mad, both artifacts explode in an erubtion that is three times the size and three times the damage as the servant's self-destruct property."
			]},{
			name : "Mighty Servant of Leuko-o Stat Block",
			note : [
				"\nMighty Servant of Leuk-o",
				"Huge construct",
				"\nArmor Class: 22 (natural armor)\nHit Points: 310 (27d12 + 135)\nSpeed: 60 ft.",
				" STR       DEX      CON      INT      WIS       CHA\n30 (+10)  14 (+2)  20 (+5)  1 (-5)  14 (+2)  10 (+0)",
				"\nSaving Throws: Wis +9, Cha +7\nSkills: Perception +9\nDamage Resistances: piercing, slashing\nDamage Immunities: acid, bludgeoning, cold, fire, lightning, necrotic, poison, psychic, radiant\nCondition Immunities: all conditions but invisible and prone\nSenses: blindsight 120 ft., passive Perception: 19\nLanguages: understands the languages of creatures attuned to it but can't speak\nChallenge: --\tProficiency Bonus: +7",
				"\nImmutable Existence. The servant is immune to any spell or effect that would alter its form or send it to another plane of existence.\nMagic Resistant Construction. The servant has advantage on saving throws against spells and other magical effects, and spell attacks made against it have disadvantage.\nRegeneration. The servant regains 10 hit points at the start of its turn. If it is reduced to 0 hit points, this trait doesn't function until an attuned creature spends 24 hours repairing the artifact or until the artifact is subjected to lightning damage.\nStanding Leap. The servant's long jump is up to 50 feet and its high jump is up to 25 feet, with or without a running start.\nUnusual Nature. The servant doesn't require air, food, drink, or sleep.",
				"\nActions\nDestructive Fist. Melee or Ranged Weapon Attack: +17 to hit, reach 10 ft. or range 120 ft., one target. Hit: 36 (4d12 + 10) force damage. If the target is an object, it takes triple damage.\nCrushing Leap. If the servant jumps at least 25 feet as a part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the servant and must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 26 (4d12) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone."
			]
		}],
		attunement : true,
		action : ["reaction", "Destructive Fist Attack"],
	}
	MagicItemsList["luba's tarokka of souls"] = { // contains contributions by lizrdgizrd
		name : "Luba's Tarokka of Souls",
		source : [["T", 129]],
		type : "wondrous item",
		rarity : "artifact",
		description : "When holding this deck, I can use an action to cast one of the spells from it. I automatically succeed on Constitution saving throws for divination spells. I can draw a card from the deck to add advantage or disadvantage for a creature I can see within 15 feet.",
		descriptionFull : "  Not all lingering spirits are tragic souls, lost on their way to the hereafter. Some languish as prisoners, souls so wicked mortals dare not free them upon an unsuspecting afterlife.\n  Created by a figure of Vistani legend, Luba's Tarokka of Souls shaped the destiny of countless heroes. The prophecies of this deck of cards also revealed great evils and guided its creator into the path of nefarious forces. Untold times the deck's creator, Mother Luba, narrowly escaped doom, spared only by her keen insigths. But even for her, not all wickedness could be escaped. In the most dire cases, Mother Luba managed to ensnare beings of pure evil amid the strands of fate, imprisoning them within her tarroka deck. There these foul spirits dwell still, trapped within a nether realm hidden amid shuffling cards, waiting for fate to turn foul--as it inevitably will.\n  Like all tarokka decks, the Tarokka of Souls is a lavishly illustrated collection of fifty-four cards, comprising the fourteen cards of the high deck and forty other cards divided into four suits: coins, glyphs, stars, and swords.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor detrimental properties\n  2 minor beneficial properties\n  Spells. While holding the deck, you can use an action to cast one of the following spells (save DC 18) from it: comprehend languages, detect evil and good, detect magic, detect poison and disease, locate object, or scrying. Once you use the deck to cast a spell, you can't cast that spell again from it until the next dawn.\n Enduring Vision. While holding the deck, you automatically succeed on Constitution saving throws made to maintain your concentration on divination spells.\n\nSee the Notes section for further information.",
		toNotesPage : [{
			name : "Luba's Tarokka of Souls",
			note : [
				"\nTwist of Fate",
				"As an action, you can draw a card from the deck and twist the fortune of another creature you can see within 15 feet of you. Choose one of the following effects:\n",
				"Weal. The creature has advantage on attack rolls, ability checks, and saving throws for the next hour.",
				"Woe. The creature has disadvantage on attack rolls, ability checks, and saving throws for the next hour.",
				"\n  The deck can be used in this way twice, and you regain all expended uses at the next dawn.",
				"\nPrisoners of Fate",
				"Whenever you use the Twist of Fate property, there is a chance that one of the souls trapped in the deck escapes. Roll d100 and consult the Souls of the Tarokka table. If you roll one of the high cards, the soul associated with it escapes. You can find its statistics in the Monster Manual. If you roll a soul that has already escaped, roll again.",
				"\nSouls of the Tarokka",
				"d100\tCard\t\tSoul",
				"  1\tArtifact\t\tFlameskull",
				"  2\tBeast\t\tWraith",
				"  3\tBroken One\tBanshee",
				"  4\tDarklord\t\tVampire",
				"  5\tDonjon\t\tMummy",
				"  6\tExecutioner\t\tDeath knight",
				"  7\tGhost\t\tGhost",
				"  8\tHorseman\t\tMummy lord",
				"  9\tInnocent\t\tGhost",
				" 10\tMarionette\t\tMummy",
				" 11\tMists\t\tWraith",
				" 12\tRaven\t\tVampire spawn",
				" 13\tSeer\t\tVampire",
				" 14\tTempter\t\tVampire spawn",
				"15-00\t--\t\t--",
				"\n  The released soul appears at a random location within 10d10 miles of you and terrorizes the living. Until the released soul is destroyed, it gains the benefit of a weal from the deck's Twist of Fate property, and both you and the original target of Twist of Fate suffer the effect of Woe.",
				"\nShuffling Fate",
				"If you go 7 days without using the Twist of Fate property, your attunement to Luba's Tarroka of Souls ends, and you can't attune to it again until after another creature uses Twist of Fate on you.",
				"\nDestroying the Deck",
				"Luba's Tarokka of Souls can be destroyed only if all fourteen souls within are released and destroyed. This reveals a fifteenth soul, a lich, that inhabits the Nether card, which appears only when the fourteen souls are defeated. If this ancient entity is destroyed, the Nether card vanishes and the deck becomes a normal tarokka deck, with no special properties, but it inlcudes a new card of the DM's design."
			]
		}],
		attunement : true,
		usages : 1,
		recovery : "dawn",
		action : ["action", "Cast Spell from Tarokka"],
		extraLimitedFeatures : [{
			name : "Twist of Fate",
			usages : "2",
			recovery : "dawn"
		}],
		spellcastingBonus : [{
			name : "Comprehend Languages",
			spells : ["comprehend languages"],
			selection : ["comprehend languages"],
			fixedDC : 18,
		},{
			name : "Detect Evil and Good",
			spells : ["detect evil and good"],
			selection : ["detect evil and good"],
			fixedDC : 18,
		},{
			name : "Detect Magic",
			spells : ["detect magic"],
			selection : ["detect magic"],
			fixedDC : 18,
		},{
			name : "Detect Poison and Disease",
			spells : ["detect poison and disease"],
			selection : ["detect poison and disease"],
			fixedDC : 18,
		},{
			name : "Locate Object",
			spells : ["locate object"],
			selection : ["locate object"],
			fixedDC : 18,
		},{
			name : "Scrying",
			spells : ["scrying"],
			selection : ["scrying"],
			fixedDC : 18,
		}]
	}
	MagicItemsList["teeth of dahlver-nar"] = { // contains contributions by lizrdgizrd
		name : "Teeth of Dahlver-nar",
		source : [["T", 135]],
		type : "wondrous item",
		rarity : "artifact",
		allowduplicates : true,
		description : "I can sow these teeth to summon creatures specific to each tooth that remain for 10 mintues. I can implant these teeth into my own mouth and gain effects specific to each tooth. I can only have 1 + my Charisma modifier teeth implanted at a time.",
		descriptionFull : "  The Teeth of Dahlver-Nar are stories given form. They are a collection of teeth, each suggestive of wildly different origins and made from various materials. The collection rests within a leather pouch, stitched with images of heroes and whimsical creatures. Where the teeth fall, they bring legends to life.\n  Using the Teeth. While you are holding the pouch, you can use an action to draw one tooth, Roll on the Teeth of Dahlver-Nar table to determine which tooth you draw, and you can either sow the tooth or implant it (both of which are described later).\n  If you don't sow or implant the tooth, roll a die at the end of your turn. On an even number, the tooth vanishes, and creatures appear as if you sowed the tooth, but they are hostile to you and your allies. On an odd number, the tooth replaces one of your teeth as if you implanted it (potentially replacing another implanted tooth, see below).\n  Each tooth can only be used once. Track which teeth have been used. If a tooth's result is rolled after it's been used, you draw the next lowest unused tooth on the table.\n  Sowing Teeth. To sow the tooth, you place it on the ground in an unoccupied space within your reach, or you throw it into an unoccupied space within 10 feet of you in a body of water that is at least 50 feet wide and 50 feet long. Upon doing so, the tooth burrows into the ground and vanishes, leaving no hole behind, or it vanishes into the water. The creatures noted in the Creatures Summoned column appear in an unoccupied space as close to where the tooth was sown as possible. The creatures are allies to you, speak all languages you speak, and linger for 10 minutes before disappearing, unless otherwise noted.\n\nSee Page 3 Notes section for more information.",
		choices : ["pouch of teeth (add first)", "d20 1", "d20 2", "d20 3", "d20 4", "d20 5", "d20 6", "d20 7", "d20 8", "d20 9", "d20 10", "d20 11", "d20 12", "d20 13", "d20 14", "d20 15", "d20 16", "d20 17", "d20 18", "d20 19", "d20 20"],
		"pouch of teeth (add first)" : {
			name : "Pouch for Teeth of Dahlver-Nar",
			description : "I can sow these teeth to summon creatures specific to each tooth that remain for 10 mintues. I can implant these teeth into my own mouth and gain effects specific to each tooth. I can only have 1 + my Charisma modifier teeth implanted at a time.",
			attunement : true,
			toNotesPage : [{
				name : "Teeth of Dahlver-Nar",
				page3notes : true,
				note : [
					"\nImplanting Teeth.",
					"  To implant the tooth, you place it in your mouth, whereupon one of your own teeth falls out, and the drawn tooth takes its place, resizing to fit in your mouth. Once the tooth is implanted, you gain the effect noted in the Implanted Effect column. The tooth can't be removed while you are attuned to the teeth, and you can't voluntarily end your attunement to them. If removed after your death, the tooth vanishes. You can have a maximum number of the teeth are implanted at one time equal to 1 + your Constitution modifier (mimimum of 2 teeth total). If you try to implant more teeth, the newly implanted tooth replaces one of the previous teeth, determined randomly. The replaced tooth vanishes, and you lose the implanted effect.",
					"\nRecovering Teeth.",
					"  Once all the teeth have vanished, their pouch also vanishes. The pouch with all the teeth then appears in a random destination, which could be on a different world of the Material Plane.",
					"\nDestroying the Teeth.",
					"  Each tooth must be destroyed individually by sowing it in the area where the tooth's story originated, with the intention to destroy it. When planted in this way, creatures summoned are not friendly to you and do not vanish. Some of the creatures summoned merely head off in search of home, while others act as their tales dictate. In either case, the tooth is gone forever.",
					"\nSee extra Notes page for Teeth of Dahlver-Nar table",
					"\nTo implant a tooth, add another instance of the Teeth of Dahlver-Nar and select the tooth rolled. If you are running out of space for magic items, move one (or more) to the overflow page and then use the Set Pages Layout function to show the overflow page."
				]},{
				name : "Teeth of Dahlver-Nar table",
				note : [
					"1d20\tTale and Tooth\t\tCreatures Summoned\n Implanted Effect",
					" 1\tThe Staring Cats of Uldun-dar\t  9 cats\n\t(ivory cat molar)\nThe tooth has 8 charges. As an action, you can expend 1 charge to cast the revivify spell from the tooth. If you are dead at the start of your turn, the tooth expends 1 charge and casts revivify ton you.",
					" 2\tDuggle's Surprising Day\t  1 commoner\n\t(human molar)\nWhen you finish a long rest, the tooth casts sanctuary (DC 18) on you, and the spell lasts for 24 hours or until you break it.",
					" 3\tThe Golden Age of Dhakaan\t 10 goblins\n\t(golden goblin bicuspid)\t  1 goblin boss\n When you are hit by an attack and an ally is within 5 feet of you, you can use your reaction to cause them to be hit instead. You can't use this reaction again until you finish a short or long rest.",
					" 4\tThe Mill Road Murders\t\t 3 green hags\n\t(halfling canine)\t\t in a coven\n When you damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage from ghostly blades.",
					" 5\tDooms of the Malpheggi\t 1 lizardfolk queen\n\t(emerald lizardfolk fang)\t 4 lizardfolk\n You gain reptilian scales, granting you a +2 bonus to your AC. Additionally, when you finish a long rest, you must succeed on a DC 15 Constitution saving throw or gain 1 level of exhaustion.",
					" 6\tThe Stable Hand's Secret\t 2 incubi\n\t(sweet-tasting human canine)\n When you make a Charisma check against a humanoid, you can roll a d10 and add the number rolled as a bonus to the result. The creature then becomes hostile to you at the next dawn.",
					" 7\tThe Donkey's Dream\t\t 1 unicorn\n\t(rainbow-colored donkey molar)\n The tooth has 3 charges. As an action, you can expend 1 charge to touch a creature. The target regains 2d8 + 2 hit points, and all diseases and poisons affecting it are removed. When you use this actio, a shimmering image of a unicorn's horn appears until the end of your turn, sprouting from your forehead. The tooth regains all expended charges daily at dawn. You gain the following flaw: \"When I see your wickedness in action, I must oppose it.\"",
					" 8\tBeyond the Rock of Bral\t 2 mind flayers\n\t(Silver mind flayer tooth)\n You gain telepathy out to 120 feet as described in the Monster Manual, and you can cast the detect thoughts spell at will, requiring no components. You also have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
					" 9\tThe Disappearances of Half\t 4 giant toads\n\tHollow (vomerine tooth of a\n\tLarge toad)\n Your long jump is up to 30 feet and your high jump is up to 15 feet, with or without a running start.",
					"10\tLegendry of Phantoms and\t 1 giant octopus,\n\tGhosts (obsidian human molar)\t 1 mage, 1 specter\n As an action, you can use the tooth to cast the Evard's black tentacles spell (DC 18). Once this property is used, it can't be used again until the next dawn.",
					"11\tThe Thousand Deaths of Jander\t 1 vampire\n\tSunstar (yellowed vampire fang)\n You can make a bite attack as an unarmed strike. On a hit, it deals 1d6 piercing damage plus 3d6 necrotic damage. You regain a number of hit points equal to the necrotic damage dealt. While you are in sunlight, you can't regain hit points.",
					"12\tNightmares of Kaggash\t 1 beholder\n\t(twisted beholder tooth)\n As an action, you can cast the eyebite spell from the tooth. Once you use this action, it can't be used again until the next dawn. Whenever you finish a long rest, roll a d20. On a 20, an aberation chosen by the DM appears within 90 feet of you and attacks.",
				]},{
				name : "Teeth of Dahlver-Nar table (cont)",
				note : [
					"13\tThree Bridges to the Sky\t 3 oni\n\t(lapis lazuli oni tooth)\n You gain a flying speed of 30 feet, and you can use the tooth to cast the detect magic spell at will. While you are attuned to fewer than 3 magic items, you gain 1 level of exhaustion that can't removed until you are attuned to 3 or more magic items.",
					"14\tThe Claws of Dragotha\t\t 1 adult red dracolich\n\t(broken translucent fang)\n You can use the tooth to cast the create undead spell. Once this property is used, it can't be used again until the next dawn. Each time you create an undead creature using the tooth, a skeleton, zombie, or ghoul also appears at a random location within 5 miles of you, searching for the living to kill. A humanoid killed by these undead rises as the same type of undead at the next midnight.",
					"15\tAshes of the Ages and Eternal\t 1 dao, 1 djinni\n\tFire (jade humanoid bicuspid)\t 1 efreeti, 1 marid\n You can use the tooth to cast counterspell at 9th level. Once you use this property, it can't be used again until the next dawn. Whenever you finish a long rest, your hit point maximum is reduced by d10. If this reduces your hit point maximum to 0, you die.",
					"16\tDaughters of Bel (green\t\t 1 pit fiend\n\tsteel pit fiend fang)\n You can use the tooth to cast dominate monster (DC 18). Once you use this property, it can't be used again until the next dawn. You smell strongly of burning sulfur.",
					"17\tWhy the Sky Screams\t\t 1 ancient blue dragon\n\t(blue dragon fang)\n You gain immunity to lightning damage and vulnerability to thunder damage.",
					"18\tThe Last Tarrasque (jagged\t 1 tarrasque (ignores you and\n\tsiiver of tarrasque tooth)\t your commands; appears for\n\t\t\t\t 1d4 rounds then vanishes)\n You deal double damage to objects and structures. If you take 20 or more damage in one turn, you must succeed on a DC18 Wisdom saving throw or spend your next turn in a murderous fury. During this rage, you must use your action to make an unarmed strike against a creature that damaged you, or a random creature you can see if you weren't damaged by a creature, moving as close as you can to the target if necessary.",
					"19\tIncendax's Tooth (ruby-veined\t 1 ancient red dragon\n\tred dragon fang)\n You gain immunity to fire damage, and as an action, you can exhale fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 26d6 fire damage on a failed save, or half as much damage on a successful one. After using the breath weapon, you gain 2 levels of exhaustion.",
					"20\tDalver-Nar's Tooth\t\t 1 priest\n\t(dusty human molar)\n As an action you can call on a divine force to come to your aid. Describe the assistance you seek, and the DM decides the nature of the intervention; the effect of any cleric spell would be appropriate. Once this property is used, it can't be used again for 7 days."
				]
			}],
		},
		"d20 1" : {
			name : "Implanted ivory cat molar",
			description : "I have implanted the ivory cat molar from the Teeth of Dahlver-Nar. The tooth has 8 charges that I can use to cast revivify. If I am dead at the start of my turn the tooth expends 1 charge and casts revivify on me.",
			descriptionFull : "The tooth has 8 charges. As an action, you can expend 1 charge to cast the revivify spell from the tooth. If you are dead at the start of your turn, the tooth expends 1 charge and casts revivify ton you.",
			usages : 8,
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 1",
				spells : ["revivify"],
				selection : ["revivify"]
			}],
			attunement : false
		},
		"d20 2" : {
			name : "Implanted human molar",
			description : "I have implanted the human molar from the Teeth of Dahlver-Nar. When I finish a long rest, the tooth casts sanctuary (DC18) on me, and it last for 24 hours or until I break it.",
			descriptionFull : "When you finish a long rest, the tooth casts sanctuary (DC 18) on you, and the spell lasts for 24 hours or until you break it.",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 2",
				spells : ["sanctuary"],
				selection : ["sanctuary"],
				fixedDC : 18
			}],
			attunement : false,
			source : [["T", 136]]
		},
		"d20 3" : {
			name : "Implanted golden goblin bicuspid",
			description : "I have implanted the golden goblin bicuspid from the Teeth of Dahlver-Nar. When I am hit by an attack I can use my reaction to cause an ally within 5 feet of me to be hit instead. I can use this again after a short or long rest.",
			descriptionFull : "When you are hit by an attack and an ally is within 5 feet of you, you can use your reaction to cause them to be hit instead. You can't use this reaction again until you finish a short or long rest.",
			usages : 1,
			recovery : "short/long rest",
			action : ["reaction", "Redirect Attack to Ally"],
			attunement : false,
			source : [["T", 136]]
		},
		"d20 4" : {
			name : "Implanted halfling canine",
			description : "I have implanted the halfling canine from the Teeth of Dahlver-Nar. When I damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage.",
			descriptionFull : "When you damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage from ghostly blades.",
			attunement : false,
			source : [["T", 136]]
		},
		"d20 5" : {
			name : "Implanted emerald lizardfolk fang",
			description : "I have implanted the emerald lizardfolk fang from the Teeth of Dahlver-Nar. I gain reptilian scales that give me a +2 to my AC. When I finish a long rest I must succeed on a DC 15 Constitution save or gain 1 level of exhaustion.",
			descriptionFull : "You gain reptilian scales, granting you a +2 bonus to your AC. Additionally, when you finish a long rest, you must succeed on a DC 15 Constitution saving throw or gain 1 level of exhaustion.",
			attunement : false,
			source : [["T", 136]],
			extraAC : [{
				mod : 2,
				name : "Teeth of Dahlver-Nar",
				text : "I gain reptilian scales and +2 to my AC."
			}]
		},
		"d20 6" : {
			name : "Implanted sweet-tasting human canine",
			description : "I have implanted the sweet-tasting human canine from the Teeth of Dahlver-Nar. When I make a Charisma check against a humanoid, I can roll a d10 and add the result as a bonus. The creature becomes hostile to me at dawn.",
			descriptionFull : "When you make a Charisma check against a humanoid, you can roll a d10 and add the number rolled as a bonus to the result. The creature then becomes hostile to you at the next dawn.",
			attunement : false,
			source : [["T", 136]]
		},
		"d20 7" : {
			name : "Implanted rainbow-colored donkey molar",
			description : "I have implanted the rainbow-colored donkey molar from the Teeth of Dahlver-Nar. As an action, I can expend 1 charge to touch a creature and give them 2d8 + 2 hit points and remove all diseases and poisons affecting it. I then have a shimmering unicorn horn until the end of my turn.",
			descriptionFull : "The tooth has 3 charges. As an action, you can expend 1 charge to touch a creature. The target regains 2d8 + 2 hit points, and all diseases and poisons affecting it are removed. When you use this action, a shimmering image of a unicorn's horn appears until the end of your turn, sprouting from your forehead. The tooth regains all expended charges daily at dawn. You gain the following flaw: \"When I see wickedness in action, I must oppose it.\"",
			attunement : false,
			source : [["T", 136]],
			action : ["action", "Add Temp HP & Cure"],
			usages : 3,
			recovery : "dawn"
		},
		"d20 8" : {
			name : "Implanted silver mind flayer tooth",
			description : "I have implanted the silver mind flayer tooth from the Teeth of Dahlver-Nar. I gain telepathy out to 120 ft and can cast the detect thoughts spell at will. I have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
			descriptionFull : "You gain telepathy out to 120 ft as described in the Monster Manual, and you can cast the detect thoughts spell at will, requiring no components. You also have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
			attunement : false,
			source : [["T", 136]],
			vision : ["telepathy", 120],
			spellcastingBonus : [{
				name : "Detect Thoughts",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : "atwill"
			}]
		},
		"d20 9" : {
			name : "Implanted vomerine tooth of a Large toad",
			description : "I have implanted the vomerine tooth of a Large toad from the Teeth of Dahlver-Nar. My long jump is up to 30 feet and my high jump is up to 15 feet with or without a running start.",
			descriptionFull : "Your long jump is up to 30 feet and your high jump is up to 15 feet with or without a running start.",
			attunement : false,
			source : [["T", 137]]
		},
		"d20 10" : {
			name : "Implanted obsidian human molar",
			description : "I have implanted the obsidian human molar from the Teeth of Dahlver-Nar. As an action, I can use the tooth to cast Evard's black tentacles spell (DC 18). I can't use it again until the next dawn.",
			descriptionFull : "As an action, you can use the tooth to cast Evard's black tentacles spell (DC 18). Once this property is uesd, it can't be used again until the next dawn.",
			attunement : false,
			source : [["T", 137]],
			usages : 1,
			recovery : "dawn",
			action : ["action", "Cast Evard's black tentacles"],
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 10",
				spells : ["evard's black tentacles"],
				selection : ["evard's black tentacles"],
				fixedDC : 18,
			}]
		},
		"d20 11" : {
			name : "Implanted yellowed vampire fang",
			description : "I have implanted the yellowed vampire fang from the Teeth of Dahlver-Nar. I can make a bite attack as an unarmed strike. On a hit I deal 1d6 piercing damage plus 3d6 necrotic damage. I regain hit points equal to the necrotic damage dealt. While in sunlight, I can't regain hit points.",
			descriptionFull : "You can make a bite attack as an unarmed strike. On a hit, it deals 1d6 piercing damage plus 3d6 necrotic damage. You regain a number of hit points equal to the necrotic damage dealt. While you are in sunlight, you can't regain hit points.",
			attunement : false,
			source : [["T", 137]],
			weaponsAdd : ["Bite"],
			weaponOptions : [{
				name : "Bite",
				source : [["T", 137]],
				regExpSearch : /^(?=.*bite).*$/i,
				description : "additional 3d6 necrotic damage, necrotic damage regained in hit points",
				baseWeapon : "unarmed strike"
			}]
		},
		"d20 12" : {
			name : "Implanted twisted beholder tooth",
			description : "I have implanted the twisted beholder tooth from the Teeth of Dahlver-Nar. As an action, once per day, I can cast the eyebite spell. When I finish a long rest, roll a d20 and on a 20, an aberration the DM chooses appears within 30 feet of me and attacks.",
			descriptionFull : "As an action, you can cast the eyebite spell from the tooth. Once you use this action, you can't use it again until the next dawn. Whenever you finish a long rest, roll a d20. On a 20, an aberration chosen by the DM appears within 30 feet of you and attacks.",
			attunement : false,
			source : [["T", 137]],
			usages : 1,
			recovery : "dawn",
			action : ["action", "Cast eyebite"],
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 12",
				spells : ["eyebite"],
				selection : ["eyebite"]
			}]
		},
		"d20 13" : {
			name : "Implanted lapis lazuli oni fang",
			description : "I have implanted the lapis lazuli oni fang from the Teeth of Dahlver-Nar. I gain a flying speed of 30 feet, and I can cast detect magic at will. While I am attuned to fewer than 3 magic items, I gain 1 level of exhaustion that can't be removed until I have attuned 3 items.",
			descriptionFull : "You gain a flying speed of 30 feet, and you can use the tooth to cast the detect magic spell at will. While you are attuned to fewer than 3 magic items, you gain 1 level of exhaustion that can't be removed until you are attuned to 3 or more magic items.",
			attunement : false,
			source : [["T", 137]],
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 13",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "atwill"
			}],
			speed : {
				fly : {spd : 30, enc : 0}
			}
		},
		"d20 14" : {
			name : "Implanted broken translucent fang",
			description : "I have implanted the broken translucent fang from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast create undead. When I create an undead creature, a skeleton, zombie or ghoul also appears within 5 miles of me, searching for the living to kill.",
			descriptionFull : "You can use the tooth to cast the create undead spell. Once this property is used, it can't be used again until the next dawn. Each time you create an undead creature using the tooth, a skeleton, zombie or ghoul also appears at a random location within 5 miles of you, searching for the living to kill. A humanoid killed by these undead rises as the same type of undead at the next midnight.",
			attunement : false,
			source : [["T", 137]],
			usages : 1,
			recovery : "dawn",
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 14",
				spells : ["create undead"],
				selection : ["create undead"]
			}]
		},
		"d20 15" : {
			name : "Implanted jade humanoid bicuspid",
			description : "I have implanted the jade humanoid bicuspid from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast counterspell at 9th level. Whenever I finish a long rest, if I haven't used the tooth to cast counterspell, my hit point maximum is reduced by 2d10.",
			descriptionFull : "You can use the tooth to cast counterspell at 9th level. Once you use this property, it can't be used again until the next dawn. Whenever you finish a long rest, if you haven't used the tooth to counter a spell since your last long rest, your hit point maximum is reduced by 2d10. If this reduces your hit point maximum to 0, you die.",
			attunement : false,
			source : [["T", 137]],
			usages : 1,
			recovery : "dawn",
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 15",
				spells : ["counterspell"],
				selection : ["counterspell"]
			}]
		},
		"d20 16" : {
			name : "Implanted green steel pit fiend fang",
			description : "I have implanted the green steel pit fiend fang from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast dominate monster (DC 18). I smell strongly of burning sulfur.",
			descriptionFull : "You can use the tooth to cast dominate monster (DC 18). Once you use this property, it can't be used again until the next dawn. You smell strongly of burning sulfur.",
			attunement : false,
			source : [["T", 137]],
			usages : 1,
			recovery : "dawn",
			spellcastingBonus : [{
				name : "Implanted Tooth d20 = 16",
				spells : ["dominate monster"],
				selection : ["dominate monster"],
				fixedDC : 18
			}]
		},
		"d20 17" : {
			name : "Implanted blue dragon fang",
			description : "I have implanted the blue dragon fang from the Teeth of Dahlver-Nar. I gain immunity to lightning damage and vulnerability to thunder damage.",
			descriptionFull : "You gain immunity to lightning damage and vulnerability to thunder damage.",
			attunement : false,
			source : [["T", 137]],
			savetxt : {
				immune : ["lightning"],
				text : ["Vulnerable to Thunder damage"]
			}
		},
		"d20 18" : {
			name : "Implanted jagged sliver of tarrasque tooth",
			description : "I have implanted the jagged sliver of tarrasque tooth from the Teeth of Dahlver-Nar. I deal double damage to objects and structures. If I take 20 or more damage in one turn, I must succeed on a DC 18 Wisdom save or spend the next turn in a murderous rage.",
			descriptionFull : "You deal double damage to objects and structures. If you take 20 or more damage in one turn, you must succeed on a DC 18 Wisdom saving throw or spend your next turn in a murderous fury. During this rage, you must use your action to make an unarmed strike against a creature that damaged you, or a random creature you can see if you weren't damaged by a creature, moving as close as you can to the target if necessary.",
			attunement : false,
		},
		"d20 19" : {
			name : "Implanted ruby-veined red dragon fang",
			description : "I have implanted the ruby-veined red dragon fang from the Teeth of Dahlver-Nar. I gain immunity to fire damage and I can exhale fire in a 90-foot cone. Creatures in my cone must make a DC 24 Dexterity save or take 26d6 fire damage or half on success.",
			descriptionFull : "You gain immunity to fire damage, and as an action, you can exhale fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 26d6 fire damage on a failed save, or half as much damage on a successful one. After using the breath weapon, you gain 2 levels of exhaustion.",
			attunement : false,
			action : ["action", "Red Dragon fang (ToD-N)"],
			savetxt : {
				immune : ["fire"]
			},
			weaponsAdd : ["Red Dragon fang (ToD-N)"],
			weaponOptions : [{
				name : "Red Dragon fang (ToD-N)",
				source : [["T", 137]],
				type : "Natural",
				ability : 2,
				regExpSearch : /^(?=.*red)(?=.*dragon)(?=.*tod-n).*$/i,
				abilitytodamage : false,
				damage : [26, 6, "fire"],
				range : "90 foot cone",
				dc : true,
				description : "90 foot cone; Dexterity save DC 24, half damage on success",
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.WeaponTextName == "Red Dragon fang (ToD-N)") {
							fields.To_Hit_Bonus = 'DC ' + (16 - What('Dex Mod'));
						}
					}
				]
			}
		},
		"d20 20" : {
			name : "Implanted dusty human molar",
			description : "I have implanted the dusty human molar from the Teeth of Dahlver-Nar. As an action, I can call on a divine force for aid. Once I use this property, I can't use it again for 7 days.",
			descriptionFull : "As an action you can call on a divine force to come to your aid. Describe the assistance you seek, and the DM decides the nature of the intervention; the effect of any cleric spell would be appropriate. Once this property is used, it can't be used again for 7 days.",
			attunement : false,
			usages : 1,
			recovery : "7 days"
		}
	}
}
{ // pub_20210921_WBtW
	MagicItemsList["iggwilv's cauldron"] = {
		name : "Iggwilv's Cauldron",
		source : [["WBtW", 209]],
		type : "wondrous item",
		rarity : "artifact",
		attunement : true,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		notLegalAL : true,
		description : "",
		descriptionFull : "Iggwilv crafted this wondrous cauldron with the help of her adoptive mother, the archfey Baba Yaga. The cauldron has two forms. Only Iggwilv or Baba Yaga can change the cauldron from one form to another (by using an action to touch it), which either can do without being attuned to the item. In its first form, the cauldron is made of solid gold and embossed on the outside with images of bare-branched trees, falling leaves, and broomsticks. In its second form, the cauldron is made of iron and embossed on the outside with images of bats, toads, cats, lizards, and snakes\u2014eight of each animal. In either form, the cauldron is roughly 3 feet in diameter and has a 2-foot-wide mouth, a round lid with a molded handle at the top, and eight clawed feet for stability. The cauldron weighs 80 pounds when empty, and it can hold up to 100 gallons of liquid."+
		"\n   " + toUni("Attunement") + ". Any Humanoid creature that attunes to the cauldron must succeed on a DC 15 Constitution saving throw or be aged to the point of decrepitude. In this state, the creature's speed is halved, the range of its vision and hearing is reduced to 30 feet, and it has disadvantage on all ability checks, attack rolls, and saving throws. The creature will reach the end of its natural life span in 3d8 days. Only a wish spell or divine intervention can reverse this aging effect on the creature."+
		"\n   Three hags can attune to the cauldron simultaneously, provided they have formed a coven. If the coven disbands, the attunement ends for all three hags."+
		"\n   " + toUni("Random Properties") + ". Regardless of the form it takes, the cauldron has the following random properties:"+
		"\n \u2022 1 minor beneficial property (determined by rolling on the Minor Beneficial Properties table in the Dungeon Master's Guide)"+
		"\n \u2022 1 minor detrimental property (determined by rolling on the Minor Detrimental Properties table in the Dungeon Master's Guide)"+
		"\n   " + toUni("Gold Cauldron") + ". The gold cauldron has the following properties:"+
		"\n \u2022 If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew that provides one nourishing meal for up to four people per gallon of water used. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew."+
		"\n \u2022 If wine is poured into the cauldron and stirred for 10 minutes, it transforms into a magical elixir that fortifies up to four people per gallon of wine used. Any creature that imbibes the elixir gains 10 temporary hit points. Any of the elixir that isn't consumed within 1 hour vanishes. Once used, this property of the cauldron can't be used again until the next dawn."+
		"\n \u2022 When the cauldron is filled with 90 gallons of water mixed with 10 gallons of wine, it can be used as the focus for a scrying spell. When this spell is cast using the cauldron as its focus, the target of the spell fails its saving throw automatically, and the spell works even if its caster and the target are on different planes of existence. When the spell ends, all the liquid in the cauldron vanishes."+
		"\n \u2022 Dipping the bristles of an ordinary broom into the water-filled cauldron transforms the broom into a broom of flying for 3 days. Once used, this property of the cauldron can't be used again until the next dawn."+
		"\n   " + toUni("Iron Cauldron") + ". The iron cauldron has the following properties:"+
		"\n \u2022 You can use an action to scream into the empty cauldron, which magically summons a swarm of bats that flies out of the cauldron and acts immediately after you in the initiative order. The swarm obeys your commands and disappears after 1 minute if it hasn't been destroyed by then. Once used, this property of the cauldron can't be used again until the next dawn."+
		"\n \u2022 If at least 1 gallon of blood is poured into the cauldron and stirred for 1 minute, it turns into a cloud of harmless black smoke that erupts from the cauldron and dissipates quickly. At the same time, all Humanoid creatures within a certain radius of the cauldron fall unconscious for 1 hour, except those that are attuned to the cauldron or immune to being charmed. The radius of the effect is 100 feet per gallon of blood used. An unconscious creature awakens if it takes damage or if someone uses an action to shake or slap it. Once used, this property of the cauldron can't be used again until the next dawn."+
		"\n \u2022 Tying a dead frog or toad to the end of an ordinary branch and dipping it in the water-filled cauldron transforms the branch into a wand of polymorph with 3 charges. This wand can't recharge and crumbles to ashes when its final charge is expended. Once used, this property of the cauldron can't be used again for 8 days."+
		"\n \u2022 If you spend 1 minute touching the cauldron with a unicorn's horn while reciting the poem called \"The Witch Queen's Cauldron\" (see the accompanying sidebar), all creatures within 1,000 feet of the cauldron except those that are attuned to it become frozen in time. A time-frozen creature is incapacitated, can't move or speak, doesn't age, and is unaware of its surroundings or the passage of time. Moreover, it can't be moved, harmed in any way, or affected by any other magic. All other conditions and effects on the creature are suppressed until it is no longer frozen in time. Destroying the cauldron, sending it to another plane of existence, or touching it with a unicorn's horn for 1 minute while reciting \"The Witch Queen's Cauldron\" ends the time-freezing effect on all creatures. The effect also ends on any creature that comes into contact with an antimagic field or is touched by a unicorn's horn."+
		"\n   " + toUni("Destroying the Cauldron") + ". The cauldron is a Medium object with AC 19, 80 hit points, and immunity to damage from any source other than a flame tongue or frost brand weapon. Reducing the cauldron to 0 hit points with such a weapon shatters the cauldron into eight pieces of roughly equal size, whereupon all ongoing effects created by the cauldron end as it loses its magic."+
		"\n   The destruction of Iggwilv's Cauldron causes all hags in the multiverse to lose the Shared Spellcasting trait gained by being in a coven (see the \"Hag Covens\" sidebar in the Monster Manual)."+
		"\n   " + toUni("Reconstructing the Cauldron") + ". If all eight pieces of the shattered cauldron are within 5 feet of one another, a wish spell can reassemble them, restoring the cauldron and all its properties. The cauldron's reconstruction also restores the Shared Spellcasting trait of hag covens throughout the multiverse."
	}
}
{ // pub_20230815_GotG
	MagicItemsList["adze of annam"] = {
		name : "Adze of Annam",
		source : [["GotG", 110]],
		type : "weapon (greataxe)",
		rarity : "artifact",
		attunement : true,
		notLegalAL : true,
		description : "",
		descriptionFull : "This massive adze is said to have been wielded by All-Father Annam, not as a weapon but as the tool he used to shape the various worlds of the Material Plane eons ago."+
		"\n   " + toUni("Random Properties") + ". The adze has the following random properties, determined by rolling on the appropriate table in the Dungeon Master's Guide:"+
		"\n \u2022 2 minor beneficial properties"+
		"\n \u2022 1 major beneficial property"+
		"\n \u2022 2 minor detrimental properties"+
		"\n   " + toUni("Magic Weapon") + ". When a creature attunes to the adze, the artifact magically adjusts its size so that creature can wield it as a greataxe. The adze is a magic weapon that grants a +3 bonus to attack and damage rolls made with it. On a hit, the adze deals an additional 3d12 force damage. It also deals double damage to objects and structures."+
		"\n   " + toUni("Divine Mattock") + ". As an action, you can call upon the might of the All-Father and use the adze to cast move earth or fabricate. Once this property is used, it can't be used again until the next dawn.",
		weight : 7
	}
	MagicItemsList["bigby's beneficent bracelet"] = {
		name : "Bigby's Beneficent Bracelet",
		source : [["GotG", 111]],
		type : "wondrous item",
		rarity : "artifact",
		attunement : true,
		notLegalAL : true,
		description : "",
		descriptionFull : "This gorgeous jewelry piece, crafted by the wizard Bigby himself, consists of four gold rings attached via delicate chains to a wrist cuff studded with sapphires and diamonds."+
		"\n   " + toUni("Random Properties") + ". The bracelet has the following random properties, determined by rolling on the appropriate table in the Dungeon Master's Guide:"+
		"\n \u2022 1 minor beneficial properties"+
		"\n \u2022 1 major beneficial property"+
		"\n \u2022 1 minor detrimental properties"+
		"\n   " + toUni("Dexterous Fingers") + ". While wearing the bracelet, you can cast mage hand."+
		"\n   " + toUni("Force Sculpture") + ". By focusing and channeling the bracelet's magic for 1 minute, you can create a spectral copy of a Large or smaller nonmagical object. The copy appears in an unoccupied space within 10 feet of you, and it is made of tangible but translucent force that mimics the size, weight, and other properties of the object it's copying. The copy must appear on a surface or liquid that can support it. Creatures can touch and interact with the copy as if it were a nonmagical object."+
		"\n   The copy is immune to all damage and can't be dispelled, but a disintegrate spell destroys it immediately. Otherwise, the copy disappears after 8 hours or when you dismiss it as an action."+
		"\n   The bracelet can create up to three copies and regains all expended uses at dawn."+
		"\n   " + toUni("Helpful Hand") + ". As an action, you can use the bracelet to cast Bigby's hand as a 9th-level spell (spell attack bonus +13). When you cast the spell this way, the spell doesn't require concentration. Once this property is used, it can't be used again until the next dawn."
	}
	MagicItemsList["helm of perfect potential"] = {
		name : "Helm of Perfect Potential",
		source : [["GotG", 112]],
		type : "wondrous item",
		rarity : "artifact",
		attunement : true,
		notLegalAL : true,
		description : "",
		descriptionFull : "This copper-hued helm contains a shard of the Elemental Chaos embedded in its forehead, surrounded by a motif of a rising sun. Legend says Annam fashioned this helm for his daughter Diancastra to hold the fragment of chaos she used to prove her worth to her father."+
		"\n   " + toUni("Random Properties") + ". The helm has the following random properties, determined by rolling on the appropriate table in the Dungeon Master's Guide:"+
		"\n \u2022 2 minor beneficial properties"+
		"\n \u2022 1 major beneficial property"+
		"\n \u2022 1 minor detrimental properties"+
		"\n   " + toUni("Master of Guile") + ". While wearing the helm, you have advantage on Charisma (Deception) and Wisdom (Insight) checks."+
		"\n   " + toUni("Arrow of Elemental Havoc") + ". As a bonus action while wearing the helm, you can launch a bolt of searing elemental energy toward a creature you can see within 90 feet of yourself. The target must make a DC 20 Dexterity saving throw. On a failed save, the creature takes 4d6 acid, cold, fire, lightning, or thunder damage (your choice). On a successful save, the creature takes half as much damage."+
		"\n   " + toUni("Spellcasting") + ". The helm has 6 charges and regains 1d6 charges each dawn. As an action while wearing the helm, you can expend 1 or more of its charges to cast one of the following spells (save DC 20): elemental weapon (1 charge), call lightning (2 charges), wall of fire (3 charges), conjure elemental (4 charges), tsunami (5 charges)."
	}
}