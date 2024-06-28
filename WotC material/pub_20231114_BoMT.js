var iFileName = "pub_20231114_BoMT.js";
RequiredSheetVersion("13.1.14");
// This file adds the Character Options content from the "The Book of Many Things" book (from the "The Deck of Many Things" set) to MPMB's Character Record Sheet

// Define the source
SourceList["BoMT"] = {
	name : "The Book of Many Things",
	abbreviation : "BoMT",
	abbreviationSpellsheet : "MT",
	group : "Primary Sources",
	url : "https://dndstore.wizards.com/us/en/product/865604/the-deck-of-many-things-digital-plus-physical-bundle",
	date : "2023/11/14"
};


BackgroundList["rewarded"] = {
	regExpSearch : /rewarded/i,
	name : "Rewarded",
	source : [["BoMT", 57]],
	skills : ["Insight", "Persuasion"],
	gold : 18,
	languageProfs : [1],
	toolProfs : [["Gaming set", 1]],
	equipleft : [
		["Paper, sheets of", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Gaming set matching my proficiency", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Pouch (with coins)", "", 1]
	],
	feature : "Fortune's Favor",
	trait : [
		"A safe home is a foundation on which anything else can be built. (Key, Throne)",
		"I was elevated to heights I could never otherwise attain, and I won't waste my fortune. (Star, Sun)",
		"I try to be a source of inspiration and joy to others. Life is never as bad as you think! (Euryale, Jester)",
		"Courage and boldness can carry the day when all else fails. (Comet, Knight)",
		"My good fortune means I can lift others up as well. (Gem, Moon)",
		"Having the right answers is the first step to solving any problem, no matter how dire. (Fates, Sage)"
	],
	extra : [
		"Select a Trinket",
		"Perfumed scarf from admirer",
		"Crystal glows as candle",
		"Letter from far-off influential",
		"Symbol with unknown meaning",
		"Ever-crisp playing card",
		"Half a medallion"
	]
};
BackgroundFeatureList["fortune's favor"] = {
	description : "I have unexpected good fortune in life, caused by something like a genie who granted me wishes, extraordinary luck during a game, me honing my skills to endure a supernatural trial, or some other force that transformed my life. This boon is reflected in my choice of one free feat: Lucky, Magic Initiate, or Skilled.",
	source : [["BoMT", 57]],
	eval : function() {
		if (!IsNotImport) return;
		var featOptions = ['lucky', 'magic initiate', 'skilled'].filter(feat => CurrentFeats.known.indexOf(feat) === -1);
		if (!featOptions.length) {
			return;
		} else if (featOptions.length === 1) {
			var selectedFeat = featOptions[0];
		} else {
			var featNames = featOptions.map(feat => FeatsList[feat].name);
			var selectedFeat = featOptions[AskUserOptions("Fortune's Favor bonus feat", "The Fortune's Favor background feature offers a choice of a bonus feat.", featNames, 'radio', true, 'You can change what you select here by changing the feat selection in the corresponding section of the sheet.\nBe aware that if you change the selected feat and remove this background feature, the changed feat will not automatically be removed.', true)];
		}
		AddFeat(FeatsList[selectedFeat].name);
		SetFeatureChoice("background feature", "fortune's favor", false, selectedFeat);
	},
	removeeval : function() {
		var selectedFeat = GetFeatureChoice("background feature", "fortune's favor");
		if (selectedFeat) RemoveFeat(selectedFeat);
	}
};

BackgroundList["ruined"] = {
	regExpSearch : /ruined/i,
	name : "Ruined",
	source : [["BoMT", 58]],
	skills : ["Stealth", "Survival"],
	gold : 13,
	languageProfs : [1],
	toolProfs : [["Gaming set", 1]],
	equipleft : [
		["Cracked hourglass", "", 1],
		["Rusty manacles", "", 6],
		["Bottle, glass (half-empty)", "", 2],
		["Hunting trap", "", 25],
		["Gaming set matching my proficiency", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Pouch (with coins)", "", 1]
	],
	feature : "Still Standing",
	trait : [
		"I've changed from my past, and I work to live up to my new path. (Balance, Throne)",
		"Every moment is a gift I refuse to squander. (Euryale, Skull)",
		"Now that I've overcome having nothing, I can survive anything. (Fool, Ruin, Talons)",
		"I know enemies are set against me, and I always prepare for the worst. (Flames, Rogue)",
		"I interpret every event as part of a larger pattern I just haven't worked out yet. (Puzzle, Star)",
		"I must make up for so much time I've already lost. (Donjon, Void)"
	],
	extra : [
		"Select a Trinket",
		"Rusted scrap of family heirloom",
		"Ancient land deed, lost in obscurity",
		"Bauble once imbued with powerful magic",
		"Battered, pierced playing card",
		"Yellowed whispering humanoid tooth",
		"Keepsake from friend turned enemy"
	]
};
BackgroundFeatureList["still standing"] = {
	description : "I have weathered ruinous misfortune in my life and I possess hidden reserves because of this. Possibly I've had to keep my senses sharp, had to redouble my efforts to reclaim what is mine, had to stoically persevered through it, or experienced something else transformative. How I've dealt with this is reflected in my choice of one free feat: Alert, Skilled, or Tough.",
	source : [["BoMT", 58]],
	eval : function() {
		if (!IsNotImport) return;
		var featOptions = ['alert', 'skilled', 'tough'].filter(feat => CurrentFeats.known.indexOf(feat) === -1);
		if (!featOptions.length) {
			return;
		} else if (featOptions.length === 1) {
			var selectedFeat = featOptions[0];
		} else {
			var featNames = featOptions.map(feat => FeatsList[feat].name);
			var selectedFeat = featOptions[AskUserOptions("Still Standing bonus feat", "The Still Standing background feature offers a choice of a bonus feat.", featNames, 'radio', true, 'You can change what you select here by changing the feat selection in the corresponding section of the sheet.\nBe aware that if you change the selected feat and remove this background feature, the changed feat will not automatically be removed.', true)];
		}
		AddFeat(FeatsList[selectedFeat].name);
		SetFeatureChoice("background feature", "still standing", false, selectedFeat);
	},
	removeeval : function() {
		var selectedFeat = GetFeatureChoice("background feature", "still standing");
		if (selectedFeat) RemoveFeat(selectedFeat);
	}
};


FeatsList["cartomancer"] = {
	name : "Cartomancer",
	source : [["BoMT", 49]],
	description : 'I can use a card deck as a spellcasting focus. I learn and can do stage magic with Prestidigitation. I conceal its components as card tricks when doing so. When I finish a long rest, I can store a spell from my class\' spell list into a card, see "Hidden Ace" notes.',
	descriptionFull : "You have learned to channel your magic through a deck of cards. You can use a card deck as your spellcasting focus, and you gain the following benefits:"+
	"\n   " + toUni("Card Tricks") + ". You learn the Prestidigitation cantrip and can use it to create illusions that duplicate the effects of stage magic. When you use Prestidigitation in this way, you can conceal the verbal and somatic components of the spell as ordinary conversation and card handling."+
	"\n   " + toUni("Hidden Ace") + ". When you finish a long rest, you can choose one spell from your class's spell list and imbue that spell into a card. The chosen spell must have a casting time of 1 action, and it must be a level for which you have spell slots. The card remains imbued with this spell for 8 hours. While the card is imbued with the spell, you can use a bonus action to flourish the card and cast the spell within. The card then immediately loses its magic.",
	prerequisite : "4th-level, Spellcasting feature",
	prereqeval : function(v) { return v.characterLevel >= 4 && v.isSpellcastingClass; },
	spellcastingBonus : [{
		name : "Cartomancer",
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"prestidigitation" : {
			components : "V,S*",
			compMaterial : "When I duplicate the effects of stage magic, I can conceal the verbal and somatic components of the spell as ordinary conversation and card handling.",
			description : "Harmless sensation, illusory image, snuff light, clean/soil/chill/warm/flavor, stage magic (hide comp)",
			changes : "When I duplicate the effects of stage magic, I can conceal the verbal and somatic components of the spell as ordinary conversation and card handling."
		}
	},
	action : [["bonus action", "Hidden Ace (use imbued card)"]],
	toNotesPage : [{
		name : "Hidden Ace",
		page3notes : true,
		note : [
			"When I finish a long rest, I can imbue a spell from my class' spell list into a card for 8 hours",
			"The spell must have a casting time of 1 action and be a level for which I have spell slots",
			"As a bonus action, I can flourish the card and cast the spell within; It then loses its magic"
		]
	}]
};


var BoMT = {
	toDescrFull : function (sDescr) {
		if (typeof sDescr !== "string") sDescr = sDescr.join("\n   ");
		return sDescr.replace(/\[\[.*?\]\]/g, "$1")
			.replace(/>>(.*?)<</g, function(a, match) { return toUni(match); });
	},
	to1stPerson : function (sDescr, joinStr) {
		if (typeof sDescr === "string") sDescr = [sDescr];
		return desc(sDescr, joinStr).replace(/\bf(oo|ee)t\b/ig, "ft")
			.replace(/you aren't/ig, "I'm not").replace(/you were/ig, "I was")
			.replace(/you are|you're/ig, "I am").replace(/\byou\b/ig, "I")
			.replace(/(aid|freeing|around|resurrected|beneath|between|\w\ws|by|of|to|for|on) I\b/ig, "$1 me")
			.replace(/(toward) I\b/ig, "$1s me")
			.replace(/(cards|items) me\b/ig, "$1 I")
			.replace(/\bI (to|a|an)\b/ig, "me $1")
			.replace(/your/g, "my").replace(/Your/g, "My")
			.replace(/\[\[.*?\]\]/g, "")
			.replace(/(\n *|\u2022 |\u25C6 )>>(.*?)( \(.*?\))?<<\. /g, function(a, p1, p2, p3, p4) {
				if (/\n   /.test(p1)) {
					return "\n\n   " + p2.toUpperCase() + p3.toLowerCase() + "\n   ";
				} else {
					return p1 + p2 + p3 + ": ";
				}
			});
	},
	"voidwalker armor" : "This armor is cursed, and attuning to it extends the curse to you. As long as you remain cursed, you're unwilling to part with the armor. Taking it off fails to end the curse. While cursed in this way, you feel disconnected from your body, continuously hearing whispers that call for you to join them. Whenever you finish a long rest while cursed, you must make a DC 11 Charisma saving throw. On a failed save, your soul is drawn from your body and trapped in an object on a different plane of existence. The object and location of this object are chosen by the DM[[ (but might be the House of Cards; see chapter 18)]]. While your soul is trapped in this way, your body is inert and doesn't age or require sustenance. Destroying the object frees your soul; otherwise, only a Wish spell can restore your soul to your body.",
	"telescopic transporter" : "This enormous telescope allows you to view distant celestial objects, including stars, Wildspace systems, and Astral Sea phenomena like the cities of deities or the petrified husks of dead gods."+
		"\n   After spending 1 hour calibrating the telescope, you can attempt to travel to the planet or celestial body at which the telescope is currently pointed. At the end of the hour, you make a DC 17 Intelligence (Arcana) check. On a successful check, you and eight other willing creatures touching the telescope, along with everything all travelers are wearing and carrying, safely teleport to unoccupied spaces at the intended destination. On a failed check, a mishap occurs instead. The DM rolls on the table below to determine the mishap or chooses a mishap that's good for the campaign."+
		"\n\nd6\tMishap"+
		"\n 1\tThe travelers appear adrift in the Astral Sea."+
		"\n 2\tThe travelers appear on a different plane of existence, determined randomly or chosen by the DM."+
		"\n 3\tExcess cosmic energy overloads the telescope, causing it to explode. Each creature within 60 feet of the telescope takes 8d6 necrotic damage. Any Humanoid who survives this damage is transformed into a different kind of creature, as if it had been subject to the Reincarnate spell."+
		"\n 4\tA creature from the Astral Sea (such as a githyanki knight) appears within 60 feet of the telescope. The DM decides its attitude."+
		"\n 5\tThe travelers appear on a different planet or celestial body in the Wildspace system nearest to their target destination."+
		"\n 6\tThe travelers arrive at their intended destination, but they each appear coated in harmless slime.",
	"sage's signet" : {
		"augury" : {
			time : "1 a",
			changes : "Using the Sage's Signet I can cast Augury once per dawn as an action."
		}
	},
	"shrieking greaves" : "The greaves are cursed, and becoming attuned to them extends the curse to you. You can't remove the greaves or end your attunement to them until you are targeted by a Remove Curse spell or similar magic."+
	"\n   You have disadvantage on saving throws against the frightened condition. Whenever you start your turn frightened, the greaves release an ear-piercing scream. You and each creature within 10 feet of you must make a DC 15 Constitution saving throw, taking 2d8 thunder damage on a failed save, or half as much damage on a successful one.",
	"spindle of fate" : [
		">>Battle Foreknowledge<<. When you roll initiative, you can expend 1 charge to add or subtract your proficiency bonus from the total roll.",
		">>Doom Foretold<<. As an action, you can expend 2 charges to target a creature within 30 feet of yourself and invoke that creature's doom. While the target is on the same plane of existence as you are, you can sense the direction to its location, and you know the direction of its movement if it's in motion. Additionally, once per turn when you deal damage to the doomed creature, you can roll 1d6 and add the number rolled to the damage roll. These benefits persist for 1 hour or until you target another creature with this effect.",
		">>Twist of Fate<<. When a creature within 60 feet of you makes a saving throw or an attack roll, you can use your reaction to expend 3 charges and alter the outcome, turning a failed saving throw into a successful one, a missed attack roll into a hit, or vice versa."
	],
	"starshot crossbow" : [
		"This crossbow is crafted from blackened wood, and its limbs bear pearl inlays depicting constellations. You ignore the loading property with this crossbow. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target. The crossbow has 3 charges and regains 1d3 expended charges daily at dawn.",
		">>Constellations<<. The crossbow is decorated with three constellations. As a bonus action, you can tap one of the constellations to invoke it, expending 1 charge and producing one of the following effects:",
		" \u2022 >>Balance<<. The next time you hit a creature with a ranged attack roll using this crossbow before the end of your next turn, you or another creature of your choice within 30 feet of you can regain hit points equal to 1d8 plus your proficiency bonus.",
		" \u2022 >>Flames<<. Until the end of your next turn, when you hit a creature with a ranged attack roll using this crossbow, the attack deals an additional 2d8 fire damage.",
		" \u2022 >>Rogue<<. Until the end of your next turn, you have the invisible condition, and anything you are wearing or carrying is also invisible."
	],
	"deck of miscellany" : [
		"Playing Card\t\tItem(s)",
		"  [3\u2666] Three of diamonds  \tWooden abacus",
		"  [4\u2666] Four of diamonds  \tFour vials of perfume",
		"  [5\u2666] Five of diamonds  \t5 days' worth of rations",
		"  [6\u2666] Six of diamonds\t\tIron pot",
		"  [7\u2666] Seven of diamonds  \tDisguise kit",
		"  [8\u2666] Eight of diamonds  \tWindow (up to 5 feet wide and 5 feet high), which you can place on a vertical surface up to 5 feet thick and which allows you to look through the surface",
		"  [9\u2666] Nine of diamonds  \tManacles",
		"[10\u2666] Ten of diamonds  \tTen sheets of parchment",
		"  [3\u2665] Three of hearts\t\tThree dagger",
		"  [4\u2665] Four of hearts\t\tFour flasks of oil",
		"  [5\u2665] Five of hearts\t\tFive silk robes",
		"  [6\u2665] Six of hearts\t\tForgery kit",
		"  [7\u2665] Seven of hearts\t\tQuarterstaff",
		"  [8\u2665] Eight of hearts\t\tFishing tackle",
		"  [9\u2665] Nine of hearts\t\tLeather pouch containing 18 gp",
		"[10\u2665] Ten of hearts\t\t10 crossbow bolt",
		"  [3\u2663] Three of clubs\t\tThree books, written in Common, about random historical events",
		"  [4\u2663] Four of clubs\t\tCanvas tent",
		"  [5\u2663] Five of clubs\t\t50 feet of coiled silk rope",
		"  [6\u2663] Six of clubs\t\tTwo crowbars",
		"  [7\u2663] Seven of clubs\t\tHealer's kit",
		"  [8\u2663] Eight of clubs\t\tEight gems worth 5 gp each",
		"  [9\u2663] Nine of clubs\t\tLamp",
		"[10\u2663] Ten of clubs\t\t10 feet of iron chain",
		"  [3\u2660] Three of spades\t\tThree spears",
		"  [4\u2660] Four of spades\t\tSteel mirror",
		"  [5\u2660] Five of spades\t\t15-foot wooden pole",
		"  [6\u2660] Six of spades\t\tBurlap sack",
		"  [7\u2660] Seven of spades\t\tTwo sets of fine clothes",
		"  [8\u2660] Eight of spades\t\tShovel",
		"  [9\u2660] Nine of spades\t\tLight hammer",
		"[10\u2660] Ten of spades\t\tTen arrows"
	],
	"deck of many more things" : {
		features : [
			"Like the Deck of Many Things, the Deck of Many More Things manifests differently on various worlds. While it can include fewer or different cards, it frequently appears with a Deck of Many Things as part of a combined deck of sixty-six illuminated cards. The combined deck is usually protected by a box or pouch. The forty-four cards of the Deck of Many More Things bear similar imagery to those in the Deck of Many Things and have potent magical effects, which are detailed later in this description. Notably, cards from the Deck of Many More Things are more likely to be beneficial, though about a third of them are still dangerous.",
			"Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly. Unless a card allows you to draw additional cards, any cards drawn exceeding this number have no effect.",
			"As soon as you draw a card, its magic takes effect. You must draw each card you declared no more than 1 hour after the previous draw. Unless a card states otherwise, if you fail to draw the chosen number, the remaining number of cards fly from the deck and take effect simultaneously.",
			"Unless it is the Fool or the Jester card, a drawn card immediately takes effect, fades from existence, and reappears in the deck, making it possible to draw the same card multiple times.",
			"The DM can use the physical cards provided in The Deck of Many Things card set to build a combined Deck of Many Things and Deck of Many More Things, including whichever cards they desire. Alternatively, roll on the Deck of Many More Things table below to randomly determine what cards are drawn.",
			"\n1d100\tCard"+	"\t\t1d100\tCard",
			"01\tAberration"+	"\t\t   34\tMine",
			"02\tBalance*"+		"\t\t   35\tMonstrosity",
			"03\tBeast"+		"\t\t   36\tMoon*",
			"04\tBook"+			"\t\t   37\tOoze",
			"05\tBridge"+		"\t\t   38\tPath",
			"06\tCampfire"+		"\t\t   39\tPit",
			"07\tCavern"+		"\t\t   40\tPlant",
			"08\tCelestial"+	"\t\t   41\tPriest",
			"09\tComet*"+		"\t\t   42\tPrisoner",
			"10\tConstruct"+	"\t\t   43\tPuzzle*",
			"11\tCorpse"+		"\t\t   44\tRing",
			"12\tCrossroads"+	"\t\t   45\tRogue*",
			"13\tDonjon*"+		"\t\t   46\tRuin*",
			"14\tDoor"+			"\t\t   47\tSage*",
			"15\tDragon"+		"\t\t   48\tShield",
			"16\tElemental"+	"\t\t   49\tShip",
			"17\tEuryale*"+		"\t\t   50\tSkull*",
			"18\tExpert"+		"\t\t   51\tStaff",
			"19\tFates*"+		"\t\t   52\tStairway",
			"20\tFey"+			"\t\t   53\tStar*",
			"21\tFiend"+		"\t\t   54\tStatue",
			"22\tFlames*"+		"\t\t   55\tSun*",
			"23\tFool*"+		"\t\t   56\tTalons*",
			"24\tGem*"+			"\t\t   57\tTavern",
			"25\tGiant"+		"\t\t   58\tTemple",
			"26\tHumanoid"+		"\t\t   59\tThrone*",
			"27\tJester*"+		"\t\t   60\tTomb",
			"28\tKey*"+			"\t\t   61\tTower",
			"29\tKnight*"+		"\t\t   62\tTree",
			"30\tLance"+		"\t\t   63\tUndead",
			"31\tMage"+			"\t\t   64\tVoid*",
			"32\tMap"+			"\t\t   65\tWarrior",
			"33\tMaze"+			"\t\t   66\tWell",
			"67-00\tRoll again\n",
			"* Found in the Deck of Many Things as depicted in the Dungeon Master's Guide"
		],
		cards : [
			">>Aberration<<. You gain telepathy within a range of 90 feet.",
			">>Beast<<. You immediately transform into a random Beast with a CR of 5 or lower. Your game statistics—including your ability scores, hit points, and possible actions—are replaced by the Beast's game statistics, and any nonmagical equipment you're wearing or carrying melds into your new form and can't be used. Any magic items you're carrying drop in an unoccupied space within 5 feet of your new form."+
			"\n   You remain transformed in this way for 2d12 days; nothing can alter your form while you're under the effects of this card, but the Wish spell can end the transformation early. When you revert to your normal form, you return to the same state you were in when you initially transformed.",
			">>Book<<. You gain the ability to speak, read, and write 1d6 + 2 languages of your choice.",
			">>Bridge<<. You gain the ability to cast the Time Stop spell 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Campfire<<. You immediately gain the benefits of finishing a long rest.",
			">>Cavern<<. You gain a climbing speed equal to your walking speed. You also gain the ability to move up, down, across vertical surfaces, and along ceilings, while leaving your hands free.",
			">>Celestial<<. You sprout a pair of softly luminescent, feathered wings from your back and gain a flying speed of 30 feet.",
			">>Construct<<. A homunculus appears in an unoccupied space within 5 feet of you. The appearance of the homunculus is determined by the DM, and the homunculus treats you as its creator.",
			">>Corpse<<. You immediately drop to 0 hit points, have the unconscious condition, and must begin making death saving throws. Spells and other magical effects that restore hit points have no effect on you until you are stabilized. If you fail three death saving throws, you die and can be resurrected only by the Wish spell.",
			">>Crossroads<<. Roll a d20. If the roll is even, you age 1d10 years. If the roll is odd, you become younger by 1d10 years, to a minimum of 1 year. This effect can be undone only by the Wish spell, divine intervention, or similar magic.",
			">>Door<<. You gain the ability to cast the Gate spell 1d4 times, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Dragon<<. A dragon egg appears at your feet and immediately hatches into a dragon wyrmling. The type of dragon is chosen by the DM. The wyrmling views you as its parent and is staunchly loyal to you and your allies.",
			">>Elemental<<. You become immune to one of the following damage types (choose immediately upon drawing this card): acid, cold, fire, lightning, or thunder.",
			">>Expert<<. Your Dexterity score increases by 2, to a maximum of 22.",
			">>Fey<<. A fey crossing opens into the Feywild, and you're immediately pulled through it, disappearing in a flash of rainbow-colored light. You draw no more cards."+
			"\n   The fey crossing appears as a shimmering fractal of light above the deck, and it remains open for 1 minute after the card is drawn. The precise location in the Feywild to which the fey crossing leads is determined by the DM.",
			">>Fiend<<. A powerful Fiend appears in a nearby unoccupied space and offers you a deal.[[ The precise nature of this deal is up to the DM, but usually the Fiend offers some material reward in exchange for you and your allies completing a task for the Fiend.]] The Fiend is indifferent to you and can be bargained with; it keeps its side of any bargain it makes, though it might twist the wording of any agreement to suit its purposes. If attacked, or if negotiations fail and you refuse the Fiend's offer, it returns to its home plane.",
			">>Giant<<. You immediately grow 2d10 inches in height, and your hit point maximum and current hit points both increase by 20.",
			">>Humanoid<<. You can immediately choose to stop drawing from the deck, regardless of how many cards you initially declared.",
			">>Lance<<. All your ability scores increase by 1, to a maximum of 20.",
			">>Mage<<. Your Intelligence score increases by 2, to a maximum of 22.",
			">>Map<<. At any time you choose within 1 year of drawing this card, you can mentally name or describe an object or individual that is familiar to you. You immediately know the location of the object or individual, as well as the distance between you and the object or individual, even if the object or individual is on a different plane of existence. If you named an individual, you know if they are alive and any conditions they have. If you named an object, you know if it is broken or not. If you named a magic item that has charges, you know how many charges it has remaining.",
			">>Maze<<. You gain 1d3 levels of exhaustion.",
			">>Mine<<. A pile of 2d6 gems (each worth 5,000 gp) and 1d10 chunks of precious ore (each worth 2,500 gp) appears at your feet."
		],
		cards2 : [
			">>Monstrosity<<. A Large or larger Monstrosity with a challenge rating of 10 or less (chosen by the DM) appears in an unoccupied space within 15 feet of you. The creature is hostile toward you and attacks immediately. The creature disappears when it is killed or when you are reduced to 0 hit points. If there isn't enough space for a Large or larger creature to appear, this card has no effect.",
			">>Ooze<<. A gelatinous cube immediately appears in your space and engulfs you. The gelatinous cube is hostile and remains until it is destroyed. If there isn't enough space for the gelatinous cube to appear, this card has no effect.",
			">>Path<<. Your walking speed increases by 10 feet.",
			">>Pit<<. A pit opens beneath you. You plummet 3d6 \xD7 10 feet, take damage from the fall, and have the prone condition.",
			">>Plant<<. You gain the ability to cast Speak with Plants without using a spell slot; you must finish a long rest before you can cast it this way again. If you have spell slots of 3rd level or higher, you can cast this spell using them. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Priest<<. Your Wisdom score increases by 2, to a maximum of 22.",
			">>Prisoner<<. Glowing chains made of magical force appear and wrap around you. You have the restrained condition until the chains are destroyed or you are freed. While you have this condition, you can't cast spells, and any magic items you're wearing or carrying have their properties suppressed. You draw no more cards. The chains are immune to damage and can't be dispelled using the Dispel Magic spell or similar magic. However, a Disintegrate spell destroys the chains instantly, freeing you. Another creature can also free you by succeeding on a DC 30 Dexterity check using thieves' tools.",
			">>Ring<<. A rare or rarer magic ring appears on your finger. If you have the attunement slots available, you're automatically attuned to the ring when it appears. The DM chooses the ring.",
			">>Shield<<. A rare or rarer suit of magic armor that you are proficient with appears in your hands. The DM chooses the armor. If you lack proficiency with any armor, your base AC instead now equals 12 + your Dexterity modifier while you aren't wearing armor.",
			">>Ship<<. You gain proficiency in three skills chosen by the DM.",
			">>Staff<<. A rare or rarer magic rod, staff, or wand appears in your hands. The DM chooses the item.",
			">>Stairway<<. You can choose to either decrease your number of declared draws by two or receive a rare or rarer wondrous item, which appears in your hands. The DM chooses the item.",
			">>Statue<<. You immediately have the petrified condition as your body is transformed into marble. The petrification lasts until you are freed with the Greater Restoration spell or similar magic.",
			">>Tavern<<. Your Charisma score increases by 2 to a maximum of 22.",
			">>Temple<<. A deity or entity of similar power becomes bound to aid you. At any point in time between drawing the card and when you die, you can use your action to call on this entity for divine intervention, and the entity is bound to answer. The parameters and nature of this intervention are chosen by the DM. If you die without having used this intervention, the deity fulfills its obligation by casting the Resurrection spell on you. Once the entity has answered your call for divine intervention or resurrected you, the entity is no longer bound to aid you.",
			">>Tomb<<. At any time you choose within 1 year of drawing this card, you can cast the True Resurrection spell once without expending a spell slot or requiring material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Tower<<. Draw two additional cards beyond your declared number of draws. The magic of these cards doesn't immediately take effect; instead, choose one of the two additional cards to keep, returning the other to the deck. The magic of the card you keep takes effect immediately thereafter.",
			">>Tree<<. Your skin immediately becomes rough, like tree bark. Your base AC now equals 15 + your Dexterity modifier while you aren't wearing armor, but you have vulnerability to fire damage. This transformation can be undone only by the Wish spell, divine intervention, or similar magic.",
			">>Undead<<. Somewhere on the Material Plane, a revenant rises. This revenant blames you for its existence and relentlessly hunts you to exact its revenge. The revenant exists until either 1 year passes, the revenant kills you, or you use a Wish spell to banish it permanently to the afterlife.",
			">>Warrior<<. Your Strength score increases by 2 to a maximum of 22.",
			">>Well<<. You learn three cantrips of your choice from any spell list."
		]
	},
	"deck of wild cards" : [
		"This deck of heavy vellum cards hums with the magic of the Elemental Chaos.",
		"The magic of the deck functions only if cards are drawn at random (a deck of real-world playing cards can simulate the deck). As an action, you can draw a random card from this deck and throw it to make a ranged spell attack, using Dexterity for the attack roll. The card has a range of 30 feet. On a hit, it deals 1d4 slashing damage and imposes a magical effect determined by its suit, as detailed in the table below. The card immediately returns to the deck after it hits or misses a target.\n",
		"d4\tSuit\tEffect",
		" 1\t\u2663 (Rods)\tThe card explodes in a burst of fire. The target and each creature within 5 feet of it must succeed on a DC 15 Dexterity saving throw or take 2d8 fire damage.",
		" 2\t\u2666 (Coins)\tThe card shoots streaks of lightning. The target must make a DC 15 Dexterity saving throw. On a failed save, the target has the blinded condition until the end of your next turn, and each creature within 10 feet of the target takes 1d6 lightning damage.",
		" 3\t\u2665 (Cups)\tThe card covers the target in a thick layer of ice. The target takes 1d10 cold damage and must succeed on a DC 15 Constitution saving throw or have the restrained condition until the end of your next turn.",
		" 4\t\u2660 (Swords)\tThe card unleashes a sharp, concussive blast. The target and each creature within 5 feet of it take 1d6 force damage and must succeed on a DC 15 Strength saving throw or have the prone condition."
	],
	"deck of wonder" : {
		features : [
			"Created in the image of the Deck of Many Things, this deck of ivory or vellum cards bestows an assortment of minor benefits and penalties on those who draw from it. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.",
			"Before you draw a card, you must declare how many cards you intend to draw, then draw them randomly. Any additional cards drawn have no effect. Unless a card states otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card you declared no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck and take effect simultaneously.",
			"Unless it is the Mystery card, a drawn card immediately takes effect, fades from existence, and reappears in the deck, making it possible to draw the same card multiple times.",
			"You can use an altered deck of playing cards to simulate the deck, as shown in the table below.",
			"\n1d13\t1d22\tPlaying Card\t\tCard",
			"\t   1\t[A\u2666] Ace of diamonds\t\tChancellor*",
			"1\t   2\t[K\u2666] King of diamonds\t\tDay",
			"2\t   3\t[Q\u2666] Queen of diamonds \tNight",
			"3\t   4\t[J\u2666] Jack of diamonds\t\tDawn",
			"\t   5\t[2\u2666] Two of diamonds\t\tDusk*",
			"\t   6\t[A\u2665] Ace of hearts\t\tDestiny*",
			"4\t   7\t[K\u2665] King of hearts\t\tCrown",
			"5\t   8\t[Q\u2665] Queen of hearts\t\tLock",
			"6\t   9\t[J\u2665] Jack of hearts\t\tChampion",
			"\t   10\t[2\u2665] Two of hearts\t\tCoin*",
			"\t   11\t[A\u2663] Ace of clubs\t\tVulture*",
			"7\t   12\t[K\u2663] King of clubs\t\tChaos",
			"8\t   13\t[Q\u2663] Queen of clubs\t\tOrder",
			"9\t   14\t[J\u2663] Jack of clubs\t\tBeginning",
			"\t   15\t[2\u2663] Two of clubs\t\tMystery*",
			"\t   16\t[A\u2660] Ace of spades\t\tIsolation*",
			"10\t   17\t[K\u2660] King of spades\t\tEnd",
			"11\t   18\t[Q\u2660] Queen of spades\t\tMonster",
			"12\t   19\t[J\u2660] Jack of spades\t\tKnife",
			"\t   20\t[2\u2660] Two of spades\t\tJustice*",
			"\t   21\tJoker (with TM)\t\tStudent*",
			"13\t   22\tJoker (no TM)\t\tMischief\n",
			"* Found only in a deck with twenty-two cards"
		],
		cards : [
			">>Beginning<<. Your hit point maximum and current hit points increase by 2d10. Your hit point maximum remains increased in this way for the next 8 hours.",
			">>Champion<<. You gain a +1 bonus to weapon attack and damage rolls. This bonus lasts for 8 hours.",
			">>Chancellor<<. Within 8 hours of drawing this card, you can cast Augury once as an action, requiring no material components. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Chaos<<. You gain resistance to one of the following damage types (chosen by the DM): acid, cold, fire, lightning, or thunder. This resistance lasts for 1d12 days.",
			">>Coin<<. Five pieces of jewelry, each worth 100 gp, or ten gemstones, each worth 50 gp, appear at your feet.",
			">>Crown<<. You learn the Friends cantrip. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice). If you already know this cantrip, the card has no effect.",
			">>Dawn<<. This card invigorates you. For the next 8 hours, you can add your proficiency bonus to your initiative rolls.",
			">>Day<<. You gain a +1 bonus to saving throws. This benefit lasts until you finish a long rest.",
			">>Destiny<<. This card protects you against an untimely demise. The first time after drawing this card that you would drop to 0 hit points from taking damage, you instead drop to 1 hit point.",
			">>Dusk<<. This card supernaturally saps your energy. You have disadvantage on initiative rolls. This effect lasts until you finish a long rest, but it can be ended early by a Remove Curse spell or similar magic.",
			">>End<<. This card is an omen of death. You take 2d10 necrotic damage, and your hit point maximum is reduced by an amount equal to the damage taken. This effect can't reduce your hit point maximum below 10 hit points. This reduction lasts until you finish a long rest, but it can be ended early by a Remove Curse spell or similar magic.",
			">>Isolation<<. You disappear, along with anything you are wearing or carrying, and become trapped in a harmless extradimensional space for 1d4 minutes. You draw no more cards. You then reappear in the space you left or the nearest unoccupied space. When you reappear, you must succeed on a DC 11 Constitution saving throw or have the poisoned condition for 1 hour as your body reels from the extradimensional travel.",
			">>Justice<<. You momentarily gain the ability to balance the scales of fate. For the next 8 hours, whenever you or a creature within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage or disadvantage.",
			">>Knife<<. An uncommon magic weapon you're proficient with appears in your hands. The DM chooses the weapon.",
			">>Lock<<. You gain the ability to cast Knock 1d3 times. Use your Intelligence, Wisdom, or Charisma as the spellcasting ability (your choice).",
			">>Mischief<<. You receive an uncommon wondrous item (chosen by the DM), or you can draw two additional cards beyond your declared draws.",
			">>Monster<<. This card's monstrous visage curses you. While cursed in this way, whenever you make a saving throw, you must roll 1d4 and subtract the number rolled from the total. The curse lasts until you finish a long rest, but it can be ended early with a Remove Curse spell or similar magic.",
			">>Mystery<<. You have disadvantage on Intelligence saving throws for 1 hour. Discard this card and draw from the deck again; together, the two draws count as one of your declared draws.",
			">>Night<<. You gain darkvision within a range of 300 feet. This darkvision lasts for 8 hours.",
			">>Order<<. You gain resistance to one of the following damage types (chosen by the DM): force, necrotic, poison, psychic, or radiant. This resistance lasts for 1d12 days.",
			">>Student<<. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).",
			">>Vulture<<. One nonmagical item or piece of equipment in your possession (chosen by the DM) disappears. The item remains nearby but concealed for a short time, so it can be found with a successful DC 15 Wisdom (Perception) check. If the item isn't recovered within 1 hour, it disappears forever."
		]
	}
}

MagicItemsList["antimagic armor"] = {
	name : "Antimagic Armor",
	source : [["BoMT", 65]], // Chapter 9: Knight
	type : "armor (light, medium, or heavy)",
	rarity : "very rare",
	attunement : true,
	description : "While wearing this armor, once per dawn I can cast Antimagic Field, requiring no spell components. In addition, as a reaction once per dawn, I can give myself advantage on a saving throw I make against a spell.",
	descriptionFull : "While wearing this armor, you can use your reaction to give yourself advantage on a saving throw you make against a spell. Once this property is used, it can't be used again until the next dawn."+
	"\n   In addition, while you wear this armor, you can use it to cast Antimagic Field, requiring no spell components. Once this property is used, it can't be used again until the next dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "Antimagic"]
	},
	action : [["reaction", "Adv. save vs. spell (1\xD7 per dawn)"]],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["antimagic field"],
		selection : ["antimagic field"],
		firstCol : "oncelr"
	}],
	extraLimitedFeatures : [{
		name : "Adv. save vs. spell (Antimagic Armor)",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Antimagic Field (Antimagic Armor)",
		usages : 1,
		recovery : "dawn"
	}],
	spellChanges : {
		"antimagic field" : {
			components : "",
			compMaterial : "",
			changes : "While wearing the armor, it requires no components to cast Antimagic Field."
		}
	}
};
MagicItemsList["armor of fungal spores"] = {
	name : "Armor of Fungal Spores",
	nameTest : "of Fungal Spores",
	source : [["BoMT", 65]], // Chapter 9: Knight
	type : "armor (medium)",
	rarity : "uncommon",
	description : "As a bonus action once per dawn while wearing this armor, I can make it emit poisonous spores. These spores fill a 10-ft radius sphere centered on myself. Each creature in that area must make a DC 15 Constitution save or be poisoned until the end of my next turn.",
	descriptionFull : "While wearing this armor, you can take a bonus action to make the armor emit poisonous spores, which fill a 10-foot-radius sphere centered on yourself. Each creature in that area must succeed on a DC 15 Constitution saving throw or have the poisoned condition until the end of your next turn. Once this property is used, it can't be used again until the next dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !/medium/i.test(inObj.type);
		}
	},
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["armor of the fallen"] = {
	name : "Armor of the Fallen",
	nameTest : "of the Fallen",
	source : [["BoMT", 65]], // Chapter 9: Knight
	type : "armor (medium or heavy)",
	rarity : "uncommon",
	attunement : true,
	description : "While wearing this armor, I can use it to cast either Animate Dead or Speak with Dead. Once the armor has cast a spell in this way, it can't cast either spell until the next dawn. My soul keeps this armor together. If I die while attuned to the armor, the armor is destroyed.",
	descriptionFull : "While wearing this armor, you can use it to cast either Speak with Dead or Animate Dead. Once the armor has cast a spell in this way, it can't cast either spell until the next dawn."+
	"\n   Your soul keeps this armor together. If you die while you are attuned to the armor, the armor is destroyed.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !/heavy|medium/i.test(inObj.type);
		}
	},
	spellcastingBonus : [{
		name : "either or",
		spells : ["animate dead", "speak with dead"],
		selection : ["animate dead", "speak with dead"],
		firstCol : "SP",
		times : 2
	}],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["armor of weightlessness"] = {
	name : "Armor of Weightlessness",
	nameTest : "of Weightlessness",
	source : [["BoMT", 65]], // Chapter 9: Knight
	type : "armor (light, medium, or heavy)",
	rarity : "uncommon",
	attunement : true,
	description : "This armor has 5 charges, regaining 1d4+1 expended charges daily at dawn. As a bonus action while wearing it, I can expend 1 or more charges to cast Jump (1 charge) or Levitate (2 charges) on myself.",
	descriptionFull : "This armor has 5 charges. While you wear it, you can use a bonus action to expend 1 or more charges to cast one of the following spells from the armor, targeting yourself: Jump (1 charge) or Levitate (2 charges)."+
	"\n   This armor regains 1d4 + 1 expended charges daily at dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"]
	},
	usages : 5,
	recovery : "dawn",
	additional : "regains 1d4+1",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge (self only)",
		spells : ["jump"],
		selection : ["jump"],
		firstCol : 1
	}, {
		name : "2 charges (self only)",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : 2
	}],
	spellChanges : {
		"jump" : {
			name : "Jump (self only)",
			time : "1 bns",
			range : "Self",
			description : "My jump distance is tripled for the duration",
			changes : "Using the Armor of Weightlessness, I can cast Jump as a bonus action, but only on myself."
		},
		"levitate" : {
			name : "Levitate (self only)",
			time : "1 bns",
			range : "Self",
			save : "",
			description : "I float and move up vertically up to 20 ft; As part of my move each round, I can move up/down 20 ft",
			changes : "Using the Armor of Weightlessness, I can cast Levitate as a bonus action, but only on myself."
		}
	}
};
MagicItemsList["baleful talon"] = {
	name : "Baleful Talon",
	source : [["BoMT", 34]], // Chapter 5: Gem
	type : "weapon (dagger)",
	rarity : "very rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this hooked, obsidian dagger. When I hit a creature with it and roll a 19 or 20 to hit, the dagger flares with sickly light and deals +6d6 necrotic damage. The creature can make a DC 15 Con save to halve the damage. It turns to dust if this reduces its HP to 0.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this hooked, obsidian dagger."+
	"\n   When you hit a creature with this magic weapon and roll a 19 or 20 on the attack roll, the creature must make a DC 15 Constitution saving throw as the dagger flares with sickly light. The creature takes 6d6 necrotic damage on a failed save, or half as much on a successful one. If this damage reduces the creature to 0 hit points, the creature disintegrates into dust.",
	weight : 1,
	weaponOptions : [{
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*baleful)(?=.*talon).*$/i,
		name : "Baleful Talon",
		source : [["BoMT", 34]],
		description : "Finesse, light, thrown; Roll of 19-20: +6d6 necrotic damage, DC 15 Con save halves",
		modifiers : [1, 1],
		selectNow : true
	}]
};
MagicItemsList["blasted goggles"] = {
	name : "Blasted Goggles",
	source : [["BoMT", 174]], // Chapter 20: Flames
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "These tinker's goggles have 3 charges, regaining 1d3 daily at dawn. As an action, I can use 1 charge to shoot a beam of light: a creature I can see within 120 ft must make a DC 15 Dexterity save or take 3d6 fire damage. If this is a natural 20, I'm blinded for 24 hours. Cursed: I can't remove these or end attunement.",
	descriptionFull : "These tinker's goggles have 3 charges. As an action, you can expend 1 charge to shoot a beam of fiery light from the goggles at a creature you can see within 120 feet of yourself. The target must succeed on a DC 15 Dexterity saving throw or take 3d6 fire damage. The goggles regain 1d3 expended charges daily at dawn."+
	"\n   " + toUni("Cursed") + ". The goggles are cursed, and becoming attuned to them extends the curse to you. You can't remove the goggles or end your attunement to them until you are targeted by a Remove Curse spell or similar magic."+
	"\n   Whenever you use the goggles' fiery beam and the target rolls a 20 on the d20 for the saving throw, the goggles expose you to a flash of violent bright light. As a result, you have the blinded condition for 24 hours.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3"
};
MagicItemsList["bloodrage greataxe"] = {
	name : "Bloodrage Greataxe",
	source : [["BoMT", 66]], // Chapter 9: Knight
	type : "weapon (greataxe)",
	rarity : "uncommon",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic greataxe while I have half my hit points or fewer.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic greataxe while you have half your hit points or fewer.",
	weight : 7,
	weaponOptions : [{
		baseWeapon : "greataxe",
		regExpSearch : /^(?=.*bloodrage)(?=.*(great|heavy|weida))(?=.*(axe|\bono|\bfu|masakari)s?\b).*$/i,
		name : "Bloodrage Greataxe",
		source : [["BoMT", 66]],
		description : "Heavy, two-handed; If I'm \u2264 \u00BD HP: +2 to hit \u0026 damage",
		selectNow : true
	}]
};
MagicItemsList["bloodseeker ammunition"] = {
	name : "Bloodseeker Ammunition",
	nameTest : "Bloodseeker",
	source : [["BoMT", 66]], // Chapter 9: Knight
	type : "weapon (any ammunition)",
	rarity : "very rare",
	description : "Ranged attack rolls made with this magic ammunition have advantage against any creature doesn't have all its hit points.",
	descriptionFull : "Ranged attack rolls made with this ammunition have advantage against any creature doesn't have all its hit points.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["boomerang shield"] = {
	name : "Boomerang Shield",
	source : [["BoMT", 66]], // Chapter 9: Knight
	type : "shield",
	rarity : "uncommon",
	attunement : true,
	description : "I can make a ranged weapon attack with this magic shield. It reappears in my hand the instant after it hits or misses a target. It has a range of 20 ft and a long range of 60 ft, uses Strength or Dexterity (my choice), I add my proficiency bonus if I'm proficient with shields, and it deals 1d6 slashing damage.",
	descriptionFull : "You can make a ranged weapon attack with this magic shield. It has a normal range of 20 feet and a long range of 60 feet, and it uses your Strength or Dexterity for the attack roll (your choice). If you're proficient with shields, you are proficient with attacks made using this shield. On a hit, it deals 1d6 slashing damage. If you throw the shield, it reappears in your hand the instant after it hits or misses a target.",
	weight : 6,
	shieldAdd : "Boomerang Shield",
	weaponOptions : [{
		regExpSearch : /^(?=.*boomerang)(?=.*shield).*$/i,
		name : "Boomerang Shield",
		source : [["BoMT", 66]],
		ability : 1,
		type : "Shield",
		damage : [1, 6, "slashing"],
		range : "20/60 ft",
		weight : 6,
		description : "Finesse, thrown; Reappears instantly", // Not actually finesse, but easier to code this way and shouldn't cause any issues
		abilitytodamage : true,
		selectNow : true
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea && v.theWea.name === "Boomerang Shield" && tDoc.getField("Proficiency Shields").isBoxChecked(0)) {
					fields.Proficiency = true;
				}
			}
		]
	}
};
MagicItemsList["bow of conflagration"] = {
	name : "Bow of Conflagration",
	nameTest : "of Conflagration",
	source : [["BoMT", 66]], // Chapter 9: Knight
	type : "weapon (any bow)",
	rarity : "rare",
	attunement : true,
	description : "Ammunition fired from this bow blazes brightly. When I hit with an attack roll using this bow, the target takes an extra 1d6 fire damage. If the target is a flammable, nonmagical object, it catches fire, taking 1d6 fire damage at the start of each of my turns until a creature uses an action to extinguish the flames.",
	descriptionFull : "Ammunition fired from this bow blazes brightly. When you hit with an attack roll using this bow, the target takes an extra 1d6 fire damage. If the target is a flammable, nonmagical object, it catches fire, taking 1d6 fire damage at the start of each of your turns until a creature uses an action to extinguish the flames.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /bow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /conflagration/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 fire damage; ignites target object';
				}
			},
			'If I include the word "Conflagration" in the name of a bow, it will be treated as the magic weapon Bow of Conflagration. The bow deals an extra 1d6 fire damage. If I target and hit a flammable, nonmagical object, it catches fire, taking 1d6 fire damage at the start of each of my turns until a creature uses an action to extinguish the flames.'
		]
	}
};
MagicItemsList["bow of melodies"] = {
	name : "Bow of Melodies",
	nameTest : "of Melodies",
	source : [["BoMT", 66]], // Chapter 9: Knight
	type : "weapon (any bow)",
	rarity : "very rare",
	attunement : true,
	description : "This bow has multiple strings. I can use these to play one of two melodies on each attack, imbuing it with magic. Melody of Precision: If I'm proficient with Performance, I add +1 (+2 if expertise) to the attack roll. Melody of Reverberation: the attack deals my Charisma modifier in extra thunder damage.",
	descriptionFull : "This bow has multiple strings and resembles a lyre or small harp. By strumming the strings while setting an arrow to the bow, you imbue the arrow with magic."+
	"\n   You can play one of the following melodies when you use the bow to make a ranged weapon attack. You must choose to do so before you make the attack roll, and you can play only one melody per attack."+
	"\n   " + toUni("Melody of Precision") + ". If you're proficient in Performance, you gain a +1 bonus to the attack roll. If you have expertise in Performance, you gain a +2 bonus instead."+
	"\n   " + toUni("Melody of Reverberation") + ". The melody you strum echoes loudly. On a hit, the target takes extra thunder damage equal to your Charisma modifier.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /bow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var chaMod = Number(What('Cha Mod'));
				// Only add a description if positive Cha Mod and Melody of Precision is not an option or Reverberation is part of the name
				if (!v.theWea.isMagicWeapon && chaMod > 0 && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*precision).*$/i.test(v.WeaponTextName) && (/reverberation/i.test(v.WeaponTextName) || !hasSkillProf("Performance")[0])) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+' + chaMod + ' (Cha mod) thunder damage';
				}
			},
			'If I include the word "Melody" or "Melodies" in the name of a bow, it will be treated as the magic weapon Bow of Melodies. If I also include either "Precision" or "Reverberation" in the name, the respective bonus will be added. if I include neither of those in the name, the bonus will be determined automatically, the Melody of Precision if proficient with Performance (+1 or +2 bonus to hit) or Melody of Reverberation otherwise (+Cha mod thunder damage).'
		],
		atkCalc : [
			function (fields, v, output) {
				// Add to hit bonus if name doesn't include Reverberation. Will be zero if not proficient in Performance
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*melod(ies|y))(?!.*reverberation).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					var perfProf = hasSkillProf("Performance");
					output.extraHit += perfProf[1] ? 2 : perfProf[0] ? 1 : 0;
				}
			}, ''
		]
	}
};
MagicItemsList["breastplate of balance"] = {
	name : "Breastplate of Balance",
	source : [["BoMT", 34]], // Chapter 5: Gem
	type : "armor (breastplate)",
	rarity : "rare",
	attunement : true,
	description : "This burnished copper breastplate with merchant's scales on the chest has 4 charges, regaining 1d4 at dawn. As a reaction when I or another I can see within 60 ft is about to roll a d20 with (dis)advantage, I can use 1 charge to prevent this (dis)advantage. As a bonus action, I can use 2 charges to cast Lesser Restoration.",
	descriptionFull : "This burnished copper breastplate looks as if it were made of interlocking gears. Merchant's scales are emblazoned across the chest."+
	"\n   The armor has 4 charges. You can use the charges in the following ways while wearing the armor:"+
	"\n   " + toUni("Equalize") + ". When you or a creature you can see within 60 feet of yourself is about to roll a d20 with advantage or disadvantage, you can expend 1 charge and take a reaction to prevent the roll from being affected by advantage or disadvantage."+
	"\n   " + toUni("Expunge Imbalance") + ". As a bonus action, you can expend 2 charges to cast the Lesser Restoration spell from the armor."+
	"\n   The armor regains 1d4 expended charges daily at dawn.",
	weight : 20,
	action : [["reaction", " (if dis./adv.)"]],
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	armorAdd : {
		select : "Breastplate of Balance",
		options : ["Breastplate of Balance"]
	},
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["lesser restoration"],
		selection : ["lesser restoration"],
		firstCol : 2
	}],
	spellChanges : {
		"lesser restoration" : {
			time : "1 bns",
			changes : "While wearing the armor, I can use 2 of its charges to cast Lesser Restoration as a bonus action."
		}
	}
};
MagicItemsList["card sharp's deck"] = {
	name : "Card Sharp's Deck",
	source : [["BoMT", 40]], // Chapter 6: Rogue
	type : "wondrous item",
	rarity : "uncommon",
	description : 'The cards of this deck shimmer around the edges. As an action, I can throw a card as ranged spell attack using Dexterity. This "Deadly Deal" attack has 120 ft range and deals 1d8 force damage. As an action once per dawn, I can shuffle the deck to cast Spray of Cards at 3rd level with it (save DC 15).',
	descriptionFull : "The cards of this deck shimmer around the edges. While holding this deck, you can use the following properties:"+
	"\n   " + toUni("Deadly Deal") + ". As an action, you can use this deck to make a ranged spell attack by throwing a spectral card and using Dexterity for the attack roll. The card has a range of 120 feet and deals 1d8 force damage on a hit."+
	"\n   " + toUni("Spray of Cards") + ". As an action, you can shuffle the deck and cast the Spray of Cards spell at 3rd level from the deck (spell save DC 15). Once the deck has cast the spell, it can't cast the spell again until the next dawn.",
	action : [["action", ""]],
	weaponOptions : [{
		regExpSearch : /^(?=.*deadly)(?=.*deal).*$/i,
		name : "Deadly Deal",
		source : [["BoMT", 40]],
		ability : 2,
		type : "Spell",
		damage : [1, 8, "force"],
		range : "120 ft",
		description : "",
		abilitytodamage : false,
		selectNow : true
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Spray of Cards",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["spray of cards"],
		selection : ["spray of cards"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"spray of cards" : {
			description : "All in area 3d10 Force dmg and blinded until their next turn ends; save halves \u0026 not blinded",
			descriptionShorter : false,
			changes : "Using Card Sharp's Deck I can cast Spray of Cards at 3rd level once per dawn."
		}
	}
};
MagicItemsList["clockwork armor"] = {
	name : "Clockwork Armor",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "armor (heavy)",
	rarity : "very rare",
	attunement : true,
	description : "The outside surface and internal joints of this armor whir with interlocking gears, drawing on the magic of the plane of Mechanus. The armor has 4 charges and regains 1d4 used charges daily at dawn. If I make a d20 roll while wearing it, I can expend 1 charge to change the number rolled to a 10.",
	descriptionFull : "The outside surface and internal joints of this armor whir with interlocking gears, drawing on the orderly magic of the plane of Mechanus."+
	"\n   The armor has 4 charges. If you make a d20 roll while wearing this armor, you can expend 1 charge to change the number rolled to a 10. The armor regains 1d4 expended charges daily at dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "Clockwork"],
		excludeCheck : function (inObjKey, inObj) {
			return !/heavy/i.test(inObj.type);
		}
	},
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4"
};
MagicItemsList["crown of whirling comets"] = {
	name : "Crown of Whirling Comets",
	source : [["BoMT", 35]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This crown has 6 charges, regaining 1d6 at dawn. As a bonus action, I can use 1 charge to fly my walking speed and hover, for 10 min. I can use 3 charges to cast Ice Storm (DC 16). As an action, I can launch one frigid starlight bolt per charge used, that each deal 2d4 cold damage to a creature I can see within 120 ft.",
	descriptionLong : "This delicate silver tiara decorated with stellar iconography has gems on the tiara's points that detach and closely orbit my head. It has 6 charges, regaining 1d6 used charges daily at dawn. As a bonus action, I can use 1 charge to gain a flying speed equal to my walking speed and I can hover, for 10 minutes. As an action, I can expend any number of charges to launch one frigid starlight bolt per charge used to a creature I can see within 120 ft. Each bolt automatically hits and deals 2d4 cold damage. Bolts can be used to hit the same or different targets. As an action, I can use 3 charges to cast Ice Storm (save DC 16).",
	descriptionFull : "This delicate silver tiara is decorated with stellar iconography. While you wear the crown, the gems on the tiara's points detach and closely orbit your head."+
	"\n   The crown has 6 charges for the following properties, which you can use while wearing the crown:"+
	"\n   " + toUni("Star Flight") + ". As a bonus action, you can spend 1 charge to gain the power of flight for 10 minutes. For the duration, you gain a flying speed equal to your walking speed, and you can hover. While flying, you glow faintly with starlight."+
	"\n   " + toUni("Starlight Strike") + ". As an action, you can spend any number of charges to launch bolts of frigid starlight. You launch a number of bolts equal to the number of charges spent, and you can direct the bolts to target one creature or several, so long as all creatures are within 120 feet of you and you can see them. The bolts automatically strike their targets, and each bolt deals 2d4 cold damage."+
	"\n   " + toUni("Whirling Hail") + ". As an action, you can spend 3 charges and cast the Ice Storm spell (save DC 16)."+
	"\n   The crown regains 1d6 expended charges daily at dawn.",
	action : [["bonus action", " (fly)"], ["action", " (bolts)"]],
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	fixedDC : 16,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "3 charges",
		spells : ["ice storm"],
		selection : ["ice storm"],
		firstCol : 3
	}]
};
MagicItemsList["deck of dimensions"] = {
	name : "Deck of Dimensions",
	source : [["BoMT", 40]], // Chapter 6: Rogue
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This deck has 6 charges, regaining 1d6 used at dawn. As a bonus action, I can use 1 charge to throw a card to an empty spot either within 60 ft and teleport to it, or within 5 ft and teleport to it once in the next 8 hours as an action. I can use 3 charges to cast Arcane Gate, but can't use the deck while the gate is active.",
	descriptionLong : "These cards are decorated with intricate designs of different planes of existence. The deck has 6 charges, regaining 1d6 used charges daily at dawn. As a bonus action, I can use 1 charge to throw a card to an empty space either within 60 ft and teleport to it now, or within 5 ft and leave it there to use an action within the next 24 hours to speak the card's name and teleport to it. Once I teleport to a card, or 8 hours passed, the card vanishes and returns to the deck. As an action, I can use 3 charges to cast Arcane Gate, but the fluttering cards of the deck make up the gate, rendering the deck useless while it's active.",
	descriptionFull : "The backs of the cards in this deck are decorated with intricate designs representing different planes of existence. The deck has 6 charges. While holding it, you can expend 1 or more of its charges to use the following properties:"+
	"\n   " + toUni("Marked Card") + ". As a bonus action, you can expend 1 charge to draw a card from the deck and place it in an unoccupied space within 5 feet of you. The card then becomes marked with an invisible sigil. Once within the next 24 hours, as an action, you can speak the marked card's name and teleport to the card's location, along with any equipment you are wearing or carrying, appearing in the closest unoccupied space to the card. After you teleport in this way, or after 8 hours, the card returns to the deck, and the mark on it fades."+
	"\n   " + toUni("Riffling Portal") + ". As an action, you can expend 3 charges to cast the Arcane Gate spell from the deck. The deck vanishes, and fluttering cards create the spell's portal rings. When the spell ends, the deck reappears in your possession."+
	"\n   " + toUni("Shuffling Stride") + ". As a bonus action, you can expend 1 charge to throw a card from the deck to an unoccupied space within 60 feet of yourself and teleport, along with any equipment you're wearing or carrying, to that space. The card then vanishes and returns to the deck."+
	"\n   The deck regains 1d6 expended charges daily at dawn.",
	action : [["bonus action", " (throw card)"], ["action", " (teleport back)"]],
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "3 charges",
		spells : ["arcane gate"],
		selection : ["arcane gate"],
		firstCol : 3
	}]
};
MagicItemsList["deck of many more things"] = {
	name : "Deck of Many More Things",
	source : [["BoMT", 51]], // Chapter 7: Sage
	type : "wondrous item",
	rarity : "legendary",
	description : "Before drawing cards from this deck, I must declare how many I wish to draw and then draw that number randomly. Any cards drawn in excess have no effect. When a card is drawn, its magic takes effect, it fades from existence, and, unless the card is the Fool or the Jester, reappears in the deck. See Notes page.",
	descriptionFull : "Over the centuries since the first Deck of Many Things was created, many have sought and failed to replicate it. But some have created new cards. These forty-four additional cards are known collectively as the Deck of Many More Things. (More information on creating new cards for this deck appears in chapter 2.)"+
	"\n   " + BoMT.toDescrFull(BoMT["deck of many more things"].features) +
	"\n\n   " + BoMT.toDescrFull(BoMT["deck of many more things"].cards) +
	"\n   " + BoMT.toDescrFull(BoMT["deck of many more things"].cards2),
	toNotesPage : [{
		name : "Features and Table",
		note : BoMT.to1stPerson(BoMT["deck of many more things"].features)
	}, {
		name : "Cards and Their Effects, part 1",
		note : BoMT.to1stPerson(BoMT["deck of many more things"].cards, "\n\u2022 ").replace(/Use my Int/g, "I use my Int").replace(/at my ft/ig, "my feet")
	}, {
		name : "Cards and Their Effects, part 2",
		note : BoMT.to1stPerson(BoMT["deck of many more things"].cards2, "\n\u2022 ").replace(/Use my Int/g, "I use my Int").replace(/I'm not/g, "not")
	}, {
		name : "Deck of Many Things' Cards and Effects",
		source : MagicItemsList["deck of many things"].source,
		note : MagicItemsList["deck of many things"].toNotesPage[1].note
	}]
};
MagicItemsList["deck of miscellany"] = {
	name : "Deck of Miscellany",
	source : [["BoMT", 41]], // Chapter 6: Rogue
	type : "wondrous item",
	rarity : "uncommon",
	description : "Each card of the 32 cards in this wooden box has an illustration of a different item or set of items. As an action, I can pick a card and throw it in an empty space within 5 ft. There it transforms into the item(s) depicted. See the table on the Notes page for the items and the associated real-world playing cards.",
	descriptionFull : "This wooden box contains a set of thirty-two parchment cards."+
	"\n   The face of each card bears an illustration of a different item or set of items. As an action, you can draw a card of your choice from the deck and throw it to the ground in an unoccupied space within 5 feet of yourself. When the card hits the ground, the card permanently transforms into the item or set of items depicted on its face. An altered deck of real-world playing cards can simulate the deck, as shown in the table below.\n\n" + BoMT["deck of miscellany"].join("\n"),
	action : [["action", ""]],
	toNotesPage : [{
		name : "Cards and Their Items",
		note : "\n   This wooden box contains a set of thirty-two parchment cards. The face of each card bears an illustration of a different item or set of items. As an action, I can pick a remaining card and throw it to the ground in an unoccupied space within 5 ft. When the card hits the ground, the card permanently transforms into the item or set of items depicted on its face."+
		BoMT.to1stPerson("\nUsed\t" + BoMT["deck of miscellany"].join("\n  \u2610\t")) // empty ballet box
	}]
};
MagicItemsList["deck of oracles"] = {
	name : "Deck of Oracles",
	source : [["BoMT", 61]], // Chapter 8: Fates
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "If I spend 10 minutes consulting this deck of oracle cards when I finish a long rest, I can roll a d20 and record result. Once in the next 8 hours after a creature within 60 ft makes a check, attack roll, or save, I can use my reaction to have it use the number I rolled instead. Once per dawn, I can use these to cast Divination.",
	descriptionFull : "The illustrations on this deck of oracle cards move or change subtly when viewed indirectly. When you finish a long rest, you can spend 10 minutes consulting the cards for an omen of the coming day. Roll a d20 and record the number rolled. Once in the next 8 hours, immediately after a creature within 60 feet of you makes an ability check, an attack roll, or a saving throw, you can use your reaction to discard the d20 roll; the creature must use the number you rolled in place of its roll."+
	"\n   Additionally, while holding the cards, you can cast Divination from them. Once this property is used, it can't be used again until the next dawn.",
	action : [["reaction", ""]],
	usages : 1,
	recovery : "dawn",
	additional : "Divination",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["divination"],
		selection : ["divination"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["deck of wild cards"] = {
	name : "Deck of Wild Cards",
	source : [["BoMT", 41]], // Chapter 6: Rogue
	type : "wondrous item",
	rarity : "very rare",
	description : "As an action, I can draw a random card from this deck of heavy vellum cards and throw it. I make a ranged spell attack using Dex with a range of 30 ft, dealing 1d4 slashing damage on a hit and one of four magical effects depending on the card drawn, see Notes page. The thrown card returns to the deck after the attack.",
	descriptionFull : BoMT.toDescrFull(BoMT["deck of wild cards"]),
	weaponOptions : [{
		regExpSearch : /^(?=.*deck)(?=.*wild)(?=.*cards?).*$/i,
		name : "Deck of Wild Cards",
		source : [["BoMT", 41]],
		ability : 2,
		type : "Spell",
		damage : [1, 4, "slashing"],
		range : "30 ft",
		description : "Also random effect on hit, see Notes page",
		abilitytodamage : false,
		selectNow : true
	}],
	toNotesPage : [{
		name : "Random Card Effects",
		note : BoMT.to1stPerson(BoMT["deck of wild cards"])
	}]
};
MagicItemsList["deck of wonder"] = {
	name : "Deck of Wonder",
	source : [["BoMT", 55]], // Chapter 7: Sage
	type : "wondrous item",
	rarity : "uncommon",
	description : "Before drawing cards from this deck, I must declare how many I wish to draw and then draw that number randomly. Any cards drawn in excess have no effect. When a card is drawn, its magic takes effect and then it fades from existence and reappears in the deck. See Notes page.",
	descriptionFull : BoMT.toDescrFull(BoMT["deck of wonder"].features) + "\n\n   " + BoMT.toDescrFull(BoMT["deck of wonder"].cards),
	toNotesPage : [{
		name : "Features and Table",
		note : BoMT.to1stPerson(BoMT["deck of wonder"].features)
	}, {
		name : "Cards and Their Effects",
		note : BoMT.to1stPerson(BoMT["deck of wonder"].cards, "\n\u2022 ")
	}]
};
MagicItemsList["donjon's sundering sphere"] = {
	name : "Donjon's Sundering Sphere",
	source : [["BoMT", 35]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "Attuning to this marble-size crystal sphere includes attaching it to a nonmagical melee weapon, that then becomes magical +1. It grants me adv. on saves vs. being send to another dimension. Once per dawn when I hit a creature, I can have it make a DC 16 Cha save or be stuck in a demiplane until its next turn ends.",
	descriptionLong : "Attuning to this marble-size crystal sphere includes attaching it to the hilt of a nonmagical melee weapon weapon, that then becomes a magic weapon with a +1 bonus to attack and damage rolls. While wielding it, I have advantage on save against being send to an extradimensional space or another plane of existence. Once per dawn when I hit a creature with this weapon, I can have it make a DC 16 Charisma save or be banished to a harmless demiplane until its next turn ends. It returns to the space it left, or the nearest empty space. When I end my attunement to the sphere, it detaches from the weapon.",
	descriptionFull : "This marble-size crystal sphere glows with extraplanar energy."+
	"\n   As part of attuning to this item, you press the crystal sphere to the hilt of a nonmagical melee weapon of your choice, magically attaching the sphere to the weapon. The weapon becomes a magic weapon with a +1 bonus to attack and damage rolls. While wielding this weapon, you gain the following benefits:"+
	"\n   " + toUni("Dimensional Anchor") + ". You have advantage on saving throws against spells or effects that would send you to an extradimensional space, a demiplane, or another plane of existence against your will."+
	"\n   " + toUni("Isolating Smite") + ". When you hit a creature with this weapon, you can force the creature to make a DC 16 Charisma saving throw. On a failed save, the creature is banished to a harmless demiplane until the end of its next turn. When the banished creature returns, it reappears in the space it left or the nearest unoccupied space if that space is occupied. Once this property is used, it can't be used again until the next dawn."+
	"\n   When you end your attunement to the sphere, the sphere harmlessly detaches from the weapon, and the weapon reverts to a nonmagical piece of equipment.",
	savetxt : {
		adv_vs : ["being send to other plane/dimension"]
	},
	usages : 1,
	recovery : "dawn",
	additional : "Banish",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /\bdonjon'?s\b/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			'If I include the word "Donjon\'s" in the name of a melee weapon, it will be treated as a melee weapon with the Donjon\'s Sundering Sphere attached. It adds a +1 bonus to attack and damage rolls made with it.'
		]
	}
};
MagicItemsList["dried leech"] = {
	name : "Dried Leech",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "weapon (any ammunition)",
	rarity : "uncommon",
	description : "If a creature is hit by this magic ammunition, the leech animates and attaches to the target, dealing 1d4 piercing damage at the start of each of their turns. The leech detaches if it deals at least 10 damage or the target dies. Anyone can use their action to detach a leech. A detached leech dies and turns nonmagical.",
	descriptionFull : "This leech has been dried and imbued with a mote of animating magic. If you hit a creature with a ranged attack roll using this ammunition, the leech springs to life and sinks its teeth into the target, dealing 1d4 piercing damage at the start of each of the target's turns. If the leech deals at least 10 damage or the target dies, the leech falls off. A creature, including the target, can use its action to detach the leech. Once a leech is no longer attached to its target, the leech dies and is no longer magical.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["euryale's aegis"] = {
	name : "Euryale's Aegis",
	source : [["BoMT", 35]], // Chapter 5: Gem
	type : "shield",
	rarity : "legendary",
	attunement : true,
	description : "This brass shield grants me poison resistance and petrification immunity. I can use it to cast 3 spells, each once per dawn. As a bonus action once per dawn, a target I can see within 30 ft must make a DC 20 Con save or be restrained until its next turn starts, at which point it must save again or be petrified for 24 hours.",
	descriptionLong : "This gleaming brass shield bears a relief of the legendary medusa druid Euryale. It grants me poison resistance and immunity to being petrified. I can use it to cast 3 spells, each once per dawn: Lesser Restoration, Locate Creature, and Transport via Plants.\nAs a bonus action once per dawn, I can try to petrify a creature I can see within 30 ft. It must make a DC 20 Constitution save or be restrained while its body turns to stone. When its next turn starts, it must then make a DC 20 Constitution save again or be petrified for 24 hours. On a successful save, the restrained condition ends.",
	descriptionFull : "This gleaming brass shield bears a relief of the legendary medusa druid Euryale."+
	"\n   While wielding this shield, you gain the following benefits:"+
	"\n   " + toUni("Blessing of Euryale") + ". You have resistance to poison damage and are immune to the petrified condition."+
	"\n   " + toUni("Petrifying Heraldry") + ". As a bonus action, you can make the front of the shield flare with a medusa's petrifying magic, causing the relief's eyes to glow brightly. Choose one creature you can see within 30 feet of you. The creature must succeed on a DC 20 Constitution saving throw, or it has the restrained condition as its body turns to stone. The restrained creature must make another DC 20 Constitution saving throw at the start of its next turn. On a failed save, the creature has the petrified condition for 24 hours. On a successful save, the restrained condition ends. Once this bonus action is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Spellcasting") + ". While wielding the shield, you can use an action to cast one of the following spells from it: Lesser Restoration, Locate Creature, Transport via Plants. Once you use the shield to cast a spell, the shield can't cast that spell again until the next dawn.",
	weight : 6,
	action : [["bonus action", " - Petrify"]],
	shieldAdd : "Euryale's Aegis",
	dmgres : ["Poison"],
	savetxt : {
		immune : ["petrified"]
	},
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["lesser restoration", "locate creature", "transport via plants"],
		selection : ["lesser restoration", "locate creature", "transport via plants"],
		firstCol : "oncelr",
		times : 3
	}],
	extraLimitedFeatures : [{
		name : "Euryale's Aegis - Petrify",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Euryale's Aegis (each spell once)",
		usages : 3,
		recovery : "dawn"
	}]
};
MagicItemsList["fabulist gem"] = {
	name : "Fabulist Gem",
	source : [["BoMT", 36]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "As a bonus action, I can use this glittering red gem to change the appearance of what I'm wearing, the color, pattern, or to something different entirely. This doesn't pass physical inspection. As an action once per dawn, I can create a pile of coins up to 100 gp on a surface within 10 ft. They last for 1 hour.",
	descriptionFull : "This glittering red gem is commonly found embedded in a ring or brooch."+
	"\n   While wearing the gem, you gain the following benefits."+
	"\n   " + toUni("Counterfeit Coins") + ". You can use your action to magically create a pile of coins, worth no more than 100 gp total, in an unoccupied space within 10 feet of yourself. The pile must appear on a surface that can support it. After 1 hour, the coins vanish, regardless of where they are. Once this action is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Illusory Fashion") + ". As a bonus action, you can magically change the appearance of your clothing and armor. You can change the style, color, and apparent quality of what you're wearing, or you can make it appear as if you were wearing different garments entirely. In either case, the changes wrought by this magic fail to pass physical inspection.",
	action : [["action", " - Counterfeit Coins"], ["bonus action", " - Illusory Fashion"]],
	extraLimitedFeatures : [{
		name : "Fabulist Gem - Counterfeit Coins",
		usages : 1,
		recovery : "dawn"
	}],
	choices : ["Brooch", "Ring"],
	"brooch" : {
		name : "Fabulist Gem Brooch",
		description : "As a bonus action, I can use this brooch's glittering red gem to change the appearance of what I'm wearing, the color, pattern, or to something different entirely. This doesn't pass physical inspection. As an action once per dawn, I can create a pile of coins up to 100 gp on a surface within 10 ft. They last for 1 hour."
	},
	"ring" : {
		name : "Fabulist Gem Ring",
		type : "ring",
		description : "As a bonus action, I can use this ring's glittering red gem to change the appearance of what I'm wearing, the color, pattern, or to something different entirely. This doesn't pass physical inspection. As an action once per dawn, I can create a pile of coins up to 100 gp on a surface within 10 ft. They last for 1 hour."
	}
};
MagicItemsList["fate cutter shears"] = {
	name : "Fate Cutter Shears",
	source : [["BoMT", 61]], // Chapter 8: Fates
	type : "weapon (dagger)",
	rarity : "very rare",
	attunement : true,
	description : "The blades of these pruning shears bear many nicks and dents but still cut cleanly. They function as a magic dagger that deal +1d6 force damage. Once per dawn when I hit a creature with them, I can cut their fate. Until that target finishes a long rest, attack rolls against them score a critical hit on a roll of 19 or 20.",
	descriptionFull : "The blades of these pruning shears bear many nicks and dents but still cut cleanly. The shears function as a magic dagger. The weapon has the following properties:"+
	"\n   " + toUni("Ever Sharp") + ". When you hit with an attack using the shears, the target takes an extra 1d6 force damage."+
	"\n   " + toUni("Sever Threads") + ". When you hit a creature with the shears, you can cut that creature's fate. Until the target finishes a long rest, attack rolls against it score a critical hit on a roll of 19 or 20 on the d20. Once this property is used, it can't be used again until the next dawn.",
	weight : 1,
	usages : 1,
	recovery : "dawn",
	additional : "Sever Threads",
	weaponOptions : [{
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*fate)(?=.*cutt(er|ing))(?=.*(shears?|dagger)).*$/i,
		name : "Fate Cutter Shears",
		source : [["BoMT", 61]],
		description : "Finesse, light, thrown; +1d6 force damage",
		selectNow : true
	}]
};
MagicItemsList["fate dealer's deck"] = {
	name : "Fate Dealer's Deck",
	source : [["BoMT", 61]], // Chapter 8: Fates
	type : "wondrous item",
	attunement : true,
	prerequisite : "Requires attunement by a cleric or paladin",
	prereqeval : function (v) { return classes.known.paladin || classes.known.cleric ? true : false; },
	description : "While holding this deck, I can use it as a spellcasting focus and I gain a bonus to my spell attack rolls and spell save DC determined by its rarity: rare (+1), very rare (+2), or legendary (+3). As an action, I can draw a card and expend and roll one HD to heal or deal radiant damage to a creature within 30 ft I can see, equal to the roll and the deck's bonus.",
	descriptionFull : "The backs of these cards are inscribed with glyphs representing the Inner Planes, the Outer Planes, or the holy symbols of various deities. While holding this deck, you can use it as a spellcasting focus, and you gain a bonus to spell attack rolls and to your spell save DC. The bonus is determined by the deck's rarity: rare (+1), very rare (+2), or legendary (+3)."+
	"\n   In addition, while you're holding the deck, you can draw a card as an action to expend and roll one of your Hit Dice and add the deck's bonus to the number rolled. One creature you can see within 30 feet of you either takes radiant damage or regains hit points (your choice) equal to the total.",
	choices : ["+1 Fate Dealer's Deck (rare)", "+2 Fate Dealer's Deck (very rare)", "+3 Fate Dealer's Deck (legendary)"],
	"+1 fate dealer's deck (rare)" : {
		name : "Fate Dealer's Deck +1",
		nameTest : "+1 Fate Dealer's Deck",
		rarity : "rare",
		description : "While holding this deck, I can use it as a spellcasting focus and it gives me a +1 bonus to my spell attacks and spell save DC. As an action, I can draw a card from it and expend and roll one of my HD. I then choose a creature within 30 ft that I can see and either heal it or deal it radiant damage equal to the roll +1.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 1;
				},
				"While holding the Fate Dealer's Deck, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
			]
		}
	},
	"+2 fate dealer's deck (very rare)" : {
		name : "Fate Dealer's Deck +2",
		nameTest : "+2 Fate Dealer's Deck",
		rarity : "very rare",
		description : "While holding this deck, I can use it as a spellcasting focus and it gives me a +2 bonus to my spell attacks and spell save DC. As an action, I can draw a card from it and expend and roll one of my HD. I then choose a creature within 30 ft that I can see and either heal it or deal it radiant damage equal to the roll +2.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 2;
				},
				"While holding the Fate Dealer's Deck, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
			]
		}
	},
	"+3 fate dealer's deck (legendary)" : {
		name : "Fate Dealer's Deck +3",
		nameTest : "+3 Fate Dealer's Deck",
		rarity : "legendary",
		description : "While holding this deck, I can use it as a spellcasting focus and it gives me a +3 bonus to my spell attacks and spell save DC. As an action, I can draw a card from it and expend and roll one of my HD. I then choose a creature within 30 ft that I can see and either heal it or deal it radiant damage equal to the roll +3.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 3;
				},
				"While holding the Fate Dealer's Deck, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
			]
		}
	}
};
MagicItemsList["feywrought armor"] = {
	name : "Feywrought Armor",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "armor (light, medium, or heavy)",
	rarity : "rare",
	attunement : true,
	description : "While wearing this colorful, flowery armor that was forged in the Feywild, I have advantage on saves to avoid or end the charmed condition on myself. The armor has 3 charges and regains 1d3 used charges daily at dawn. As an action, I can use 1 charge to cast Compulsion (save DC 15) from it.",
	descriptionFull : "This colorful, flowery armor was forged in the Feywild and is infused with that plane's captivating magic."+
	"\n   While wearing this armor, you have advantage on saving throws you make to avoid or end the charmed condition on yourself."+
	"\n   This armor has 3 charges. You can use an action to expend a charge to cast the Compulsion spell (save DC 15) from this armor. The armor regains 1d3 expended charges daily at dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "Feywrought"]
	},
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	savetxt : { adv_vs : ["charmed"] },
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["compulsion"],
		selection : ["compulsion"],
		firstCol : 1
	}]
};
MagicItemsList["fool's blade"] = {
	name : "Fool's Blade",
	source : [["BoMT", 36]], // Chapter 5: Gem
	type : "weapon (any sword)",
	rarity : "very rare",
	attunement : true,
	description : "As a bonus action once per dawn, I can use this weapon +2 to feint a target within 5 ft, giving me adv. on attacks vs. it until my next turn starts. As a reaction once per dawn when a creature within 60 ft attacks me, I can have it make a DC 15 Int save or have it target another of my choice within its reach.",
	descriptionLong : "This magic weapon appears ordinary, but bears strong illusion magic that allows me to deceive opponents. I have a +2 bonus to attack and damage rolls with it.\nFool's Feint: As a bonus action once per dawn, I can feint a creature within 5 ft, giving me advantage on attack rolls against it until the start of my next turn.\nMisdirect: As a reaction once per dawn when a creature within 60 ft targets me with an attack roll, I can have it make a DC 15 Intelligence save. On a failed save, the attack instead targets another creature of my choice that is within the attacker's reach.",
	descriptionFull : "This weapon appears ordinary, but it bears strong illusion magic that allows its wielder to skillfully deceive opponents."+
	"\n   You have a +2 bonus to attack and damage rolls made with this magic weapon. While wielding it, you also gain the following benefits:"+
	"\n   " + toUni("Fool's Feint") + ". As a bonus action, you can feint, choosing a creature within 5 feet of you as your target. Until the start of your next turn, you have advantage on attack rolls against the target. Once this bonus action is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Misdirect") + ". When a creature within 60 feet of you targets you with an attack roll, you can use your reaction to require that creature to make a DC 15 Intelligence saving throw. On a failed save, the attack instead targets another creature of your choice that is within the attacker's reach. Once this reaction has been used, it can't be used again until the next dawn.",
	action : [["bonus action", " - Feint"], ["reaction", " - Misdirect"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["suffix", "Fool's"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /\bfool'?s\b/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 2;
				}
			},
			'If I include the word "Fool\'s" in the name of a sword, it will be treated as the magic weapon Fool\'s Blade. It adds a +2 bonus to attack and damage rolls made with it.'
		]
	}
};
MagicItemsList["forcebreaker weapon"] = {
	name : "Forcebreaker Weapon",
	nameTest : "Forcebreaker",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "weapon (any that deals bludgeoning damage)",
	rarity : "very rare",
	description : "This magic weapon gives +2 to hit and damage. It was crafted to destroy structures made of magical force, such as a Wall of Force. With one strike with this weapon, I can shatter a Large or smaller structure of magical force, or shatter a 20-ft cube portion of a Huge or larger structure.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic weapon."+
	"\n   This weapon was crafted to destroy structures made of force, such as those created by Forcecage or Wall of Force. Striking a Large or smaller structure of magical force with this weapon automatically shatters that structure. If the target is a Huge or larger structure of force, this weapon shatters a 20-foot-cube portion of it.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			var damageArr = inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage;
			return !/bludg(\.|eoning)/i.test(damageArr.toString());
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && /forcebreaker/i.test(v.WeaponTextName) && /bludg(\.|eoning)/i.test(fields.Damage_Type)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Shatters magical force';
				}
			},
			'If I include the word "Forcebreaker" in the name of a bludgeoning weapon, it will be treated as the magic weapon Forcebreaker Weapon. It adds a +2 bonus to attack and damage rolls made with it.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && /forcebreaker/i.test(v.WeaponTextName) && /bludg(\.|eoning)/i.test(fields.Damage_Type)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
	}
};
MagicItemsList["glimmering moonbow"] = {
	name : "Glimmering Moonbow",
	nameTest : "Glimmering Moon",
	source : [["BoMT", 36]], // Chapter 5: Gem
	type : "weapon (any bow)",
	rarity : "rare",
	attunement : true,
	description : "This silver-and-black bow adds +1 to its to hit and damage rolls, creates its own ammo that lasts until it hits or misses a target, and deals +1d6 radiant damage. As a bonus action once per dawn, I can use it to gain resistance to piercing, bludgeoning, and slashing damage until my next turn starts, ",
	descriptionFull : "This silver-and-black bow is engraved with the phases of the moon. You gain a +1 bonus to attack and damage rolls made with this magic weapon."+
	"\n   When you hit with a ranged attack roll using this magic bow, the target takes an extra 1d6 radiant damage. If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the bow vanishes the instant after it hits or misses a target."+
	"\n   While wielding this magic bow, you can use a bonus action to enter a semi-incorporeal state until the start of your next turn. While semi-incorporeal, you have resistance to bludgeoning, piercing, and slashing damage. Once this bonus action is used, it can't be used again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	additional : "resistances",
	action : [["bonus action", " (resistances)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "bow"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /bow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*glimmering)(?=.*moon).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(;|,)? ?(loading|Counts as magical)/ig, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 radiant damage';
				}
			},
			'If I include the words "Glimmering" and "Moon" in the name of a bow, it will be treated as the magic weapon Glimmering Moonbow. It has +1 to hit and damage, deals +1d6 radiant damage, and produces its own ammunition, thus its loading property is removed if it has it.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /^(?=.*glimmering)(?=.*moon).*$/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["gloomwrought armor"] = {
	name : "Gloomwrought Armor",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "armor (light, medium, or heavy)",
	rarity : "rare",
	attunement : true,
	description : "While wearing this intricate grayscale armor forged in the Shadowfell, I have advantage on saves to avoid or end the frightened condition on myself. The armor has 3 charges and regains 1d3 used charges daily at dawn. As an action, I can use 1 charge to cast Calm Emotions (save DC 15) from it.",
	descriptionFull : "This intricate grayscale armor was forged in the Shadowfell and is infused with that plane's gloom."+
	"\n   While you're wearing this armor, you have advantage on saving throws you make to avoid or end the frightened condition on yourself."+
	"\n   This armor has 3 charges. You can expend a charge to cast the Calm Emotions spell (save DC 15) from the armor. This armor regains 1d3 expended charges daily at dawn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "Gloomwrought"]
	},
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	savetxt : { adv_vs : ["frightened"] },
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["calm emotions"],
		selection : ["calm emotions"],
		firstCol : 1
	}]
};
MagicItemsList["grasping whip"] = {
	name : "Grasping Whip",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "weapon (whip)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic whip. When I hit a creature or object that is Large or smaller with this whip, I can pull that creature or object 5 ft toward me instead of dealing damage.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic whip. When you hit a creature or object that is Large or smaller with this whip, you can pull that creature or object 5 feet toward you instead of dealing damage.",
	weight : 3,
	weaponOptions : [{
		baseWeapon : "whip",
		regExpSearch : /^(?=.*grasping)(?=.*whip).*$/i,
		name : "Grasping Whip",
		source : [["BoMT", 67]],
		description : "Finesse, reach; Forgo damage to pull \u2264 Large 5 ft to me",
		selectNow : true
	}]
};
MagicItemsList["hammer of runic focus"] = {
	name : "Hammer of Runic Focus",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "weapon (warhammer)",
	rarity : "very rare",
	attunement : true,
	description : "As a bonus action three times per dawn, I can slam this hammer on the ground, creating a 15-ft radius glowing circle of runes wherein it's a +3 warhammer glowing with matching runes. The rune circle disappears after 1 minute, when I create another, or when I dismiss it as a bonus action.",
	descriptionFull : "This magic hammer has 3 charges. As a bonus action, you can expend 1 charge and slam this hammer on the ground, creating a 15-foot-radius circle of glowing runes centered on the point of impact. While you're inside that area, your hammer glows with matching runes, and you gain a +3 bonus to attack and damage rolls made with this hammer. The rune circle disappears after 1 minute, when you create another rune circle, or when you dismiss the rune circle as a bonus action. This hammer regains 1d3 expended charges daily at dawn.",
	weight : 2,
	action : [["bonus action", " (start/end)"]],
	usages : 3,
	recovery : "dawn",
	weaponOptions : [{
		baseWeapon : "warhammer",
		regExpSearch : /^(?=.*hammer)(?=.*runic)(?=.*focus).*$/i,
		name : "Hammer of Runic Focus",
		source : [["BoMT", 67]],
		description : "Versatile (1d10); +2 to hit/damage while inside its circle",
		selectNow : true
	}]
};
MagicItemsList["house of cards"] = {
	name : "House of Cards",
	source : [["BoMT", 61]], // Chapter 8: Fates
	type : "wondrous item",
	rarity : "uncommon",
	description : "As an action once per dawn, I can have this deck of cards deal themselves into a shelter centered on a point within 30 ft. It can be any shape that fits in a 40-ft cube, with 1 door and up to 4 windows, that only I can open or close. It has 15 AC, 50 HP, and lasts for 24 hours, I dismiss it as an action, or it reaches 0 HP.",
	descriptionLong : "This deck of cards is decorated with geometric shapes that have a protective motif. As an action once per dawn, I can cause the cards to transform into a shelter made of cards centered on a point within 30 ft. It can be any shaped I want that fits in a 40-ft cube. It has a floor, a roof, one door and up to four windows, and only I can open or close them. It has a comfortable temperature inside, AC 15, 50 HP, and immunity to poison and psychic damage. It lasts for 24 hours, until I dismiss it as an action, or until it is reduced to 0 HP. When the shelter's duration ends, it transforms back into a deck of cards in my hand.",
	descriptionFull : "This deck of cards is decorated with geometric shapes that have a protective motif. While you're holding the deck, you can use an action to shuffle it and cause the cards to deal themselves out and transform into a shelter made of cards. The shelter can be shaped however you desire, but it must fit in a 40-foot cube centered on a point within 30 feet of you. The shelter has one door and up to four windows, and only you can open or close them. It has a floor and a roof, and it maintains a comfortable temperature inside."+
	"\n   The shelter has AC 15, 50 hit points, and immunity to poison and psychic damage. The shelter lasts for 24 hours, until you dismiss it as an action, or until it is reduced to 0 hit points. When the shelter's duration ends, it transforms back into a deck of cards and appears in your hand. Once the deck has transformed into a shelter, it can't be used again until the next dawn.",
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["jester's mask"] = {
	name : "Jester's Mask",
	source : [["BoMT", 36]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a bard, sorcerer, or warlock",
	prereqeval : function (v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock ? true : false; },
	description : "I can use this harlequin mask as a spellcasting focus. It adds a +3 bonus to my spell attacks and spell save DCs that use Charisma. Once per dawn when I roll a 1 on a d20, I can change it to a 20. As a reaction once per dawn when I'm hit by an attack roll, I can teleport 30 ft to an empty space I can see, taking no damage.",
	descriptionLong : "While I'm wearing this colorful, harlequin domino mask edged with pearls, it grants me:"+
	"\u2022 Charismatic Focus: I can use it as a spellcasting focus and it grants me a +3 bonus to spell attack rolls and spell saving throw DCs that use Charisma as the spellcasting ability."+
	"\u2022 Marvelous Escape: As a reaction once per dawn when a creature hits me with an attack roll, I can teleport in a puff of smoke and sparkles instead of taking damage. I teleport to an empty space I can see within 30 ft, along with anything I'm wearing or carrying."+
	"\u2022 Topsy-Turvy: Once per dawn when I roll a 1 on a d20, I can treat it as a 20 instead.",
	descriptionFull : "This colorful, harlequin domino mask is edged with pearls. While wearing this mask, you gain the following benefits:"+
	"\n   " + toUni("Charismatic Focus") + ". You can use the mask as a spellcasting focus. You gain a +3 bonus to any spell attack rolls and spell saving throw DCs that use Charisma as the spellcasting ability."+
	"\n   " + toUni("Marvelous Escape") + ". When a creature hits you with an attack roll, you can use your reaction to disappear in a puff of smoke and colorful sparkles. You take no damage and instead teleport, along with anything you are wearing or carrying, to an unoccupied space you can see within 30 feet of yourself. Once this reaction is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Topsy-Turvy") + ". When you roll a 1 on a d20, you can treat the roll as if you rolled a 20 instead. Once this property is used, it can't be used again until the next dawn.",
	action : [["reaction", " (escape)"]],
	extraLimitedFeatures : [{
		name : "Jester's Mask - Marvelous Escape",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Jester's Mask - Topsy-Turvy",
		usages : 1,
		recovery : "dawn"
	}],
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type !== "prepare" && ability === 6) return 3;
			},
			"While wearing the Jester's Mask, I gain a +3 bonus to any spell attack rolls and spell saving throw DCs that use Charisma as the spellcasting ability."
		]
	}
};
MagicItemsList["plate of knight's fellowship"] = {
	name : "Plate of Knight's Fellowship",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "armor (plate)",
	rarity : "uncommon",
	attunement : true,
	description : "This gleaming set of silver-and-gold plate armor never tarnishes. As a bonus action once per dawn, I can use it to summon a warrior spirit (knight) to an empty spot within 30 ft. It lasts for 1 minute or until reduced to 0 HP. It is an ally to me, shares my initiative and obeys my commands. See the Companion page.",
	descriptionFull : "This gleaming set of silver-and-gold plate armor never tarnishes."+
	"\n   While wearing this armor, you can use a bonus action to summon the spirit of a warrior to your aid. The spirit's corporeal form manifests in an unoccupied space of your choice within 30 feet of you, and it uses the knight stat block. The spirit disappears when it drops to 0 hit points or after 1 minute, whichever comes first."+
	"\n   The spirit is an ally to you and your companions. In combat, the spirit shares your initiative count but takes its turn immediately after yours. The spirit obeys your commands (no action required by you); if you don't issue any commands, the spirit takes the Dodge action and uses its movement to avoid danger."+
	"\n   Once this bonus action is used, it can't be used again until the next dawn.",
	weight : 65,
	usages : 1,
	recovery : "dawn",
	action : [["bonus action", ""]],
	armorAdd : {
		select : "Plate of Knight's Fellowship",
		options : ["Plate of Knight's Fellowship"]
	},
	creaturesAdd : [["Knight"]],
	creatureOptions : [{
		name : "Knight",
		source : [["SRD", 400], ["M", 347]],
		eval : function(prefix) {
			Value(prefix + "Comp.Desc.Name", "Warrior Spirit");
		},
		size : 3,
		type : "Humanoid",
		alignment : "any alignment",
		ac : 18,
		hp : 52,
		hd : [8, 8],
		speed : "30 ft",
		scores : [16, 11, 14, 11, 11, 15],
		saves : ["", "", 4, "", 2, ""],
		senses : "",
		passivePerception : 10,
		languages : "any one language (usually Common)",
		challengeRating : "3",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Greatsword",
			ability : 1,
			damage : [2, 6, "slashing"],
			range : "Melee (5 ft)",
			description : "Heavy, two-handed; Two greatsword attacks as an Attack action"
		}, {
			name : "Heavy Crossbow",
			ability : 2,
			damage : [1, 10, "piercing"],
			range : "100/400 ft",
			description : "Ammunition, heavy, loading, two-handed"
		}],
		actions : [{
			name : "Leadership (Recharges after a Short or Long Rest)",
			description : "As an action, the knight can activate this ability. Then, for 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft of it makes an attack roll or save. The creature can add +1d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
		}, {
			name : "Parry",
			description : "As a reaction, the knight can add +2 AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
		}],
		traits : [{
			name : "Multiattack",
			description : "The knight makes two melee attacks."
		}],
		features : [{
			name : "Brave",
			description : "The knight has advantage on saving throws against being frightened."
		}, {
			name : "Summoned",
			description : "The warrior spirit is an ally to you and your companions. It shares your initiative count but takes its turn immediately after yours. The spirit obeys your commands (no action), or takes the Dodge action and uses its movement to avoid danger if issued no commands. The spirit disappears when it drops to 0 hit points or after 1 minute, whichever comes first."
		}]
	}]
};
MagicItemsList["ring of puzzler's wit"] = {
	name : "Ring of Puzzler's Wit",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "ring",
	rarity : "uncommon",
	description : "This gold ring bears a fluorite stone and is enchanted to sharpen the wearer's mind. The ring has 3 charges and regains 1d4-1 expended charges daily at dawn. When I make an Intelligence check, I can expend 1 charge to grant myself advantage on the check.",
	descriptionFull : "This gold ring bears a fluorite stone and is enchanted to sharpen the wearer's mind."+
	"\n   The ring has 3 charges and regains 1d4 - 1 expended charges daily at dawn. When you make an Intelligence check, you can expend 1 charge to grant yourself advantage on the check.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d4-1"
};
MagicItemsList["rod of hellish flames"] = {
	name : "Rod of Hellish Flames",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "rod",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "I can use this black iron rod as an arcane focus and it grants me resistance to fire and necrotic damage. Once per dawn I can use it to cast Hellish Rebuke as a 4th-level spell (save DC 16). When I cast a spell that deals fire or necrotic damage, I can once per dawn use it to maximize the damage instead of rolling.",
	descriptionFull : "Glowing cinders orbit the flanged head of this black iron rod."+
	"\n   This rod can be used as an arcane focus. While holding this rod, you gain the following benefits:"+
	"\n   " + toUni("Hellish Resistance") + ". You have resistance to fire and necrotic damage."+
	"\n   " + toUni("Searing Rebuke") + ". You can cast the Hellish Rebuke spell as a 4th-level spell (save DC 16) from the rod. Once you use the rod to cast the spell, the rod can't cast the spell again until the next dawn."+
	"\n   " + toUni("Surge of Brimstone") + ". Whenever you cast a spell that deals fire or necrotic damage, you can use the rod to deal the maximum damage instead of rolling. Once this property is used, it can't be used again until the next dawn.",
	weight : 2,
	extraLimitedFeatures : [{
		name : "Rod of Hellish Flames (Hellish Rebuke)",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Rod of Hellish Flames (maximize)",
		usages : 1,
		recovery : "dawn"
	}],
	dmgres : ["Fire", "Necrotic"],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"hellish rebuke" : {
			description : "Cast when taking damage, creature that dealt damage takes 5d10 Fire damage; save halves",
			changes : "Using the Rod of Hellish Flames, I cast Hellish Rebuke as if I'm using a 4th-level spell slot, doing 5d10 damage, once per dawn."
		}
	}
};
MagicItemsList["rogue's mantle"] = {
	name : "Rogue's Mantle",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "This dark, hooded mantle of thick cloth gives me +60 ft darkvision. As a bonus action, I can use it to teleport 30 ft from and into dim light or darkness, to an empty space I can see. I then have advantage on my first attack before my turn ends. Also, I can use it to cast Antagonize once per dawn (save DC 15).",
	descriptionFull : "This dark, hooded mantle of thick cloth is infused with secretive and deceptive magic. While wearing it, you gain the following benefits:"+
	"\n   " + toUni("Darkvision") + ". You gain darkvision within a range of 60 feet. If you already have darkvision, the mantle increases your darkvision's range by 60 feet instead."+
	"\n   " + toUni("Move in Shadows") + ". While you are in dim light or darkness, you can use a bonus action to teleport, along with anything you are wearing or carrying, up to 30 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."+
	"\n   " + toUni("Willful Enmity") + ". You can cast the Antagonize spell (save DC 15) from the mantle. Once the mantle has cast the spell, it can't cast the spell again until the next dawn.",
	usages : 1,
	recovery : "dawn",
	additional : "Antagonize",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	action : [["bonus action", " (teleport)"]],
	fixedDC : 15,
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["antagonize"],
		selection : ["antagonize"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["ruinous flail"] = {
	name : "Ruinous Flail",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "weapon (flail)",
	rarity : "rare",
	attunement : true,
	description : "This ash-gray, cold to the touch flail +1 deals double damage to objects and structures. Once per dawn, I can have a creature hit by it make a DC 15 Con save or be poisoned for 1 minute and take 2d4 necrotic damage at the start of each of its turns. It can repeat the save at the end of each of its turns to end the effects.",
	descriptionFull : "This ash-gray flail is cold to the touch. You gain a +1 bonus to attack and damage rolls made with this magic weapon, and it deals double damage to objects and structures."+
	"\n   Additionally, when you hit a creature with this weapon, you can force the creature to make a DC 15 Constitution saving throw. On a failed save, the creature has the poisoned condition for 1 minute. The poisoned creature takes 2d4 necrotic damage at the start of each of its turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once this property is used in this way, it can't be used again until the next dawn.",
	weight : 2,
	usages : 1,
	recovery : "dawn",
	weaponOptions : [{
		baseWeapon : "flail",
		regExpSearch : /^(?=.*ruinous)(?=.*flail).*$/i,
		name : "Ruinous Flail",
		source : [["BoMT", 37]],
		description : "Double damage to objects; Once per dawn: target DC 15 Con save or poisoned, see item",
		modifiers : [1, 1],
		selectNow : true
	}]
};
MagicItemsList["sage's signet"] = {
	name : "Sage's Signet",
	source : [["BoMT", 37]], // Chapter 5: Gem
	type : "ring",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "This gilded ring with a beautiful engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury and two more spells depending on the signet each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
	descriptionFull : "This gilded ring bears a beautiful engraving and is imbued with powers of keen wisdom and foresight. While wearing this ring, you can use an action to cast the Augury spell from the ring. Once you use the ring to cast the spell, the ring can't cast the spell again until the next dawn."+
	"\n   Six varieties of Sage's Signet rings exist, each with a different signet (see the table below). A ring's signet determines its rarity as well as the additional spells it can cast. While wearing a Sage's Signet, you can cast each of its additional spells once from the ring using your Intelligence as the spellcasting ability. Once you cast each of the additional spells from the ring, it can't cast the spell again until the next dawn."+
	"\n\nSignet\tRarity\tSpells"+
	"\nBear\tVery rare\tEnlarge/Reduce, Polymorph"+
	"\nHart\tVery rare\tAura of Vitality, Mass Cure Wounds"+
	"\nLion\tVery rare\tDestructive Wave, Fireball"+
	"\nSerpent\tRare\tFear, Hex"+
	"\nSongbird\tRare\tCharm Person, Hypnotic Pattern"+
	"\nWolf\tVery rare\tFreedom of Movement, Pass without Trace",
	usages : 3,
	recovery : "dawn",
	additional : "each spell once",
	choices : ["Bear (very rare)", "Hart (very rare)", "Lion (very rare)", "Serpent (rare)", "Songbird (rare)", "Wolf (very rare)"],
	"bear (very rare)" :  {
		name : "Sage's Signet (Bear)",
		rarity : "very rare",
		description : "This gilded ring with a beautiful bear engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Enlarge/Reduce, and Polymorph each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "enlarge/reduce", "polymorph"],
			selection : ["augury", "enlarge/reduce", "polymorph"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	},
	"hart (very rare)" :  {
		name : "Sage's Signet (Hart)",
		rarity : "very rare",
		description : "This gilded ring with a beautiful hart engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Aura of Vitality, and Mass Cure Wounds each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "aura of vitality", "mass cure wounds"],
			selection : ["augury", "aura of vitality", "mass cure wounds"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	},
	"lion (very rare)" :  {
		name : "Sage's Signet (Lion)",
		rarity : "very rare",
		description : "This gilded ring with a beautiful lion engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Destructive Wave, and Fireball each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "destructive wave", "fireball"],
			selection : ["augury", "destructive wave", "fireball"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	},
	"serpent (rare)" :  {
		name : "Sage's Signet (Serpent)",
		rarity : "rare",
		description : "This gilded ring with a beautiful serpent engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Fear, and Hex each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "fear", "hex"],
			selection : ["augury", "fear", "hex"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	},
	"songbird (rare)" :  {
		name : "Sage's Signet (Songbird)",
		rarity : "rare",
		description : "This gilded ring with a beautiful songbird engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Charm Person, and Hypnotic Pattern each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "charm person", "hypnotic pattern"],
			selection : ["augury", "charm person", "hypnotic pattern"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	},
	"wolf (very rare)" :  {
		name : "Sage's Signet (Wolf)",
		rarity : "very rare",
		description : "This gilded ring with a beautiful wolf engraving is imbued with powers of keen wisdom and foresight. While wearing this ring, I can cast Augury, Freedom of Movement, and Pass without Trace each once per dawn using my Intelligence as the spellcasting ability. Casting Augury using this ring only takes one action.",
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["augury", "freedom of movement", "pass without trace"],
			selection : ["augury", "freedom of movement", "pass without trace"],
			firstCol : "oncelr",
			times : 3
		}],
		spellChanges : BoMT["sage's signet"]
	}
};
MagicItemsList["shield of the tortoise"] = {
	name : "Shield of the Tortoise",
	source : [["BoMT", 67]], // Chapter 9: Knight
	type : "shield",
	rarity : "uncommon",
	attunement : true,
	description : "This +1 shield curses me as soon as I attune to it. While I'm cursed by it, I can't discard it, I can't break my attunement to it, and I am sluggish. Sluggish means that my speed is halved and when I roll initiative, I always treat the roll on the d20 as a 1. I can't change my initiative by any means.",
	descriptionFull : "While you are wielding this shield, you gain a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC."+
	"\n   " + toUni("Curse") + ". This item is cursed. Attuning to it extends the curse to you until you are targeted by a Remove Curse spell or similar magic. You cannot discard the shield, and remain attuned to it, as long as you are cursed. As long as you are cursed, you are sluggish. Your speed is halved. When you roll initiative, treat the roll on your d20 as a 1. You can't change your initiative by any means.",
	weight : 6,
	shieldAdd : ["Shield of the Tortoise", 3, 6],
	speed : { allModes : "/2" }
};
MagicItemsList["shrieking greaves"] = {
	name : "Shrieking Greaves",
	source : [["BoMT", 174]], // Chapter 20: Flames
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "These black leg guards have 3 charges, regaining 1d3 used charges daily at dawn. As a bonus action, I can use 1 charge to gain +30 ft walking speed and adv. on Dex saves for 1 minute. They are cursed, see Notes page. I have disadv. on saves vs. being frightened and they scream if I start my turn frightened.",
	descriptionLong : "These black leg guards are decorated with monstrous skulls screaming in terror. They have 3 charges, regaining 1d3 used charges daily at dawn. As a bonus action, I can use 1 charge to increase my walking speed by 30 ft, and gain advantage on Dexterity saves. These effects last for 1 minute. The greaves are cursed, and I can't remove or end my attunement to them. They give me disadvantage on saves against being frightened. When I start my turn frightened, they release an ear-piercing scream. I and all within 10 ft of me take 2d8 thunder damage and can make a DC 15 Constitution save to halve this damage.",
	descriptionFull : "Each of these black leg guards is decorated with a motif of monstrous skulls screaming in terror."+
	"\n   The greaves have 3 charges. While wearing these greaves, you can use a bonus action to expend 1 charge to increase your walking speed by 30 feet, and you have advantage on Dexterity saving throws. These effects last for 1 minute. The greaves regain 1d3 expended charges daily at dawn."+
	"\n   " + toUni("Curse") + ". " + BoMT.toDescrFull(BoMT["shrieking greaves"]),
	action : [["bonus action", ""]],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	toNotesPage : [{
		name : "Shrieking Greaves Curse",
		note : BoMT.to1stPerson([BoMT["shrieking greaves"]])
	}]
};
MagicItemsList["skull helm"] = {
	name : "Skull Helm",
	source : [["BoMT", 38]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "While wearing this skull-shaped helm, I have resistance to cold, poison, and necrotic damage. Additionally, I can cast Spirit of Death from it without requiring material components. Once I use the helm to cast the spell, it can't cast this spell again until the next dawn.",
	descriptionFull : "While wearing this skull-shaped helm, you have resistance to cold, poison, and necrotic damage."+
	"\n   Additionally, while wearing the helm, you can cast Spirit of Death from it without requiring material components. Once you use the helm to cast the spell, the helm can't cast this spell again until the next dawn.",
	dmgres : ["Cold", "Poison", "Necrotic"],
	usages : 1,
	recovery : "dawn",
	additional : "Spirit of Death",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["spirit of death"],
		selection : ["spirit of death"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"spirit of death" : {
			components : "",
			compMaterial : "",
			description : "Summon a Reaper Spirit; obeys commands; takes turn after mine; disappears at 0 hp",
			changes : "While wearing the helmet, it requires no material components to cast Spirit of Death."
		}
	}
};
MagicItemsList["sling of giant felling"] = {
	name : "Sling of Giant Felling",
	source : [["BoMT", 68]], // Chapter 9: Knight
	type : "weapon (sling)",
	rarity : "uncommon",
	description : "When I hit a creature with the Giant type with a ranged attack roll using this magic sling, the creature must succeed on a DC 18 Constitution saving throw or be knocked prone.",
	descriptionFull : "When you hit a Giant creature with a ranged attack roll using this magic sling, the creature must succeed on a DC 18 Constitution saving throw or have the prone condition.",
	weaponOptions : [{
		baseWeapon : "sling",
		regExpSearch : /^(?=.*sling)(?=.*giant)(?=.*felling).*$/i,
		name : "Sling of Giant Felling",
		source : [["BoMT", 68]],
		description : "Ammunition; Giants: DC 18 Con save or prone",
		selectNow : true
	}]
};
MagicItemsList["spindle of fate"] = {
	name : "Spindle of Fate",
	source : [["BoMT", 38]], // Chapter 5: Gem
	type : "wand",
	rarity : "legendary",
	attunement : true,
	description : "This wand has 6 charges, regains 1d6 at dawn. I can use 1 charge to add my Prof Bonus to my initiative after the roll. As an action, I can use 2 charges to invoke a creature's doom. As a reaction when a creature within 60 ft makes an attack or save, I can use 3 charges to change the outcome. See Notes page.",
	descriptionFull : "This wand is shaped like a drop spindle wrapped in red thread. The wand has 6 charges that can be used for the following properties:"+
	"\n   " + BoMT.toDescrFull(BoMT["spindle of fate"])+
	"\n   The wand regains 1d6 expended charges daily at dawn.",
	descriptionFull : BoMT.toDescrFull(BoMT["spindle of fate"]),
	action : [["action", " - Doom Foretold"], ["reaction", " - Twist of Fate"]],
	weight : 1,
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	toNotesPage : [{
		name : "Features",
		note : [
			"This wand is shaped like a drop spindle wrapped in red thread. The wand has 6 charges, regaining 1d6 expended charges daily at dawn. The charges can be used for the following properties:"+
			BoMT.to1stPerson(BoMT["spindle of fate"])
		]
	}]
};
MagicItemsList["starshot crossbow"] = {
	name : "Starshot Crossbow",
	nameTest : "Starshot",
	source : [["BoMT", 38]], // Chapter 5: Gem
	type : "weapon (any crossbow)",
	rarity : "rare",
	attunement : true,
	description : "This black wooden crossbow has pearl inlays depicting three constellations. It has 3 charges, regaining 1d3 at dawn. It produces its own ammo that lasts until it hits or misses a target. As a bonus action, I can use 1 charge to tap and invoke one of its constellation, see Notes page for the options.",
	descriptionLong : "This crossbow of blackened wood has pearl inlays depicting three different constellations. It has 3 charges and regains 1d3 used charged daily at dawn. It produces its own ammo that lasts until it hits or misses a target. As a bonus action, I can use 1 charge to tap and invoke one of its constellation, see Notes for full text. Balance: next hit with the crossbow before my next turn ends heals me or another within 30 ft of me for 1d8+my Prof Bonus. Flames: until my next turn ends, the crossbow deals +2d8 fire damage. Rogue: until my next turn ends, I become invisible as well as anything I'm wearing or carrying.",
	descriptionFull : BoMT.toDescrFull(BoMT["starshot crossbow"]),
	action : [["bonus action", ""]],
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /crossbow/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /crossbow/i.test(v.baseWeaponName) && /Starshot/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(;|,)? ?(loading|Counts as magical)/ig, '');
				}
			},
			'If I include the word "Starshot" in the name of a crossbow, it will be treated as the magic weapon Starshot Crossbow. It produces its own ammunition, thus its loading property is removed.'
		]
	},
	toNotesPage : [{
		name : "Features and Constellations",
		note : BoMT.to1stPerson(BoMT["starshot crossbow"])
	}]
};
MagicItemsList["stonemaker war pick"] = {
	name : "Stonemaker War Pick",
	source : [["BoMT", 68]], // Chapter 9: Knight
	type : "weapon (war pick)",
	rarity : "very rare",
	attunement : true,
	description : "This war pick adds +1 to attack and damage rolls. I can use it to cast Meld into Stone once per dawn. If I score a critical hit with it against a creature that has 100 HP or fewer, I can use 1 charge to have the target make a DC 15 Con save or be petrified for 8 hours. It has 1d6+1 charges that can't be replenished.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic war pick. It has the following special properties:"+
	"\n   " + toUni("Meld into Stone") + ". You can cast the Meld into Stone spell from this war pick. Once this property is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Petrification") + ". The war pick has 1d6 + 1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, you can expend 1 charge from the war pick to have that creature make a DC 15 Constitution saving throw. On a failed save, the creature has the petrified condition for 8 hours. When the war pick has no charges remaining, it loses this property.",
	weight : 2,
	extraLimitedFeatures : [{
		name : "Stonemaker War Pick - Meld into Stone",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Stonemaker War Pick - Petrification",
		usages : "1d6+1",
		recovery : "Never"
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["meld into stone"],
		selection : ["meld into stone"],
		firstCol : "oncelr"
	}],
	weaponOptions : [{
		baseWeapon : "war pick",
		regExpSearch : /^(?=.*stonemaker)(((?=.*pick)(?=.*war))|((?!.*(heavy|great|light))(?=.*\bpicks?\b))).*$|\bkuwas?\b/i,
		name : "Stonemaker War Pick",
		source : [["BoMT", 68]],
		description : "Can petrify on critical hit, see item",
		modifiers : [1, 1],
		selectNow : true
	}]
};
MagicItemsList["sun staff"] = {
	name : "Sun Staff",
	source : [["BoMT", 39]], // Chapter 5: Gem
	type : "staff",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a cleric, druid, or wizard",
	prereqeval : function (v) { return classes.known.cleric || classes.known.druid || classes.known.wizard ? true : false; },
	description : "This +1 quarterstaff deals +1d8 fire damage on an attack. I can use it as a spellcasting focus. Once per dawn when I cast a spell using a spell slot, I can reroll my Prof Bonus of fire or radiant damage dice. As a bonus action, I can toggle it glowing with sunlight: 15-ft radius bright light and dim light for another 15 ft.",
	descriptionFull : "Veins of sunstone run through this wooden staff. This staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it. When you hit with an attack roll using this staff, the target takes an extra 1d8 fire damage."+
	"\n   " + toUni("Solar Focus") + ". You can use the staff as a spellcasting focus. While holding the staff, you can reroll a number of damage dice up to your proficiency bonus when you use a spell slot to cast a spell that deals fire or radiant damage. You must use the new rolls. Once this property is used, it can't be used again until the next dawn."+
	"\n   " + toUni("Sunny Glow") + ". As a bonus action, you can cause the staff to glow with sunlight. While glowing, the staff sheds bright light in a 15-foot radius and dim light for an additional 15 feet. The light lasts until you use another bonus action to extinguish it.",
	weight : 4,
	action : [["bonus action", " (glow on/off)"]],
	usages : 1,
	recovery : "dawn",
	additional : "reroll damage",
	weaponOptions : [{
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*sun)(?=.*staff).*$/i,
		name : "Sun Staff",
		source : [["BoMT", 39]],
		description : "Versatile (1d8); +1d8 fire damage",
		modifiers : [1, 1],
		selectNow : true
	}]
};
MagicItemsList["sword of the planes"] = {
	name : "Sword of the Planes",
	nameTest : "of the Planes",
	source : [["BoMT", 68]], // Chapter 9: Knight
	type : "weapon (any sword)",
	rarity : "legendary",
	attunement : true,
	description : "This +3 weapon can tear the fabric of reality. As an action once per dawn, I can slice a rift to a location on another plane in an empty space within 5 ft of me. The rift can be up to 10 ft high and wide. Anything entering the rift is instantly transported. The DM determines where it goes exactly.",
	descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic sword."+
	"\n   This sword can tear the fabric of reality, creating a temporary rift between planes. You can use your action to choose a different plane of existence from the one you're on and slice through an unoccupied space within 5 feet of yourself, creating a rift to that other plane. The rift can be up to 10 feet high and 10 feet wide, and it lasts for 1 minute. Once this property is used, it can't be used again until the next dawn."+
	"\n   You can specify a target destination, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second layer of the Nine Hells, and the rift opens in or near that destination (DM's discretion). If you are trying to reach the City of Brass, for example, the rift might appear on the Street of Steel, before the Gate of Ashes, or facing the city from across the Sea of Fire, at the DM's discretion."+
	"\n   Anything that enters the rift is instantly transported to the other plane, appearing in the unoccupied space nearest to the rift.",
	usages : 1,
	recovery : "dawn",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /of the Planes/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 3;
				}
			},
			'If I include the words "of the Planes" in a the name of a sword, it will be treated as the magic weapon Sword of the Planes. It has +3 to hit and damage.'
		]
	}
};
MagicItemsList["telescopic transporter"] = {
	name : "Telescopic Transporter",
	source : [["BoMT", 105]], // Chapter 13: Star
	type : "wondrous item",
	rarity : "legendary",
	description : "This enormous telescope allows me to view distant celestial objects, including stars, Wildspace systems, and Astral Sea phenomena. With 1 hour of calibrating, I can use it to attempt to travel to whatever it is pointed at. With a DC 17 Arcana check me and 8 others teleport, otherwise a mishap, see Notes.",
	descriptionFull : BoMT.toDescrFull(BoMT["telescopic transporter"]),
	toNotesPage : [{
		name : "Features",
		note : BoMT.to1stPerson([BoMT["telescopic transporter"]])
	}]
};
MagicItemsList["tidecaller trident"] = {
	name : "Tidecaller Trident",
	source : [["BoMT", 69]], // Chapter 9: Knight
	type : "weapon (trident)",
	rarity : "very rare",
	attunement : true,
	description : "This magic trident gives a +2 bonus to attack and damage made with it and advantage on attack rolls when used underwater. The trident has 3 charges, regaining 1d3 expended charges daily at dawn. I can expend these charges to cast spells (save DC 15): Control Water (1 charge) or Tsunami (3 charges).",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic trident. You also have advantage on attack rolls made with this weapon while underwater."+
	"\n   This trident has 3 charges. You can expend 1 charge to cast Control Water (save DC 15) from the trident or 3 charges to cast Tsunami (save DC 15) from it instead. The trident regains 1d3 expended charges daily at dawn.",
	weight : 4,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	weaponOptions : [{
		baseWeapon : "trident",
		regExpSearch : /^(?=.*tidecaller)(?=.*trident).*$/i,
		name : "Tidecaller Trident",
		source : [["BoMT", 69]],
		description : "Thrown, versatile (1d8); Adv. when underwater",
		modifiers : [2, 2],
		selectNow : true
	}],
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["control water"],
		selection : ["control water"],
		firstCol : 1
	}, {
		name : "3 charges",
		spells : ["tsunami"],
		selection : ["tsunami"],
		firstCol : 3
	}]
};
MagicItemsList["voidwalker armor"] = {
	name : "Voidwalker Armor",
	source : [["BoMT", 39]], // Chapter 5: Gem
	type : "armor (studded leather)",
	rarity : "rare",
	attunement : true,
	description : "This black studded leather armor bears a red sheen. As a bonus action once per dawn, I can summon a projection of myself in an empty space within 30 ft. It's a translucent copy of me, immune to all damage and conditions, that I can make attacks and cast spells from. The projection disappears at the end of my turn.",
	descriptionFull : "This black studded leather armor bears a red sheen. While wearing this armor, you can use a bonus action to summon a projection of yourself in an unoccupied space within 30 feet of yourself. The projection is a translucent copy of you that has immunity to all damage and conditions, and you can make attacks and cast spells with a range other than self as if standing in the projection's space. The projection disappears at the end of your turn. Once you use this bonus action, it can't be used again until the next dawn."+
	"\n   " + toUni("Curse") + ". " + BoMT.toDescrFull(BoMT["voidwalker armor"]),
	weight : 13,
	usages : 1,
	recovery : "dawn",
	action : [["bonus action", ""]],
	armorOptions : [{
		regExpSearch : /^(?=.*voidwalker)(?=.*armou?r).*$/i,
		name : "Voidwalker Armor",
		source : [["BoMT", 39]],
		type : "light",
		ac : 12,
		weight : 13,
		selectNow : true
	}],
	toNotesPage : [{
		name : "Voidwalker Curse",
		note : BoMT.to1stPerson([BoMT["voidwalker armor"]])
	}]
};
MagicItemsList["warrior's passkey"] = {
	name : "Warrior's Passkey",
	source : [["BoMT", 39]], // Chapter 5: Gem
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "This silver skeleton key is warm to the touch. I can use it to cast Knock while in its key form. As a bonus action, I can transform it into a magic +1 longsword that deals 1d10 force damage and I'm proficient with. The sword reverts back to a key if it leaves my grasp, I use a bonus action to do so, or my attunement ends.",
	descriptionFull : "This silver skeleton key is warm to the touch. While holding the key in its key form, you can use an action to cast the Knock spell from the key."+
	"\n   " + toUni("Transforming the Key") + ". While holding the key, you can use a bonus action to transform it into a magic longsword. You are considered proficient with the sword, and you have a +1 bonus to attack and damage rolls made with it. On a hit, the sword deals 1d10 force damage. The item remains in its sword form until it leaves your grasp or you use another bonus action to revert it to its key form."+
	"\n   If you end your attunement to the item while it's in its sword form, it automatically reverts to its key form.",
	action : [["bonus action", " (transform)"]],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*warrior)(?=.*passkey).*$/i,
		name : "Warrior's Passkey",
		source : [["BoMT", 39]],
		damage : [1, 10, "force"],
		modifiers : [1, 1],
		isAlwaysProf : true,
		description : "",
		weight : 0,
		selectNow : true
	}],
	spellcastingBonus : [{
		name : "At will",
		spells : ["knock"],
		selection : ["knock"],
		firstCol : "atwill"
	}]
};
MagicItemsList["weapon of throne's command"] = {
	name : "Weapon of Throne's Command",
	nameTest : "of Throne's Command",
	source : [["BoMT", 39]], // Chapter 5: Gem
	type : "weapon (any)",
	rarity : "very rare",
	attunement : true,
	description : "This +1 weapon grants me proficiency with Intimidation and Persuasion. It has 5 charges, regaining 1d4 at dawn. As a bonus action, I can expend charges to cast a spell from it with save DC 16: Command (1 charge), Zone of Truth (2), Compulsion (4), Banishment (4), or Dominate Person (5).",
	descriptionLong : "This weapon is bedecked in ornate gold filigree and deep-blue and maroon jewels. I gain a +1 bonus to attack and damage rolls made with this weapon. Additionally, I gain proficiency in the Intimidation and Persuasion skills if I don't already have it. The weapon has 5 charges, regaining 1d4 expended charges daily at dawn. As a bonus action, I can expend 1 or more of its charges to cast one of the following spells (save DC 16): Command (1 charge), Zone of Truth (2 charges), Compulsion (4 charges), Banishment (4 charges), or Dominate Person (5 charges).",
	descriptionFull : "This weapon is bedecked in ornate gold filigree and deep-blue and maroon jewels. You gain a +1 bonus to attack and damage rolls made with this weapon. Additionally, you gain proficiency in the Intimidation and Persuasion skills if you don't already have it."+
	"\n   " + toUni("Spellcasting") + ". The weapon has 5 charges. You can use a bonus action and expend 1 or more of its charges to cast one of the following spells (save DC 16): Command (1 charge), Zone of Truth (2 charges), Compulsion (4 charges), Banishment (4 charges), or Dominate Person (5 charges)."+
	"\n   The weapon regains 1d4 expended charges daily at dawn.",
	skills : ["Intimidation", "Persuasion"],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"]
	},
	usages : 5,
	recovery : "dawn",
	additional : "regains 1d4",
	fixedDC : 16,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["command"],
		selection : ["command"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["zone of truth"],
		selection : ["zone of truth"],
		firstCol : 2
	}, {
		name : "4 charges",
		spells : ["banishment", "compulsion"],
		selection : ["banishment", "compulsion"],
		firstCol : 4,
		times : 2
	}, {
		name : "5 charges",
		spells : ["dominate person"],
		selection : ["dominate person"],
		firstCol : 5
	}],
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (/of throne'?s? command/.test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			'If I include the words "of Throne\'s Command" in a the name of a weapon, it will be treated as the magic weapon Weapon of Throne\'s Command. It adds a +1 bonus to attack and damage rolls.'
		]
	},
	spellChanges : {
		"command" : {
			time : "1 bns",
			changes : "Using the Weapon of Throne's Command, I can cast Command as a bonus action."
		},
		"zone of truth" : {
			time : "1 bns",
			changes : "Using the Weapon of Throne's Command, I can cast Zone of Truth as a bonus action."
		},
		"banishment" : {
			time : "1 bns",
			changes : "Using the Weapon of Throne's Command, I can cast Banishment as a bonus action."
		},
		"compulsion" : {
			time : "1 bns",
			changes : "Using the Weapon of Throne's Command, I can cast Compulsion as a bonus action."
		},
		"dominate person" : {
			time : "1 bns",
			changes : "Using the Weapon of Throne's Command, I can cast Dominate Person as a bonus action."
		}
	}
};
MagicItemsList["winged ammunition"] = {
	name : "Winged Ammunition",
	nameTest : "Winged",
	source : [["BoMT", 69]], // Chapter 9: Knight
	type : "weapon (any ammunition)",
	rarity : "uncommon",
	description : "Ranged weapon attack rolls made with this magic ammunition ignore half and three-quarters cover. In addition, attacking at long range doesn't impose disadvantage on ranged weapon attack rolls made with this ammunition.",
	descriptionFull : "Ranged weapon attack rolls made with this ammunition ignore half and three-quarters cover. In addition, attacking at long range doesn't impose disadvantage on ranged weapon attack rolls made with this ammunition.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["wraps of unarmed prowess"] = {
	name : "Wraps of Unarmed Prowess, +1, +2, or +3",
	nameTest : "Wraps of Unarmed Prowess",
	source : [["BoMT", 69]], // Chapter 9: Knight
	type : "wondrous item",
	description : "While wearing these cloth wraps, my unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and I gain a bonus to their attack and damage rolls. The bonus is determined by rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull : "While you're wearing these cloth wraps, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage, and you gain a bonus to the attack and damage rolls of your unarmed strikes. The bonus is determined by the wraps' rarity: uncommon (+1), rare (+2), or very rare (+3).",
	choices : ["+1 Wraps of Unarmed Prowess (uncommon)", "+2 Wraps of Unarmed Prowess (rare)", "+3 Wraps of Unarmed Prowess (very rare)"],
	"+1 wraps of unarmed prowess (uncommon)" : {
		name : "Wraps of Unarmed Prowess +1",
		nameTest : "+1 Wraps of Unarmed Prowess",
		rarity : "uncommon",
		description : "While I'm wearing these cloth wraps, I gain a +1 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					};
				},
				"My unarmed strikes get a +1 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 1;
					}
				}, ''
			]
		}
	},
	"+2 wraps of unarmed prowess (rare)" : {
		name : "Wraps of Unarmed Prowess +2",
		nameTest : "+2 Wraps of Unarmed Prowess",
		rarity : "rare",
		description : "While I'm wearing these cloth wraps, I gain a +2 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					};
				},
				"My unarmed strikes get a +2 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 2;
					}
				}, ''
			]
		}
	},
	"+3 wraps of unarmed prowess (very rare)" : {
		name : "Wraps of Unarmed Prowess +3",
		nameTest : "+3 Wraps of Unarmed Prowess",
		rarity : "very rare",
		description : "While I'm wearing these cloth wraps, I gain a +3 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
					};
				},
				"My unarmed strikes get a +3 bonus to To Hit and Damage and count as magical for overcoming resistances and immunities.",
				700
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 3;
					}
				}, ''
			]
		}
	}
};


SpellsList["antagonize"] = {
	name : "Antagonize",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["BoMT", 50]],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A playing card depicting a rogue",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea 4d4+1d4/SL Psychic dmg, use rea to melee atk vs. crea I see (or dis. atk 1 rnd); save half, no rea",
	descriptionShorter : "1 crea 4d4+1d4/SL Psychic dmg, rea melee atk vs. crea I see (or dis. atk 1 rnd); save half, no rea",
	descriptionFull : "You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, the target takes 4d4 psychic damage and must immediately use its reaction to make a melee attack against another creature of your choice that you can see. If the target can't make this attack (for example, because there is no one within its reach or because its reaction is unavailable), the target instead has disadvantage on the next attack roll it makes before the start of your next turn. On a successful save, the target takes half as much damage only."+
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd."
};
SpellsList["spirit of death"] = {
	name : "Spirit of Death",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["BoMT", 50]],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A gilded playing card worth at least 400 gp and depicting an avatar of death",
	duration : "Conc, 1 h",
	description : "Summon a Reaper Spirit; obeys commands; takes turn after mine; disappears at 0 hp (400gp)",
	descriptionFull : "You call forth a spirit that embodies death. The spirit manifests in an unoccupied space you can see within range and uses the reaper spirit stat block. The spirit disappears when it is reduced to 0 hit points or when the spell ends."+
	"\n   The spirit is an ally to you and your companions. In combat, the spirit shares your initiative count and takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue the spirit any commands, it takes the Dodge action and uses its movement to avoid danger."+
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the reaper spirit stat block."
};
SpellsList["spray of cards"] = {
	name : "Spray of Cards",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["BoMT", 50]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S,M",
	compMaterial : "A deck of cards",
	duration : "Instantaneous",
	save : "Dex",
	description : "All in area 2d10+1d10/SL Force dmg and blinded until their next turn ends; save halves \u0026 not blinded",
	descriptionShorter : "All in area 2d10+1d10/SL Force dmg, blinded till their next turn ends; save half \u0026 not blinded",
	descriptionFull : "You spray a 15-foot cone of spectral cards. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 2d10 force damage and has the blinded condition until the end of its next turn. On a successful save, a creature takes half as much damage only."+
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
};
