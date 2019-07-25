var iFileName = "pub_20190618_AcqInc.js";
RequiredSheetVersion(12.999);
// This file adds all material from the Ghosts of Saltmarsh adventure to MPMB's Character Record Sheet

// Define the source
SourceList["AcqInc"] = {
	name : "Acquisitions Incorporated [backgrounds, items]",
	abbreviation : "AcqInc",
	group : "Adventure Books",
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
		["Training", "Training. Hard work, sacrifice, and training lead to success—and eventually to perfection. (Any)"],
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
		"When I get an idea, I am single-minded in its execution—even if it's a terrible idea.",
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
		["Survival", "Survival. You can't win if you're dead. Live to fight another day—when the odds might be more in your favor. (Any)"],
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

// RaceList["verdan"] = {

// }