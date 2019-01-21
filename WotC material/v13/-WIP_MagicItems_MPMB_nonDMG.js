CoS: {
	"adventurer's battleaxe" : {
		name: "Adventurer's Battleaxe",
		source: ["CoS", 198],
		type : "weapon ()",
		rarity: "unknown (magic)",
		description: "",
		descriptionFull: "The axe's handle is carved with leaves and vines, and it weighs half as much as a normal battleaxe. When the axe hits a plant, whether an ordinary plant or a plant creature, the target takes an extra 1d8 slashing damage. When a creature of non-good alignment wields the axe, it sprouts thorns whenever its wielder makes an attack with it. These thorns prick the wielder for 1 piercing damage after the attack is made, and this damage is considered magical.",
		weight: 2
	},
	'blood spear': {
		name: "Blood Spear",
		source: ["CoS", 221],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "Kavan was a ruthless chieftain whose tribe lived in the Balinok Mountains centuries before the arrival of Strahd von Zarovich. Although he was very much alive, Kavan had some traits in common with vampires: he slept during the day and hunted at night, he drank the blood of his prey, and he lived underground. In battle, he wielded a spear stained with blood. His was the first blood spear, a weapon that drains life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting.\n   When you hit with a melee attack using this magic spear and reduce the target to 0 hit points, you gain 2d6 temporary hit points.\n   Any creature can wield the spear, but only the character chosen by Kavan to wield it gains a +2 bonus to attack and damage rolls made with this magic weapon.",
		attunement: true,
		weight: 3
	},
	'green copper ewer': {
		name: "Green Copper Ewer",
		source: ["CoS", 188],
		type: "Other",
		rarity: "unknown (magic)",
		description: "",
		descriptionFull: "Any poisonous liquid poured into the ewer is instantly transformed into an equal amount of sweet wine. Furthermore, a creature that grasps the ewer's handle can command the ewer to fill with 1 gallon of wine, and it can't produce more wine until the next dawn."
	},
	'gulthias staff': {
		name: "Gulthias Staff",
		source: ["CoS", 221],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "Made from the branch of a Gulthias tree (see the blights entry of the Monster Manual), a Gulthias staff is a spongy, black length of wood. Its evil makes beasts visibly uncomfortable while within 30 feet of it. The staff has 10 charges and regains 1d6+4 of its expended charges daily at dusk.\n   If the staff is broken or burned to ashes, its wood releases a terrible, inhuman scream that can be heard out to a range of 300 feet. All blights that can hear the scream immediately wither and die.\n   " + toUni("Vampiric Strike") + ". The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to regain a number of hit points equal to the damage dealt by the weapon. Each time a charge is spent, red blood oozes from the staff's pores, and you must succeed on a DC 12 Wisdom saving throw or be afflicted with short term madness (see \"Madness\" in chapter 8 of the Dungeon Master's Guide).\n   " + toUni("Blight Bane") + ". While you are attuned to the staff, blights and other evil plant creatures don't regard you as hostile unless you harm them.",
		attunement: true,
		weight: 4
	},
	'holy symbol of ravenkind': {
		name: "Holy Symbol of Ravenkind",
		source: ["CoS", 222],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "The Holy Symbol of Ravenkind is a unique holy symbol sacred to the good-hearted faithful of Barovia. It predates the establishment of any church in Barovia. According to legend, it was delivered to a paladin named Lugdana by a giant raven - or an angel in the form of a giant raven. Lugdana used the holy symbol to root out and destroy nests of vampires until her death. The high priests of Ravenloft kept and wore the holy symbol after Lugdana's passing.\n   The holy symbol is a platinum amulet shaped like the sun, with a large crystal embedded in its center.\n   The holy symbol has 10 charges for the following properties. It regains 1d6+4 charges daily at dawn.\n   " + toUni("Hold Vampires") + ". As an Action, you can expend 1 charge and present the holy symbol to make it flare with holy power. Vampires and vampire spawn within 30 feet of the holy symbol when it flares must make a DC 15 Wisdom saving throw. On a failed save, a target is paralyzed for 1 minute. It can repeat the saving throw at the end of its turns to end the effect on itself.\n   " + toUni("Turn Undead") + ". If you have the Turn Undead or the Turn the Unholy feature, you can expend 3 charges when you present the holy symbol while using that feature. When you do so, undead have disadvantage on their saving throws against the effect.\n   " + toUni("Sunlight") + ". As an action, you can expend 5 charges while presenting the holy symbol to make it shed bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight and lasts for 10 minutes or until you end the effect (no action required).",
		attunement: true
	},
	'icon of ravenloft': {
		name: "Icon of Ravenloft",
		source: ["CoS", 222],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "The Icon of Ravenloft is a 12-inch tall statuette made of the purest silver, weighing 10 pounds. It depicts a cleric kneeling in supplication.\n   The icon was given to Strahd by the archpriest Ciril Romulich, an old family friend, to consecrate the castle and its chapel.\n   While within 30 feet of the icon, a creature is under the effect of a Protection from Evil and Good spell against fiends and undead. Only a creature attuned to the icon can use its other properties.\n   " + toUni("Augury") + ". You can use an action to cast an Augury spell from the icon, with no material components required. Once used, this property can't be used again until the next dawn.\n   " + toUni("Bane of the Undead") + ". You can use the icon as a holy symbol while using the Turn Undead or Turn the Unholy feature. If you do so, increase the save DC by 2.\n   " + toUni("Cure Wounds") + ". While holding the icon, you can take an action to heal one creature that you can see within 30 feet of you. The target regains 3d8+3 hit points, unless it is an undead, a construct, or a fiend. Once used, this property can't be used again until the next dawn.",
		attunement: true,
		weight: 10
	},
	'lost sword': {
		name: "Lost Sword",
		source: ["CoS", 81],
		type : "weapon ()",
		rarity: "unknown (magic)",
		description: "",
		descriptionFull: "The Lost Sword is a sentient lawful good +1 shortsword (Intelligence 11, Wisdom 13, Charisma 13). It has hearing and normal vision out to a range of 120 feet. It communicates by transmitting emotion to the creature carrying or wielding it.\n   The sword's purpose is to fight evil. The sword has the following additional properties:\n \u2022 The sword continually sheds bright light in a 15-foot radius and dim light for an additional 15 feet. Only by destroying the sword can this light be extinguished.\n \u2022 A lawful good creature can attune itself to the sword in 1 minute.\n \u2022 While attuned to the weapon, the sword's wielder can use the sword to cast the Crusader's Mantle spell. Once used, this property of the sword can't be used again until the next dawn.",
		attunement: true,
		weight: 2
	},
	"saint markovia's thighbone" : {
		name: "Saint Markovia's Thighbone",
		source: ["CoS", 222],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "Saint Markovia's thighbone has the properties of a mace of disruption. If it scores one or more hits against a vampire or a vampire spawn in the course of a single battle, the thighbone crumbles into dust once the battle concludes.\n   As a youth, Markovia followed her heart and became a priest of the Morninglord soon after her eighteenth birthday. She proved to be a charismatic proselytizer and, before the age of thirty, had gained a reputation for allowing no evil to stand before her.\n   Markovia had long considered Strahd a mad tyrant, but only after his transformation into a vampire did she dare to challenge him. As she rallied her followers and prepared to march on Castle Ravenloft, Strahd sent a group of vampire spawn to her abbey. They confronted Markovia and were destroyed to a one.\n   Suffused with confidence born of a righteous victory, Markovia advanced on Castle Ravenloft. A great battle raged from the catacombs to the parapets. In the end, Markovia never returned to Barovia, and Strahd long afterward walked with a limp and a grimace of pain. It is said that he trapped Markovia in a crypt beneath his castle, and her remains linger there yet.\n   The essence of Markovia's saintliness passed partly into her bones as the rest of her body decomposed. Her remaining thighbone is imbued with power that inflicts grievous injury on the undead.\n   Mace of Disruption. When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
		attunement: true,
		weight: 4
	},
	'silver dragon shield +2': {
		name: "Silver Dragon Shield +2",
		source: ["CoS", 68],
		type : "shield",
		rarity: "rare",
		description: "",
		descriptionFull: "While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.\n   The shield is emblazoned with a stylized silver dragon that is the emblem of the Order of the Silver Dragon (see Curse of Strahd, chapter 7). The shield whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.\n   A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.",
		weight: 6
	},
	'statuette of saint markovia': {
		name: "Statuette of Saint Markovia",
		source: ["CoS", 152],
		type: "Other",
		rarity: "unknown (magic)",
		description: "",
		descriptionFull: "This golden statuette grants any good-aligned creature that carries it a +1 bonus to saving throws."
	},
	sunsword: {
		name: "Sunsword",
		source: ["CoS", 223],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "The Sunsword is a unique blade once possessed by Strahd's brother, Sergei von Zarovich. In its original form, it had a platinum hilt and guard, and a thin crystal blade as strong as steel.\n   Strahd employed a powerful wizard named Khazan to destroy the weapon after Sergei's death. The first part of the process required the hilt and the blade to be separated, which Khazan accomplished. While Khazan was busying himself destroying the blade, his apprentice stole the hilt and fled. Khazan later located his apprentice's mutilated corpse in the Svalich Woods, but the hilt was nowhere to be found. To avoid the vampire's wrath, Khazan told Strahd that the entire weapon had been destroyed.\n   The hilt, which is sentient, knows that it can never be reunited with its original crystal blade. It has, however, gained the properties of a sun blade.\n   " + toUni("Sentience") + ". The Sunsword is a sentient chaotic good weapon with an Intelligence of 11, a Wisdom of 17, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon communicates by transmitting emotions to the creature carrying it or wielding it.\n   " + toUni("Personality") + ". The Sunsword's special purpose is to destroy Strahd, not so much because it wants to free the land of Barovia from evil but because it wants revenge for the loss of its crystal blade. The weapon secretly fears its own destruction.\n   Sun blade. This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		attunement: true,
		weight: 3
	}
},
TftYP: {
	'amulet of protection from turning': {
		name: "Amulet of Protection from Turning",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "While you wear this amulet of silver and turquoise, you have advantage on saving throws against effects that turn undead.\n   If you fail a saving throw against such an effect, you can choose to succeed instead. You can do so three times, and expended uses recharge daily at dawn. Each time an effect that turns undead is used against you, the amulet glows with silvery blue light for a few seconds.",
		attunement: true,
		weight: 1
	},
	'balance of harmony': {
		name: "Balance of Harmony",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This scale bears celestial symbols on one pan and fiendish symbols on the other. You can use the scale to cast Detect Evil and Good as a ritual. Doing so requires you to place the scale on a solid surface, then sprinkle the pans with holy water or place a transparent gem worth 100 gp in each pan. The scale remains motionless if it detects nothing, tips to one side or the other for good (consecrated) or evil (desecrated), and fluctuates slightly if it detects a creature appropriate to the spell but neither good nor evil. By touching the scales after casting the ritual, you instantly learn any information the spell can normally convey, and then the effect ends.",
		weight: 1
	},
	'bracelet of rock magic': {
		name: "Bracelet of Rock Magic",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "While you wear this gold bracelet, it grants you immunity to being petrified, and it allows you to cast Flesh to Stone (save DC 15) as an action. Once the spell has been cast three times, the bracelet can no longer cast it. Thereafter, you can cast Stone Shape as an action. After you have done this thirteen times, the bracelet loses its magic and turns from gold to lead.\n   " + toUni("Curse") + ". The bracelet's affinity with earth manifests as an unusual curse. Creatures of flesh that are strongly related to earth and stone, such as stone giants and dwarves, have advantage on the saving throw against Flesh to Stone cast from the bracelet. If such a creature's save is successful, the bracelet breaks your attunement to it and casts the spell on you. You make your saving throw with disadvantage, and on a failed save you are petrified instantly.",
		attunement: true,
		weight: 1,
		cursed: true
	},
	'eagle whistle': {
		name: "Eagle Whistle",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "While you blow an eagle whistle continuously, you can fly twice as fast as your walking speed. You can blow the whistle continuously for a number of rounds equal to 5 + five times your Constitution modifier (minimum of 1 round) or until you talk, hold your breath, or start suffocating. A use of the whistle also ends if you land. If you are aloft when you stop blowing the whistle, you fall. The whistle has three uses. It regains expended uses daily at dawn.",
		weight: 1
	},
	'hell hound cloak': {
		name: "Hell Hound Cloak",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This dark cloak is made of cured hell hound hide. As an action, you can command the cloak to transform you into a hell hound for up to 1 hour. The transformation otherwise functions as the Polymorph spell, but you can use a bonus action to revert to your normal form.\n   " + toUni("Curse") + ". This cloak is cursed with the essence of a hell hound, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the cloak, keeping it within reach at all times.\n   The sixth time you use the cloak, and each time thereafter, you must make a DC 15 Charisma saving throw. On a failed save, the transformation lasts until dispelled or until you drop to 0 hit points, and you can't willingly return to normal form. If you ever remain in hell hound form for 6 hours, the transformation becomes permanent and you lose your sense of self. All your statistics are then replaced by those of a hell hound. Thereafter, only Remove Curse or similar magic allows you to regain your identity and return to normal. If you remain in this permanent form for 6 days, only a Wish spell can reverse the transformation.",
		attunement: true,
		weight: 1,
		cursed: true
	},
	'javelin of backbiting': {
		name: "Javelin of Backbiting",
		source: ["TftYP", 229],
		type : "weapon ()",
		rarity: "very rare",
		description: "",
		descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet. and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one.\n   Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the spear.",
		attunement: true,
		weight: 2,
		cursed: true
	},
	'load stone': {
		name: "Load Stone",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This stone is a large gem worth 150 gp.\n   " + toUni("Curse") + ". The stone is cursed, but its magical nature is hidden; Detect Magic doesn't detect it. An Identify spell reveals the stone's true nature. If you use the Dash or Disengage action while the stone is on your person, its curse activates. Until the curse is broken with Remove Curse or similar magic, your speed is reduced by 5 feet, and your maximum load and maximum lift capacities are halved. You also become unwilling to part with the stone.",
		weight: 1,
		cursed: true
	},
	'mirror of the past': {
		name: "Mirror of the Past",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "The holder of this platinum hand mirror can learn something about the history of a specific object or creature by taking an action to gaze into the mirror and think of the target. Instead of the holder's reflection, the mirror presents scenes from the target's past. Information conveyed is accurate, but it is random and cryptic, and presented in no particular order. Once it is activated, the mirror gives its information for 1 minute or less, then returns to normal. It can't be used again until the next dawn.",
		weight: 1
	},
	'night caller': {
		name: "Night Caller",
		source: ["TftYP", 228],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This whistle is carved from transparent crystal, and it resembles a tiny dragon curled up like a snail. The name Night Caller is etched on the whistle in Dwarvish runes. If a character succeeds on a DC 20 Intelligence (Arcana or History) check, the character recalls lore that says the duergar made several such whistles for various groups in an age past.\n   If you blow the whistle in darkness or under the night sky, it allows you to cast the Animate Dead spell. The target can be affected through up to 10 feet of soft earth or similar material, and if it is, it takes 1 minute to claw its way to the surface to serve you. Once the whistle has animated an undead creature, it can't do so again until 7 days have passed.\n   Once every 24 hours, you can blow the whistle to reassert control over one or two creatures you animated with it.",
		weight: 1
	},
	'potion of mind control (beast)': {
		name: "Potion of Mind Control (beast)",
		source: ["TftYP", 229],
		type : "potion",
		rarity: "rare",
		description: "",
		descriptionFull: "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.\n   A potion of mind control produces the effect of a Dominate Beast spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.",
		weight: 1
	},
	'potion of mind control (humanoid)': {
		name: "Potion of Mind Control (humanoid)",
		source: ["TftYP", 229],
		type : "potion",
		rarity: "rare",
		description: "",
		descriptionFull: "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.\n   A potion of mind control produces the effect of a Dominate Person spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.",
		weight: 1
	},
	'potion of mind control (monster)': {
		name: "Potion of Mind Control (monster)",
		source: ["TftYP", 229],
		type : "potion",
		rarity: "very rare",
		description: "",
		descriptionFull: "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.\n   A potion of mind control produces the effect of a Dominate Monster spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no concentration required on your part. The charmed creature has disadvantage on new saving throws to break the effect during this time.",
		weight: 1
	},
	'robe of summer': {
		name: "Robe of Summer",
		source: ["TftYP", 229],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This elegant garment is made from fine cloth in hues of red, orange, and gold. While you wear the robe, you have resistance to cold damage. In addition, you are comfortable as if the temperature were that of a balmy day, so you suffer no ill effects from the weather's temperature extremes.",
		attunement: true,
		weight: 1
	},
	shatterspike: {
		name: "Shatterspike",
		source: ["TftYP", 229],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "You have a +1 bonus to attack and damage rolls made with this magic weapon. If it hits an object, the hit is automatically a critical hit, and it can deal bludgeoning or slashing damage to the object (your choice). Further, damage from nonmagical sources can't harm the weapon.",
		attunement: true,
		weight: 3
	},
	'spear of backbiting': {
		name: "Spear of Backbiting",
		source: ["TftYP", 229],
		type : "weapon ()",
		rarity: "very rare",
		description: "",
		descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet. and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one.\n   Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the spear.",
		attunement: true,
		weight: 3,
		cursed: true
	},
	'stone of ill luck': {
		name: "Stone of Ill Luck",
		source: ["TftYP", 229],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This polished agate appears to be a stone of good luck to anyone who tries to Identify it, and it confers that item's property while on your person.\n   " + toUni("Curse") + ". This item is cursed. While it is on your person, you take a -2 penalty to ability checks and saving throws. Until the curse is discovered, the DM secretly applies this penalty, assuming you are adding the item's bonus. You are unwilling to part with the stone until the curse is broken with Remove Curse or similar magic.",
		attunement: true,
		weight: 1,
		cursed: true
	},
	'wand of entangle': {
		name: "Wand of Entangle",
		source: ["TftYP", 229],
		type : "wand",
		rarity: "uncommon",
		description: "",
		descriptionFull: " This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Entangle spell (save DC 13) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement: true,
		weight: 1
	},
	waythe: {
		name: "Waythe",
		source: ["TftYP", 229],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "Waythe is a unique greatsword most recently in the possession of a high-ranking cloud giant ambassador.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a creature of the giant type with it, the giant takes an extra 2d6 slashing damage, and it must succeed on a DC 15 Strength saving throw or fall prone.\n   The sword also functions as a wand of enemy detection. It regains all of its expended charges at dawn and isn't at risk of crumbling if its last charge is used.\n   " + toUni("Sentience") + ". Waythe is a sentient weapon of neutral good alignment, with an Intelligence of 12, a Wisdom of 2, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.\n   The weapon can speak and understand Giant and Common, and it can communicate telepathically with its wielder.\n   " + toUni("Personality") + ". This sword believes in freedom and allowing others to live as they see fit. It is protective of its friends, and wants to be friends with a like-minded wielder. (It takes only 1 minute for a good-aligned character to gain attunement with the sword.) Waythe is courageous to the point of foolhardiness, however, and vocally urges bold action. It is likely to come into conflict with an evil or a timid wielder.",
		attunement: true,
		weight: 6
	}
},
ToA: {
	'amulet of the black skull': {
		name: "Amulet of the Black Skull",
		source: ["ToA", 206],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.\n   The amulet has 6 charges and regains 1d6 charges daily at dawn. While wearing the amulet, you can use an action to expend 1 of its charges to transport yourself and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you. This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb.\n   If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.\n\n" + toUni("d100") + "\t" + toUni("Transformation") + "\n01-20\tThe symbol of Acererak is burned into your flesh, a curse that can only be removed with a Remove Curse spell or similar magic. Until the curse ends, your hit points can't be restored by magic.\n21-35\tYou grow larger as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.\n36-50\tYou grow smaller as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.\n51-70\tYou arrive at the destination wearing nothing but the amulet of the black skull. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you.\n71-95\tYou are paralyzed for 1 minute or until this effect is ended with a Lesser Restoration spell or similar magic.\n96-00\tYou become petrified. This effect can be ended only with a Greater Restoration spell or similar magic.",
		attunement: true,
		weight: 1
	},
	"bookmark" : {
		name: "Bookmark",
		source: ["ToA", 206],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "This +3 dagger belongs to Artus Cimber. While you have the dagger drawn, you can use a bonus action to activate one of the following properties:\n \u2022 Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.\n \u2022 Turn the dagger into a compass that, while resting on your palm, points north.\n \u2022 Cast Dimension Door from the dagger. Once this property is used, it can't be used again until the next dawn.\n \u2022 Cast Compulsion (save DC 15) from the dagger. The range of the spell increases to 90 feet but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.",
		attunement: true,
		weight: 1
	},
	'dancing monkey fruit': {
		name: "Dancing Monkey Fruit",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "This rare magical fruit produces enough juice to fill a vial. Any humanoid that eats a dancing monkey fruit or drinks its juice must succeed on a DC 14 Constitution saving throw or begin a comic dance that lasts for 1 minute. Humanoids that can't be poisoned are immune to this magical effect.\n   The dancer must use all its movement to dance without leaving its space and has disadvantage on attack rolls and Dexterity saving throws, and other creatures have advantage on attack rolls against it. Each time it takes damage, the dancer can repeat the saving throw, ending the effect on itself on a success. When the dancing effect ends, the humanoid suffers the poisoned condition for 1 hour."
	},
	'ghost lantern': {
		name: "Ghost Lantern",
		source: ["ToA", 206],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet.\n   While holding the lantern, you can use an action to order the spirit to leave the lantern and duplicate the effect of the Mage Hand spell. The spirit returns to the lantern when the spell ends.\n   If you fall unconscious within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.\n   The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead.\n   Casting a Dispel Evil and Good spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical.",
		attunement: true,
		weight: 1
	},
	'mask of the beast': {
		name: "Mask of the Beast",
		source: ["ToA", 207],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask you can expend 1 charge and use the mask to cast the Animal Friendship spell as an action. The mask regains all expended charges at dawn.",
		weight: 1
	},
	'menga leaves (1 ounce)': {
		name: "Menga leaves (1 ounce)",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "The dried leaves of a menga bush can be ground, dissolved in a liquid, heated, and ingested. A creature that ingests 1 ounce of menga leaves in this fashion regains 1 hit point. A creature that ingests more than 5 ounces of menga leaves in a 24-hour period gains no additional benefit and must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 hour. The unconscious creature awakens if it takes at least 5 damage on one turn.\n   A healthy menga bush usually has 2d6 ounces of leaves. Once picked, the leaves require 1 day to dry out before they can confer any benefit.",
		weight: 1
	},
	'ring of winter': {
		name: "Ring of Winter",
		source: ["ToA", 207],
		type : "ring",
		rarity: "artifact",
		description: "",
		descriptionFull: "Artus Cimber has kept this item in his possession for over a century. The Ring of Winter is a golden band that resizes to fit snugly on the finger of its wearer. A thin layer of frost coats the outside of the ring, which normal heat can't melt. The ring feels ice cold to the touch and initially numbs the hand that wears it, but this cold ceases to be felt by one who is attuned to this ring.\n   The Ring of Winter is sentient and tries to take control of any creature that wears it (see \"Sentient Magic Items\" chapter 7 of the Dungeon Master's Guide). If it succeeds, the ring compels its wearer to cause undue harm to everyone and everything around it, in a cold-hearted attempt to incur the wrath of enemies and bring the wearer's doom.\n   " + toUni("Sentience") + ". The Ring of Winter is a sentient chaotic evil item with an Intelligence of 14, a Wisdom of 14, and a Charisma of 17. The ring communicates by transmitting emotion to the creature carrying or wielding it, and it has hearing and normal vision out to a range of 60 feet. The ring craves destruction, and it likes inflicting indiscriminate harm on others.\n   " + toUni("Nondetection") + ". The Ring of Winter defies attempts to magically locate it. Neither the ring nor its wearer can be targeted by any divination magic or perceived through magical scrying sensors.\n   " + toUni("Frozen Time") + ". As long as you wear the ring, you don't age naturally. This effect is similar to suspended animation, in that your age doesn't catch up to you once the ring is removed. The ring doesn't protect its wearer from magical or supernatural aging effects, such as the Horrifying Visage of a ghost.\n   " + toUni("Cold Immunity") + ". While attuned to and wearing the ring, you have immunity to cold damage and don't suffer any ill effects from extreme cold (see chapter 5 of the Dungeon's Master Guide).\n   " + toUni("Magic") + ". The Ring of Winter has 12 charges and regains all its expended charges daily at dawn. While wearing the ring, you can expend the necessary number of charges to activate one of the following properties:\n \u2022 You can expend 1 charge as an action and use the ring to lower the temperature in a 120-foot-radius sphere centered on a point you can see within 300 feet of you. The temperature in that area drops 20 degrees per minute, to a minimum of -30 degrees Fahrenheit. Frost and ice begin to form on surfaces once the temperature drops below 32 degrees. This effect is permanent unless you use the ring to end it as an action, at which point the temperature in the area returns to normal at a rate of 10 degrees per minute.\n \u2022 You can cast one of the following spells from the ring (spell save DC 17) by expending the necessary number of charges: Bigby's Hand (2 charges; the hand is made of ice, is immune to cold damage, and deals bludgeoning damage instead of force damage as a clenched fist), Cone of Cold (2 charges), flesh to ice (3 charges; as Flesh to Stone except that the target turns to solid ice with the density and durability of stone), Ice Storm (2 charges), Otiluke's Freezing Sphere (3 charges), Sleet Storm (1 charge), Spike Growth (1 charge; the spikes are made of ice), or Wall of Ice (2 charges).\n \u2022 You can expend the necessary number of charges as an action and use the ring to create either an inanimate ice object (2 charges) or an animated ice creature (4 charges). The ice object can't have any moving parts, must be able to fit inside a 10-foot cube, and has the density and durability of metal or stone (your choice). The ice creature must be modeled after a beast with a challenge rating of 2 or less. The ice creature has the same statistics as the beast it models, with the following changes: the creature is a construct with vulnerability to fire damage, immunity to cold and poison damage, and immunity to the following conditions: charmed, exhaustion, frightened, paralyzed, petrified, and poisoned. The ice creature obeys only its creator's commands. The ice object or creature appears in an unoccupied space within 60 feet of you. It melts into a pool of normal water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses 5 (1d10) hit points per minute as it melts. Use the guidelines in chapter 8 of the Dungeon Master's Guide to determine the hit points of an inanimate object if they become necessary.\n\n" + toUni("Other Properties") + ". The Ring of Winter is rumored to possess other properties that can be activated only by an evil being whose will the ring can't break. Frost giants have long believed that the ring can be used to freeze entire worlds, while a djinni in the service of a Calishite pasha once claimed that the ring could be used to summon and control white dragons, as well as the mighty ice primordial named Cryonax.\n   " + toUni("Destroying the Ring") + ". The ring is nigh indestructible, resisting even the most intense magical heat. If it is placed on the finger of the powerful archfey known as the Summer Queen, the ring melts away and is destroyed forever.",
		attunement: true,
		weight: 1
	},
	'ryath root': {
		name: "Ryath Root",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "Any creature that ingests a ryath root gains 2d4 temporary hit points. A creature that consumes more than one ryath root in a 24-hour period must succeed on a DC 13 Constitution saving throw or suffer the poisoned condition for 1 hour",
		weight: 0.1
	},
	'scorpion armor': {
		name: "Scorpion Armor",
		source: ["ToA", 208],
		type : "armor ()",
		rarity: "rare",
		description: "",
		descriptionFull: "This suit of plate armor is fashioned from giant scorpion chitin. While wearing this armor, you gain the following benefits:\n \u2022 The armor improves your combat readiness, granting you a +5 bonus to initiative as long as you aren't incapacitated.\n \u2022 The armor doesn't impose disadvantage on your Dexterity (Stealth) checks.\n \u2022 The armor doesn't impose disadvantage on saving throws made to resist the effects of extreme heat (see chapter 5 of the Dungeon Master's Guide).\n\n" + toUni("Curse") + ". This armor is cursed. Whenever you don or doff it, you must make a DC 15 Constitution saving throw, taking 100 (10d10+45) poison damage on a failed save, or half as much damage on a successful one. Only a Wish spell can remove the armor's curse.",
		attunement: true,
		weight: 65,
		cursed: true
	},
	'sinda berries (10)': {
		name: "Sinda berries (10)",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "These berries are dark brown and bitter. A full-grown sinda berry bush has 4d6 berries growing on it. A bush plucked of all its berries grows new berries in 1d4 months. Picked berries lose their freshness and efficacy after 24 hours.\n   Fresh sinda berries can be eaten raw or crushed and added to a drink to dull the bitterness. A creature that consumes at least ten fresh sinda berries gains advantage on saving throws against disease and poison for the next 24 hours.",
		weight: 1
	},
	'staff of the forgotten one': {
		name: "Staff of the Forgotten One",
		source: ["ToA", 208],
		type : "weapon ()",
		rarity: "artifact",
		description: "",
		descriptionFull: "This crooked staff is carved from bone and topped with the skull of a forgotten archmage whom Acererak destroyed long ago. Etched into the skull's forehead is Acererak's rune, which is known on many worlds as a sign of death.\n   " + toUni("Beneficial Properties") + ". While the staff is on your person, you gain the following benefits:\n \u2022 Your proficiency bonus to Intelligence (Arcana) and Intelligence (History) checks is doubled.\n \u2022 You can't be blinded, charmed, deafened, frightened, petrified, or stunned.\n \u2022 Undead with a challenge rating of 2 or lower will neither threaten nor attack you unless you harm them.\n \u2022 You can wield the staff as a +3 quarterstaff that deals an extra 10 (3d6) necrotic damage on a hit.\n\n" + toUni("Invoke Curse") + ". The Staff of the Forgotten One has 7 charges and regains 1d4+3 expended charges daily at dawn. While holding the staff, you can use an action to expend 1 charge and target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw (using your spell save DC) or be cursed. While cursed in this way, the target can't regain hit points and has vulnerability to necrotic damage. A Greater Restoration, Remove Curse, or similar spell ends the curse on the target.\n   " + toUni("The Forgotten One") + ". The bodiless life force of a dead archmage empowers the staff and is imprisoned within it. The rune carved into the staff's skull protects Acererak from this spirit's vengeance. Each time a creature other than Acererak expends any of the staff's charges, there is a 50% chance that the life force tries to possess the staff wielder. The wielder must succeed on a DC 20 Charisma saving throw or be possessed, becoming an NPC under the DM's control. If the intruding life force is targeted by magic such as a Dispel Evil and Good spell, it becomes trapped in the staff once more. Once it takes control of another creature, the insane spirit of the dead archmage attempts to destroy the staff.\n   " + toUni("Destroying the Staff") + ". A creature in possession of the staff can use an action to break it over one knee or a solid surface. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. Each creature in the area must make a DC 18 Dexterity saving throw, taking 132 (24d10) force damage on a failed save, or half as much damage on a successful one. When the staff is destroyed, the life force of the Forgotten One is released to the afterlife. Where it goes is anyone's guess.",
		attunement: true,
		weight: 4
	},
	wildroot: {
		name: "Wildroot",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "Introducing the juice of a wildroot into a poisoned creature's bloodstream (for example, by rubbing it on an open wound) rids the creature of the poisoned condition. Once used in this way, a wildroot loses this property.",
		weight: 1
	},
	'wukka nut': {
		name: "Wukka Nut",
		source: ["ToA", 205],
		type: "Adventuring Gear",
		rarity: "unknown",
		description: "",
		descriptionFull: "These fist-sized nuts grow on wukka trees, which are popular haunts for jaculi, su-monsters, and zorbos. A wukka nut rattles when shaken, causing its shell to shed bright light in a 10-foot radius and dim light for an additional 10 feet. This magical light fades after 1 minute, but shaking the nut again causes the light to reappear. If the shell of the nut is cracked open, it loses its magic.",
		weight: 0.1
	}
},
WGtE: {
	'bag of bounty': {
		name: "Bag of Bounty",
		source: ["WGtE", 116],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This is a sturdy leather sack with tiny Siberys shards embedded into the lining. If you have the Mark of Hospitality you can use an action to cast create food and water, drawing a feast from within the bag. You shape this meal with your thoughts. You can create the standard bland fare without requiring any sort of check, but you can attempt to create finer food by making a Charisma check; if you're proficient with cook's utensils, add your bonus to this check. A failed check results in a sour and squalid meal.\n\n" + toUni("Difficulty") + "\t" + toUni("Food Quality") + "\nNo roll\tPoor\n10\tModest\n13\tComfortable\n15\tWealthy\n18\tAristocratic\n\n\n   A bag of bounty can be used up to three times over the course of a day. After that, the bag can't be used again until the next dawn."
	},
	'band of loyalty': {
		name: "Band of Loyalty",
		source: ["WGtE", 115],
		type : "ring",
		rarity: "common",
		description: "",
		descriptionFull: "If you are reduced to zero hit points while attuned to a band of loyalty, you instantly die. These rings are favored by spies who can't afford to fall into enemy hands.",
		attunement: true
	},
	'cleansing stone': {
		name: "Cleansing Stone",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "A cleansing stone is a stone sphere one foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person. Cleansing stones are often embedded into pedestals in public squares in Aundair or found in high-end Ghallanda inns."
	},
	'dimensional seal': {
		name: "Dimensional Seal",
		source: ["WGtE", 118],
		type: "Eldritch Machine",
		rarity: "legendary",
		description: "",
		descriptionFull: "A dimensional seal is a massive stone slab covered with a complex pattern of runes and sigils. The seal projects an invisible field with a radius of two miles. This field blocks all forms of conjuration magic and any other effect that involves teleportation or planar travel. It also negates the effects of any manifest zone within the field.\n   Dimensional seals are usually found in the Eldeen Reaches and the Shadow Marches, as relics of the conflict between the Gatekeeper druids and the daelkyr. The techniques used to create these seals have been long lost. It's said that as a whole, the dimensional seals keep the daelkyr bound in Khyber and prevent Xoriat from becoming coterminous with Eberron. If enough of these seals are destroyed, there could be serious consequences for the world."
	},
	"docent" : {
		name: "Docent",
		source: ["WGtE", 120],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "A docent is a small metal sphere, approximately 2 inches across, studded with dragonshards. Despite a strong magical aura, it has no obvious abilities. If you're a warforged, you can attune to the docent, at which point the sphere becomes embedded in your chest and comes to life\u2014literally.\n   A docent is an intelligent magic item designed to advise and assist the warforged it's attached to. A typical docent has an Intelligence score of 16 and Wisdom and Charisma scores of 14. Once you're attuned to the docent, it can communicate with you telepathically and can perceive the world through your senses. One of the simple functions of a docent is to serve as a translator. All docents understand Common and Giant, but a docent knows up to four additional languages. Elven and Draconic are common options. If a docent knows less than six languages in total, it can add new languages to its repertoire after encountering them. So a docent found in Xen'drik may have never encountered a dwarf before... but after spending some time in Khorvaire studying dwarves, it could pick up the Dwarven language.\n   In addition, a docent possesses up to three of the following traits.\n   You can use a bonus action on your turn to request that the docent use one of its traits on your behalf. In the case of skills, this uses the docent's bonus; your abilities and proficiencies have no effect on the outcome. These traits are under the control of the docent, and if you have a bad relationship with your docent it may refuse to assist you... or simply lie about information that it obtains. However, if you treat your docent well it could serve as a useful ally.\n   The origin of docents is a great mystery. House Cannith created the first warforged thirty years ago. But the docents come from the distant land of Xen'drik and appear to be thousands of years old. Were they created to interface with some other form of construct? Or are the modern warforged a new interpretation of an ancient design? The docents claim to have forgotten their creators... but this is a mystery waiting to be unraveled. While all docents come from Xen'drik, some have been brought to Khorvaire by explorers and it's possible to encounter them in the Five Nations.",
		attunement: true
	},
	'everbright lantern': {
		name: "Everbright Lantern",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "An everbright lantern contains an Eberron dragonshard imbued with the effect of a continual flame spell. This bright light is mounted inside a normal bullseye lantern, allowing the light to be shuttered off. An everbright lantern provides clear illumination in a 60-foot cone and shadowy illumination in a 120-foot cone, just like a mundane bullseye lantern, but its flame never goes out."
	},
	'feather token': {
		name: "Feather Token",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This small metal disk is inscribed with the image of a feather. While the token is in your possession, you can cast feather fall as a bonus action. A feather token only holds sufficient charge for a single use, after which it loses its power. While it's an expensive form of insurance, frequent airship travelers and citizens of Sharn often appreciate the security it provides."
	},
	glamerweave: {
		name: "Glamerweave",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "Glamerweave clothing is imbued with cosmetic illusions. Traditionally, these patterns are contained within the cloth, but higher-end glamerweave can have more dramatic effects. You could have a gown that appears to be wreathed in flames, or a hat that's orbited by illusory butterflies. Regardless of the design, these are cosmetic effects and have no impact on combat."
	},
	"inquisitive's goggles" : {
		name: "Inquisitive's Goggles",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "The lenses of these goggles are carved from Siberys dragonshards. While garish in appearance, these goggles are a boon to any Tharashk inquisitive. To attune to the goggles, you must possess the Mark of Finding. As long as this condition is met, you gain the following benefits:\n \u2022 You can add your Intuition die from the Hunter's Intuition trait of the mark when you make Wisdom (Insight) checks.\n \u2022 When you examine an object, you can make a Wisdom (Perception) check to identify the aura of the last living creature to touch the object. The DC is 13 + the number of days since the last contact occurred. If the check is successful, you learn the species of the creature and you can immediately use your Imprint Prey ability to target this creature.",
		attunement: true
	},
	keycharm: {
		name: "Keycharm",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This simple object plays a vital role in the work of House Kundarak. If you possess the Mark of Warding, when you cast alarm, arcane lock, glyph of warding, or similar abjuration effects, you can tie the effect to the keycharm. Whoever holds the keycharm is considered to the owner of this enchantment; they receive the notification from alarm, they can safely avoid a glyph, and they can deactivate any associated effect."
	},
	'mabaran resonator': {
		name: "Mabaran Resonator",
		source: ["WGtE", 118],
		type: "Eldritch Machine",
		rarity: "legendary",
		description: "",
		descriptionFull: "This horrific device draws on the power of Mabar, infusing the dead with the malign energies of the Endless Night. While it is active, any creature that dies within two miles of the resonator reanimates in one round as a zombie under the control of creature attuned to the device. At the DM's discretion, more powerful creatures can return as other forms of undead.",
		attunement: true
	},
	"master's call" : {
		name: "Master's Call",
		source: ["WGtE", 119],
		type: "Eldritch Machine",
		rarity: "legendary",
		description: "",
		descriptionFull: "While this looks like a scrap heap assembled from shattered constructs and wreckage from the Mournland, this eldritch machine possesses tremendous power. You gain the following benefits while you are attuned to the master's call and within one mile of the device.\n \u2022 You can sense the presence and location of all warforged within ten miles.\n \u2022 You have advantage on any Charisma-based check made against a warforged.\n \u2022 While you are in contact with the master's call, you can use an action to target a warforged within ten miles of the device. You can send a telepathic message of up to 25 words to the target. They must make a Wisdom saving throw, with a difficulty of 14 + your Intelligence modifier. On a failed save, the target is affected by a Suggestion compelling them to follow your command. This effect doesn't require concentration; it lasts for eight hours, until you choose to end it, or until the victim successfully fulfils the command, whichever comes first. You can control up to eight warforged at once using this effect."
	},
	'rings of shared suffering': {
		name: "Rings of Shared Suffering",
		source: ["WGtE", 117],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "These rings come in linked pairs. If you possess the Mark of Sentinel, you can use a bonus action to form a link to the creature attuned to the other ring; from then on, whenever that creature suffers damage, they only suffer half of that damage and you take the rest. This effect continues until you end it as a bonus action or until you or the other creature removes their ring. This effect isn't limited by range. A creature cannot be attuned to more than one ring of shared suffering.",
		attunement: true
	},
	"scribe's pen" : {
		name: "Scribe's Pen",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "If you possess the Mark of Scribing, you can use this quill to write on any surface. This can be visible\u2014traced in glowing mystical lines\u2014or invisible to any creature without the Mark of Scribing. Invisible writing will be revealed by Detect Magic, See Invisibility, or True Seeing. Any creature with the Mark of Scribing can also reveal your writing or make it invisible as an action. If you mark a living creature, the mark will fade within a week."
	},
	shiftweave: {
		name: "Shiftweave",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "Transmutation magic is woven into the fabric of shiftweave clothing. When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. By taking an action and uttering a command word, you can transform your shiftweave outfit into one of the other designs contained within it. To determine the price of a suit of shiftweave, combine the value of all of the outfits it contains and add 25 gp to that amount."
	},
	'spell sink': {
		name: "Spell Sink",
		source: ["WGtE", 119],
		type: "Eldritch Machine",
		rarity: "legendary",
		description: "",
		descriptionFull: "This device creates an Antimagic Field that covers a three-mile radius around the spell sink. The form that it takes will depend on the nature of its creator. The Ashbound druids despise unnatural magic, and if they create a spell sink it will be a living artifact\u2014a twisted tree that consumes the mystical energies around it. Conversely, a mad artificer would create a massive vessel of dragonshards and exotic metals. It might be that the sole purpose of the device is to negate magic, or it could be that it is absorbing all magical energies in the area and storing that power for a cataclysmic effect!"
	},
	spellshard: {
		name: "Spellshard",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "A spellshard is a polished Eberron dragonshard, sized to fit into the palm of a hand. The shard is imbued with a particular work of literature. By holding the shard and concentrating, you can see its pages in your mind's eye. Thinking of a particular phrase or topic will draw you to the first section that addresses it, and a simple ritual allows you to add content to the shard.\n   A wizard can use a spellshard instead of a spellbook; the spellshard costs 1 gp per \"page\" in the shard, and otherwise functions as a mundane spellbook. Spellshards can also be used as diaries or journals. More advanced (and uncommon) shards can require a particular mental passphrase to access the contents of the shard."
	},
	'storm sphere': {
		name: "Storm Sphere",
		source: ["WGtE", 119],
		type: "Eldritch Machine",
		rarity: "very rare",
		description: "",
		descriptionFull: "This eldritch machine is a form of dragonmark focus item; you must have the Greater Mark of Storms to attune to this device. Storm spires allow House Lyrandar to influence the weather, which can be a boon for the local population or a curse if the Lyrandar baron chooses to demand payment for desired conditions. You gain the following benefits while you are attuned to a storm spire.\n \u2022 You can sense weather patterns within a 100-mile radius of the spire and accurately predict the weather for up to 24 hours.\n \u2022 While you are within 60 feet of the spire, you can use an action to cast any of the following spells: Call Lightning, Gust of Wind. You cast these as 5th level spells, and Intelligence is your spellcasting ability.\n \u2022 While you are within 5 feet of the spire, you can cast Control Weather as a ten-minute ritual. This allows you to pick a point within 100 miles of the spire and influence the weather within a 10-mile radius of that point. Maintaining this effect requires concentration.\n \u2022 You can also use an action to influence the weather within a ten-mile radius of the spire itself; you don't have to use concentration to maintain this effect, and you can sustain this at the same time that you're manipulating distant weather.",
		attunement: true
	},
	'wand sheath': {
		name: "Wand Sheath",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "A wand sheath is designed to integrate with the forearm of a warforged. If you're a warforged, you can attach a wand sheath by attuning to it. While the wand sheath is attached, it cannot be removed from you against your will. You can spend one minute to end the attunement and remove the wand sheath.\n   You can insert a wand into the sheath as an action. While the wand is sheathed, you gain the following benefits:s\n \u2022 You can retract the wand into your forearm or extend it from your forearm as a bonus action. While it is retracted, it cannot be damaged or removed.\n \u2022 While the wand is extended, you can use it as if you were holding it, but your hand remains free for other actions.\n \u2022 If the sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand only count as a single item for purposes of the maximum number of items you can be attuned to. If you remove the wand from the sheath, you immediately lose your attunement to the wand.",
		attunement: true
	},
	'wheel of wind and water': {
		name: "Wheel of Wind and Water",
		source: ["WGtE", 115],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "When mounted at the helm of an elemental galleon or airship, this allows a character who possesses the Mark of Storm to telepathically control the elemental bound into the vessel.\n   If a wheel of wind and water is mounted on a mundane sailing ship, a character with the Mark of Storm can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour."
	}
},
PotA: {
	'balloon pack': {
		name: "Balloon Pack",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This backpack contains the spirit of an air elemental and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the Levitate spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the Feather Fall spell for yourself.\n   When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. IF you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.\n   After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack."
	},
	'bottled breath': {
		name: "Bottled Breath",
		source: ["PotA", 222],
		type : "potion",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.\n   If you exhale the breath, you gain the effect of the Gust of Wind spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath.",
		weight: 0.5
	},
	'claws of the umber hulk': {
		name: "Claws of the Umber Hulk",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "These heavy gauntlets of brown iron are forged in the shape an umber hulk's claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.\n   You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal)\n   While wearing the claws, you can't manipulate objects or cast spells with somatic components",
		attunement: true
	},
	'devastation orb of air': {
		name: "Devastation Orb of Air",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Air Orb") + ". When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply, as detailed in chapter 5 of the Dungeon Master's Guide."
	},
	'devastation orb of earth': {
		name: "Devastation Orb of Earth",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Earth Orb") + ". When this orb detonates, it subjects the area to the effects of the Earthquake spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes."
	},
	'devastation orb of fire': {
		name: "Devastation Orb of Fire",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Fire Orb") + ". When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for extreme heat apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage."
	},
	'devastation orb of water': {
		name: "Devastation Orb of Water",
		source: ["PotA", 222],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Water Orb") + ". When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for heavy precipitation apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain."
	},
	"drown" : {
		name: "Drown",
		source: ["PotA", 224],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the targets take an extra 1d8 cold damage.\n   " + toUni("Water Mastery") + ". You gain the following benefits while you hold Drown:\n \u2022 You can speak Aquan fluently.\n \u2022 You have resistance to cold damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a water elemental. Once you have done so, Drown can't be used this way again until the next dawn.\n\n" + toUni("Tears of Endless Anguish") + ". While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using Drown to create a devastation orb of water. Once you perform the ritual, Drown can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Drown makes its wielder covetous. While attuned to the weapon, you gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if you are attuned to Drown for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a Greater Restoration spell or similar magic, but not while you are attuned to the weapon.",
		attunement: true,
		weight: 4
	},
	"ironfang" : {
		name: "Ironfang",
		source: ["PotA", 224],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.\n   " + toUni("Earth Mastery") + ". You gain the following benefits while you hold Ironfang:\n \u2022 You can speak Terran fluently.\n \u2022 You have resistance to acid damage.\n \u2022 You have tremorsense out to a range of 60 feet.\n \u2022 You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.\n \u2022 You can cast Dominate Monster (save DC 17) on an earth elemental. Once you have done so, Ironfang can't be used this way again until the next dawn.\n\n" + toUni("Shatter") + ". Ironfang has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of Shatter (DC 17). Ironfang regains 1d3 expended charges daily at dawn.\n   " + toUni("The Rumbling") + ". While inside an earth node, you can perform a ritual called the Rumbling, using Ironfang to create a devastation orb of earth. Once you perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Ironfang heightens its wielder's destructive nature. While attuned to the weapon, you gain the following flaw: \"I like to break things and cause ruin.\"",
		attunement: true,
		weight: 2
	},
	'lost crown of besilmer': {
		name: "Lost Crown of Besilmer",
		source: ["PotA", 223],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:\n \u2022 You have resistance to psychic damage.\n \u2022 You have advantage on saving throws against effects that would charm you.\n \u2022 You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the number rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.",
		attunement: true
	},
	"orcsplitter" : {
		name: "Orcsplitter",
		source: ["PotA", 224],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A mighty axe wielded long ago by the dwarf king Torhild Flametongue, Orcsplitter is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \"orc,\" but the runes are depicted with a gap or slash through the markings; the word \"orc\" is literally split in two.\n   You gain the following benefits while holding this magic weapon:\n \u2022 You gain a +2 bonus to attack and damage rolls made with it.\n \u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.\n \u2022 You can't be surprised by orcs while you're not incapacitated. You are also aware when orcs are within 120 feet of you and aren't behind total cover, although you don't know their location.\n \u2022 You and any of your friends within 30 feet of you can't be frightened while you're not incapacitated.\n\n" + toUni("Sentience") + ". Orcsplitter is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.\n   " + toUni("Personality") + ". Orcsplitter is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
		attunement: true,
		weight: 7
	},
	reszur: {
		name: "Reszur",
		source: ["PotA", 157],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.\n   The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again.",
		weight: 1
	},
	'seeker dart': {
		name: "Seeker Dart",
		source: ["PotA", 223],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This small dart is decorated with designs like windy spirals that span the length of its shaft.\n   When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.\n   When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take 1d4 piercing damage and 3d4 lightning damage. The dart's magic is then spent, and it becomes an ordinary dart.",
		weight: 0.25
	},
	'storm boomerang': {
		name: "Storm Boomerang",
		source: ["PotA", 223],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This boomerang is a ranged weapon carved from griffon bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals 1d4 bludgeoning damage and 3d4 thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be stunned until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.\n   Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node."
	},
	"tinderstrike" : {
		name: "Tinderstrike",
		source: ["PotA", 224],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.\n   " + toUni("Fire Mastery") + ". You gain the following benefits while you hold Tinderstrike:\n \u2022 You can speak Ignan fluently.\n \u2022 You have resistance to fire damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a fire elemental. Once you have done so, Tinderstrike can't be used this way again until the next dawn.\n\n" + toUni("Dance of the All-Consuming Fire") + ". While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a devastation orb of fire. Once you perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Tinderstrike makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: \"I act without thinking and take risks without weighing the consequences.\"",
		attunement: true,
		weight: 1
	},
	'weird tank': {
		name: "Weird Tank",
		source: ["PotA", 223],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "A weird tank is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.\n   You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.\n   If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.\n   The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
		attunement: true
	},
	"windvane" : {
		name: "Windvane",
		source: ["PotA", 224],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.\n   " + toUni("Air Mastery") + ". You gain the following benefits while you hold Windvane:\n \u2022 You can speak Auran fluently.\n \u2022 You have resistance to lightning damage.\n \u2022 You can cast Dominate Monster (save DC 17) on an air elemental. Once you have done so, Windvane can't be used this way again until the next dawn.\n\n" + toUni("Song of the Four Winds") + ". While inside an air node, you can perform a ritual called the Song of the Four Winds, using Windvane to create a devastation orb of air. Once you perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Windvane makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: \"I break my vows and plans. Duty and honor mean nothing to me.\"",
		attunement: true,
		weight: 3
	},
	wingwear: {
		name: "Wingwear",
		source: ["PotA", 223],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of wingwear has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.\n   The suit regains all of its expended charges after spending at least 1 hour in an elemental air node.",
		attunement: true
	}
},
SKT: {
	'banner of the krig rune': {
		name: "Banner of the Krig Rune",
		source: ["SKT", 233],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Crafted from a thick, red fabric, this banner measures 5 feet high and 3 feet wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-foot pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.\n   " + toUni("Mark of Courage") + ". As a bonus action, you can touch the unfurled banner and cause it to emanate courage. You and your allies are immune to the frightened condition while within 20 feet of it. This benefit lasts for 10 minutes or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Sentinel Standard") + ". You can see invisible creatures while they are within 20 feet of the unfurled banner and within your line of sight.\n   " + toUni("Standard's Shield") + ". As a bonus action, you can touch the unfurled banner and invoke this power. Any ranged attack roll that targets you or an ally of yours has disadvantage if the target is within 20 feet of the unfurled banner. This benefit lasts for 1 minute or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Battle") + ". You can transfer the banner's magic to a place by tracing the krig rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 500-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 feet of you and during which you choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the area gains the following property:\n   While in the 500-foot-radius sphere, the creatures you chose during the transfer process are immune to the frightened condition and gain a +1 bonus to attack rolls and AC.",
		attunement: true
	},
	'blod stone': {
		name: "Blod Stone",
		source: ["SKT", 233],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This diamond contains the blood of a creature\u2014blood that appears in the form of the blod (blood) rune. While the item is on your person, you can use your action to divine the location of the creature nearest to you that is related to the blood in the item and that isn't undead. You sense the distance and direction of the creature relative to your location. The creature is either the one whose blood is in the item or a blood relative.\n   This item is made from a large diamond worth at least 5,000 gp. When the blood of a creature is poured onto it during the creation process, the blood seeps into the heart of the gem. If the gem is destroyed, the blood evaporates and is gone forever. A vengeful being might use a blod stone to hunt down an entire bloodline. Such stones are sometimes given as gifts to siblings or handed down from parent to child.",
		attunement: true
	},
	'claw of the wyrm rune': {
		name: "Claw of the Wyrm Rune",
		source: ["SKT", 233],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This dragon's claw has been covered with a coat of molten silver, upon which has been inscribed the wyrm (dragon) rune. The claw has the following properties.\n   " + toUni("Wyrmslayer") + ". As an action, you can point the claw at a dragon within 30 feet of you. The dragon must then succeed on a DC 15 Constitution saving throw or gain vulnerability to all damage types until the end of your next turn. This property can be used three times. The claw regains all expended uses at the next dawn.\n   " + toUni("Wyrm Shield") + ". While the claw is displayed on your person, you have resistance to the damage caused by any dragon's breath weapon.\n   " + toUni("Wyrm Ward") + ". You can transfer the c1aw's magic to a place by tracing the wyrm rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 100-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the claw to be within 5 feet of you. At the end, the claw is destroyed, and the area gains the following property:\n   While in the 100-foot-radius sphere, any dragon has disadvantage on saving throws and can have a flying speed no higher than 10 feet.",
		attunement: true
	},
	'conch of teleportation': {
		name: "Conch of Teleportation",
		source: ["SKT", 234],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This item is an ordinary, albeit rather large, conch shell that has been inscribed with the uvar rune. The conch measures 2\xBD feet long and weighs 20 pounds.\n   As an action, you can cast the Teleport spell by blowing into the shell. The destination is fixed, and there is no chance of either a mishap or the spell being off target. Anyone teleported by the conch appears in a specific location designated by the item's creator at the time the uvar rune is inscribed on the conch. It doesn't allow teleportation to any other destination. Once its spell is cast, the conch can't be used again until the next dawn.",
		attunement: true
	},
	'gavel of the venn rune': {
		name: "Gavel of the Venn Rune",
		source: ["SKT", 234],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This wooden gavel is small by giant reckoning but nearly the size of a warhammer in human hands. The venn (friend) rune is inscribed in mithral in the base of the haft. Among giants, this item is used as part of rituals to resolve disputes. The gavel has the following properties.\n   " + toUni("Arbiters Shield") + ". At the start of every combat, attack rolls against you have disadvantage before the start of your first turn, provided that the gavel is on your person.\n   " + toUni("Bond of Amity") + ". As an action, you can use the gavel to strike a point on a hard surface. The first time in the next minute that a creature within 60 feet of that point deals damage to another creature with an attack that hits, the attacker takes psychic damage equal to half the damage it dealt to the target. Once you use this property, you can't use it again until you finish a long rest.\n   " + toUni("Gift of Truth") + ". You can transfer the gavel's magic to a place by tracing the venn rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 30-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the gavel to be within 5 feet of you. At the end, the gavel is destroyed, and the area gains the following property:\n   Whenever a creature utters a lie while within the 30-foot-radius sphere, that creature takes 5 psychic damage and flinches visibly.",
		attunement: true
	},
	"gurt's greataxe" : {
		name: "Gurt's Greataxe",
		source: ["SKT", 234],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "In the Year of the Icy Axe (123 DR), the frost giant Lord Gurt fell to Uthgar Gardolfsson\u2014leader of the folk who would become the Uthgardt barbarians\u2014in a battle that marked the ascendance of humankind over the giants in the Dessarin Valley. Gurt's greataxe was buried in Morgur's Mound until it was unearthed and brought back to Waterdeep. After laying in the city's vaults for decades, the axe was given to Harshnag, a frost giant adventurer, in recognition of his service to Waterdeep. Uthgardt barbarians recognize the weapon on sight and attack any giant that wields it.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. It is sized for a giant, weighs 325 pounds, and deals 3d12 slashing damage on a hit, plus an extra 2d12 slashing damage if the target is human.\n   The axe sheds light as a torch when the temperature around it drops below 0 degrees Fahrenheit. The light can't be shut off in these conditions.\n   As an action, you can cast a version of the Heat Metal spell (save DC 13) that deals cold damage instead of fire damage. Once this power is used, it can't be used again until the next dawn.",
		attunement: true,
		weight: 325
	},
	'ingot of the skold rune': {
		name: "Ingot of the Skold Rune",
		source: ["SKT", 234],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This appears to be a simple ingot of iron ore, about a foot long and a few inches across. Inspection of its surface reveals the faint, silvery outline of the skold (shield) rune. The ingot has the following properties, which work only while it's on your person.\n   " + toUni("Runic Shield") + ". You have a +1 bonus to AC.\n   " + toUni("Shield Bond") + ". As a bonus action, choose a creature that you can see within 30 feet of you, other than yourself. Until the end of your next turn, any damage the target takes is reduced to 1, but you take half the damage prevented in this way. The damage you take can't be reduced in any way. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Shield Ward") + ". You can transfer the ingot's magic to a nonmagical item\u2014a shield or a two-handed melee weapon-by tracing the skold rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the ingot is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. Its magic gives you a +1 bonus to AC, and the first time after each of your long rests that damage reduces you to 0 hit points, you are instead reduced to 1 hit point. You must be wielding the shield to gain these benefits.\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It grants you a +1 bonus to AC while you're holding it.",
		attunement: true
	},
	'korolnor scepter': {
		name: "Korolnor Scepter",
		source: ["SKT", 234],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "The Korolnor Scepter is one of ten Ruling Scepters of Shanatar, forged by the dwarven gods and given to the ruling houses of the ancient dwarven empire. The Korolnor Scepter's location was unknown for the longest time until a storm giant queen, Neri, found it in a barnacle-covered shipwreck at the bottom of the Trackless Sea. The Ruling Scepters are all roughly the same size and shape, but their materials and properties vary.\n   The Korolnor Scepter is a tapered mithral rod as thick and long as a dwarf's forearm, with a small platinum knob at the bottom and a rounded disk adorned with a ring of seven tiny blue gems at the top.\n   You gain a +3 bonus to attack and damage rolls made with this scepter, which can be wielded as a magic club.\n   You can use the properties of the Wyrmskull Throne, as well as the properties of the scepter itself. The scepter has 10 charges, and it regains 1d6+4 expanded charges at dawn. Its properties are as follows.\n   If you are underground or underwater, you can use an action to expend 1 charge to determine the distance to the surface.\n   As an action: you can expend 2 charges to cast the Sending spell from the scepter.\n   As an action: you can expend 3 charges to cast the Teleport spell from the scepter. If the destination is within 60 feet of the Wyrmskull Throne, there is no chance of a teleport error or mishap occurring.",
		attunement: true,
		weight: 2
	},
	'navigation orb': {
		name: "Navigation Orb",
		source: ["SKT", 235],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A navigation orb is a hollow, 7-foot-diameter sphere of thin, polished mithral with a large skye (cloud) rune embossed on its outer surface. The orb levitates 10 feet above the ground and is keyed to a particular cloud castle, allowing you to control that castle's altitude and movement while the orb is inside the castle. If the orb is destroyed or removed from its castle, the castle's altitude and location remain fixed until the orb is returned or replaced.\n   As an action, you can cause one of the following effects to occur if you are touching the orb:\n   The castle moves at a speed of 1 mph in a straight line, in a direction of your choice, until the castle stops or is made to stop, or until another action is used to change its direction. If this movement brings the castle into contact with the ground, the castle lands gently.\n   The castle, if it is moving, comes to a gradual stop.\n   The castle makes a slow, 90-degree turn clockwise or counterclockwise (turning a northerly view into a westerly view, for example). The castle can turn while it is moving in a straight line.\n   Any creature touching the orb knows the altitude of the base of the castle above the ground or water below it.",
		attunement: true
	},
	'opal of the ild rune': {
		name: "Opal of the Ild Rune",
		source: ["SKT", 235],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This triangular fire opal measures about three inches on each side and is half an inch thick. The ild (fire) rune shimmers within its core, causing it to be slightly warm to the touch. The opal has the following properties, which work only while it's on your person.\n   " + toUni("Ignite") + ". As an action, you can ignite an object within 10 feet of you. The object must be flammable, and the fire starts in a circle no larger than 1 foot in diameter.\n   " + toUni("Fires Friend") + ". You have resistance to cold damage.\n   " + toUni("Fire Tamer") + ". As an action, you can extinguish any open flame within 10 feet of you. You choose how much fire to extinguish in that radius.\n   " + toUni("Gift of Flame") + ". You can transfer the opal's magic to a nonmagical item\u2014a weapon or a suit of armor\u2014by tracing the ild rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the opal is destroyed, and the rune appears in red on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It deals an extra 1d6 fire damage to any target it hits.\n \u2022 " + toUni("Armor.") + ". The armor is now a rare magic item that requires attunement. You have resistance to cold damage while wearing the armor.",
		attunement: true
	},
	'orb of the stein rune': {
		name: "Orb of the Stein Rune",
		source: ["SKT", 235],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This orb of granite is about the size of an adult human's fist. The stein (stone) rune appears on it in the form of crystalline veins that run across the surface. The orb has the following properties, which work only while it's on your person.\n   " + toUni("Indomitable Stand") + ". As an action, you can channel the orb's magic to hold your ground. For the next minute or until you move any distance, you have advantage on all checks and saving throws to resist effects that force you to move. In addition, any enemy that moves to a space within 10 feet of you must succeed on a DC 12 Strength saving throw or be unable to move any farther this turn.\n   " + toUni("Stone Soul") + ". You can't be petrified.\n   " + toUni("Earthen Step") + ". You can cast Meld into Stone as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Stone") + ". You can transfer the orb's magic to a nonmagical item\u2014a shield or a pair of boots\u2014by tracing the stein rune there with your finger. The transfer takes8 hours of work that requires the two items to be within 5 feet of each other. At the end, the orb is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. While you wield it, you have resistance to all damage dealt by ranged weapon attacks.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now an uncommon magic item that requires attunement. While you wear the boots, you have advantage on Strength saving throws, and you can use your reaction to avoid being knocked prone.",
		attunement: true
	},
	'pennant of the vind rune': {
		name: "Pennant of the Vind Rune",
		source: ["SKT", 235],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This blue pennant is crafted from silk and is five feet long and whips about as if buffeted by a wind. The vind (wind) rune appears on its surface, looking almost like a cloud. The pennant has the following properties, which work only while it's on your person.\n   " + toUni("Wind Step") + ". As an action, you fly up to 20 feet. If you don't land at the end of this flight, you fall unless you have another means of staying aloft.\n   " + toUni("Comforting Wind") + ". You can't suffocate.\n   " + toUni("Winds Grasp") + ". As a reaction when you fall, you can cause yourself to take no damage from the fall. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Wind Walker") + ". While you are attuned to this rune, you can cast Levitate as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Wind") + ". You can transfer the pennant's magic to a nonmagical item\u2014a suit of armor, a pair of boots, or a cloak\u2014by tracing the vind rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the pennant is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Armor.") + ". The armor is now an uncommon magic item that requires attunement. You gain a bonus to speed of 5 feet while you wear the armor, and if it normally imposes disadvantage on Stealth checks, it no longer does so.\n \u2022 " + toUni("Boots/Cloak.") + ". The pair of boots or cloak is now a rare magic item that requires attunement. While wearing the item, you can convert up to 20 feet of your movement on each of your turns into flight. If you don't land at the end of this flight, you fall unless you have another means of staying aloft. You can also cast Feather Fall once from the item, and you regain the ability to do so when you finish a short or long rest.",
		attunement: true
	},
	'potion of giant size': {
		name: "Potion of Giant Size",
		source: ["SKT", 236],
		type : "potion",
		rarity: "legendary",
		description: "",
		descriptionFull: "When you drink this potion, you become Huge for 24 hours if you are Medium or smaller, otherwise the potion does nothing. For that duration, your Strength becomes 25, if it isn't already higher, and your hit point maximum is doubled (your current hit points are doubled when you drink the potion). In addition, the reach of your melee attacks increases by 5 feet.\n   Everything you are carrying and wearing also increases in size for the duration. When rolling damage for weapons enlarged in this manner, roll three times the normal number of dice; for example, an enlarged longsword would deal 3d8 slashing damage (instead of1d8), or 3d10 slashing damage (instead of 1d10) when used with two hands.\n   When the effect ends, any hit points you have above your hit point maximum become temporary hit points. This potion is a pale white liquid made from the tongue of a giant clam, with a pungent aroma akin to that of rotting algae. It tastes sweet, however, when consumed."
	},
	'robe of serpents': {
		name: "Robe of Serpents",
		source: ["SKT", 236],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "A robe of serpents is a stylish silk garment that is popular among wealthy nobles and retired assassins. The robe is emblazoned with 1d4+3 stylized serpents, all brightly colored.\n   As a bonus action on your turn, you can transform one of the robe's serpents into a giant poisonous snake. The snake instantly falls from the robe, slithers into an unoccupied space next to you, and acts on your initiative count. The snake can tell friendly creatures from hostile ones and attacks the latter. The snake disappears in a harmless puff of smoke after 1 hour, when it drops to 0 hit points, or when you dismiss it (no action required). Once detached, a snake can't return to the robe. When all of the robe's snakes have detached, the robe becomes a nonmagical garment.",
		attunement: true
	},
	'rod of the vonindod': {
		name: "Rod of the Vonindod",
		source: ["SKT", 236],
		type : "rod",
		rarity: "rare",
		description: "",
		descriptionFull: "The fire giant Duke Zalto hired a wizard to craft several of these adamantine rods. Each measures 4 feet long, weighs 100 pounds, and is sized to fit comfortably in a fire giant's hand. The rod has two prongs at one end and a molded handle grip on the opposite end.\n   The rod has 10 charges and regains 1d6+4 of its expended charges daily at dawn. As an action, you can grasp it by the handle and expend 1 charge to cast the Locate Object spell from it. When the rod is used to detect objects made of adamantine, such as fragments of the Vonindod construct, its range increases to 10 miles.",
		attunement: true
	},
	'shard of the ise rune': {
		name: "Shard of the Ise Rune",
		source: ["SKT", 236],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This shard of ice is long and slender, roughly the size of a dagger. The ise (ice) rune glows within it. The shard has the following properties, which work only while it's on your person.\n   " + toUni("Frigid Touch") + ". As an action, you can touch a body of water and freeze the water in a 10-foot-radius sphere around the spot you touched. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Frost Friend") + ". You have resistance to fire damage.\n   " + toUni("Icy Mantle") + ". As an action, you can touch yourself or another creature with water on your finger. The water creates an icy mantle of protection. The next time within the next minute that the target takes bludgeoning, slashing, or piercing damage, that damage is reduced to 0, and the mantle is destroyed. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Winters Howl") + ". As an action, you can cast Sleet Storm (spell save DC 17). You regain this ability after you finish a short or long rest.\n   " + toUni("Gift of Frost") + ". You can transfer the shard's magic to a nonmagical item\u2014a cloak or a pair of boots-by tracing the ise rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shard is destroyed, and the rune appears in blue on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Cloak.") + ". The cloak is now a rare magic item that requires attunement. While wearing it, you have resistance to fire damage, and you have advantage on Dexterity (Stealth) checks made while in snowy terrain.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now a rare magic item that requires attunement. While wearing it, you ignore difficult terrain while walking, and you can walk on water.",
		attunement: true
	},
	'wyrmskull throne': {
		name: "Wyrmskull Throne",
		source: ["SKT", 237],
		type: "wondrous item",
		rarity: "artifact",
		description: "",
		descriptionFull: "Built by dwarven gods and entrusted to the rulers of Shanatar, an ancient dwarven empire. The Wyrmskull Throne was a symbol of dwarven power and pride for ages untold. The throne hovers a foot off the ground and is a massive thing made of polished obsidian with oversized feet\u2014the impaled skulls of four ancient blue dragons. Runes glisten in the carved obsidian winking to life with blue energy when the throne's powers are activated.\n   After the fall of Shanatar, the Wyrmskull Throne fell into the clutches of less honorable creatures. A band of adventurers wrested the throne from the aquatic elf tyrant Gantar Kraok and sold it to the storm giant Neri for a considerable fortune. Neri had the throne magically enlarged and gave it to her husband, King Hekaton, as a gift, along with one of the Ruling Scepters of Shanatar, which she had found in a wreck at the bottom of the Trackless Sea. Only a creature attuned to a Ruling Scepter and in possession of it can harness the powers of the Wyrmskull Throne, which has become the centerpiece of King Hekaton's throne room in the undersea citadel of Maelstrom. Fear of the throne's power has helped prevent evil giants from challenging or threatening Hekaton's leadership.\n   Any creature not attuned to a Ruling Scepter who sits on the throne is paralyzed and encased in a magical force field. While encased, the creature can't be touched or moved from the throne. Touching a Ruling Scepter to the force field dispels the field, though the creature remains paralyzed until it is separated from the throne.\n   Any creature seated on the throne can hear faint Whispers in Draconic\u2014the whisperings of four blue dragons whose skulls adorn the throne. Although powerless, these spirits try to influence the decisions of the throne's master\n   " + toUni("Properties of the Throne") + ". The throne has 9 charges and regains all expended charges daily at dawn. A creature that sits on the throne while attuned to a Ruling Sceptor in its possession can harness the throne's properties, which are as follows:\n   The throne gains a flying speed of 30 feet and can hover and flies where the creature wills. This property doesn't expend any charges.\n   Both the throne and the creature sitting on it can move through earth and stone without disturbing the material they move through. This property doesn't expend any charges.\n   As an action, the creature can expend 1 charge to cast Lightning Bolt (spell save DC 19) from the throne. The spell is cast as though using a 9th-level spell slot and deals 49 (14d6) lightning damage. The bolt discharges from the mouth of one of the throne's blue dragon skulls.\n   As an action, the creature can expend 2 charges to cast the Globe of Invulnerability spell from the throne. The globe encloses both the creature and the throne.\n   As an action, the creature can expend 3 charges to create a spectral image of an ancient blue dragon that surrounds both it and the throne. The spectral dragon lasts for 1 minute. At the end of each of the creature's turns, the spectral dragon makes one bite attack and two claw attacks against targets of the creature's choice. These attacks have the same attack bonus, reach, and damage as an ancient blue dragon's bite and claw attacks.\n   " + toUni("Destroying the Throne") + ". The Wyrmskull Throne can be destroyed by breaking at least five Ruling Scepters of Shanatar simultaneously on it. This fact has never been recorded or sung of among the dwarves or any bards or storytellers, and it can't be discovered with an ability check. Characters who want to destroy the throne must go on a quest to learn the method for doing so. The throne's destruction triggers an explosion, as shards of obsidian fly out in all directions. Each creature and object within a 30-foot-radius sphere centered on the throne must succeed on a DC 21 Dexterity saving throw, taking 70 (20d6) slashing damage on a failed save, or half as much damage on a successful one."
	}
},
X: {
	'bead of nourishment': {
		name: "Bead of Nourishment",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This spongy, flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of rations."
	},
	'bead of refreshment': {
		name: "Bead of Refreshment",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This spongy, flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
	},
	'boots of false tracks': {
		name: "Boots of False Tracks",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: " Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
	},
	'candle of the deep': {
		name: "Candle of the Deep",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
	},
	"charlatan's die" : {
		name: "Charlatan's Die",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "Whenever you roll this six\u2014sided die, you can control which number it rolls.",
		attunement: true
	},
	'cloak of billowing': {
		name: "Cloak of Billowing",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While wearing this cloak, you can use a bonus action to make it billow dramatically."
	},
	'cloak of many fashions': {
		name: "Cloak of Many Fashions",
		source: ["X", 136],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties."
	},
	'clockwork amulet': {
		name: "Clockwork Amulet",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.\n   When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used. this property can't be used again until the next dawn."
	},
	'clothes of mending': {
		name: "Clothes of Mending",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way."
	},
	'dark shard amulet': {
		name: "Dark Shard Amulet",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement: true
	},
	'dread helm': {
		name: "Dread Helm",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This fearsome steel helm makes your eyes glow red while you wear it."
	},
	'ear horn of hearing': {
		name: "Ear Horn of Hearing",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While held up to your ear, this horn suppresses the effects of the deafened condition on you, allowing you to hear normally."
	},
	'enduring spellbook': {
		name: "Enduring Spellbook",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age."
	},
	'ersatz eye': {
		name: "Ersatz Eye",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
		attunement: true
	},
	'hat of vermin': {
		name: "Hat of Vermin",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a bat, a frog, or a rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn."
	},
	'hat of wizardry': {
		name: "Hat of Wizardry",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This antiquated, cone-shaped hat is adorned with gold crescent moons and stars. While you are wearing it, you gain the following benefits:\n \u2022 You can use the hat as a spellcasting focus for your wizard spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the wizard spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement: true
	},
	"heward's handy spice pouch" : {
		name: "Heward's Handy Spice Pouch",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This belt pouch appears empty and has 10 charges. While holding the pouch, you can use an action to expend 1 of its charges, speak the name of any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6+4 expended charges daily at dawn."
	},
	'horn of silent alarm': {
		name: "Horn of Silent Alarm",
		source: ["X", 137],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horns blare, provided the creature is within 600 feet of the horn and not deafened. No other creature hears sound coming from the horn. The horn regains 1d4 expended charges daily at dawn."
	},
	'instrument of illusions': {
		name: "Instrument of Illusions",
		source: ["X", 137],
		type: "Instrument",
		rarity: "common",
		description: "",
		descriptionFull: "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
		attunement: true
	},
	'instrument of scribing': {
		name: "Instrument of Scribing",
		source: ["X", 138],
		type: "Instrument",
		rarity: "common",
		description: "",
		descriptionFull: "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting Dispel Magic on the message erases it. Otherwise, the message fades away after 24 hours.\n   The instrument regains all expended charges daily at dawn.",
		attunement: true
	},
	'lock of trickery': {
		name: "Lock of Trickery",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This lock appears to be an ordinary lock (of the type described in chapter 5 of the Player's Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have disadvantage."
	},
	'mystery key': {
		name: "Mystery Key",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
	},
	'orb of direction': {
		name: "Orb of Direction",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane."
	},
	'orb of time': {
		name: "Orb of Time",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While holding this orb, you can use an action to determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane."
	},
	'perfume of bewitching': {
		name: "Perfume of Bewitching",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic."
	},
	'pipe of smoke monsters': {
		name: "Pipe of Smoke Monsters",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
	},
	'pole of angling': {
		name: "Pole of Angling",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole."
	},
	'pole of collapsing': {
		name: "Pole of Collapsing",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The poles weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows."
	},
	'pot of awakening': {
		name: "Pot of Awakening",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing."
	},
	'rope of mending': {
		name: "Rope of Mending",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "You can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed."
	},
	'ruby of the war mage': {
		name: "Ruby of the War Mage",
		source: ["X", 138],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "Etched with eldritch runes, this 1\u2014inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends.",
		attunement: true
	},
	'shield of expression': {
		name: "Shield of Expression",
		source: ["X", 139],
		type : "shield",
		rarity: "common",
		description: "",
		descriptionFull: "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the faces expression.",
		weight: 6
	},
	'staff of adornment': {
		name: "Staff of Adornment",
		source: ["X", 139],
		type : "staff",
		rarity: "common",
		description: "",
		descriptionFull: "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place."
	},
	'staff of birdcalls': {
		name: "Staff of Birdcalls",
		source: ["X", 139],
		type : "staff",
		rarity: "common",
		description: "",
		descriptionFull: "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's book, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever."
	},
	'staff of flowers': {
		name: "Staff of Flowers",
		source: ["X", 139],
		type : "staff",
		rarity: "common",
		description: "",
		descriptionFull: "This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mildscented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into flower petals and is lost forever."
	},
	'talking doll': {
		name: "Talking Doll",
		source: ["X", 139],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends.",
		attunement: true
	},
	'tankard of sobriety': {
		name: "Tankard of Sobriety",
		source: ["X", 139],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison."
	},
	'unbreakable arrow': {
		name: "Unbreakable Arrow",
		source: ["X", 139],
		type: "Ammunition",
		rarity: "common",
		description: "",
		descriptionFull: "This arrow can't be broken, except when it is within an Antimagic Field."
	},
	"veteran's cane" : {
		name: "Veteran's Cane",
		source: ["X", 139],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical."
	},
	'wand of conducting': {
		name: "Wand of Conducting",
		source: ["X", 140],
		type : "wand",
		rarity: "common",
		description: "",
		descriptionFull: "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed."
	},
	'wand of pyrotechnics': {
		name: "Wand of Pyrotechnics",
		source: ["X", 140],
		type : "wand",
		rarity: "common",
		description: "",
		descriptionFull: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed."
	},
	'wand of scowls': {
		name: "Wand of Scowls",
		source: ["X", 140],
		type : "wand",
		rarity: "common",
		description: "",
		descriptionFull: "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to scowl for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of smiles."
	},
	'wand of smiles': {
		name: "Wand of Smiles",
		source: ["X", 140],
		type : "wand",
		rarity: "common",
		description: "",
		descriptionFull: "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls."
	}
},
HotDQ: {
	'black dragon mask': {
		name: "Black Dragon Mask",
		source: ["HotDQ", 94],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This horned mask of glossy ebony has horns and a skull-like mien. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have damage resistance to acid. If you already have damage resistance to acid from another source, you gain immunity to acid damage. If you already have immunity to acid damage from another source, you regain hit points equal to half of any acid damage you are dealt.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision with a radius of 60 feet, or an additional 60 feet of darkvision if you already have that sense. Once per day, you can gain blindsight out to a range of 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Black dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Water Breathing") + ". You can breathe underwater.",
		attunement: true
	},
	hazirawn: {
		name: "Hazirawn",
		source: ["HotDQ", 94],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "A sentient (neutral evil) greatsword, Hazirawn is capable of speech in Common and Netherese. Even if you aren't attuned to the sword, you gain a +1 bonus on attack and damage rolls made with this weapon. If you are attuned to Hazirawn, you deal an extra 1d6 necrotic damage when you hit with the weapon.\n   " + toUni("Increased Potency") + ". While you are attuned to this weapon, its bonus on attack and damage rolls increases to +2, and a hit deals an extra 2d6 necrotic damage (instead of 1d6)\n   " + toUni("Spells") + ". Hazirawn has 4 charges to cast spells. As long as the sword is attuned to you and you are holding it in your hand, you can cast Detect Magic (1 charge), Detect Evil and Good (1 charge), or Detect Thoughts (2 charges). Each night at midnight, Hazirawn regains 1d4 expended charges.\n   " + toUni("Wounding") + ". While you are attuned to the weapon, any creature that you hit with Hazirawn can't regain hit points for 1 minute. The target can make a DC 15 Constitution saving throw at the end of each of its turns, ending this effect early on a success.",
		attunement: true,
		weight: 6
	},
	'insignia of claws': {
		name: "Insignia of Claws",
		source: ["HotDQ", 94],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "The jewels in the insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.\n   While wearing the insignia you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical."
	},
	'wand of winter': {
		name: "Wand of Winter",
		source: ["HotDQ", 94],
		type : "wand",
		rarity: "rare",
		description: "",
		descriptionFull: "This wand looks and feels like an icicle. You must be attuned to the wand to use it.\n   The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand, even if you are incapable of casting spells: Ray of Frost (no charges, or 1 charge to cast at 5th level; +5 to hit with ranged spell attack), Sleet Storm (3 charges; spell save DC 15), or Ice Storm (4 charges; spell save DC 15). No components are required. The wand regains 1d6+1 expended charges each day at dawn. If you expend the wand's last charge, roll a d20. On a 20, the wand melts away, forever destroyed.",
		attunement: true
	}
},
RoTOS: {
	'blue dragon mask': {
		name: "Blue Dragon Mask",
		source: ["RoTOS", 4],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This mask of glossy azure has spikes around its edges and a ridged horn in its center. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against lightning damage. If you already have resistance to lightning damage from another source, you instead have immunity to lightning damage. If you already have immunity to lightning damage from another source, whenever you are subjected to lightning damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Blue Dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Lingering Shock") + ". If you deal lightning damage to a creature, it can't take reactions until its next turn.",
		attunement: true
	},
	'green dragon mask': {
		name: "Green Dragon Mask",
		source: ["RoTOS", 4],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This mottled green mask is surmounted by a frilled crest and has leathery spiked plates along its jaw. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties\n   " + toUni("Damage Absorption") + ". You have resistance against poison damage. If you already have resistance to poison damage from another source, you instead have immunity to poison damage. If you already have immunity to poison damage from another source, whenever you are subjected to poison damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Green Dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Water Breathing") + ". You can breathe underwater.",
		attunement: true
	},
	'red dragon mask': {
		name: "Red Dragon Mask",
		source: ["RoTOS", 4],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This mask of glossy crimson has swept-back horns and spiked cheek ridges. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against fire damage. If you already have resistance to fire damage from another source, you instead have immunity to fire damage. If you already have immunity to fire damage from another source, whenever you are subjected to fire damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Red Dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Dragon Fire") + ". If you deal fire damage to a creature or flammable object, it starts burning. At the start of each of its turns, a creature burning in this way takes 1d6 fire damage. A creature that can reach the burning target can use an action to extinguish the fire.",
		attunement: true
	},
	'white dragon mask': {
		name: "White Dragon Mask",
		source: ["RoTOS", 4],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This gleaming mask is white with highlights of pale blue and is topped by a spined crest. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against cold damage. If you already have resistance to cold damage from another source, you instead have immunity to cold damage. If you already have immunity to cold damage from another source, whenever you are subjected to cold damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against White Dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Winter's Fury") + ". While your current hit points are equal to or less than half your hit point maximum, you deal an extra 1d8 cold damage with your melee attacks.",
		attunement: true
	}
},
OotA: {
	dawnbringer: {
		name: "Dawnbringer",
		source: ["OotA", 222],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "Lost for ages in the Underdark, Dawnbringer appears to be a gilded longsword hilt. While grasping the hilt, you can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with Dawnbringer.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.\n   While holding the weapon, you can use an action to touch a creature with the blade and cast Lesser Restoration on that creature. Once used, this ability can't be used again until the next dawn.\n   " + toUni("Sentience") + ". Dawnbringer is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.\n   The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while attuned to it.\n   " + toUni("Personality") + ". Forged by ancient sun worshippers, Dawnbringer is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies.\n   Long years lost in darkness have made Dawnbringer frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time.",
		attunement: true,
		weight: 3
	},
	'piwafwi (cloak of elvenkind)': {
		name: "Piwafwi (Cloak of Elvenkind)",
		source: ["OotA", 222],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This dark spider-silk cloak is made by drow. It is a cloak of elvenkind. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		attunement: true
	},
	'piwafwi of fire resistance (cloak of elvenkind)': {
		name: "Piwafwi of Fire Resistance (Cloak of Elvenkind)",
		source: ["OotA", 222],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This dark spider-silk cloak is made by drow. It is a cloak of elvenkind. It also grants resistance to fire damage while you wear it. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		attunement: true
	},
	'spell gem (amber)': {
		name: "Spell Gem (Amber)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "An amber spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   An amber spell gem can store up to 4th level spells. Spells cast from the spell gem have a save DC of 15 and an attack bonus of +9.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (bloodstone)': {
		name: "Spell Gem (Bloodstone)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "A bloodstone spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A bloodstone spell gem can store up to 3rd level spells. Spells cast from the spell gem have a save DC of 15 and an attack bonus of +7.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (diamond)': {
		name: "Spell Gem (Diamond)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "A diamond spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A diamond spell gem can store up to 9th level spells. Spells cast from the spell gem have a save DC of 19 and an attack bonus of +11.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (jade)': {
		name: "Spell Gem (Jade)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A jade spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A jade spell gem can store up to 5th level spells. Spells cast from the spell gem have a save DC of 17 and an attack bonus of +9.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (lapis lazuli)': {
		name: "Spell Gem (Lapis lazuli)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "A lapis lazuli spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A lapis lazuli spell gem can store up to 1st level spells. Spells cast from the spell gem have a save DC of 13 and an attack bonus of +5.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (obsidian)': {
		name: "Spell Gem (Obsidian)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "An obsidian spell gem can contain one cantrip from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   An obsidian spell gem can only store cantrips. Cantrips cast from the spell gem have a save DC of 13 and an attack bonus of +5.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (quartz)': {
		name: "Spell Gem (Quartz)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "A quartz spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A quartz spell gem can store up to 2nd level spells. Spells cast from the spell gem have a save DC of 13 and an attack bonus of +5.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (ruby)': {
		name: "Spell Gem (Ruby)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "A ruby spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A ruby spell gem can store up to 8th level spells. Spells cast from the spell gem have a save DC of 18 and an attack bonus of +10.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (star ruby)': {
		name: "Spell Gem (Star ruby)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "A star ruby spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A star ruby spell gem can store up to 7th level spells. Spells cast from the spell gem have a save DC of 18 and an attack bonus of +10.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'spell gem (topaz)': {
		name: "Spell Gem (Topaz)",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A topaz spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   A topaz spell gem can store up to 6th level spells. Spells cast from the spell gem have a save DC of 17 and an attack bonus of +10.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. IF the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.",
		attunement: true
	},
	'stonespeaker crystal': {
		name: "Stonespeaker Crystal",
		source: ["OotA", 223],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Created by the stone giant librarians of Gravenhollow, this nineteen-inch-long shard of quartz grants you advantage on Intelligence (Investigation) checks while it is on your person.\n   The crystal has 10 charges. While holding it, you can use an action to expend some of its charges to cast one of the following spells from it: Speak with Animals (2 charges), Speak with Dead (4 charges), or Speak with Plants (3 charges).\n   When you cast a Divination spell, you can use the crystal in place of one material component that would normally be consumed by the spell, at a cost of 1 charge per level of the spell. The crystal is not consumed when used in this way.\n   The crystal regains 1d6+4 expended charges daily at dawn. If you expend the crystal's last charge, roll a d20. On a 1, the crystal vanishes, lost forever.",
		attunement: true
	},
	'wand of viscid globs': {
		name: "Wand of Viscid Globs",
		source: ["OotA", 223],
		type : "wand",
		rarity: "rare",
		description: "",
		descriptionFull: "Crafted by the drow, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting modifier) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is restrained for 1 hour. After that time, the viscous material cracks and falls away.\n   Applying a pint or more of alcohol to the restrained creature dissolves the glob instantly, as does the application of oil of etherealness or universal solvent. The glob also dissolves instantly if exposed to sunlight. No other nonmagical process can remove the viscous material until it deteriorates on its own.\n   The wand regains 1d6+1 expended charges daily at midnight. If you expend the wands last charge, roll a d20. On a 1, the wand melts into harmless slime and is destroyed.\n   A wand of viscous globs is destroyed if exposed to sunlight for 1 hour without interruption.",
		attunement: true
	}
},
RoT: {
	draakhorn: {
		name: "Draakhorn",
		source: ["RoT", 93],
		type: "wondrous item",
		rarity: "artifact",
		description: "",
		descriptionFull: "The Draakhorn was a gift from Tiamat in the war between dragons and giants. It was once the horn of her ancient red dragon consort, Ephelomon, that she gave to dragonkind to help them in their war against the giants. The Draakhorn is a signaling device, and it is so large that it requires two Medium creatures (or one Large or larger) to hold it while a third creature sounds it, making the earth resonate to its call. The horn has been blasted with fire into a dark ebony hue and is wrapped in bands of bronze with draconic runes that glow with purple eldritch fire.\n   The low, moaning drone of the Draakhorn discomfits normal animals within a few miles, and it alerts all dragons within two thousand miles to rise and be wary, for great danger is at hand. Coded blasts were once used to signal specific messages. Knowledge of those codes has been lost to the ages.\n   Those with knowledge of the Draakhorn's history know that it was first built to signal danger to chromatic dragons\u2014a purpose the Cult of the Dragon has corrupted to call chromatic dragons to the Well of Dragons from across the North.\n   Within 50 feet of any enclosed space where the horn is blown, the air begins to shimmer from the sound. Any character within 20 feet of the entry to the enclosed space must succeed on a DC 12 Strength check to continue pushing against the pressure of the sound. A failure indicates the character can advance no farther toward the entry.\n   For any character entering the enclosed space, the sound fades to silence\u2014because any creature that enters the enclosed space is temporarily deafened and must make a DC 12 Constitution saving throw. Success indicates the deafness ends 2 minutes after the Draakhorn ceases to sound. Failure indicates the character remains deafened for 1 hour after the Draakhorn ceases to sound.\n   While the horn is sounding, a creature must make a DC 15 Constitution saving throw the first time on a turn the creature enters a 150-foot cone in front of the horn or starts its turn there. On a failed save, the creature takes 27 (6d8) thunder damage and is knocked prone. On a successful save, the creature takes half damage and isn't knocked prone."
	},
	'dragontooth dagger': {
		name: "Dragontooth Dagger",
		source: ["RoT", 94],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "A dagger fashioned from the tooth of a dragon. While the blade is obviously a fang or predator's tooth, the handle is leather wrapped around the root of the tooth, and there is no crossguard.\n   You gain a +1 bonus to attack and damage rolls made with this weapon. On a hit with this weapon, the target takes an extra 1d6 acid damage.\n   " + toUni("Draconic Potency") + ". Against enemies of the Cult of the Dragon, the dagger's bonus to attack and damage rolls increases to 2, and the extra acid damage increases to 2d6.",
		weight: 1
	},
	'mask of the dragon queen': {
		name: "Mask of the Dragon Queen",
		source: ["RoT", 94],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "Individually, the five dragon masks resemble the dragons they are named for. When two or more of the dragon masks are assembled, however, they transform magically into the Mask of the Dragon Queen. Each mask shrinks to become the modeled head of a chromatic dragon, appearing to roar its devotion to Tiamat where all the masks brought together are arranged crown-like on the wearer's head. Below the five masks, a new mask shapes itself, granting the wearer a draconic visage that covers the face, neck, and shoulders.\n   While you are attuned to and wear this mask, you can have any of the properties from any one mask. Additionally, you gain the Damage Absorption from each of the five dragon masks, and you gain five uses of the Legendary Resistance property.",
		attunement: true
	}
},
LMoP: {
	dragonguard: {
		name: "Dragonguard",
		source: ["LMoP", 48],
		type : "armor ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
		weight: 20
	},
	lightbringer: {
		name: "Lightbringer",
		source: ["LMoP", 48],
		type : "weapon ()",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and made of solid brass. Named Lightbringer, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
		weight: 4
	},
	'spider staff': {
		name: "Spider Staff",
		source: ["LMoP", 53],
		type : "staff",
		rarity: "rare",
		description: "",
		descriptionFull: "The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals 1d6 extra poison damage on a hit when used to make a weapon attack.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Spider Climb (1 charge) or Web (2 charges, spell save DC 15). No components are required.\n   The staff regains 1d6+4 expended charges each day at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
		attunement: true,
		weight: 6
	},
	'staff of defense': {
		name: "Staff of Defense",
		source: ["LMoP", 53],
		type : "staff",
		rarity: "rare",
		description: "",
		descriptionFull: "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.\n   While holding the staff, you have a +1 bonus to your Armor Class.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Mage Armor (1 charge) or Shield (2 charges). No components are required.\n   The staff regains 1d6+4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
		attunement: true,
		weight: 3
	}
},
MToF: {
	'greater silver sword': {
		name: "Greater Silver Sword",
		source: ["MToF", 89],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "This magic weapon grants a +3 bonus to attack and damage rolls made with it. While you hold the sword, you have advantage on Intelligence, Wisdom, and Charisma saving throws, you are immune to being charmed, and you have resistance to psychic damage. In addition, if you score a critical hit with it against a creature's astral body, you can cut the silvery cord that tethers the target to its material body, instead of dealing damage.",
		attunement: true,
		weight: 6
	},
	'infernal tack': {
		name: "Infernal Tack",
		source: ["MToF", 167],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "A narzugon binds a nightmare to its service with infernal tack, which consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with infernal tack must serve whoever wears the spurs until the wearer dies or the tack is removed.\n   You can use an action to call a creature nightmare equipped with infernal tack by clashing the spurs together or scraping them through blood. The nightmare appears at the start of your next turn, within 20 feet of you. It acts as your ally and takes its turn on your initiative count. It remains for 1 day, until you or it dies, or until you dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which you can summon it again.\n   The tack doesn't conjure a nightmare from thin air; one must first be subdued so the tack can be placed on it. No nightmare accepts this forced servitude willingly, but some eventually form strong loyalties to their masters and become true partners in evil.",
		attunement: true
	}
},
V: {
	'mind lash': {
		name: "Mind Lash",
		source: ["V", 81],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "In the hands of any creature other than a mind flayer, a mind lash functions as a normal whip. In the hands of an illithid, this magic weapon strips away a creature's will to survive as it also strips away flesh, dealing an extra 2d4 psychic damage to any target it hits. Any creature that takes psychic damage from the mind lash must also succeed on a DC 15 Wisdom saving throw or have disadvantage on Intelligence, Wisdom, and Charisma saving throws for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		attunement: true,
		weight: 3
	},
	'shield of far sight': {
		name: "Shield of Far Sight",
		source: ["V", 81],
		type : "shield",
		rarity: "rare",
		description: "",
		descriptionFull: "A mind flayer skilled at crafting magic items creates a shield of far sight by harvesting an eye from an intelligent humanoid and magically implanting it on the outer surface of a nonmagical shield. The shield becomes a magic item once the eyes is implanted, whereupon the mind flayer can give the shield to a thrall or hang it on a wall in its lair. As long as the shield is on the same plane of existence as its creator, the mind flayer can see through the shield's eye, which has darkvision out to a range of 60 feet. While peering through this magical eye, the mind flayer can use its Mind Blast action as though it were standing behind the shield.\n   If a shield of far sight is destroyed, the mind flayer that created it is blinded for 2d12 hours.",
		weight: 6
	},
	'survival mantle': {
		name: "Survival Mantle",
		source: ["V", 81],
		type : "armor ()",
		rarity: "unknown (magic)",
		description: "",
		descriptionFull: "This carapace-like augmentation encases portions of the wearer's shoulders, neck, and chest. A survival mantle is equivalent to a suit of nonmagical half plate armor and takes just as long to don or doff. It can't be worn with other kinds of armor.\n   A creature wearing a survival mantle can breathe normally in any environment (including a vacuum) and has advantage on saving throws against harmful gases (such as those created by a Cloudkill spell, a Stinking Cloud spell, inhaled poisons, and the breath weapons of some dragons).",
		weight: 40
	}
},
WDH: {
	azuredge: {
		name: "Azuredge",
		source: ["WDH", 189],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "Forged by the archwizard Ahghairon, this intelligent battleaxe was crafted to defend Waterdeep. Its current wielder is a former member of Force Grey named Meloon Wardragon, but the weapon is searching for a new owner.\n   Azuredge has a solid steel handle etched with tiny runes, wrapped in blue dragon hide with a star sapphire set into the pommel. The axe head is forged from silver, electrum, and steel alloys whose edges constantly shimmer with a deep blue luminescence.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. The Shield spell provides no defense against the axe, which passes through that spell's barrier of magical force.\n   When you hit a fiend or an undead with the axe, cold blue flames erupt from its blade and deal an extra 2d6 radiant damage to the target.\n   " + toUni("Hurling") + ". The battleaxe has 3 charges. You can expend 1 charge and make a ranged attack with the axe, hurling it as if it had the thrown property with a normal range of 60 feet and a long range of 180 feet. Whether it hits or misses, the axe flies back to you at the end of the current turn, landing in your open hand or at your feet in your space (as you choose). The axe regains all expended charges daily at dawn.\n   " + toUni("Illumination") + ". While holding the axe, you can use an action to cause the axe to glow blue or to quench the glow. This glow sheds bright light in a 30-foot radius and dim light for an additional 30 feet.\n   " + toUni("Sentience") + ". Azuredge is a sentient lawful neutral weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.\n   The weapon communicates telepathically with its wielder and can speak, read, and understand Common. It has a calm, delicate voice. The weapon can sense the presence of non-lawful creatures within 120 feet of it.\n   " + toUni("Personality") + ". Azuredge is sworn to protect Waterdeep, and it desires to be wielded by a law-abiding person willing to dedicate everything to the city's defense. The weapon is patient and takes its time finding its ideal wielder.\n   If someone tries to use Azuredge against its will, the axe can become ten times heavier than normal, and can magically adhere to any Medium or larger object or surface it comes into contact with. Once it does so, the axe can't be wielded. Nothing short of a Wish spell can separate the axe from the item or surface to which it is adhered without destroying one or the other, though the axe can choose to end the effect at any time.",
		attunement: true,
		weight: 4
	},
	'badge of the watch': {
		name: "Badge of the Watch",
		source: ["WDH", 189],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "A badge of the Watch is given only to those who have earned the trust of the Open Lord of Waterdeep. The badge, signifying the rank of captain in Waterdeep's City Watch, bears the emblem of Waterdeep and is meant to be worn or carried.\n   While wearing the badge, you gain a +2 bonus to AC if you aren't using a shield.\n   If the badge is more than 5 feet away from you for more than 1 minute, it vanishes and harmlessly reappears on a surface within 5 feet of the Open Lord. While holding the badge, the Open Lord knows your location, provided the two of you are on the same plane of existence and your attunement to the badge hasn't ended.\n   As an action, the Open Lord can touch the badge and end your attunement to it.",
		attunement: true
	},
	blackstaff: {
		name: "Blackstaff",
		source: ["WDH", 190],
		type : "staff",
		rarity: "legendary",
		description: "",
		descriptionFull: "The Blackstaff is a sentient, rune-carved staff set with thin silver veins. It is the symbol of office for the Blackstaff, the highest-ranking wizard in Waterdeep. As the rightful owner of the Blackstaff, Vajra Safahr is the only one who can become attuned to it. The staff can, however, choose a new owner (see \"Personality\" below).\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin") + "\t" + toUni("Effect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff\n\n\n   " + toUni("Animate Walking Statues") + ". You can expend 1 or more of the staff's charges as an action to animate or deactivate one or more of the walking statues of Waterdeep. You must be in the city to use this property, and you can animate or deactivate one statue for each charge expended. An animated statue obeys the telepathic commands of Khelben Arunsun's spirit, which is trapped inside the staff (see \"Personality\" below). A walking statue becomes inanimate if deactivated or if the staff is broken.\n   " + toUni("Dispel Magic") + ". You can expend 1 of the staff's charges as a bonus action to cast Dispel Magic on a creature, an object, or a magical effect that you touch with the tip of the staff. If the target is an unwilling creature or an object in the possession of such a creature, you must hit the creature with a melee attack using the Blackstaff before you can expend the charge to cast the spell.\n   " + toUni("Drain Magic") + ". This property affects only creatures that use spell slots. When you hit such a creature with a melee attack using the Blackstaff, you can expend 1 of the staff's charges as a bonus action, causing the target to expend one spell slot of the highest spell level it can cast without casting a spell. If the target has already expended all its spell slots, nothing happens. Spell slots that are expended in this fashion are regained when the target finishes a long rest, as normal.\n   " + toUni("Master of Enchantment") + ". When you cast an enchantment spell of 1st level or higher while holding the staff, you can make an Intelligence (Arcana) check with a DC of 10 + the level of the spell. If the check succeeds, you cast the spell without expending a spell slot.\n   " + toUni("Sentience") + ". The Blackstaff is a sentient staff of neutral alignment, with an Intelligence of 22, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet, and it can communicate telepathically with any creature that is holding it.\n   " + toUni("Personality") + ". The staff has the spirits of all previous Blackstaffs trapped within it. Its creator, Khelben Arunsun, is the dominant personality among them. Like Khelben, the staff is extremely devious and manipulative. It prefers to counsel its owner without exerting outright control. The staff's primary goal is to protect Waterdeep and its Open Lord, currently Laeral Silverhand. Its secondary goal is to help its wielder become more powerful.\n   In the event that the holder of the office of the Blackstaff no longer serves the staff's wishes, the staff ceases to function until it finds a worthy inheritor\u2014someone whose loyalty to Waterdeep is beyond reproach.\n   " + toUni("Spirit Trap") + ". When the Blackstaff dies, the spirit of that individual becomes trapped in the staff along with the spirits of the previous Blackstaffs. (A Blackstaff whose spirit is trapped in the staff can't be raised from the dead.)\n   Destroying the staff would release the spirits trapped inside it, but in that event, Khelben's spirit can lodge itself inside any one piece of the staff that remains. The piece containing Khelben's spirit has the staff's Sentience property but none of its other properties. As long as this piece of the staff exists, Khelben's spirit can make the staff whole again whenever he wishes. When the staff is remade, the spirits of the previous Blackstaffs become trapped inside it again.",
		attunement: true,
		weight: 4
	},
	'bracer of flying daggers': {
		name: "Bracer of Flying Daggers",
		source: ["WDH", 190],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This armband appears to have thin daggers strapped to it. As an action, you can pull up to two magic daggers from the bracer and immediately hurl them, making a ranged attack with each dagger. A dagger vanishes if you don't hurl it right away, and the daggers disappear right after they hit or miss. The bracer never runs out of daggers.",
		attunement: true
	},
	'dragonstaff of ahghairon': {
		name: "Dragonstaff of Ahghairon",
		source: ["WDH", 191],
		type : "staff",
		rarity: "legendary",
		description: "",
		descriptionFull: "While holding the dragonstaff of Ahghairon, you have advantage on saving throws against the spells and breath weapons of dragons, as well as the breath weapons of other creatures of the dragon type (such as dragon turtles).\n   A creature of the dragon type that you touch with the staff can move through the city of Waterdeep, ignoring Ahghairon's dragonward (see \"Ahghairon's Dragonward,\" in the Introduction). This effect lasts until the creature is touched again by the staff or until a time you proclaim when you confer the benefit.\n   The staff has 10 charges. While holding it, you can expend 1 charge as an action to cast the Command spell. If you target a dragon with this casting, the dragon has disadvantage on its saving throw. The staff regains 1d10 charges daily at dawn.",
		attunement: true
	},
	'feather of diatryma summoning': {
		name: "Feather of Diatryma Summoning",
		source: ["WDH", 191],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This bright plume is made from the feather of a diatryma (pronounced dee-ah-TRY-mah), a Large, colorful, flightless bird native to the Underdark. If you use an action to speak the command word and throw the feather into a Large unoccupied space on the ground within 5 feet of you, the feather becomes a living diatryma for up to 6 hours, after which it reverts to its feather form. It reverts to feather form early if it drops to 0 hit points or if you use an action to speak the command word again while touching the bird.\n   When the diatryma reverts to feather form, the magic of the feather can't be used again until 7 days have passed.\n   The diatryma uses the statistics of an axe beak, except that its beak deals piercing damage instead of slashing damage. The creature is friendly to you and your companions, and it can be used as a mount. It understands your languages and obeys your spoken commands. If you issue no commands, the diatryma defends itself but takes no other actions.",
		attunement: true
	},
	"knave's eye patch" : {
		name: "Knave's Eye Patch",
		source: ["WDH", 191],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "While wearing this eye patch, you gain these benefits:\n \u2022 You have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 If you have the Sunlight Sensitivity trait, you are unaffected by the trait.\n \u2022 You are immune to magic that allows other creatures to read your thoughts or determine whether you are lying. Creatures can communicate telepathically with you only if you allow it.",
		attunement: true
	},
	"lord's ensemble" : {
		name: "Lord's Ensemble",
		source: ["WDH", 191],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "The Masked Lords of Waterdeep don this ensemble when meeting with one another. This raiment renders each lord indistinguishable from the others. The ensemble consists of three pieces\u2014a helm, an amulet, and a robe\u2014that function as a single magic item when worn together, but only within the city of Waterdeep and its sewers. You become attuned to the ensemble as a single item.\n   " + toUni("Lord's Helm") + ". This bucket helm covers your head and conceals your face. Screens over the eyes help to shroud your identity without blinding you. While you wear the helm, your voice is magically altered to sound genderless, and you are immune to magic that allows other creatures to read your thoughts, to determine whether you are lying, to know your alignment, or to know your creature type. Creatures can communicate telepathically with you only if you allow it.\n   " + toUni("Lord's Amulet") + ". This amulet bears the crest of Waterdeep. It functions as an amulet of proof against detection and location.\n   " + toUni("Lord's Robe") + ". This elegant robe functions as a ring of free action, and it creates the illusion that you have a nondescript, androgynous humanoid build and stand 6 feet tall.",
		attunement: true
	},
	'paper bird': {
		name: "Paper Bird",
		source: ["WDH", 191],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "After you write a message of fifty words or fewer on this magic sheet of parchment and speak a creature's name, the parchment magically folds into a Tiny paper bird and flies to the recipient whose name you uttered. The recipient must be on the same plane of existence as you, otherwise the bird turns into ash as it takes flight.\n   The bird is an object that has 1 hit point, an Armor Class of 13, a flying speed of 60 feet, a Dexterity of 16 (+3), and a score of 1 (\u22125) in all other abilities, and it is immune to poison and psychic damage.\n   It travels to within 5 feet of its intended recipient by the most direct route, whereupon it turns into a nonmagical and inanimate sheet of parchment that can be unfolded only by the intended recipient. If the bird's hit points or speed is reduced to 0 or if it is otherwise immobilized, it turns into ash.\n   Paper birds usually come in small, flat boxes containing 1d6 + 3 sheets of the parchment."
	},
	'ring of truth telling': {
		name: "Ring of Truth Telling",
		source: ["WDH", 192],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "While wearing this ring, you have advantage on Wisdom (Insight) checks to determine whether someone is lying to you.",
		attunement: true
	},
	'teleporter ring': {
		name: "Teleporter Ring",
		source: ["WDH", 157],
		type : "ring",
		rarity: "unknown",
		description: "",
		descriptionFull: "As an action, a creature wearing a teleporter ring can activate the teleportation circle either in area K22 or area E1, teleporting itself and up to six other willing creatures from one circle to the other."
	},
	smokepowder: {
		name: "Smokepowder",
		source: ["WDH", 192],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "Smokepowder is a magical explosive chiefly used to propel a bullet out of the barrel of a firearm. It is stored in airtight wooden kegs or tiny, waterproof leather packets. A packet contains enough smokepowder for five shots, and a keg holds enough smokepowder for five hundred shots.\n   If smokepowder is set on fire, dropped, or otherwise handled roughly, it explodes and deals fire damage to each creature or object within 20 feet of it: 1d6 for a packet, 9d6 for a keg. A successful DC 12 Dexterity saving throw halves the damage.\n   Casting Dispel Magic on smokepowder renders it permanently inert."
	},
	'stone of golorr': {
		name: "Stone of Golorr",
		source: ["WDH", 192],
		type: "wondrous item",
		rarity: "artifact",
		description: "",
		descriptionFull: "The Stone of Golorr is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.\n   " + toUni("Random Properties") + ". The Stone of Golorr has the following properties, determined by rolling on the tables in the \"Artifacts\" section in chapter 7 of the Dungeon Master's Guide:\n \u2022 1 minor beneficial property\n \u2022 1 minor detrimental property\n\n" + toUni("Legend Lore") + ". The Stone of Golorr has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the Legend Lore spell.\n   By using the stone to cast legend lore, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.\n   The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.\n   " + toUni("Failed Memory") + ". When your attunement to the Stone of Golorr ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A Remove Curse spell cast on you has a 20% chance of restoring the lost knowledge and memories, and a Greater Restoration spell does so automatically.\n   " + toUni("Sentience") + ". The Stone of Golorr is a sentient lawful evil magic item with an Intelligence of 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. In addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.\n   The Stone of Golorr hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see \"Sentient Magic Items\" in chapter 7 of the Dungeon Master's Guide).\n   " + toUni("Personality") + ". The Stone of Golorr has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.\n   " + toUni("Destroying the Stone") + ". While in stone form, the aboleth isn't a creature and isn't subject to effects that target creatures. The Stone of Golorr is immune to all damage. Casting an Antipathy/Sympathy spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed, and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.",
		attunement: true
	},
	'oversized longbow': {
		name: "Oversized Longbow",
		source: ["WDH", 201],
		type : "weapon ()",
		rarity: "unknown",
		description: "",
		descriptionFull: "This unique weapon can be used only by a Medium or larger creature that has a Strength of 18 or higher. The bow shoots oversized arrows that deal piercing damage equal to 2d6 + the wielder's Strength modifier.",
		weight: 2
	},
	'nimblewright detector': {
		name: "Nimblewright Detector",
		source: ["WDH", 47],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "To activate the nimblewright detector, a character must hold down its trigger. When the activated device comes within 500 feet of a nimblewright other than Nim, the umbrella begins to spin, whir, and click. The spinning, whirring, and clicking accelerates as the distance to the target lessens, reaching maximum velocity and volume when a nimblewright other than Nim is within 30 feet of the device."
	},
	'adjustable stilts': {
		name: "Adjustable Stilts",
		source: ["WDH", 47],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "The stilts take 1 minute to put on or remove. They increase the height of any humanoid wearing them by 2 to 5 feet. Each stilt weighs 8 pounds and is 1 foot long when fully collapsed."
	},
	'backpack parachute': {
		name: "Backpack Parachute",
		source: ["WDH", 47],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "A humanoid wearing this piece of gear can deploy the parachute as a reaction while falling, or as an action otherwise. The parachute requires at least a 10-foot cube of unoccupied space in which to deploy, and it doesn't open fast enough to slow a fall of less than 60 feet. If it has sufficient time and space to deploy properly, the parachute allows its wearer to land without taking falling damage. Once it has been used, the parachute takes 10 minutes to repack."
	},
	'barking box': {
		name: "Barking Box",
		source: ["WDH", 47],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "This metal cube, 6 inches on a side, has a crank on top. Using an action to wind the crank activates the box for 8 hours. While activated, the box barks whenever it detects vibrations within 15 feet of it, as long as the box and the source of the vibrations are in contact with the same ground or substance. A switch on one side of the box sets the device to emit either a small dog's bark or a large dog's bark."
	},
	'matchless pipe': {
		name: "Matchless Pipe",
		source: ["WDH", 47],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "A switch made of flint is built into the bowl of this fine wooden smoking pipe. With a few flicks of the switch, the pipe lights itself."
	}
},
WDotMM: {
	'dagger of blindsight': {
		name: "Dagger of Blindsight",
		source: ["WDotMM", (void 0)],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "This rare magic item requires attunement. A creature attuned to it gains blindsight out to a range of 30 feet. The dagger has a saw-toothed edge and a black pearl nested in its pommel.",
		attunement: true,
		weight: 1
	},
	'horned ring': {
		name: "Horned Ring",
		source: ["WDotMM", (void 0)],
		type : "ring",
		rarity: "very rare",
		description: "",
		descriptionFull: "Allows an attuned wearer to ignore Undermountain's magical restrictions (see \"Alterations to Magic\").",
		attunement: true
	},
	'professor orb': {
		name: "Professor Orb",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
	},
	'horn of the endless maze': {
		name: "Horn of the Endless Maze",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "You can use an action to blow this horn. In response, 3d4+3 warrior spirits from the Abyss appear within 60 feet of you. They look like Minotaurs and use the statistics of a berserker. They return to the Abyss after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   If you blow the horn without having proficiency with all simple weapons, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
		weight: 2
	},
	'dodecahedron of doom': {
		name: "Dodecahedron of Doom",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.\n   The dodecahedron can be hurled up to 60 feet as an action. A random magical effect occurs when the die comes to rest after rolling across the ground for at least 10 feet. If an effect requires a target and no eligible target is within range, nothing happens. Spells cast by the dodecahedron require no components. Roll a d12 and consult the following table to determine the effect:\n\n" + toUni("d12") + "\t" + toUni("effect") + "\n1-2\tThe dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 (9d8) force damage on a failed save, or half as much damage on a successful one.\n3-4\tThe dodecahedron casts Light on itself. The effect lasts until a creature touches the die.\n5-6\tThe dodecahedron casts Ray of Frost (+5 to hit), targeting a random creature within 60 feet of it that doesn't have total cover against the attack.\n7-8\tThe dodecahedron casts Shocking Grasp (+5 to hit) on the next creature that touches it.\n9-10\tThe dodecahedron casts Darkness on itself. The effect has a duration of 10 minutes.\n11-12\tThe next creature to touch the dodecahedron gains 1d10 temporary hit points that last for 1 hour."
	},
	'orb of gonging': {
		name: "Orb of Gonging",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This common wondrous item is a hollow, 5-inch-diameter orb that weighs 5 pounds. Its outer shell is composed of notched bronze rings, which can be turned so that the notches line up. Aligning the notches requires an action, and doing so causes the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 feet."
	},
	'black crystal tablet': {
		name: "Black Crystal Tablet",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "Any creature that attunes to the tablet must make a DC 20 Wisdom saving throw at the end of its next long rest. On a failed save, the creature becomes afflicted with a random form of long-term madness (see \"Madness\" in chapter 8 of the Dungeon Master's Guide).\n   As an action, a creature attuned to the Black Crystal Tablet can use it to cast Eyebite or Gate (the portal created by this spell links to the Far Realm only). After the tablet is used to cast a spell, it cannot be used again until the next dawn.",
		attunement: true
	},
	'helm of the scavenger': {
		name: "Helm of the Scavenger",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "This ornate chair is designed to propel and maneuver a ship through space.\n   " + toUni("Passive Properties") + ". The following properties of the helm come into play even when no creature is attuned to it:\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an envelope of fresh air around the ship while it is in the void of space (but not underwater). This envelope extends out from the edges of the hull in all directions for a distance equal in length to the vessel's beam, so that creatures aboard and near the ship can breathe normally in space. The temperature within the air envelope is 70 degrees Fahrenheit.\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an artificial gravity field while the ship is in the void of space, so that creatures can walk on the ship's decks as they normally would. Creatures and objects that fall overboard bob in a gravity plane that extends out from the main deck for a distance equal in length to the vessel's beam.\n\n" + toUni("Active Properties") + ". The sensation of being attuned to the helm is akin to being immersed in warm water. While attuned to the helm, you gain the following abilities while you sit in it:\n \u2022 You can use the helm to propel the vessel across or through water and other liquids at a maximum speed in miles per hour equal to your highest-level unexpended spell slot.\n \u2022 You can use the helm to propel the vessel through air or space at a maximum speed in miles per hour equal to your highest-level unexpended spell slot \xD7 10.\n \u2022 Provided you have at least one unexpended spell slot, you can steer the vessel, albeit in a somewhat clumsy fashion, in much the same way that oars or a rudder can maneuver a seafaring ship.\n \u2022 Whenever you like, you can see what's happening on and around the vessel as though you were standing in a location of your choice aboard it.\n\n" + toUni("Drawback") + ". While attuned to the helm, you cannot expend your own spell slots.",
		attunement: true
	},
	'shield of the uven rune': {
		name: "Shield of the Uven Rune",
		source: ["WDotMM", (void 0)],
		type : "shield",
		rarity: "very rare",
		description: "",
		descriptionFull: "This shield is made from the scale of an ancient white dragon. It has a rune burned into its outward-facing side. A character who examines the rune and succeeds on a DC 20 Intelligence (History) check recognizes it as an uven (\"enemy\" in Giant) rune that confers great power.\n   While holding the shield, you benefit from the following properties.\n   " + toUni("Winter's Friend") + ". You are immune to cold damage.\n   " + toUni("Deadly Rebuke") + ". Immediately after a creature hits you with a melee attack, you can use your reaction to deal 3d6 necrotic damage to that creature.\n   " + toUni("Bane") + ". You can cast the Bane spell from the shield (save DC 17). The spell does not require concentration and lasts for 1 minute. Once you cast the spell from the shield, you can't do so again until you finish a short or long rest.\n   " + toUni("Gift of Vengeance") + ". You can transfer the shield's magic to a nonmagical weapon by tracing the uven rune on the weapon with one finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shield is destroyed, and the rune is etched or burned into the chosen weapon. This weapon becomes a rare magic item that requires attunement. It has the properties of a +1 weapon. The bonus increases to +3 when the weapon is used against one of the following creature types, chosen by you at the time of the magic weapon's creation: aberrations, celestials, constructs, dragons, elementals, fey, fiends, giants, or undead.",
		attunement: true,
		weight: 6
	},
	'blast scepter': {
		name: "Blast Scepter",
		source: ["WDotMM", (void 0)],
		type : "rod",
		rarity: "very rare",
		description: "",
		descriptionFull: "The Blast Scepter can be used as an arcane focus.\n   Whoever is attuned to the Blast Scepter gains resistance to fire and lightning damage and can, as an action, use it to cast Thunderwave as a 4th-level spell (save DC 16) without expending a spell slot.",
		attunement: true
	},
	'chest of preserving': {
		name: "Chest of Preserving",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "Food and other perishable items do not age or decay while inside a Chest of Preserving. The chest is 2\xBD feet long, 1\xBD feet wide, and 1 foot tall with a half-barrel lid. The chest has a lock, which can be picked with thieves' tools and a successful DC 15 Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical.",
		attunement: true,
		weight: 25
	},
	'circlet of human perfection': {
		name: "Circlet of Human Perfection",
		source: ["WDotMM", (void 0)],
		type: "Other",
		rarity: "uncommon",
		description: "",
		descriptionFull: "The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer. Removing the circlet ends the effect.",
		attunement: true
	},
	'propeller helm': {
		name: "Propeller Helm",
		source: ["WDotMM", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "While worn, the helm allows its wearer to use an action to cast the Levitate spell, requiring no components. The helm's propeller spins and whirs loudly until the spell ends. Each time the spell ends, there is a 50 percent chance that the helm loses its magic and becomes nonmagical.",
		attunement: true
	},
	tearulai: {
		name: "Tearulai",
		source: ["WDotMM", (void 0)],
		type : "weapon ()",
		rarity: "very rare",
		description: "",
		descriptionFull: "The longsword, Tearulai, is a sentient, neutral good sword of sharpness with an emerald-colored blade and precious gemstones embedded in its hilt and pommel. The sword's magical properties are suppressed until it is removed from Valdemar's skull.\n   Evil creatures can't attune to Tearulai; any evil creature that tries to do so takes 20 psychic damage. The weapon's emerald blade can't be damaged or dulled, and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.\n   " + toUni("Spells") + ". The sword has 6 charges and regains 1d4 + 2 expended charges daily at dawn. A creature attuned to the sword can use an action and expend 1 or more charges to cast one of the following spells from it without material components: Fly (2 charges), Polymorph (3 charges), or Transport Via Plants (4 charges).\n   " + toUni("Sentience") + ". The sword has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and truesight out to a range of 120 feet. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 feet of it.\n   " + toUni("Personality") + ". Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielder's goals run counter to its own, Tearulai attempts to take control of its wielder and escape Undermountain, whereupon it can use its Transport Via Plants spell to return whence it came.\n   When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.\n\nNote: According to the SRD, it is an extra 4d6 slashing damage, although this is incorrect.",
		attunement: true,
		weight: 3
	},
	'vial of stardust': {
		name: "Vial of Stardust",
		source: ["WDotMM", (void 0)],
		type: "Other",
		rarity: "unknown",
		description: "",
		descriptionFull: "Any creature that sprinkles the contents of a Vial of Stardust over itself gains the ability to cast the Dream spell once as an action (spell save DC 15), requiring no components."
	}
},
G: {
	'guild keyrune, azorius': {
		name: "Guild Keyrune, Azorius",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This keyrune is carved from white marble and lapis lazuli to resemble a noble bird of prey. It can become a giant eagle for up to 1 hour. While the transformed eagle is within 1 mile of you, you can communicate with it telepathically. As an action, you can see through the eagle's eyes and hear what it hears until the start of your next turn, and you gain the benefit of its keen sight. During this time, you are deaf and blind with regard to your own senses.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a giant eagle. If there isn't enough space for the eagle, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the eagle takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, boros': {
		name: "Guild Keyrune, Boros",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Carved from red sandstone with white granite elements to resemble a member of the Boros Legion, this keyrune can become a veteran (human) for up to 8 hours. In addition to fighting on your behalf, this veteran cheerfully offers tactical advice, which is usually sound. Anyone who talks with the transformed keyrune or examines it closely can easily recognize that it is an artificial human.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a veteran (human). If there isn't enough space for the veteran, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, dimir': {
		name: "Guild Keyrune, Dimir",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "This keyrune, carved from black stone accented with steel, resembles a stylized horror. On command, it transforms into an intellect devourer that resembles the Dimir guild symbol, with six bladelike legs. The creature exists for up to 24 hours. During that time, it pursues only a single mission you give it\u2014usually an assignment to take over someone's body, either to impersonate that person for a brief time or to extract secrets from their mind. When the mission is complete, the creature returns to you, reports its success, and reverts to its keyrune form.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a intellect devourer. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, golgari': {
		name: "Guild Keyrune, Golgari",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "Made from deep green jade with black veins, this keyrune has an insectile shape. It can transform into a giant scorpion for up to 6 hours. The scorpion has an Intelligence of 4 and can communicate with you telepathically while it is within 60 feet of you, though its messages are largely limited to describing the passage of potential prey.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a giant scorpion. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, gruul': {
		name: "Guild Keyrune, Gruul",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This crude keyrune is cobbled together from bits of rubble, broken glass, bone, and animal hair. One end resembles a horned beast. On command, the keyrune transforms into a ceratok, a horned creature much like a rhinoceros (and with the same statistics). It remains in its ceratok form for 1 hour.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a ceratok. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, izzet': {
		name: "Guild Keyrune, Izzet",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Formed of carved and polished red and blue stone, the keyrune includes bits of cable and wire. One end resembles a humanlike head, suggesting the jagged elemental form of the galvanice weird that it can become for a duration of 3 hours. In this form, it will serve you as a bodyguard, lift and carry things for you, act as a test subject for your experiments, or aid you in any other way that its capabilities allow.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a galvanice weird. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, orzhov': {
		name: "Guild Keyrune, Orzhov",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This keyrune is carved from white marble with veins of black. The end is shaped like a thrull's head, with a gold faceplate affixed. On command, the keyrune transforms into a winged thrull for up to 2 hours. If you don't come from an Orzhov oligarch family, it serves you grudgingly, clownishly aping your movements and mannerisms while carrying out your orders.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a winged thrull. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, rakdos': {
		name: "Guild Keyrune, Rakdos",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This dark granite keyrune is marbled with scarlet veins and carved with the leering visage of a mischievous demon. When activated, it transforms into a cackler for up to 1 hour.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a cackler. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, selesnya': {
		name: "Guild Keyrune, Selesnya",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "Carved from white and green marble in the shape of a wolf's head, this keyrune transforms into a dire wolf. The wolf persists for 8 hours. Its Intelligence is 6, and it understands Elvish and Sylvan but can't speak those languages. While it is within 1 mile of you, you can communicate with each other telepathically.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a dire wolf. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'guild keyrune, simic': {
		name: "Guild Keyrune, Simic",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This keyrune is assembled from coral, mother-of-pearl, and chrome and adorned with the spirals and curves characteristic of Simic ornamentation. The head resembles the shell of a sea creature. On command, the keyrune turns into a category 2 krasis that has the Grabber and Stabilizing Legs adaptations. The transformation lasts for up to 5 hours.\n   When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a category 2 krasis that has the Grabber and Stabilizing Legs adaptations. If there isn't enough space for the creature, the keyrune doesn't transform.\n   The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the Dodge action and moves to avoid danger.\n   At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed.",
		attunement: true
	},
	'azorius guild signet': {
		name: "Azorius Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Azorius, allows you to cast Ensnaring Strike. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Azorius's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'boros guild signet': {
		name: "Boros Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Boros, allows you to cast Heroism. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Boros' recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'dimir guild signet': {
		name: "Dimir Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Dimir, allows you to cast Disguise Self. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Dimir's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'golgari guild signet': {
		name: "Golgari Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Golgari, allows you to cast Entangle. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Golgari's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'gruul guild signet': {
		name: "Gruul Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Gruul, allows you to cast Compelled Duel. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Gruul's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'izzet guild signet': {
		name: "Izzet Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Izzet, allows you to cast Chaos Bolt. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Izzet's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'orzhov guild signet': {
		name: "Orzhov Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Orzhov, allows you to cast Command. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Orzhov's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'rakdos guild signet': {
		name: "Rakdos Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Rakdos, allows you to cast Hellish Rebuke. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Rakdos' recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'selesnya guild signet': {
		name: "Selesnya Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Selesnya, allows you to cast Charm Person. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Selesnya's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	'simic guild signet': {
		name: "Simic Guild Signet",
		source: ["G", (void 0)],
		type : "ring",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This ring, adorned with the symbol of Simic, allows you to cast Expeditious Retreat. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Simic's recognition and favor.\n   A signet has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13).",
		attunement: true
	},
	"illusionist's bracers" : {
		name: "Illusionist's Bracers",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "A powerful illusionist of House Dimir originally developed these bracers, which enabled her to create multiple minor illusions at once. The bracers' power, though, extends far beyond illusions.\n   While wearing the bracers, whenever you cast a cantrip, you can use a bonus action on the same turn to cast that cantrip a second time.",
		attunement: true
	},
	'mizzium apparatus': {
		name: "Mizzium Apparatus",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "Innovation is a dangerous pursuit, at least the way the mages of the Izzet League engage in it. As protection against the risk of an experiment going awry, they have developed a device to help channel and control their magic. This apparatus is a collection of leather straps, flexible tubing, glass cylinders, and plates, bracers, and fittings made from a magic-infused metal alloy called mizzium, all assembled into a harness. The item weighs 8 pounds.\n   While you are wearing the mizzium apparatus, you can use it as an arcane focus. In addition, you can attempt to cast a spell that you do not know or have prepared. The spell you choose must be on your class's spell list and of a level for which you have a spell slot, and you must provide the spell's components.\n   You expend a spell slot to cast the spell as normal, but before resolving it you must make an Intelligence (Arcana) check. The DC is 10 + twice the level of the spell slot you expend to cast the spell.\n   On a successful check, you cast the spell as normal, using your spell save DC and spellcasting ability modifier. On a failed check, you cast a different spell from the one you intended. Randomly determine the spell you cast by rolling on the table for the level of the spell slot you expended. If the slot is 6th level or higher, roll on the table for 5th-level spells.\n   If you try to cast a cantrip you don't know, the DC for the Intelligence (Arcana) check is 10, and on a failed check, there is no effect.\n\n" + toUni("d6") + "\t" + toUni("spell") + "\n1\tBurning Hands\n2\tChaos Bolt\n3\tColor Spray\n4\tFaerie Fire\n5\tFog Cloud\n6\tThunderwave\n\n\n\n" + toUni("d6") + "\t" + toUni("spell") + "\n1\tBlur\n2\tGust of Wind\n3\tHeat Metal\n4\tMelf's Acid Arrow\n5\tScorching Ray\n6\tShatter\n\n\n\n" + toUni("d6") + "\t" + toUni("spell") + "\n1\tFear\n2\tFeign Death\n3\tFireball\n4\tGaseous Form\n5\tSleet Storm\n6\tStinking Cloud\n\n\n\n" + toUni("d4") + "\t" + toUni("spell") + "\n1\tConfusion\n2\tConjure Minor Elementals\n3\tEvard's Black Tentacles\n4\tIce Storm\n\n\n\n" + toUni("d4") + "\t" + toUni("spell") + "\n1\tAnimate Objects\n2\tCloudkill\n3\tCone of Cold\n4\tFlame Strike",
		attunement: true
	},
	'mizzium mortar': {
		name: "Mizzium Mortar",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This short tube, about 2 feet long and 6 inches in diameter, is made from mizzium, a magically enhanced metal alloy forged by the Izzet League. The end that's pointed toward a target is open, and a glowing ball of molten metal can be seen at the other end as long as the mortar has at least 1 charge remaining.\n   The mortar has 4 charges for the following properties. It regains 1d4 expended charges daily at dawn.\n   " + toUni("Molten Spray") + ". You can expend 1 charge as an action to loose a 30-foot cone of molten mizzium. Each creature in the area must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Mizzium Bombard") + ". You can expend 3 charges as an action to launch a hail of molten projectiles in a 20-foot-radius, 40-foot-high cylinder centered on a point you can see within 60 feet of you. Each creature in the area must make a DC 15 Dexterity saving throw. A creature takes 5d8 fire damage on a failed save, or half as much damage on a successful one."
	},
	'moodmark paint': {
		name: "Moodmark Paint",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "common",
		description: "",
		descriptionFull: "This thick, black paint is stored in a small jar, containing enough paint to apply moodmarks to one creature. The paint is dabbed on the face in spots or markings that often resemble the eyes of insects or spiders. Applying the paint in this way takes 1 minute.\n   For the next 8 hours, the marks change to reflect your mental state. A creature that can see you and makes a successful DC 10 Wisdom (Insight) check can discern whether you are happy, sad, angry, disgusted, surprised, or afraid, as well as the main source of that emotion. For example, you might communicate fear caused by a monster you just saw around the corner, grief at the loss of a friend, or happiness derived from pride in your performance in combat. A dark elf has advantage on this check."
	},
	"pariah's shield" : {
		name: "Pariah's Shield",
		source: ["G", (void 0)],
		type : "shield",
		rarity: "rare",
		description: "",
		descriptionFull: "Soldiers of the Boros Legion consider it an honor to bear this shield, even knowing that it might be the last honor they receive. The front of the shield is sculpted to depict a grieving human face.\n   You gain a +1 bonus to AC for every two allies within 5 feet of you (up to a maximum of +3) while you wield this shield. This bonus is in addition to the shield's normal bonus to AC.\n   When a creature you can see within 5 feet of you takes damage, you can use your reaction to take that damage, instead of the creature taking it. When you do so, the damage type changes to force.",
		attunement: true,
		weight: 6
	},
	'peregrine mask': {
		name: "Peregrine Mask",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "very rare",
		description: "",
		descriptionFull: "While wearing this winged helm, you have a flying speed of 60 feet. In addition, you have advantage on initiative rolls.",
		attunement: true
	},
	pyroconverger: {
		name: "Pyroconverger",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "A Pyroconverger is an Izzet-made flamethrower. It carries a risk of malfunction each time you use it.\n   As an action, you can cause the Pyroconverger to project fire in a 10-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one.\n   Each time you use the Pyroconverger, roll a d10 and add the number of times you have used it since your last long rest. If the total is 11 or higher, the Pyroconverger malfunctions: you take 4d6 fire damage, and you can't use the Pyroconverger again until you finish a long rest.",
		attunement: true
	},
	'rakdos riteknife': {
		name: "Rakdos Riteknife",
		source: ["G", (void 0)],
		type : "weapon ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. Its blade is cruelly serrated, and its hilt resembles a demonic head and wings. Whenever you slay a creature with an attack using the dagger, the creature's soul is imprisoned inside the dagger, and that creature can be restored to life only by a Wish spell. The dagger can hold a maximum of five souls.\n   For each soul imprisoned in the dagger, your attacks with it deal an extra 1d4 necrotic damage on a hit. While the dagger is within 5 feet of you, your dreams are haunted by whispers from the trapped souls.\n   The dagger has the following additional properties.\n   " + toUni("Siphon Vitality") + ". As a bonus action, you can release any number of stored souls from the dagger to regain 1d10 hit points per soul released.\n   " + toUni("Annihilation") + ". If the dagger holds five souls, you can use this property: As a reaction immediately after you hit a creature with the dagger and deal damage to that target, you can release all five souls. If the target now has fewer than 75 hit points, it must succeed on a DC 15 Constitution saving throw or die. If the target dies, you can't use this property again until you finish a long rest.",
		attunement: true,
		weight: 1
	},
	'skyblinder staff': {
		name: "Skyblinder Staff",
		source: ["G", (void 0)],
		type : "staff",
		rarity: "uncommon",
		description: "",
		descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While holding it, you gain a +1 bonus to spell attack rolls.\n   If a flying creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to hold the staff aloft and cause it to flare with light. The attacker has disadvantage on the attack roll, and it must succeed on a DC 15 Constitution saving throw or be blinded until the start of its next turn.",
		attunement: true,
		weight: 4
	},
	"spies' murmur" : {
		name: "Spies' Murmur",
		source: ["G", (void 0)],
		type: "wondrous item",
		rarity: "uncommon",
		description: "",
		descriptionFull: "This headpiece, crafted from dark metal, is worn curved around the ear. If you know a creature wearing another Spies' Murmur and that creature is within 1 mile of you, you can communicate telepathically with each other. As a bonus action, you can allow that creature to hear everything you hear for 1 hour. You can end this effect as a bonus action, and it ends if you're incapacitated.",
		attunement: true
	},
	sunforger: {
		name: "Sunforger",
		source: ["G", (void 0)],
		type : "weapon ()",
		rarity: "rare",
		description: "",
		descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   As an action, you can hurl the weapon up to 120 feet to a point you can see. When it reaches that point, the weapon vanishes in an explosion, and each creature in a 20-foot-radius sphere centered on that point must make a DC 15 Dexterity saving throw, taking 6d6 fire damage on a failed save, or half as much damage on a successful one. Afterward, you can use an action to cause the weapon to reappear in your empty hand. You can't cause it to explode again until you finish a short or long rest.\n   If you don't call the weapon back to your hand, it reappears at the point where it exploded when you are no longer attuned to it or when 24 hours have passed.",
		attunement: true,
		weight: 2
	},
	'sword of the paruns': {
		name: "Sword of the Paruns",
		source: ["G", (void 0)],
		type : "weapon ()",
		rarity: "very rare",
		description: "",
		descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. Additionally, once on each of your turns, you can use one of the following properties if you're holding the sword:\n \u2022 Immediately after you use the Attack action to attack with the sword, you can enable one creature within 60 feet of you to use its reaction to make one weapon attack.\n \u2022 Immediately after you take the Dash action, you can enable one creature within 60 feet of you to use its reaction to move up to its speed.\n \u2022 Immediately after you take the Dodge action, you can enable one creature within 60 feet of you to use its reaction to gain the benefits of the Dodge action.",
		attunement: true,
		weight: 3
	},
	'voyager staff': {
		name: "Voyager Staff",
		source: ["G", (void 0)],
		type : "staff",
		rarity: "very rare",
		description: "",
		descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While you hold it, you gain a +1 bonus to spell attack rolls.\n   This staff has 10 charges. While holding it, you can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Banishment (4 charges), Blink (3 charges), Misty Step (2 charges), Passwall (5 charges), or Teleport (7 charges).\n   The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes forever.",
		attunement: true,
		weight: 4
	}
},
LLoK: {
	'deck of several things': {
		name: "Deck of Several Things",
		source: ["LLoK", 53],
		type: "wondrous item",
		rarity: "legendary",
		description: "",
		descriptionFull: "Stored in a leather pouch, this unique deck contains twenty-two colored cards made of some strong but unknown metal, each of which features a design printed as a mosaic of raised dots. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n   Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.\n\n" + toUni("1d22") + "\t" + toUni("Playing Card") + "\t" + toUni("Card") + "\n1\tAce of diamonds\tVizier\n2\tKing of diamonds\tSun\n3\tQueen of diamonds\tMoon\n4\tJack of diamonds\tStar\n5\tTwo of diamonds\tComet\n6\tAce of hearts\tThe Fates\n7\tKing of hearts\tThrone\n8\tQueen of hearts\tKey\n9\tJack of hearts\tKnight\n10\tTwo of hearts\tGem\n11\tAce of clubs\tTalons\n12\tKing of clubs\tThe Void\n13\tQueen of clubs\tFlames\n14\tJack of clubs\tSkull\n15\tTwo of clubs\tIdiot\n16\tAce of spades\tDonjon\n17\tKing of spades\tRuin\n18\tQueen of spades\tEuryale\n19\tJack of spades\tRogue\n20\tTwo of spades\tBalance\n21\tJoker (with TM)\tFool\n22\tJoker (no TM)\tJester\n\n\n   " + toUni("Balance") + ". Your mind suffers a wrenching alteration, causing your alignment to change for the duration of the adventure. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.\n   " + toUni("Comet") + ". If you single-handedly defeat the next hostile monster or group of monsters you encounter, you have advantage on ability checks made using one skill of your choice for the duration of the adventure. Otherwise, this card has no effect.\n   " + toUni("Donjon") + ". You are instantly teleported to and confined within the prison of the Monastery of the Distressed Body (area M6). Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You draw no more cards.\n   " + toUni("Euryale") + ". The card's medusa-like visage curses you. You take a \u22121 penalty on saving throws for the duration of the adventure.\n   " + toUni("The Fates") + ". Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other point during the adventure.\n   " + toUni("Flames") + ". The Grand Master of the Monastery of the Distressed Body becomes your enemy. The bone devil seeks your ruin, savoring your suffering before attempting to slay you. If the Grand Master has already been defeated, you gain the enmity of Garret Levistusson's patron\u2014a similarly powerful devil.\n   " + toUni("Fool") + ". For the duration of the adventure, you lose proficiency with one skill or gain disadvantage on all checks made with one skill (with the skill and the penalty determined by the DM). Discard this card and draw from the deck again, counting both draws as one of your declared draws.\n   " + toUni("Gem") + ". The 1,000 gp hoard of the leprechaun from the Wilderness Encounters table (see appendix A) appears at your feet. If that treasure has already been claimed, you gain an equivalent hoard.\n   " + toUni("Idiot") + ". Reduce your Intelligence by 1d4 + 1 (to a minimum score of 1) for the duration of the adventure. You can draw one additional card beyond your declared draws.\n   " + toUni("Jester") + ". You gain proficiency in a skill of your choice for the duration of the adventure, or you can draw two additional cards beyond your declared draws.\n   " + toUni("Key") + ". A common or uncommon magic weapon with which you are proficient, or a spell scroll featuring a spell of a level you can cast, appears in your hands. The DM chooses the weapon or spell, which you possess for the duration of this adventure.\n   " + toUni("Knight") + ". You gain the service of any of the NPCs in the \"Hirelings\" section not currently with the party, who appears in a space you choose within 30 feet of you. The NPC serves you loyally for the duration of the adventure, believing that the fates have drawn them to you. You control this character.\n   " + toUni("Moon") + ". You are granted the ability to cast any spell of 5th level or lower, and can use that ability 1d3 times for the duration of the adventure.\n   " + toUni("Rogue") + ". An NPC of the DM's choice becomes secretly hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Any enchantment spell cast on the NPC at 6th level or higher can end the NPC's hostility toward you.\n   " + toUni("Ruin") + ". All forms of wealth that you carry or own, other than magic items, are lost to you. This wealth can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Skull") + ". You summon an avatar of death\u2014a mechanical skeleton (use bone naga statistics) clad in a tattered black robe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.\n   " + toUni("Star") + ". Increase one of your ability scores by 1 for the duration of the adventure. The score can exceed 20 but can't exceed 24.\n   " + toUni("Sun") + ". You gain proficiency in the skill of your choice for the duration of the adventure. In addition, a common or uncommon wondrous item appears in your hands. The DM chooses the item, which you possess for the duration of this adventure.\n   " + toUni("Talons") + ". Every magic item you wear or carry is lost to you. These items can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Throne") + ". You gain proficiency in the Persuasion skill and you double your proficiency bonus on checks made with that skill for the duration of the adventure. In addition, the Monastery of the Distressed Body's brains in jars regard you thereafter as the monastery's rightful master. You must defeat or otherwise clear out the Grand Master and its servants before you can claim the monastery as yours.\n   " + toUni("Vizier") + ". At any one time you choose within the duration of the adventure, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.\n   " + toUni("The Void") + ". This black card spells disaster. Your soul is drawn from your body and held within machinery in either the control room of the Monastery of the Distressed Body (area M8) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure. While your soul is trapped in this way, your body is incapacitated. Divination, Contact Other Plane, or a similar spell of 4th level or higher reveals the location of the machinery that holds your soul. You draw no more cards."
	},
	"galder's bubble pipe" : {
		name: "Galder's Bubble Pipe",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "This finely carved pipe blows odorless bubbles instead of smoke when used. The pipe has 3 charges, and it regains all spent charges daily at dawn. While you hold the pipe, you can expend charges to gain access to the following properties:\n \u2022 You can cast Fog Cloud as an action (1 charge).\n \u2022 You can cast Misty Step as a bonus action (2 charges).\n \u2022 You can summon a steam mephit as an action (3 charges). The mephit is friendly to you, obeys your verbal commands, and acts on its own turn in the initiative order. It disappears in a harmless puff of steam after 1 minute or if it ends its turn more than 60 feet from the pipe.",
		attunement: true
	},
	"heward's hireling armor" : {
		name: "Heward's Hireling Armor",
		source: ["LLoK", 55],
		type : "armor ()",
		rarity: "very rare",
		description: "",
		descriptionFull: "A number of Kwalish's experiments were attempts to research the works of the legendary mage Heward, who first crafted what he named hireling armor. While wearing this armor, you gain a +1 bonus to AC. In addition, the armor's animated straps can assist with the drawing and sheathing of weapons, such that you can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.\n   This armor also has six pockets, each of which is an extradimensional space. Each pocket can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The armor always weighs 10 pounds, regardless of its pockets' contents. Placing an object into one of the armor's pockets follows the normal rules for interacting with objects. Retrieving an item from a pocket of the armor requires you to use an action. When you reach into a pocket for a specific item, the item is always magically on top.\n   Placing the armor inside an extradimensional space created by a bag of holding, a Heward's handy haversack, or a similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight: 10
	},
	'ioun stone, supreme intellect': {
		name: "Ioun Stone, Supreme Intellect",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence checks while this faceted sphere orbits your head.",
		attunement: true
	},
	'ioun stone, historical knowledge': {
		name: "Ioun Stone, Historical Knowledge",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the History skill, or a +1 bonus to checks with that skill if already proficient, while this polished, steely sphere orbits your head.",
		attunement: true
	},
	'ioun stone, natural knowledge': {
		name: "Ioun Stone, Natural Knowledge",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Nature skill, or a +1 bonus to checks with that skill if already proficient, while this burnished, brassy stone orbits your head.",
		attunement: true
	},
	'ioun stone, religious knowledge': {
		name: "Ioun Stone, Religious Knowledge",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Religion skill, or a +1 bonus to checks with that skill if already proficient, while this tiny golden gem orbits your head.",
		attunement: true
	},
	'ioun stone, language knowledge': {
		name: "Ioun Stone, Language Knowledge",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You are fluent in one additional language while this pulsating bit of red jeweled crystal orbits your head. The DM chooses the language bestowed by the stone.",
		attunement: true
	},
	'ioun stone, self-preservation': {
		name: "Ioun Stone, Self-Preservation",
		source: ["LLoK", 55],
		type: "wondrous item",
		rarity: "rare",
		description: "",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence saving throws while this silvery gem orbits your head.",
		attunement: true
	},
	'leather golem armor': {
		name: "Leather Golem Armor",
		source: ["LLoK", 55],
		type : "armor ()",
		rarity: "rare",
		description: "",
		descriptionFull: "Strange rituals have repurposed the body of a flesh golem into this partially sentient suit of leather armor. While wearing this armor, you gain a +1 bonus to AC and to saving throws against spells and other magical effects. In addition, you gain the following properties:\n \u2022 " + toUni("Immutable Form") + ". You are immune to any spell or effect that would alter your form.\n \u2022 " + toUni("Lightning Absorption") + ". You gain resistance to lightning damage. Whenever you take lightning damage, you gain 5 temporary hit points.\n   " + toUni("Curse") + ". This armor is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the armor. In addition, while you wear the cursed armor, you gain the following properties:\n \u2022 " + toUni("Aversion of Fire") + ". If you take fire damage, you have disadvantage on attack rolls and ability checks until the end of your next turn.\n \u2022 " + toUni("Berserk") + ". Whenever a critical hit is made against you, roll a d6. On a 6, the armor causes you to go berserk. On each of your turns while berserk, you attack the nearest creature you can see. If no creature is near enough to move to and attack, you attack an object, with preference for an object smaller than yourself. Once the armor causes you to go berserk, it cannot be removed. You continue to attack until you are incapacitated or until another creature is able to calm you with appropriate magic (such as a calm emotions spell) or a successful DC 15 Charisma (Persuasion) check.",
		attunement: true,
		weight: 10,
		cursed: true
	},
	'powered armor': {
		name: "Powered Armor",
		source: ["LLoK", 56],
		type : "armor ()",
		rarity: "legendary",
		description: "",
		descriptionFull: "Powered armor resembles a suit of unusual plate armor, with finely articulated joints connected by an oily, black, leather-like material. The armor has been worked to create the appearance of a heavily muscled warrior, and its great helm is unusual in that it has no openings\u2014only a broad glass plate in the front with a second piece of glass above it. Strange plates, tubing, and large metal bosses adorn the armor in seemingly random fashion. On the back of the armor's left gauntlet is a rectangular metal box, from which projects a short rod tipped with a cone-shaped red crystal.\n   While wearing this armor, you gain the following benefits:\n \u2022 You have a +1 bonus to AC.\n \u2022 Your Strength score is 18 (this has no effect if your Strength is already 18 or higher).\n \u2022 You have advantage on death saving throws.\n\nThe armor has further capabilities that can be powered either by energy cells or by your own life energy. You can use a bonus action to draw power from an energy cell or sacrifice hit points to gain one of the following benefits:\n \u2022 Emit a force field to gain 2d6 + 5 temporary hit points (1 charge or 5 hit points).\n \u2022 Activate boosters to gain a flying speed of 15 feet for 1 minute (1 charge or 5 hit points).\n \u2022 Fire arm-mounted laser: +8 to hit, range 120 feet, one target. 2d6 radiant damage (1 charge or 5 hit points).\n \u2022 Translate any writing you can see in any nonmagical language, to a total of one thousand words over 1 minute (1 charge or 5 hit points).\n \u2022 Fill the armor with air, allowing you to breathe normally in any environment for up to 1 hour (1 charge or 5 hit points).\n \u2022 Gain darkvision to a range of 60 feet for up to 1 hour (1 charge or 5 hit points).\n\nThe armor can accept only one energy cell at a time. It is found with one energy cell attached, containing 2d10 charges.",
		attunement: true,
		weight: 65
	}
}
