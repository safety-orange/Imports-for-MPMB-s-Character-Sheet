var iFileName = "pub_20150415_AL-EE.js";
RequiredSheetVersion(12.999);
// This file adds the optional backgrounds from the Adventurers League season 2 (Elemental Evil) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:EE"]={
	name : "Elemental Evil Backgrounds [Mulmaster]",
	abbreviation : "AL:EE",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2015/04/Mulmaster-Bonds-and-Backgrounds.pdf",
	date : "2015/04/15"
};

// Backgrounds
BackgroundList["caravan specialist"] = {
	regExpSearch :  /^(?=.*caravan)(?=.*specialist).*$/i,
	name : "Caravan Specialist",
	source : [["AL:EE", 2], ["ALbackground", 0]],
	skills : ["Animal Handling", "Survival"],
	gold : 10,
	equipleft : [
		["Two-person tent", "", 20],
		["Regional map", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wagonmaster",
	trait : [
		"Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
		"There's always someone out there trying to take what I've got. Always be vigilant.",
		"Anything can be learned if you have the right teacher. Most folks just need a chance.",
		"Early to bed and early to rise; this much at least is under my control.",
		"You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
		"Eventually my hard work will be rewarded. Maybe that time has finally come.",
		"A strong ox or horse is more reliable than most people I've met.",
		"I never had time for books, but wish I had. I admire folks who have taken the time to learn."
	],
	ideal : [
		["Service",
			"Service: Using my talents to help others is the best way of helping myself. (Good)"
		],
		["Selfish",
			"Selfish: What people don't know WILL hurt them, but why is that my problem? (Evil)"
		],
		["Wanderer",
			"Wanderer: I go where the road takes me. Sometimes that's a good thing… (Chaotic)"
		],
		["Fittest",
			"Fittest: On the open road, the law of nature wins. Victims are the unprepared. (Lawful)"
		],
		["Focused",
			"Focused: I simply have a job to do, and I'm going to do it. (Neutral)"
		],
		["Motivated",
			"Motivated: There's a reason I'm good at what I do, I pay attention to the details. (Any)"
		]
	],
	bond : [
		"My brother has a farm In Elmwood and I've helped him and his neigbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
		"A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
		"The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
		"The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
		"There's always a road I haven't traveled before. I'm always looking for new places to explore.",
		"Wealth and power mean little without the freedom to go where and when you want."
	],
	flaw : [
		"I have trouble trusting people I've just met.",
		"I enjoy the open road. Underground and tight spaces make me very nervous.",
		"I expect others to heed my orders and have little respect or sympathy if they don't.",
		"I am very prideful and have trouble admitting when I'm wrong.",
		"Once I decide on a course of action, I do not waiver.",
		"I like to explore, and my curiosity will sometimes get me into trouble."
	],
	toolProfs : ["Vehicles (land)"],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["earthspur miner"] = {
	regExpSearch :  /^(?=.*earthspur)(?=.*miner).*$/i,
	name : "Earthspur Miner",
	source : [["AL:EE", 3], ["ALbackground", 0]],
	skills : ["Athletics", "Survival"],
	gold : 5,
	equipleft : [
		["Shovel or miner's pick", "", 5],
		["Block and tackle", "", 5],
		["Climber's kit", "", 12]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Deep Miner",
	trait : [
		"Nothing bothers me for long.",
		"I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
		"Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
		"I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
		"I'd rather be mining. This is okay; mining is better.",
		"I think that I will stumble upon great riches if I just keep looking.",
		"People who don't work with their hands and who live in houses are soft and weak.",
		"I wish I were more educated. I look up to people who are."
	],
	ideal : [
		["Generosity",
			"Generosity: The riches of the earth are to be shared by all. (Good)"
		],
		["Greed",
			"Greed: Gems and precious metals, I want them all for myself. (Evil)"
		],
		["Mooch",
			"Mooch: Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)"
		],
		["Boundaries",
			"Boundaries: Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful) "
		],
		["Let it Be",
			"Let it Be: I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)"
		],
		["Materialist",
			"Materialist: I want riches to improve my life. (Any)"
		]
	],
	bond : [
		"The people of the Earthspur mines are my family. I will do anything to protect them.",
		"A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
		"I must behold and preserve the natural beauty of places below the earth.",
		"Gems hold a special fascination for me, more than gold, land, magic, or power.",
		"I want to explore new depths and scale new heights.",
		"Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury."
	],
	flaw : [
		"I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
		"I'm not used to being around other people much and sometimes get grouchy about it.",
		"Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger.",
		"I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
		"I am obsessed with getting rich. I always have a scheme brewing for making it big.",
		"I'm afraid of the dark."
	],
	languageProfs : ["Dwarvish", "Undercommon"],
	lifestyle : "poor"
};
BackgroundList["harborfolk"] = {
	regExpSearch :  /harborfolk/i,
	name : "Harborfolk",
	source : [["AL:EE", 4], ["ALbackground", 0]],
	skills : ["Athletics", "Sleight of Hand"],
	gold : 5,
	equipleft : [
		["Fishing tackle", "", 4],
		["Set of dice, playing cards, or three-dragon ante", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
		["Rowboat", "", 100]
	],
	feature : "Harborfolk",
	trait : [
		"I am curious. I want to know why things are the way they are and why people do the things that they do.",
		"I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chanty!",
		"I think the High Blade is doing a terrific job, don't you?",
		"I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
		"I am quite superstitious. I see portents in everyday occurances.",
		"I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
		"I have a sea story to fit every occasion.",
		"I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
	],
	ideal : [
		["Calm",
			"Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)"
		],
		["Windblown",
			"Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)"
		],
		["Aspiring",
			"Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)"
		],
		["Salty",
			"Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)"
		],
		["Selfless",
			"Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)"
		],
		["Let them Drown",
			"Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
		]
	],
	bond : [
		"I once lost everything but my rowboat. I'll do anything to protect it.",
		"My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
		"The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
		"The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
		"I was robbed in the Zhent ghetto once. It will not happen again.",
		"I would do anything to protect the other harborfolk. They are my family."
	],
	flaw : [
		"I drink too much, which causes me to miss the tide.",
		"I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
		"I oversell myself and make promises I can't keep when I want to impress someone.",
		"Book learning is a waste of time. I have no patience for people who don't speak from experience.",
		"I almost always cheat. I can't help myself.",
		"I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
	],
	toolProfs : [["Gaming set", 1], "Vehicles (water)"],
	lifestyle : "poor"
};
BackgroundList["mulmaster aristocrat"] = {
	regExpSearch :  /^(?=.*mulmaster)(?=.*aristocrat).*$/i,
	name : "Mulmaster Aristocrat",
	source : [["AL:EE", 5], ["ALbackground", 0]],
	skills : ["Deception", "Performance"],
	gold : 10,
	equipleft : [
		["Artisan's tools or musical instrument", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1]
	],
	feature : "Highborn",
	trait : [
		"My ambitions are boundless. I will be a Zor or Zora one day!",
		"I must alwayss look my best.",
		"Beauty is everywhere. I can find it in even the homliest person and the most horrible tragedy.",
		"Décorum must be preserved at all costs.",
		"I will not admit I am wrong if I can avoid it.",
		"I am extremely well-educated and frequently remind others of that fact.",
		"I take what I can today, because I do not know what tomorrow holds.",
		"My life is full of dance, song, drink, and love."
	],
	ideal : [
		["Generous",
			"Generous: I have a responsibility to help and protect the less fortunate. (Good)"
		],
		["Loyal",
			"Loyal: My word, once given, is my bond. (Lawful)"
		],
		["Callous",
			"Callous: I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)"
		],
		["Impulsive",
			"Impulsive: I follow my heart. (Chaotic)"
		],
		["Ignorant",
			"Ignorant: Explanations bore me. (Neutral)"
		],
		["Isolationist",
			"Isolationist: I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)"
		]
	],
	bond : [
		"I have dedicated my wealth and my talents to the service of one of the city's many temples.",
		"My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
		"Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
		"My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power.",
		"Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
		"It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous."
	],
	flaw : [
		"I have difficulty caring about anyone or anything other than myself.",
		"Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
		"The ends (my advancement) justify any means.",
		"I must have what I want and will brook no delay.",
		"My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
		"I have no artistic sense. I hide that fact behind extreme opinons and have become a trendsetter."
	],
	toolProfs : [["Artisan's tools", 1], ["Musical instrument", 1]],
	lifestyle : "wealthy"
};
BackgroundList["phlan refugee"] = {
	regExpSearch :  /^(?=.*phlan)(?=.*refugee).*$/i,
	name : "Phlan Refugee",
	source : [["AL:EE", 6], ["ALbackground", 0]],
	skills : ["Insight", "Athletics"],
	gold : 15,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Token of the life I once knew", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Phlan Survivor",
	trait : [
		"I may have lost everything I worked for most of my life, but there's work to be done, no time to linger on the past.",
		"I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
		"I protect those around me, you never know when one of them will be useful.",
		"I have always gotten ahead by giving, why change now?",
		"I prepare for everything, it paid off in Phlan and it will pay off again.",
		"I will reclaim my home, though the path may be long, I will never give up hope.",
		"I never cared for personal hygiene, and am amazed that It bothers others.",
		"I am always willing to volunteer my services, just as long as don't have to do anything."
	],
	ideal : [
		["Justice",
			"Justice: Corruption brought Phlan down, I will not tolerate that any longer. (Lawful)"
		],
		["Acceptance",
			"Acceptance: Stability is a myth, to think you can control your future is futile. (Chaotic)"
		],
		["Hope",
			"Hope: I am guided by a higher power and I trust that everything will be right in the end. (Good)"
		],
		["Restraint",
			"Restraint: I hate those who caused my loss. It is all I can do not to lash out at them. (Any)"
		],
		["Strength",
			"Strength: As shown in Phlan, the strong survive. If you are weak you deserve what you get (Evil)"
		],
		["Openness",
			"Openness: I am always willing to share my life story with anyone who will listen. (Any)"
		]
	],
	bond : [
		"I have the chance at a new life and this time I am going to do things right.",
		"The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
		"I await the day I will be able to return to my home in Phlan.",
		"I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
		"There was someone I cared about in Phlan, I will find out what happened to them.",
		"Some say my life wasn't worth saving, I will prove them wrong."
	],
	flaw : [
		"I used the lives of children to facilitate my escape from Phlan.",
		"I am a sucker for the underdog, and always bet on the loosing team.",
		"I am incapable of standing up for myself.",
		"I will borrow money from friends with no intention to repay it.",
		"I am unable to keep secrets. A secret is just an untold story.",
		"When something goes wrong, it's never my fault."
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1],
	lifestyle : "modest"
};

// Background features
BackgroundFeatureList["wagonmaster"] = {
	description : "I'm used to being in charge. My reputation has me on a short list for critical jobs, allows me to attract two more loyal workers for caravaning, and causes others to look to me for direction. I can identify the most defensible locations for camping. I have a great memory for maps and geography. While travelling, I can always find my cardinal directions.",
	source : [["AL:EE", 2], ["ALbackground", 0]]
};
BackgroundFeatureList["deep miner"] = {
	description : "I am used to navigating the deep places of the earth. I never get lost in caves or mines if I have either seen an accurate map of them or have been through them before. Furthermore, I am able to scrounge fresh water and food for myself and as many as five other people each day if I am in a mine or natural caves.",
	source : [["AL:EE", 3], ["ALbackground", 0]]
};
BackgroundFeatureList["harborfolk"] = {
	description : "I grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember me and still treat me as one of them. They welcome me and my companions. While they might charge me for it, they'll always offer what food and shelter they have; they'll even hide me if the City Watch is after me (but not if the Hawks are).",
	source : [["AL:EE", 4], ["ALbackground", 0]]
};
BackgroundFeatureList["highborn"] = {
	description : "Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to me, and even the priesthood, Soldiery, Hawks, and Cloaks treat me with deference. Other aristocrats and nobles accept me in their circles and likely know me or of me. My connections can get me the ear of a Zor or Zora under the right circumstances.",
	source : [["AL:EE", 5], ["ALbackground", 0]]
};
BackgroundFeatureList["phlan survivor"] = {
	description : "Whatever my prior standing I'm now one of the many refugees that came to Mulmaster. I'm able to find refuge with others from Phlan and those who sympathize with my plight. Within Mulmaster this means that I can find a place to sleep, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos.",
	source : [["AL:EE", 6], ["ALbackground", 0]]
};
