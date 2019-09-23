var iFileName = "pub_20190618_AcqInc.js";
RequiredSheetVersion(13);
// This file adds all material from the Acquisitions Incorporated book to MPMB's Character Record Sheet

// Define the source
SourceList["AcqInc"] = {
	name : "Acquisitions Incorporated",
	abbreviation : "AcqInc",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/acqinc",
	date : "2019/06/18"
};

BackgroundList["celebrity adventurer's scion"] = {
	regExpSearch : /^(?=.*celebrity)(?=.*adventurer)(?=.*scion).*$/i,
	name : "Celebrity Adventurer's Scion",
	source : ["AcqInc", 48],
	skills : ["Perception", "Performance"],
	gold : 30,
	equipleft : [
		["Disguise kit", "", 3]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [2],
	toolProfs : ["Disguise kit"],
	feature : "Name Dropping",
	trait : [
		"I will never get out of my famous parent's shadow, and no one else will ever understand this burden.",
		"I've seen enough of the adventuring life to have realistic expectations and empathy for my peers.",
		"Living up to my legacy will be difficult, but I'm going to do it.",
		"I'm used to the very best in life, and that's a hard habit to break.",
		"My parent taught me a sense of duty. I strive to uphold it, even when the odds are against me.",
		"No one can fake a smile, a handshake, or an interested nod like I can.",
		"I've been part of the adventuring life since I was old enough to walk. Let me explain a few things to you.",
		"No risk is too great for the rewards of defeating my enemies... and taking their stuff."
	],
	ideal : [
		["Power", "Power. The only way to get ahead in this world is to attain power and hold onto it with all your might. (Evil)"],
		["Peace", "Peace. Those who can find or make peace in the chaotic world around them have everything. (Lawful)"],
		["Fame", "Fame. I've seen what fame can bring. And I'll do anything to get all that for myself. (Neutral)"],
		["Training", "Training. Hard work, sacrifice, and training lead to success\u2014and eventually to perfection. (Any)"],
		["Anonymity", "Anonymity. I want to be successful. And alone. With lots of guards and wards between me and everyone else in the world. (Any)"],
		["Wisdom", "Wisdom. Material wealth is an illusion. Wisdom is the real treasure. (Good)"]
	],
	bond : [
		"While my parent was out adventuring, a servant raised me, and I care about that person more than anyone.",
		"I consider every member of my parent's former adventuring party to be family.",
		"Despite their absences, my famous parent was kind and generous. I love them and want to make them proud.",
		"My parent once brought a cursed magic item home. It is my obsession.",
		"My childhood home holds all my best memories, and its upkeep is my primary concern.",
		"Growing up, I had an imaginary friend I could always count on. That friend is still with me."
	],
	flaw : [
		"You don't know what I'm going through. You never can.",
		"You. Fetch my cloak. And maybe rub my feet for a while.",
		"My comrades are brave, but I must defeat this threat alone to prove my worth.",
		"Oh, yeah, that spell? Named after my parent's best friend. Let me tell you about them.",
		"My best days are behind me. Ahead lies only toil, pain, and death.",
		"You have to look out for yourself. No one else will."
	]
};
BackgroundFeatureList["name dropping"] = {
	description : "I know and have met any number of powerful people across the land, and some might even remember me. I might be able to wrangle minor assistance from a major figure in the campaign, at the DM's discretion. Additionally, the common folk treat me with deference, and my heritage and the stories I tell might be good for a free meal or a place to sleep.",
	source : ["AcqInc", 48]
};

BackgroundList["failed merchant"] = {
	regExpSearch : /^(?=.*failed)(?=.*merchant).*$/i,
	name : "Failed Merchant",
	source : ["AcqInc", 49],
	skills : ["Investigation", "Persuasion"],
	gold : 10,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Merchant's scale", "", 3]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Artisan's tools", 1]],
	feature : "Supply Chain",
	trait : [
		"I didn't have the cutthroat attitude necessary to succeed. I won't make that mistake again.",
		"Even my competitors said I was affable and talented. Those traits should serve me well.",
		"To prosper, you have to be in control.",
		"The customer is always right.",
		"I was cutting corners and breaking deals to maximize profit. That's why I failed.",
		"When I get an idea, I am single-minded in its execution\u2014even if it's a terrible idea.",
		"If I can be everyone's friend, I'll always have support.",
		"My heart wasn't in being a merchant, so I failed. I'm not all that keen on adventuring either, but I need the money."
	],
	ideal : [
		["Survival", "Survival. Where there's life, there's hope. If I remain alive and flexible, I can succeed. (Any)"],
		["Generosity", "Generosity. People helped me when I was down. Now that I'm back on my feet, I'll pay it forward. (Good)"],
		["Excitement", "Excitement. Caution got me nowhere in my previous business. I'm not going to let it hold me back now. (Chaotic)"],
		["Wealth", "Wealth. With enough coin, I can buy comfort, power, knowledge, and even eternal life. Nothing will stand between me and money. (Evil)"],
		["Stability", "Stability. The mercantile trade was too chaotic for me. I need a nice stable profession, like adventuring. (Lawful)"],
		["Redemption", "Redemption. Too many people consider me a failure. So I need to prove them wrong. (Any)"]
	],
	bond : [
		"My family means everything to me. I failed them before, and I must not do so again.",
		"My church provides a connection to my god, so I must ensure that it is protected and funded.",
		"My former business partner fell ill, and then our business failed. Part of my new venture involves earning enough to take care of their family.",
		"If I take care of my possessions, they'll take care of me. People come and go, but a weapon or a wand is something you can always rely on.",
		"Although my business failed, the people of my community were kind to me. I'll do everything in my power to protect them.",
		"I owe a dangerous person a lot of money. As long as they're happy, they let my debt rest unpaid."
	],
	flaw : [
		"Why spend gold here when you can buy the same thing for copper in the next town?",
		"I must have the best of everything. Like, right now.",
		"You haven't heard of me? I'm sure that's because of your ignorance and low breeding.",
		"I failed, but I'm awesome. So when anyone else is successful, it must be because of nepotism, dishonesty, or dumb luck.",
		"I find that most people are trustworthy. Hey, where's my belt pouch?",
		"Nothing gets between me and danger except my fellow adventurers. So I'll be sure to put them there."
	]
};
BackgroundFeatureList["supply chain"] = {
	description : "From my time as a merchant, I retain connections with wholesalers, suppliers, and other merchants and entrepreneurs. I can call upon these connections when looking for items or information.",
	source : ["AcqInc", 49]
};

BackgroundList["gambler"] = {
	regExpSearch : /gambler/i,
	name : "Gambler",
	source : ["AcqInc", 49],
	skills : ["Deception", "Insight"],
	gold : 15,
	equipleft : [
		["Type of gaming set", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Lucky charm", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Gaming set", 1]],
	feature : "Never Tell Me the Odds",
	trait : [
		"I plan for every contingency. Leave nothing to chance!",
		"Every copper wants to be a silver. Each bet is an opportunity.",
		"I'm one of Lady Luck's favored. Anything I try is destined to succeed.",
		"I've lost so much to gambling that I refuse to spend money on anything anymore.",
		"Nothing is certain. Planning is a coward's act.",
		"I can't be sure who I've swindled, cheated, or defeated, so I keep a low profile in public.",
		"The perfect bet is out there somewhere. I just have to keep my eyes open.",
		"I have beaten my addiction, but all it takes is one weak moment and I'll be back at the card table."
	],
	ideal : [
		["Knowledge", "Knowledge. Knowledge is power, and knowing which horse to back is the key to success. (Any)"],
		["Fate", "Fate. Whatever happens is fated, regardless of any planning or striving. (Lawful)"],
		["Bravery", "Bravery. If you want to succeed, you have to take risks. (Chaotic)"],
		["Survival", "Survival. You can't win if you're dead. Live to fight another day\u2014when the odds might be more in your favor. (Any)"],
		["Reliability", "Reliability. When I was in need, I was able to rely on others. Now I want to be the one others rely on. (Good)"],
		["Victory", "Victory. Winning is the real measure of a person. In the end, the only thing that matters is the scoreboard. (Evil)"]
	],
	bond : [
		"I must visit all the oceans of the world and behold the ships that sail there.",
		"Much of the treasure I claim will be used to enrich my community.",
		"I must find a kind of wood rumored to possess magical qualities.",
		"I repair broken things to redeem what's broken in myself.",
		"I will craft a boat capable of sailing through the most dangerous of storms.",
		"A kraken destroyed my masterpiece; its teeth shall adorn my hearth."
	],
	flaw : [
		"One person in particular owes me a lot of money, and I need to keep them alive if I want to be repaid.",
		"I'm loyal to the friend or family member who taught me how to gamble.",
		"The person who saved me from my gambling addiction is the only reason I'm alive today.",
		"A patron once fronted me money in exchange for a percentage of my winnings. I owe them a debt of gratitude. And a lot of cash.",
		"A criminal syndicate I once played for isn't happy I left the game, and its enforcers are looking for me.",
		"Urchins once helped me find marks for my games. Now I'm driven to help them escape the streets."
	]
};
BackgroundFeatureList["never tell me the odds"] = {
	description : "Odds and probability are my bread and butter. During downtime activities that involve games of chance or figuring odds on the best plan, I can get a solid sense of which choice is likely the best one and which opportunities seem too good to be true, at the DM's determination.",
	source : ["AcqInc", 50]
};

BackgroundList["plaintiff"] = {
	regExpSearch : /plaintiff/i,
	name : "Plaintiff",
	source : ["AcqInc", 50],
	skills : ["Medicine", "Persuasion"],
	gold : 20,
	equipleft : [
		["Set of artisan's tools", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Artisan's tools", 1]],
	feature : "Legalese",
	trait : [
		"I can't believe I have a chance to join Acquisitions Incorporated! The fun I'm going to have!",
		"I've been wronged my entire life, and the world owes me.",
		"I have always tried to make the best of a bad situation.",
		"The law doesn't protect the honest and the hard working. I'm going to do whatever needs to be done to make things right.",
		"I'm always in the wrong place at the wrong time.",
		"My superiors are smarter and wiser than I am. I do what I'm told.",
		"Never pass up the opportunity to make an easy bit of coin. That's my motto.",
		"I'm beginning to feel like the gods are not on my side."
	],
	ideal : [
		["Justice", "Justice. Those who break the law need to answer for their crimes. (Lawful)"],
		["Freedom", "Freedom. People must have the freedom to do what they want and pursue their dreams. (Chaotic)"],
		["Greed", "Greed. Everyone I see is getting theirs, so I'm surely going to get mine. (Evil)"],
		["Chaos", "Chaos. You're out of order! And you're out of order! This whole realm is out of order! (Chaotic)"],
		["Humility", "Humility. I'm just a small part of a larger whole. So is everyone else. (Neutral)"],
		["Responsibility", "Responsibility. We all have our roles to play. I'll hold up my end of the bargain. (Any)"]
	],
	bond : [
		"Others hurt in the same accident that hurt me are my new family. I'll make sure they're taken care of.",
		"The rulers of this place were kind to me, and they have my lifelong devotion.",
		"My parents worry about me, but I'll make them proud.",
		"The only bond that matters is the one holding my money pouch to my belt.",
		"The other new hires at Acquisitions Incorporated are my allies. We have each other's backs.",
		"My legal counsel is my best friend. I owe all my forthcoming opportunities to their hard work."
	],
	flaw : [
		"The person who gains the most reward for the least effort wins.",
		"Three magic beans for just one cow? What a deal!",
		"I have only one vice, but it controls my life.",
		"Sleep is for the weak. We need to keep training more if we're going to be ready for the challenges ahead.",
		"Until my songs are sung in every tavern in this realm, I won't be satisfied.",
		"If people find me unpleasant, that's their problem."
	]
};
BackgroundFeatureList["legalese"] = {
	description : "I am acquainted with a network of smugglers who are willing to help me out of tight spots. While in a particular town, city, or other similarly sized community, my companions and I can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, I can choose to keep my presence (and that of my companions) a secret.",
	source : ["AcqInc", 50]
};

BackgroundList["rival intern"] = {
	regExpSearch : /^(?=.*rival)(?=.*intern).*$/i,
	name : "Rival Intern",
	source : ["AcqInc", 51],
	skills : ["History", "Investigation"],
	gold : 10,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Ledger from prev. employer", "", 3]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Artisan's tools", 1]],
	feature : "Inside Informant",
	trait : [
		"My previous employer didn't respect me, and now I'll do whatever I can to gain respect.",
		"The job is important, but the relationships I forge with my coworkers are even more so.",
		"The job is everything to me. Who needs relaxation, hobbies, and a social life?",
		"I know I'm not the best and brightest, but if I put my best self forward, I can overcome anything.",
		"My former boss was an idiot. So was my boss before that. And before that. I'm sure those were all coincidences.",
		"This company is so much better than my previous one. It will always be the best until they stop paying me.",
		"I know this dagger belongs to the company, but I'm sure they won't miss it. Or this flask. Or this armor.",
		"It's only a matter of time before I'll be upper management. I just have to kiss up to my superiors and kick down those beneath me."
	],
	ideal : [
		["Advancement", "Advancement. Money and power can be gained more easily within an organization. I plan to gain as much as possible. (Evil)"],
		["Structure", "Structure. Life goes much more smoothly when you follow the rules and work within a system. (Lawful)"],
		["Uncertainty", "Uncertainty. The more chaos that swirls around me, the more opportunities I can find to profit. (Chaotic)"],
		["Justice", "Justice. I can't stand people being treated unjustly. I do whatever it takes to stop injustice and those who flout the law. (Lawful)"],
		["Pleasure", "Pleasure. What's the use of working hard and making money if you can't enjoy the finer things in life? (Any)"],
		["Power", "Power. Money is fine, but real power means never having to say you're sorry. (Evil)"]
	],
	bond : [
		"I have a family member in need. I consider them in everything I do.",
		"My peers keep me grounded.",
		"My past mistakes cost someone else dearly. I have to rectify that.",
		"A childhood mentor put me on my current path. If I succeed, I want to repay that mentor in some way.",
		"I value an oath of loyalty I took to a group of friends over everything else in my life.",
		"Although I don't get along well with people, my pet means the world to me."
	],
	flaw : [
		"I know what's best. Trust me.",
		"Flaw? I have no flaws. I'm perfect.",
		"My loyalties are... fluid.",
		"If anything goes wrong, it must be someone else's fault. Let me explain that in detail.",
		"There's right and there's wrong, and there's no gray area in between.",
		"Our superiors might not like what you're doing. I'm going to have to put that in my report."
	]
};
BackgroundFeatureList["inside informant"] = {
	description : "I have connections to my previous employer or other groups I dealt with during my previous employment. I can communicate with my contacts, gaining information at the DM's discretion.",
	source : ["AcqInc", 51]
};

RaceList["verdan"] = {
	regExpSearch : /verdan/i,
	name : "Verdan",
	source : ["AcqInc", 74],
	plural : "Verdan",
	size : 4, // small at 1st level, but medium from level 5+
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin", 1],
	skills : ["Persuasion"],
	savetxt : { text : ["Adv. on Wis/Cha saves"] },
	age : " reach adulthood at around the age of 24, and it is thought that they might live to nearly 200 years old. However, because no verdan has died of old age since the race's initial creation, their upper age limits remain subject to speculation.",
	height : " are between 3 and a half and 4 feet tall, plus 2 feet from 5th level onwards",
	heightMetric : " are between 100 and 120 cm tall, plus 60 cm from 5th level onwards",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Verdan (+1 Constitution, +2 Charisma)\nSudden Growth Spurt: At 5th level, I grow 2 ft, increasing my size from Small to Medium.\nBlack Blood Healing: When I roll a 1 or 2 on any HD I spend at the end of short rest, I can reroll the die and must use the new roll.\nLimited Telepathy: I can telepathically communicate simple ideas and straightforward concepts to a creature I can see within 30 ft, if it can understand at least one language.\nTelepathic Insight: I have advantage on Wisdom and Charisma saving throws.",
	features : {
		"sudden growth spurt" : {
			name : "Sudden Growth Spurt",
			minlevel : 5,
			eval : function () { PickDropdown("Size Category", 3); },
			removeeval : function () { PickDropdown("Size Category", 4); }
		}
	},
	advantages : [
		["Wisdom", true],
		["Charisma", true]
	]
}

SpellsList["distort value"] = {
	name : "Distort Value",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["AcqInc", 75],
	level : 1,
	school : "Illus",
	time : "1 min",
	range : "Touch",
	components : "V",
	duration : "8 hours",
	description : "1 obj up to 1+1/SL cu ft doubles/halves in perceived value; Investigation vs. spell DC to see true value",
	descriptionFull : "Do you need to squeeze a few more gold pieces out of a merchant as you try to sell that weird octopus statue you liberated from the chaos temple? Do you need to downplay the worth of some magical assets when the tax collector stops by? Distort value has you covered.\n   You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value by adding illusory flourishes or polish to it, or reducing its perceived value by half with the help of illusory scratches, dents, and other unsightly features. Anyone examining the object can ascertain its true value with a successful Intelligence (Investigation) check against your spell save DC." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum size of the object increases by 1 foot for each slot level above 1st."
};
SpellsList["fast friends"] = {
	name : "Fast Friends",
	classes : ["bard", "cleric", "wizard"],
	source : ["AcqInc", 75],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "1+1/SL humanoid save or charmed and perform tasks I ask it to do; adv. save if me/ally is fighting it",
	descriptionFull : "When you need to make sure something gets done, you can't rely on vague promises, sworn oaths, or binding contracts of employment. When you cast this spell, choose one humanoid within range that can see and hear you, and that can understand you. The creature must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed in this way, it undertakes to perform any services or activities you ask of it in a friendly manner, to the best of its ability.\n   You can set the creature new tasks when a previous task is completed, or if you decide to end its current task. If the service or activity might cause harm to the creature, or if it conflicts with the creature's normal activities and desires, the creature can make another Wisdom saving throw to try to end the effect. This save is made with advantage if you or your companions are fighting the creature. If the activity would result in certain death for the creature, the spell ends.\n   When the spell ends, the creature knows it was charmed by you." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
};
SpellsList["gift of gab"] = {
	name : "Gift of Gab",
	classes : ["bard", "wizard"],
	source : ["AcqInc", 76],
	level : 2,
	school : "Ench",
	time : "1 rea", // which you take when you speak to another creature
	range : "Self",
	components : "V,S,R\u2020",
	compMaterial : "2 gp royalty component",
	duration : "Conc, 1 h",
	description : "Cast when talking, any crea within 5 ft think what I said in the last 6 seconds was only to cast a spell",
	descriptionFull : "Jim Darkmagic is said to have invented this spell, originally calling it 'I said what?!'. Have you ever been talking to the local monarch and accidentally mentioned how their son looks like your favorite hog from when you were growing up on the family farm? We've all been there! But rather than being beheaded for an honest slip of the tongue, you can pretend it never happened\u2014by ensuring that no one knows it happened.\n   When you cast this spell, you skillfully reshape the memories of listeners in your immediate area, so that each creature of your choice within 5 feet of you forgets everything you said within the last 6 seconds. Those creatures then remember that you actually said the words you speak as the verbal component of the spell."
};
SpellsList["incite greed"] = {
	name : "Incite Greed",
	classes : ["cleric", "warlock", "wizard"],
	source : ["AcqInc", 76],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M\u0192",
	compMaterial : "A gem worth at least 50 gp",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Any crea that see me save or charmed, only move to me, if in 5 ft do nothing; save end of each turn",
	descriptionFull : "When you cast this spell, you present the gem used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be charmed by you until the spell ends, or until you or your companions do anything harmful to it. While charmed in this way, a creature can do nothing but use its movement to approach you in a safe manner. While an affected creature is within 5 feet of you, it cannot move, but simply stares greedily at the gem you present.\n   At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
};
SpellsList["jim's glowing coin"] = {
	name : "Jim's Glowing Coin",
	classes : ["wizard"],
	source : ["AcqInc", 76],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,M,R\u2020",
	compMaterial : "A coin, and 2 gp royalty component",
	duration : "1 min",
	save : "Wis",
	description : "30-ft radius any creature I can see save or disadvantage on Perception and Initiative for duration",
	descriptionFull : "Of the many tactics employed by master magician and renowned adventurer Jim Darkmagic, the old glowing coin trick is a time-honored classic. When you cast the spell, you hurl the coin that is the spell's material component to any spot within range. The coin lights up as if under the effect of a light spell. Each creature of your choice that you can see within 30 feet of the coin must succeed on a Wisdom saving throw or be distracted for the duration. While distracted, a creature has disadvantage on Wisdom (Perception) checks and initiative rolls."
};
SpellsList["jim's magic missile"] = {
	name : "Jim's Magic Missile",
	classes : ["wizard"],
	source : ["AcqInc", 76],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,R\u2020",
	compMaterial : "1 gp royalty component per spell slot level used",
	duration : "Instantaneous",
	description : "3+1/SL darts, each spell atk for 2d4 Force dmg; 5d4 crit; any 1 to hit, all dmg me 1 (1+1/SL gp cons.)",
	descriptionFull : "Any apprentice wizard can cast a boring old magic missile. Sure, it always strikes its target. Yawn. Do away with the drudgery of your grandfather's magic with this improved version of the spell, as used by Jim Darkmagic!\n   You create three twisting, whistling, hypoallergenic, gluten-free darts of magical force. Each dart targets a creature of your choice that you can see within range. Make a ranged spell attack for each missile. On a hit, a missile deals 2d4 force damage to its target.\n   If the attack roll scores a critical hit, the target of that missile takes 5d4 force damage instead of you rolling damage twice for a critical hit. If the attack roll for any missile is a 1, all missiles miss their targets and blow up in your face, dealing 1 force damage per missile to you." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart, and the royalty component increases by 1 gp, for each slot level above 1st."
};
SpellsList["motivational speech"] = {
	name : "Motivational Speech",
	classes : ["bard", "cleric"],
	source : ["AcqInc", 77],
	level : 3,
	school : "Ench",
	time : "1 min",
	range : "60 ft",
	components : "V",
	duration : "1 h",
	description : "5 crea that hear me 5+5/SL temp HP, adv. Wis saves, if hit adv. on next atk; stops when temp HP gone",
	descriptionFull : "You address allies, staff, or innocent bystanders to exhort and inspire them to greatness, whether they have anything to get excited about or not. Choose up to five creatures within range that can hear you. For the duration, each affected creature gains 5 temporary hit points and has advantage on Wisdom saving throws. If an affected creature is hit by an attack, it has advantage on the next attack roll it makes. Once an affected creature loses the temporary hit points granted by this spell, the spell ends for that creature." + AtHigherLevels + "At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the temporary hit points increase by 5 for each slot level above 3rd."
};

// Magic Item from the adventure
MagicItemsList["piercer"] = {
	name : "Piercer",
	source : ["AcqInc", 121],
	type : "weapon (shortsword)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magical shortsword. I regain the maximum possible number of hit points from expended Hit Dice. However, I must eat twice as much food each day to avoid exhaustion, a minimum of 2 lb.",
	descriptionFull : "You have a +1 bonus to attack and damage rolls made with this magic weapon.\n   A character attuned to the sword regains the maximum possible number of hit points from expended Hit Dice. However, the attuned character must eat twice as much food each day (a minimum of 2 pounds) to avoid exhaustion (see \"The Environment\" in chapter 8 of the Player's Handbook.)",
	attunement : true,
	weight : 3,
	weaponsAdd : ["Piercer"],
	weaponOptions : {
		baseWeapon : "shortsword",
		regExpSearch : /piercer/i,
		name : "Piercer",
		source : ["AcqInc", 121],
		modifiers : [1, 1]
	}
};
