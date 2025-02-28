var iFileName = "pub_20240917_PHB_common.js";
RequiredSheetVersion("14.0.0");
// This file adds material from the 2024 Player's Handbook that isn't in the free rules to MPMB's Character Record Sheet

// Define the source
SourceList["P24"] = {
	name: "2024 Player's Handbook",
	abbreviation: "PHB'24",
	abbreviationSpellsheet: "P2",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3709000",
	date: "2024/09/17"
};

// Backgrounds and their corresponding Background Features (which grant the origin feats)
BackgroundList["artisan"] = {
	regExpSearch: /^(?!.*guild)(?=.*artisan).*$/i,
	name: "Artisan",
	source: [["P24", 178]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Intelligence",
	skills: ["Investigation", "Persuasion"],
	toolProfs: [["Artisan's tools", 1]],
	gold: 32,
	equipleft: [
		["Artisan's tools (same as proficiency)", "", 5]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Artisan",
	// from PHB'14 (Guild Artisan):
	traitsOriginName: "Guild Artisan",
	traitsSourceString: "PHB'14 133",
	trait: [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
	],
	ideal: [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		]
	],
	bond: [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
	],
	flaw: [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
	],
	extra: [
		"Select a Artisan Business",
		"Alchemists and apothecaries",
		"Armorers, locksmiths, and finesmiths",
		"Brewers, distillers, and vintners",
		"Calligraphers, scribes, and scriveners",
		"Carpenters, roofers, and plasterers",
		"Cartographers, surveyors, and chart-makers",
		"Cobblers and shoemakers",
		"Cooks and bakers",
		"Glassblowers and glaziers",
		"Jewelers and gemcutters",
		"Leatherworkers, skinners, and tanners",
		"Masons and stonecutters",
		"Painters, limners, and sign-makers",
		"Potters and tile-makers",
		"Shipwrights and sailmakers",
		"Smiths and metal-forgers",
		"Tinkers, pewterers, and casters",
		"Wagon-makers and wheelwrights",
		"Weavers and dyers",
		"Woodcarvers, coopers, and bowyers"
	]
};
BackgroundFeatureList["artisan"] = {
	description: "I began mopping floors and scrubbing counters in an artisan's workshop for a few coppers per day as soon as I was strong enough to carry a bucket. When I was old enough to apprentice, I learned to create basic crafts of my own, as well as how to sweet talk the occasional demanding customer. My trade has also given me a keen eye for detail.",
	source: [["P24", 178]],
	featsAdd: ["Crafter"]
};
BackgroundList["charlatan"] = {
	regExpSearch: /charlatan/i,
	name: "Charlatan",
	source: [["P24", 179]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Charisma",
	skills: ["Deception", "Sleight of Hand"],
	toolProfs: [["Forgery Kit", "Dex"]],
	gold: 15,
	equipleft: [
		["Forgery kit", "", 5],
		["Costume clothes", "", 1]
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	feature: "Charlatan",
	// from PHB'14:
	traitsSourceString: "PHB'14 128",
	trait: [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal: [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		]
	],
	bond: [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw: [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	extra: [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities"
	]
};
BackgroundFeatureList["charlatan"] = {
	description: "Once I was old enough to order an ale, I soon had a favorite stool in every tavern within ten miles of where I was born. As I traveled the circuit from public house to watering hole, I learned to prey on unfortunates who were in the market for a comforting lie or two - perhaps a sham potion or forged ancestry records.",
	source: [["P24", 179]],
	featsAdd: ["Skilled"]
};
BackgroundList["entertainer"] = {
	regExpSearch: /(entertainer|actor|dancer|fire.?eater|jester|juggler|instrumentalist|poet|singer|storyteller|tumbler)/i,
	name: "Entertainer",
	source: [["P24", 180]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Charisma",
	skills: ["Acrobatics", "Performance"],
	toolProfs: [["Musical Instrument", 1]],
	gold: 11,
	equipleft: [
		["Costume clothes", 2, 1],
		["Mirror", "", 0.5],
		["Perfume", "", ""]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Musical instrument (choose one)", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature: "Entertainer",
	// from PHB'14:
	traitsSourceString: "PHB'14 130",
	trait: [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal: [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. [Evil]"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		]
	],
	bond: [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe."
	],
	flaw: [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	extra: [
		"Select an Entertainer Routine",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler"
	]
};
BackgroundFeatureList["entertainer"] = {
	description: "I spent much of my youth following roving fairs and carnivals, performing odd jobs for musicians and acrobats in exchange for lessons. I may have learned how to walk a tightrope, how to play a lute in a distinct style, or how to recite poetry with impeccable diction. To this day, I thrive on applause and long for the stage.",
	source: [["P24", 180]],
	featsAdd: ["Musician"]
};
BackgroundList["farmer"] = {
	regExpSearch: /farmer/i,
	name: "Farmer",
	source: [["P24", 180]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Constitution, and Wisdom",
	skills: ["Animal Handling", "Nature"],
	toolProfs: [["Carpenter's Tools", "Str"]],
	gold: 30,
	equipleft: [
		["Iron pot", "", 10],
		["Shovel", "", 5],
		["Healer's kit", "", 3],
		["Carpenter's tools", "", 6]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Sickle", "", 2]
	],
	equip1stPage: {
		weapons: ["Sickle"]
	},
	feature: "Farmer",
	// from PHB'14 (Folk Hero):
	traitsOriginName: "Folk Hero",
	traitsSourceString: "PHB'14 131",
	trait: [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"
	],
	ideal: [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		]
	],
	bond: [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw: [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies."
	],
	extra: [
		"Select a Defining Event",
		"I stood up to a tyrant's agents",
		"I saved people during a natural disaster",
		"I stood alone against a terrible monster",
		"I stole from a corrupt merchant for the poor",
		"I led a militia to fight off an invading army",
		"I stole weapons from a tyrant to arm the people",
		"I trained peasantry to fight a tyrant with farm tools",
		"A decree was rescinded after I led a protest against it",
		"A magical creature gave me a blessing or insight",
		"I rose to leadership in a lord's army"
	]
};
BackgroundFeatureList["farmer"] = {
	description: "I grew up close to the land. Years tending animals and cultivating the earth rewarded me with patience and good health. I have a keen appreciation for nature's bounty alongside a healthy respect for nature's wrath.",
	source: [["P24", 180]],
	featsAdd: ["Tough"]
};
BackgroundList["guard"] = {
	regExpSearch: /guard/i,
	name: "Guard",
	source: [["P24", 181]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Intelligence, and Wisdom",
	toolProfs: [["Gaming Set", 1]],
	gold: 12,
	equipleft: [
		["Manacles", "", 6],
		["Hooded lantern", "", 2],
		["Gaming set (same as proficiency)", "", ""]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Spear", "", 3],
		["Light crossbow", "", 5],
		["Crossbow bolt case, with:", "", 1],
		["- Crossbow bolts", 20, 0.075]
	],
	equip1stPage: {
		weapons: ["Spear", "Light Crossbow"],
		ammo: [["Bolts", 20]]
	},
	feature: "Guard"
};
BackgroundFeatureList["guard"] = {
	description: "My feet ache when I remember the countless hours I spent at my post in the tower. I was trained to keep one eye looking outside the wall watching for marauders sweeping from the nearby forest, and my other eye looking inside the wall searching for cut purses and troublemakers.",
	source: [["P24", 181]],
	featsAdd: ["Alert"]
};
BackgroundList["guide"] = {
	regExpSearch: /^(?!.*urban)(?=.*(guide|outlander|forester|trapper|homesteader|exile|outcast|bounty.?hunter|tribal nomad|hunter.?gatherer|tribal.?marauder)).*$/i,
	name: "Guide",
	source: [["P24", 181]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Wisdom",
	skills: ["Stealth", "Survival"],
	toolProfs: [["Cartographer's Tools", "Wis"]],
	gold: 3,
	equipleft: [
		["Bedroll", "", 7],
		["Cartographer's tools", "", 6],
		["Two-person tent", "", 20]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Shortbow", "", 2],
		["Quiver, with:", "", 1],
		["- Arrows", 20, 0.05]
	],
	equip1stPage: {
		weapons: ["Shortbow"],
		ammo: [["Arrows", 20]]
	},
	feature: "Guide",
	// from PHB'14 (Outlander):
	traitsOriginName: "Outlander",
	traitsSourceString: "PHB'14 137",
	trait: [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal: [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		]
	],
	bond: [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw: [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	extra: ["Select an Origin",
		"Forester",
		"Trapper",
		"Homesteader",
		"Guide",
		"Exile or outcast",
		"Bounty hunter",
		"Pilgrim",
		"Tribal nomad",
		"Hunter-gatherer",
		"Tribal marauder"
	]
};
BackgroundFeatureList["guide"] = {
	description: "I came of age outdoors, far from settled lands. My home was anywhere I chose to spread my bedroll. The wilderness has wonders like strange monsters, pristine forests, streams, overgrown ruins, and I learned to fend for myself as I explored them. From time to time, I guided nature priests who taught me the fundamentals of using the magic of the wild.",
	source: [["P24", 181]],
	featsAdd: [{ key: "magic initiate", choice: "druid" }]
};
BackgroundList["hermit"] = {
	regExpSearch: /hermit/i,
	name: "Hermit",
	source: [["P24", 182]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Wisdom, and Charisma",
	skills: ["Medicine", "Religion"],
	toolProfs: [["Herbalism Kit", "Int"]],
	gold: 16,
	equipleft: [
		["Bedroll", "", 7],
		["Book (philosophy)", "", 5],
		["Herbalism kit", "", 3],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Quarterstaff", "", 4]
	],
	equip1stPage: {
		weapons: ["Quarterstaff"]
	},
	feature: "Hermit",
	// from PHB'14:
	traitsSourceString: "PHB'14 134",
	trait: [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."
	],
	ideal: [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		]
	],
	bond: [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy."
	],
	flaw: [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone."
	],
	extra: [
		"Select a Life of Seclusion",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance"
	]
};
BackgroundFeatureList["hermit"] = {
	description: "I spent my early years secluded in a hut or monastery located well beyond the outskirts of the nearest settlement. In those days, my only companions were the creatures of the forest and those who would occasionally visit to bring news of the outside world and supplies. The solitude allowed me to spend many hours pondering the mysteries of creation.",
	source: [["P24", 182]],
	featsAdd: ["Healer"]
};
BackgroundList["merchant"] = {
	regExpSearch: /^(?!.*guild)(?=.*merchant).*$/i,
	name: "Merchant",
	source: [["P24", 182]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Charisma",
	skills: ["Animal Handling", "Persuasion"],
	toolProfs: [["Navigator's Tools", "Wis"]],
	gold: 22,
	equipleft: [
		["Navigator's tools", "", 2],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature: "Merchant",
	// from PHB'14 (Guild Merchant variant for the Guild Artisan):
	traitsOriginName: "Guild Merchant",
	traitsSourceString: "PHB'14 133",
	extra: [
		"Select a Business",
		"Trader",
		"Caravan master",
		"Shopkeeper"
	]
};
BackgroundFeatureList["merchant"] = {
	description: "I was apprenticed to a trader, caravan master, or shopkeeper, learning the fundamentals of commerce. I traveled broadly and earned a living by buying and selling raw materials artisans need to practice their craft, or their finished works. I transported goods from one place to another or bought them from traveling traders and sold them in my own shop.",
	source: [["P24", 182]],
	featsAdd: ["Lucky"]
};
BackgroundList["noble"] = {
	regExpSearch: /^(?!.*(waterdhavian|waterdeep|knight))(?=.*noble).*$/i,
	name: "Noble",
	source: [["P24", 183]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Intelligence, and Charisma",
	skills: ["History", "Persuasion"],
	toolProfs: [["Gaming Set", 1]],
	gold: 25,
	equipleft: [
		["Gaming set (same as proficiency)", "", ""],
		["Perfume", "", ""]
	],
	equipright: [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1]
	],
	feature: "Noble",
	// from PHB'14:
	traitsSourceString: "PHB'14 135",
	trait: [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal: [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		]
	],
	bond: [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people."
	],
	flaw: [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."
	]
};
BackgroundFeatureList["noble"] = {
	description: "I was raised in a castle, surrounded by wealth, power, and privilege. My family of minor aristocrats ensured that I received a first-class education, some of which I appreciated and some of which I resented. My time in the castle, especially the many hours I spent observing my family at court, also taught me a great deal about leadership.",
	source: [["P24", 183]],
	featsAdd: ["Skilled"]
};
BackgroundList["sailor"] = {
	regExpSearch: /sailor/i,
	name: "Sailor",
	source: [["P24", 184]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Wisdom",
	skills: ["Acrobatics", "Perception"],
	toolProfs: [["Navigator's Tools", "Wis"]],
	gold: 20,
	equipleft: [
	  ["Navigator's tools", "", 2],
	  ["Rope", "", 5]
	],
	equipright: [
	  ["Traveler's clothes", "", 4],
	  ["Belt pouch (with coins)", "", 1],
	  ["Dagger", "", 1]
	],
	equip1stPage: {
		weapons: ["Dagger"]
	},
	feature: "Sailor",
	// from PHB'14:
	traitsSourceString: "PHB'14 139",
	trait: [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it."
	],
	ideal: [
		["Respect",
			"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
		],
		["Fairness",
			"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
		],
		["Freedom",
			"Freedom: The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)"
		],
		["Mastery",
			"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
		],
		["People",
			"People: I'm committed to my crewmates, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
		]
	],
	bond: [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
	],
	flaw: [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction."
	]
};
BackgroundFeatureList["sailor"] = {
	description: "I lived as a seafarer, wind at my back and decks swaying beneath my feet. I've perched on bar stools in more ports of call than I can remember, faced mighty storms, and swapped stories with folk who live beneath the waves.",
	source: [["P24", 184]],
	featsAdd: ["Tavern Brawler"]
};
BackgroundList["scribe"] = {
	regExpSearch: /scribe/i,
	name: "Scribe",
	source: [["P24", 184]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Intelligence, and Wisdom",
	toolProfs: [["Calligrapher's Supplies", "Dex"]],
	gold: 23,
	equipleft: [
		["Calligrapher's supplies", "", 5],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1],
		["Parchment, sheets of", 12, ""]
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	feature: "Scribe"
};
BackgroundFeatureList["scribe"] = {
	description: "I spent formative years in a scriptorium, monastery, or government agency, where I learned to write with a clear hand and produce finely written texts. Perhaps I scribed government documents, or copied tomes, or perhaps I've written poetry, prose, or scholarly research. I have an attention to detail, helping me avoid mistakes in that I copy or create.",
	source: [["P24", 184]],
	featsAdd: ["Skilled"]
};
BackgroundList["wayfarer"] = {
	regExpSearch: /wayfarer/i,
	name: "Wayfarer",
	source: [["P24", 185]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Wisdom, and Charisma",
	skills: ["Insight", "Stealth"],
	toolProfs: [["Thieves' Tools", "Dex"]],
	gold: 16,
	equipleft: [
		["Bedroll", "", 7],
		["Gaming set (choose one)", "", ""],
		["Thieves' tools", "", 1]
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
		["Dagger", 2, 1]
	],
	equip1stPage: {
		weapons: ["Dagger", "Dagger (off-hand)"]
	},
	feature: "Wayfarer",
	// from PHB'14 (Urchin):
	traitsOriginName: "Urchin",
	traitsSourceString: "PHB'14 141",
	trait: [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking."
	],
	ideal: [
		["Respect",
			"Respect: Everybody, no matter their riches, deserves respect. (Good)"
		],
		["Community",
			"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
		],
		["Change",
			"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
		],
		["People",
			"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		]
	],
	bond: [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through."
	],
	flaw: [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve."
	]
};
BackgroundFeatureList["wayfarer"] = {
	description: "I grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. I slept where I could and did odd jobs for food. At times, when the hunger became unbearable, I resorted to theft. Still, I never lost my pride and never abandoned hope. Fate is not yet finished with me.",
	source: [["P24", 185]],
	featsAdd: ["Lucky"]
};

// Species
RaceList["aasimar"] = {
	regExpSearch: /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name: "Aasimar",
	source: [["P24", 186]],
	plural: "Aasimar",
	size: [3, 4],
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	dmgres: ["Necrotic", "Radiant"],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Light Bearer",
		spells: ["light"],
		selection: ["light"],
		firstCol: "atwill"
	}],
	features: {
		"healing hands": {
			name: "Healing Hands",
			source: [["P24", 186]],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: [["action", ""]],
			additional: ProficiencyBonusList.map(function(n) { return n + "d4 healing"; })
		},
		"celestial revelation": {
			name: "Celestial Revelation",
			source: [["P24", 186]],
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			additional: ProficiencyBonusList.map(function(n) { return "+" + n + " damage"; }),
			action: [["bonus action", ""]],
			toNotesPage: [{
				name: "Celestial Revelation",
				note: [
					"As a Bonus Action once per Long Rest, I can transform using one of the options below (choose the option each time). This lasts for 1 min or until I end it (no action).",
					"While transformed, once on each of my turns when I deal damage with an attack or spell, I can deal my Proficiency Bonus in extra damage to one target. This extra damage's type is Necrotic for Necrotic Shroud, or Radiant for Heavenly Wings and Inner Radiance.",
					"\n \u2022 Heavenly Wings",
					"Two spectral wings sprout from my back temporarily. Until the transformation ends, I have a Fly Speed equal to my Speed.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					"\n \u2022 Inner Radiance",
					"Searing light temporarily radiates from my eyes and mouth. For the duration, I shed Bright Light in a 10-ft radius and Dim Light for an additional 10 ft, and at the end of each of my turns, each creature within 10 ft of me takes Radiant damage equal to my Proficiency Bonus",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					"\n \u2022 Necrotic Shroud",
					"My eyes briefly become pools of darkness, and flightless wings sprout from my back temporarily. Creatures other than my allies within 10 ft of me must succeed on a Charisma saving throw (DC 8 + Cha mod + Prof. Bonus) or have the Frightened condition until the end of my next turn.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Necrotic."
				],
				additional: "1\xD7 per long rest"
			}]
		}
	},
	trait: "Aasimar"+
		"\n \u2022 Healing Hands: As a Magic action once per Long Rest, I can touch a creature and restore HP to it for a number of d4s equal to my Proficiency Bonus."+
		"\n \u2022 Light Bearer: I know the Light cantrip. Charisma is my spellcasting ability for it."+
		"\n \u2022 Celestial Revelation (level 3): As a Bonus Action once per Long Rest, I can transform for 1 min or until I end it (no action). Once on each of my turns while transformed, I can deal my Prof. Bonus in extra damage. I choose how I transform each time. See Notes page.",
	// from VGM:
	age : " reach adulthood in their late teens and live around 160 years",
	height: " are about 2-4 ft (small) or 4-7 ft (medium) tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " are about 60-120 cm (small) or 120-210 cm (medium) tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)"
};
RaceList["dragonborn"] = {
	regExpSearch: /dragonborn/i,
	name: "Dragonborn",
	source: [["P24", 187]],
	plural: "Dragonborn",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	features: {
		"breath weapon": {
			name: "Breath Weapon",
			minlevel: 1,
			usages: "Proficiency bonus per ",
			recovery: "long rest",
			usagescalc: "event.value = How('Proficiency Bonus');",
			additional: cantripDie.map(function (n) {
				return n + 'd10';
			}),
			weaponOptions: [{
				regExpSearch: /^(?=.*breath)(?=.*weapon).*$/i,
				name: "Breath weapon",
				source: [["P24", 187]],
				ability: 3,
				type: "Natural",
				damage: ["C", 10, "fire"],
				range: "5-ft \xD7 30-ft Line",
				description: "Can be 15-ft Cone instead; Hits all in area; Dex save for half damage; Usable Prof. Bonus per Long Rest",
				abilitytodamage: false,
				dc: true,
				dbBreathWeapon: true,
				selectNow: true
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'dragonborn' && CurrentRace.dmgres) {
							fields.Damage_Type = CurrentRace.dmgres[0];
						}
					}, '', 1
				]
			},
		},
		"draconic flight": {
			name: "Draconic Flight",
			source: [["P24", 187]],
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			action: [["bonus action", ""]]
		}
	},
	// form PHB'14:
	age: " reach adulthood by 15 and live around 80 years",
	height: " stand well over 6 ft tall (5'6\" + 2d8\")",
	weight: " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric: " stand well over 180 cm tall (170 + 5d8 cm)",
	weightMetric: " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)"
};
[["Black", "Acid"], ["Blue", "Lightning"], ["Green", "Poison"], ["Red", "Fire"], ["White", "Cold"], ["Brass", "Fire"], ["Bronze", "Lightning"], ["Copper", "Acid"], ["Gold", "Fire"], ["Silver", "Cold"]].forEach(function(arr) {
	var colour = arr[0], dmgType = arr[1];
	AddRacialVariant('dragonborn', colour, {
		name: colour + " Dragonborn",
		regExpSearch: RegExp("^(?=.*"+colour+")(?=.*dragonborn).*$", "i"),
		source: [["P24", 187]],
		dmgres: [dmgType],
		trait: colour + " Dragonborn"+
			"\n \u2022 Breath Weapon: Instead of one attack during an Attack action on my turn, I can use my breath weapon: all in a 15-ft Cone or a 5-ft wide, 30-ft Line (choose each time) take 1d10 " + dmgType + " damage, Dex save for half damage (DC 8 + Con mod + Prof. Bonus). I can do this my Prof. Bonus per Long Rest. The damage die increases as I level (" + (typePF ? "2d10 at level 5, 3d10 at level 11, 4d10 at level 17" : "see attack") + ")."+
			"\n \u2022 Draconic Flight (level 5): As a Bonus Action once per Long Rest, I can " + (typePF ? "sprout spectral wings to " : "") + "gain a Fly Speed equal to my Speed. This lasts for 10 min, until I end it (no action), or I'm Incapacitated."
	});
})
RaceList["gnome"] = {
	regExpSearch: /gnome/i,
	name: "Gnome",
	source: [["P24", 191]],
	plural: "Gnomes",
	size: 4,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	savetxt: { text : ["Adv. on Int/Wis/Cha saves"] },
	// form PHB'14:
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are about 3-4 ft tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are about 90-120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)"
};
AddRacialVariant('gnome', 'forest', {
	regExpSearch: /^(?=.*gnome)(?=.*(wood|forest|wild|green)).*$/i,
	name: "Forest Gnome",
	source: [["P24", 191]],
	spellcastingAbility: [4, 5, 6],
	features: {
		"forest gnome lineage": {
			name: "Forest Gnome Lineage",
			limfeaname: "Speak with Animals (Forest Gnome)",
			source: [["P24", 191]],
			minlevel: 1,
			usages: "Proficiency bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			spellcastingBonus: [{
				name: "At will",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
				firstCol: "atwill"
			}, {
				name: "Prof. Bonus per LR",
				spells: ["speak with animals"],
				selection: ["speak with animals"],
				firstCol: "PB"
			}]
		}
	},
	trait: "Forest Gnome"+
		"\n \u2022 Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws."+
		"\n \u2022 Forest Gnome Lineage: I know the Minor Illusion cantrip. I always have Speak with Animals prepared and I can cast it without a spell slot my Proficiency Bonus times per Long Rest. I can also use any spell slots I have to cast the spell as normal. Int, Wis, or Cha is my spellcasting ability for these (choose when selecting the lineage)."
});
AddRacialVariant('gnome', 'rock', {
	regExpSearch: /^(?=.*gnome)(?=.*(rock|tinker)).*$/i,
	name: "Rock Gnome",
	source: [["P24", 191]],
	spellcastingAbility: [4, 5, 6],
	features: {
		"rock gnome lineage": {
			name: "Rock Gnome Lineage",
			source: [["P24", 191]],
			spellcastingBonus: [{
				name: "Rock Gnome Lineage",
				spells: ["mending", "prestidigitation"],
				selection: ["mending", "prestidigitation"],
				times: 2,
				firstCol: "atwill"
			}],
			action: [["bonus action", "Activate Clockwork Device"]],
		}
	},
	trait: "Rock Gnome"+
		"\n \u2022 Gnomish Cunning: I have Adv" + (typePF ? "antage" : ".") + " on Intelligence, Wisdom, and Charisma saving throws."+
		"\n \u2022 Rock Gnome Lineage: I know the Mending and Prestidigitation cantrips. I can create a Tiny clockwork device (AC 5, 1 HP) if I spend 10 min casting Prestidigitation; I choose (one option of) one of its effects, which the device produces when a creature uses a Bonus Action to activate it via touch. I can have three such devices in existence at a time, and each falls apart after 8 hours or when I dismantle it via touch as a Utilize action."
});
RaceList["goliath"] = {
	regExpSearch : /goliath/i,
	name : "Goliath",
	source: [["P24", 192]],
	plural : "Goliaths",
	size : 3,
	speed: { walk: { spd: 35, enc: 25 } },
	savetxt: { adv_vs: ["Grappled"] },
	carryingCapacity: 2,
	features: {
		"large form": {
			name: "Large Form",
			source: [["P24", 192]],
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			action: [["bonus action", ""]]
		}
	},
	trait: "\n \u2022 Powerful Build: I have Adv. on saves to end being Grappled and I count as one size larger when determining my carrying capacity."+
		"\n \u2022 Large Form (level 5): As a Bonus Action once per Long Rest, I can become Large, if I fit, for 10 min or until I end it (no action). I have Adv. on Str checks and +10 ft Speed during.",
	// from VGM:
	age: " reach adulthood in their late teens and live less than 100 years",
	height: " are about 7-8 ft tall (6'2\" + 2d10\")",
	weight: " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric: " are about 200-240 cm tall (190 + 5d10 cm)",
	weightMetric: " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)"
};
[{
	variant: "Cloud",
	feature: "Cloud's Jaunt",
	action: [["bonus action", ""]],
	additional: "30-ft teleport",
	trait: "As a Bonus Action, I can magically teleport up to 30 ft to an unoccupied space I can see. I can do this my Proficiency Bonus times per Long Rest."
}, {
	variant: "Fire",
	feature: "Fire's Burn",
	additional: "1d10 damage",
	trait: "When I hit a target with an attack roll and damage it, I can deal it an extra +1d10 Fire damage. I can do this my Proficiency Bonus times per Long Rest."
}, {
	variant: "Frost",
	feature: "Frost's Chill",
	additional: "1d6 dmg; -10 ft",
	trait: "My Prof. Bonus times per Long Rest, when my attack roll deals damage to a target, I can do it +1d6 Cold damage and give it -10 ft Speed until my next turn starts."
}, {
	variant: "Hill",
	feature: "Hill's Tumble",
	additional: "knock Prone",
	trait: "When I hit a Large or smaller creature with an attack roll and damage it, I can give it the Prone condition. I can do this my Proficiency Bonus times per Long Rest."
}, {
	variant: "Stone",
	feature: "Stone's Endurance",
	action: [["reaction", " (when taking damage)"]],
	additional: "1d12 + Con mod",
	trait: "As a Reaction when I take damage, I can reduce that damage with 1d12 + my Constitution modifier. I can do this my Proficiency Bonus times per Long Rest."
}, {
	variant: "Storm",
	feature: "Storm's Thunder",
	action: [["reaction", " (when taking damage)"]],
	additional: "1d8 damage",
	trait: "As a Reaction when I take damage by a creature within 60 ft, I can deal it 1d8 Thunder damage. I can do this my Proficiency Bonus times per Long Rest."
}].forEach(function(obj) {
	var feaObj = {};
	var feaName = obj.feature.toLowerCase();
	feaObj[feaName] = {
		name: obj.feature,
		source: [["P24", 192]],
		minlevel: 1,
		usages: "Proficiency bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery: "long rest",
		additional: obj.additional
	};
	if (obj.action) feaObj[feaName].action = obj.action;
	AddRacialVariant('goliath', obj.variant, {
		regExpSearch: RegExp("^(?=.*"+obj.variant+")(?=.*goliath).*$", "i"),
		sortname: obj.variant + " Giant Ancestry Goliath",
		source: [["P24", 192]],
		features: feaObj,
		trait: "Goliath (" + obj.variant + " Giant Ancestry)\n \u2022 " + obj.feature + ": " + obj.trait + RaceList["goliath"].trait
	})
});
RaceList["orc"] = {
	regExpSearch : /or(c|k)/i,
	name : "Orc",
	source: [["P24", 195]],
	plural : "Orcs",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	vision : [["Darkvision", 120]],
	features : {
		"adrenaline rush" : {
			name : "Adrenaline Rush",
			source: [["P24", 195]],
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "short rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " temp HP"; }),
			action : [["bonus action", ""]]
		},
		"relentless endurance" : {
			name : "Relentless Endurance",
			source: [["P24", 195]],
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		}
	},
	trait : "Orc"+
		"\n \u2022 Adrenaline Rush. As a Bonus Action, I can take the Dash action and gain a number of Temporary Hit Points equal to my Proficiency Bonus. I can do this a number of times equal to my Proficiency Bonus times per Short Rest."+
		"\n \u2022 Relentless Endurance. When I'm reduced to 0 Hit Points but not killed outright, I can drop to 1 Hit Point instead. I can do this once per Long Rest.",
	// from VGM:
	age : " reach adulthood at age 12 and live up to 50 years",
	height : " are usually over 6 ft tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 180 cm tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)"
};
RaceList["tiefling"] = {
	regExpSearch: /^((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|fiend|lower))).*$/i,
	name: "Tiefling",
	source: [["P24", 197]],
	plural: "Tieflings",
	size: [3, 4],
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Otherworldly Presence",
		spells: ["thaumaturgy"],
		selection: ["thaumaturgy"],
		firstCol: 'atwill'
	}],
	// from PHB'14:
	age: " reach adulthood in their late teens and live around 100 years",
	height: " are about 3-4 ft (small) or 4-7 ft (medium) tall (4'9\" + 2d8\")",
	weight: " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric: " are about 90-120 cm (small) or 120-210 cm (medium) tall (145 + 5d8 cm)",
	weightMetric: " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
};
AddRacialVariant('tiefling', 'abyssal', {
	regExpSearch: /^(?=.*(tiefling|planetouched))(?=.*(abyssal|demon)).*$/i,
	name: "Abyssal Tiefling",
	source: [["P24", 197]],
	dmgres: ["Poison"],
	features: {
		"abyssal legacy 1": {
			name: "Poison Spray (Abyssal Legacy)",
			source: [["P24", 197]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Abyssal level 1",
				spells: ["poison spray"],
				selection: ["poison spray"],
				firstCol: 'atwill'
			}]
		},
		"abyssal legacy 3": {
			name: "Ray of Sickness (Abyssal Legacy)",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR", // check off when the spell has been used that long rest
			spellcastingBonus: [{
				name: "Abyssal level 3",
				spells: ["ray of sickness"],
				selection: ["ray of sickness"],
				firstCol: "checkbox"
			}]
		},
		"abyssal legacy 5": {
			name: "Hold Person (Abyssal Legacy)",
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR",
			spellcastingBonus: [{
				name: "Abyssal level 5",
				spells: ["hold person"],
				selection: ["hold person"],
				firstCol: "checkbox"
			}]
		}
	},
	trait: "Abyssal Tiefling"+
		"\n \u2022 Fiendish Legacy: I known the Poison Spray cantrip. I learn Ray of Sickness at level 3 and Hold Person at level 5. I then always have these spells prepared and can cast each once per Long Rest without a spell slot, or by using a spell slot as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (choose when selecting the legacy)."+
		"\n \u2022 Otherworldly Presence: I know the Thaumaterty cantrip and use the same spellcasting ability for it."
});
AddRacialVariant('tiefling', 'chtonic', {
	regExpSearch: /^(?=.*(tiefling|planetouched))(?=.*(chtonic|yugoloth)).*$/i,
	name: "Chtonic Tiefling",
	source: [["P24", 197]],
	dmgres: ["Necrotic"],
	features: {
		"chtonic legacy 1": {
			name: "Chill Touch (Chtonic Legacy)",
			source: [["P24", 197]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Chtonic level 1",
				spells: ["chill touch"],
				selection: ["chill touch"],
				firstCol: 'atwill'
			}]
		},
		"chtonic legacy 3": {
			name: "False Life (Chtonic Legacy)",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR", // check off when the spell has been used that long rest
			spellcastingBonus: [{
				name: "Chtonic level 3",
				spells: ["false life"],
				selection: ["false life"],
				firstCol: "checkbox"
			}]
		},
		"chtonic legacy 5": {
			name: "Ray of Enfeeblement (Chtonic Legacy)",
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR",
			spellcastingBonus: [{
				name: "Chtonic level 5",
				spells: ["ray of enfeeblement"],
				selection: ["ray of enfeeblement"],
				firstCol: "checkbox"
			}]
		}
	},
	trait: "Chtonic Tiefling"+
		"\n \u2022 Fiendish Legacy: I known the Chill Touch cantrip. I learn False Life at level 3 and Ray of Enfeeblement at level 5. I then always have these spells prepared and can cast each once per Long Rest without a spell slot, or by using a spell slot as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (choose when selecting the legacy)."+
		"\n \u2022 Otherworldly Presence: I know the Thaumaterty cantrip and use the same spellcasting ability for it."
});
AddRacialVariant('tiefling', 'infernal', {
	regExpSearch: /^(?=.*(tiefling|planetouched))(?=.*(infernal|devil)).*$/i,
	name: "Infernal Tiefling",
	source: [["P24", 197]],
	dmgres: ["Fire"],
	features: {
		"infernal legacy 1": {
			name: "Fire Bolt (Infernal Legacy)",
			source: [["P24", 197]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Infernal level 1",
				spells: ["fire bolt"],
				selection: ["fire bolt"],
				firstCol: 'atwill'
			}]
		},
		"infernal legacy 3": {
			name: "Hellish Rebuke (Infernal Legacy)",
			minlevel: 3,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR", // check off when the spell has been used that long rest
			spellcastingBonus: [{
				name: "Infernal level 3",
				spells: ["hellish rebuke"],
				selection: ["hellish rebuke"],
				firstCol: "checkbox"
			}]
		},
		"infernal legacy 5": {
			name: "Darkness (Infernal Legacy)",
			minlevel: 5,
			usages: 1,
			recovery: "long rest",
			spellFirstColTitle: "LR",
			spellcastingBonus: [{
				name: "Infernal level 5",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "checkbox"
			}]
		}
	},
	trait: "Infernal Tiefling"+
		"\n \u2022 Fiendish Legacy: I known the Fire Bolt cantrip. I learn Hellish Rebuke at level 3 and Darkness at level 5. I then always have these spells prepared and can cast each once per Long Rest without a spell slot, or by using a spell slot as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (choose when selecting the legacy)."+
		"\n \u2022 Otherworldly Presence: I know the Thaumaterty cantrip and use the same spellcasting ability for it."
});

// Weapons (cantrips not in the free rules)
WeaponsList["mind sliver"] = {
	regExpSearch: /^(?=.*mind)(?=.*sliver).*$/i,
	name: "Mind Sliver",
	source: [["P24", 298]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "psychic"],
	range: "60 ft",
	description: "Target has -1d4 on next save before my next turn ends; Int save to avoid",
	abilitytodamage: false,
	dc: true
};
WeaponsList["toll the dead"] = {
	regExpSearch: /^(?=.*toll)(?=.*dead).*$/i,
	name: "Toll the Dead",
	source: [["P24", 334]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 12, "necrotic"],
	range: "60 ft",
	description: "If target is at full HP, d8 instead of d12 damage; Wis save to avoid",
	abilitytodamage: false,
	dc: true
};
WeaponsList["thorn whip"] = {
	regExpSearch: /^(?=.*thorn)(?=.*whip).*$/i,
	name: "Thorn Whip",
	source: [["P24", 333]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 6, "piercing"],
	range: "Melee, 30 ft",
	description: "Melee spell attack; Pull up to Large target up to 10 ft closer",
	abilitytodamage: false
};
WeaponsList["thunderclap"] = {
	regExpSearch: /thunderclap/i,
	name: "Thunderclap",
	source: [["P24", 333]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "thunder"],
	range: "5-ft radius",
	description: "All creatures in area; Audible in 100 ft; Con save to avoid",
	abilitytodamage: false,
	dc: true
};
WeaponsList["word of radiance"] = {
	regExpSearch: /^(?=.*word)(?=.*radiance).*$/i,
	name: "Word of Radiance",
	source: [["P24", 343]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 6, "radiant"],
	range: "5-ft radius",
	description: "Only chosen creatures I can see are affected; Con save to avoid",
	abilitytodamage: false,
	dc: true
};
