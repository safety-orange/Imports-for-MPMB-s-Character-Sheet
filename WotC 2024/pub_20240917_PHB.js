var iFileName = "pub_20240917_PHB.js";
RequiredSheetVersion("24.0.1-beta");
// This file adds material from the 2024 Player's Handbook that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet

// Define the source
SourceList["P24"] = {
	name: "2024 Player's Handbook",
	abbreviation: "PHB'24",
	abbreviationSpellsheet: "P2",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3709000",
	date: "2024/09/17",
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
		["Artisan's tools (same as proficiency)", "", 5],
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
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
	],
	ideal: [
		"**Community**. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
		"**Generosity**. My talents were given to me so that I could use them to benefit the world. (Good)",
		"**Freedom**. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
		"**Greed**. I'm only in it for the money. (Evil)",
		"**People**. I'm committed to the people I care about, not to ideals. (Neutral)",
		"**Aspiration**. I work hard to be the best there is at my craft. (Any)",
	],
	bond: [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
	],
	flaw: [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
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
		"Woodcarvers, coopers, and bowyers",
	],
};
BackgroundFeatureList["artisan"] = {
	description: "I began mopping floors and scrubbing counters in an artisan's workshop for a few coppers per day as soon as I was strong enough to carry a bucket. When I was old enough to apprentice, I learned to create basic crafts of my own, as well as how to sweet talk the occasional demanding customer. My trade has also given me a keen eye for detail.",
	source: [["P24", 178]],
	featsAdd: ["Crafter"],
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
		["Costume clothes", "", 1],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1],
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
		"I pocket anything I see that might have some value.",
	],
	ideal: [
		"**Independence**. I am a free spirit \u2015 no one tells me what to do. (Chaotic)",
		"**Fairness**. I never target people who can't afford to lose a few coins. (Lawful)",
		"**Charity**. I distribute the money I acquire to the people who really need it. (Good)",
		"**Creativity**. I never run the same con twice. (Chaotic)",
		"**Friendship**. Material goods come and go. Bonds of friendship last forever. (Good)",
		"**Aspiration**. I'm determined to make something of myself. (Any)",
	],
	bond: [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
	],
	flaw: [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
	],
	extra: [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities",
	],
};
BackgroundFeatureList["charlatan"] = {
	description: "Once I was old enough to order an ale, I soon had a favorite stool in every tavern within ten miles of where I was born. As I traveled the circuit from public house to watering hole, I learned to prey on unfortunates who were in the market for a comforting lie or two - perhaps a sham potion or forged ancestry records.",
	source: [["P24", 179]],
	featsAdd: ["Skilled"],
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
		["Perfume", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Musical instrument (choose one)", "", 1],
		["Belt pouch (with coins)", "", 1],
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
		"I change my mood or my mind as quickly as I change key in a song.",
	],
	ideal: [
		"**Beauty**. When I perform, I make the world better than it was. (Good)",
		"**Tradition**. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
		"**Creativity**. The world is in need of new ideas and bold action. (Chaotic)",
		"**Greed**. I'm only in it for the money and fame. [Evil]",
		"**People**. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
		"**Honesty**. Art should reflect the soul; it should come from within and reveal who we really are. (Any)",
	],
	bond: [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe.",
	],
	flaw: [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends.",
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
		"Tumbler",
	],
};
BackgroundFeatureList["entertainer"] = {
	description: "I spent much of my youth following roving fairs and carnivals, performing odd jobs for musicians and acrobats in exchange for lessons. I may have learned how to walk a tightrope, how to play a lute in a distinct style, or how to recite poetry with impeccable diction. To this day, I thrive on applause and long for the stage.",
	source: [["P24", 180]],
	featsAdd: ["Musician"],
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
		["Carpenter's tools", "", 6],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Sickle", "", 2],
	],
	equip1stPage: {
		weapons: ["Sickle"],
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
		"I get bored easily. When am I going to get on with my destiny?",
	],
	ideal: [
		"**Respect**. People deserve to be treated with dignity and respect. (Good)",
		"**Fairness**. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
		"**Freedom**. Tyrants must not be allowed to oppress the people. (Chaotic)",
		"**Might**. If I become strong, I can take what I want\u2015 what I deserve. (Evil)",
		"**Sincerity**. There's no good in pretending to be something I'm not. (Neutral)",
		"**Destiny**. Nothing and no one can steer me away from my higher calling. (Any)",
	],
	bond: [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny.",
	],
	flaw: [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies.",
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
		"I rose to leadership in a lord's army",
	],
};
BackgroundFeatureList["farmer"] = {
	description: "I grew up close to the land. Years tending animals and cultivating the earth rewarded me with patience and good health. I have a keen appreciation for nature's bounty alongside a healthy respect for nature's wrath.",
	source: [["P24", 180]],
	featsAdd: ["Tough"],
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
		["Gaming set (same as proficiency)", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Spear", "", 3],
		["Light crossbow", "", 5],
		["Crossbow bolt case, with:", "", 1],
		["- Crossbow bolts", 20, 0.075],
	],
	equip1stPage: {
		weapons: ["Spear", "Light Crossbow"],
		ammo: [["Bolts", 20]],
	},
	feature: "Guard",
};
BackgroundFeatureList["guard"] = {
	description: "My feet ache when I remember the countless hours I spent at my post in the tower. I was trained to keep one eye looking outside the wall watching for marauders sweeping from the nearby forest, and my other eye looking inside the wall searching for cut purses and troublemakers.",
	source: [["P24", 181]],
	featsAdd: ["Alert"],
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
		["Two-person tent", "", 20],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Shortbow", "", 2],
		["Quiver, with:", "", 1],
		["- Arrows", 20, 0.05],
	],
	equip1stPage: {
		weapons: ["Shortbow"],
		ammo: [["Arrows", 20]],
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
		"I was, in fact, raised by wolves.",
	],
	ideal: [
		"**Change**. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
		"**Greater Good**. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
		"**Honor**. If I dishonor myself, I dishonor my whole clan. (Lawful)",
		"**Might**. The strongest are meant to rule. (Evil)",
		"**Nature**. The natural world is more important than all the constructs of civilization. (Neutral)",
		"**Glory**. I must earn glory in battle, for myself and my clan. (Any)",
	],
	bond: [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe.",
	],
	flaw: [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
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
		"Tribal marauder",
	],
};
BackgroundFeatureList["guide"] = {
	description: "I came of age outdoors, far from settled lands. My home was anywhere I chose to spread my bedroll. The wilderness has wonders like strange monsters, pristine forests, streams, overgrown ruins, and I learned to fend for myself as I explored them. From time to time, I guided nature priests who taught me the fundamentals of using the magic of the wild.",
	source: [["P24", 181]],
	featsAdd: [{ key: "magic initiate", choice: "druid" }],
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
		["Oil, flasks of", 3, 1],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Quarterstaff", "", 4],
	],
	equip1stPage: {
		weapons: ["Quarterstaff"],
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
		"I am working on a grand philosophical theory and love sharing my ideas.",
	],
	ideal: [
		"**Greater Good**. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
		"**Logic**. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
		"**Free Thinking**. Inquiry and curiosity are the pillars of progress. (Chaotic)",
		"**Power**. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
		"**Live and Let Live**. Meddling in the affairs of others only causes trouble. (Neutral)",
		"**Self-Knowledge**. If you know yourself, there's nothing left to know. (Any)",
	],
	bond: [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy.",
	],
	flaw: [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone.",
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
		"Pilgrim in search of a thing of spiritual significance",
	],
};
BackgroundFeatureList["hermit"] = {
	description: "I spent my early years secluded in a hut or monastery located well beyond the outskirts of the nearest settlement. In those days, my only companions were the creatures of the forest and those who would occasionally visit to bring news of the outside world and supplies. The solitude allowed me to spend many hours pondering the mysteries of creation.",
	source: [["P24", 182]],
	featsAdd: ["Healer"],
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
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Merchant",
	// from PHB'14 (Guild Merchant variant for the Guild Artisan):
	traitsOriginName: "Guild Merchant",
	traitsSourceString: "PHB'14 133",
	extra: [
		"Select a Business",
		"Trader",
		"Caravan master",
		"Shopkeeper",
	],
};
BackgroundFeatureList["merchant"] = {
	description: "I was apprenticed to a trader, caravan master, or shopkeeper, learning the fundamentals of commerce. I traveled broadly and earned a living by buying and selling raw materials artisans need to practice their craft, or their finished works. I transported goods from one place to another or bought them from traveling traders and sold them in my own shop.",
	source: [["P24", 182]],
	featsAdd: ["Lucky"],
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
		["Perfume", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1],
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
		"If you do me an injury, I will crush you, ruin your name, and salt your fields.",
	],
	ideal: [
		"**Respect**. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
		"**Responsibility**. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
		"**Independence**. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
		"**Power**. If I can attain more power, no one will tell me what to do. (Evil)",
		"**Family**. Blood runs thicker than water. (Any)",
		"**Noble Obligation**. It is my duty to protect and care for the people beneath me. (Good)",
	],
	bond: [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people.",
	],
	flaw: [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family.",
	],
};
BackgroundFeatureList["noble"] = {
	description: "I was raised in a castle, surrounded by wealth, power, and privilege. My family of minor aristocrats ensured that I received a first-class education, some of which I appreciated and some of which I resented. My time in the castle, especially the many hours I spent observing my family at court, also taught me a great deal about leadership.",
	source: [["P24", 183]],
	featsAdd: ["Skilled"],
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
	  ["Rope", "", 5],
	],
	equipright: [
	  ["Traveler's clothes", "", 4],
	  ["Belt pouch (with coins)", "", 1],
	  ["Dagger", "", 1],
	],
	equip1stPage: {
		weapons: ["Dagger"],
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
		"I like a job well done, especially if I can convince someone else to do it.",
	],
	ideal: [
		"**Respect**. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
		"**Fairness**. We all do the work, so we all share in the rewards. (Lawful)",
		"**Freedom**. The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)",
		"**Mastery**. I'm a predator, and the other ships on the sea are my prey. (Evil)",
		"**People**. I'm committed to my crewmates, not to ideals. (Neutral)",
		"**Aspiration**. Someday I'll own my own ship and chart my own destiny. (Any)",
	],
	bond: [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
	],
	flaw: [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction.",
	],
};
BackgroundFeatureList["sailor"] = {
	description: "I lived as a seafarer, wind at my back and decks swaying beneath my feet. I've perched on bar stools in more ports of call than I can remember, faced mighty storms, and swapped stories with folk who live beneath the waves.",
	source: [["P24", 184]],
	featsAdd: ["Tavern Brawler"],
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
		["Parchment, sheets of", 12, ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Scribe",
};
BackgroundFeatureList["scribe"] = {
	description: "I spent formative years in a scriptorium, monastery, or government agency, where I learned to write with a clear hand and produce finely written texts. Perhaps I scribed government documents, or copied tomes, or perhaps I've written poetry, prose, or scholarly research. I have an attention to detail, helping me avoid mistakes in that I copy or create.",
	source: [["P24", 184]],
	featsAdd: ["Skilled"],
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
		["Thieves' tools", "", 1],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
		["Dagger", 2, 1],
	],
	equip1stPage: {
		weapons: ["Dagger", "Dagger (off-hand)"],
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
		"I say, without reserve, what other people are implying or masking.",
	],
	ideal: [
		"**Respect**. Everybody, no matter their riches, deserves respect. (Good)",
		"**Community**. We have to take look out for each other, because nobody else will do it for us. (Lawful)",
		"**Change**. The low rise up, and the high and mighty come down. Change is natural. (Chaotic)",
		"**Retribution**. The rich need to be shown how it is to live and die in the poor quarters. (Evil)",
		"**People**. I help those who help me\u2015 that is what lets us stay alive. (Neutral)",
		"**Aspiration**. I'm going to prove that I'm worthy of a better life. (Any)",
	],
	bond: [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through.",
	],
	flaw: [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve.",
	],
};
BackgroundFeatureList["wayfarer"] = {
	description: "I grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. I slept where I could and did odd jobs for food. At times, when the hunger became unbearable, I resorted to theft. Still, I never lost my pride and never abandoned hope. Fate is not yet finished with me.",
	source: [["P24", 185]],
	featsAdd: ["Lucky"],
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
		firstCol: "atwill",
	}],
	features: {
		"healing hands": {
			name: "Healing Hands",
			source: [["P24", 186]],
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
			action: [["action", ""]],
			additional: ProficiencyBonusList.map(function(n) { return n + "d4 healing"; }),
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
					"As a Bonus Actio	n once per Long Rest, I can transform using one of the options below (choose the option each time). This lasts for 1 min or until I end it (no action).",
					"While transformed, once on each of my turns when I deal damage with an attack or spell, I can deal my Proficiency Bonus in extra damage to one target. This extra damage's type is Necrotic for Necrotic Shroud, or Radiant for Heavenly Wings and Inner Radiance.",
					" **\u2022 Heavenly Wings**. Two spectral wings sprout from my back temporarily. Until the transformation ends, I have a Fly Speed equal to my Speed.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					" **\u2022 Inner Radiance**. Searing light temporarily radiates from my eyes and mouth. For the duration, I shed Bright Light in a 10-ft radius and Dim Light for an additional 10 ft, and at the end of each of my turns, each creature within 10 ft of me takes Radiant damage equal to my Proficiency Bonus",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					" **\u2022 Necrotic Shroud**. My eyes briefly become pools of darkness, and flightless wings sprout from my back temporarily. Creatures other than my allies within 10 ft of me must succeed on a Charisma saving throw (DC 8 + Cha mod + Prof. Bonus) or have the Frightened condition until the end of my next turn.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Necrotic.",
				],
				additional: "1\xD7 per long rest",
			}],
		},
	},
	trait: [
		"**Aasimar**",
		"##\u25C6 Healing Hands##. As a Magic action once per Long Rest, I can touch a creature and restore HP to it for a number of d4s equal to my Proficiency Bonus.",
		"##\u25C6 Light Bearer##. I know the Light cantrip. Charisma is my spellcasting ability for it.",
		"##\u25C6 Celestial Revelation## (level 3). As a Bonus Action once per Long Rest, I can transform for 1 min or until I end it (no action). Once on each of my turns while transformed, I can deal my Prof. Bonus in extra damage. I choose how I transform each time. See Notes page.",
	].join("\n"),
	// from VGM:
	age : " reach adulthood in their late teens and live around 160 years",
	height: " are about 2-4 ft (small) or 4-7 ft (medium) tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " are about 60-120 cm (small) or 120-210 cm (medium) tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
};

// Origin feats
FeatsList["crafter"] = {
	name: "Crafter",
	source: [["P24", 200]],
	type: "origin",
	description: "I received a 20% discount on nonmagical items. I'm proficient with three Artisan's Tools of choice from the Fast Crafting table. Fast Crafting. I can craft one item from that table during a Long Rest, which lasts until I finish another Long Rest. I need to have the associated tools and proficiency to do this. [See Notes page]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Tool Proficiency***. You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.",
		"***Discount***. Whenever you buy a nonmagical item, you receive a 20 percent discount on it.",
		"***Fast Crafting***. When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.",
		[
			["Artisan's Tools", "Crafted Gear"],
			["Carpenter's Tools", "Ladder, Torch"],
			["Leatherworker's Tools", "Crossbow Bolt Case, Map or Scroll Case, Pouch"],
			["Mason's Tools", "Block and Tackle"],
			["Potter's Tools", "Jug, Lamp"],
			["Smith's Tools", "Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot"],
			["Tinker's Tools", "Bell, Shovel, Tinderbox"],
			["Weaver's Tools", "Basket, Rope, Net, Tent"],
			["Woodcarver's Tools", "Club, Greatclub, Quarterstaff"],
		],
	],
	toolProfs: [["Artisan's tools", 3]],
	toNotesPage: [
		{
			name: "Fast Crafting",
			note: [
				"When I finish a Long Rest, I can craft one piece of gear from the table below, provided I have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until I finish another Long Rest, at which point the item falls apart.",
				[
					["Artisan's Tools", "Crafted Gear"],
					["Carpenter's Tools", "Ladder, Torch"],
					["Leatherworker's Tools", "Crossbow Bolt Case, Map or Scroll Case, Pouch"],
					["Mason's Tools", "Block and Tackle"],
					["Potter's Tools", "Jug, Lamp"],
					["Smith's Tools", "Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot"],
					["Tinker's Tools", "Bell, Shovel, Tinderbox"],
					["Weaver's Tools", "Basket, Rope, Net, Tent"],
					["Woodcarver's Tools", "Club, Greatclub, Quarterstaff"],
				],
			],
		},
	],
};
FeatsList["healer"] = {
	name: "Healer",
	source: [["P24", 201]],
	type: "origin",
	description: "##Battle Medic##. As a Utilize action, I can expend 1 use of a Healer's Kit to allow a creature within 5 ft of me to expend 1 Hit Die and regain HP equal to the HD's roll plus my Proficiency Bonus. ##Healing Rerolls##. Whenever I roll a 1 on the die to heal using a spell or this feat, I can reroll the die but must use the new roll.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Battle Medic***. If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.",
		"***Healing Rerolls***. Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.",
	],
	action: [["action", "Battle Medic"]],
};
FeatsList["lucky"] = {
	name: "Lucky",
	source: [["P24", 201]],
	type: "origin",
	description: [
		"I gain a number of ##Luck Points## equal to my Proficiency Bonus that I regain "+ (typePF ? "after" : "when") + " I finish a Long Rest. I can expend 1 of them to:",
		" \u2022 Give myself Advantage on a D20 Test.",
		" \u2022 Impose Disadvantage on an attack roll against me.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Luck Points***. You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.",
		"***Advantage***. When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll.",
		"***Disadvantage***. When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.",
	],
	limfeaname: "Luck Points",
	usages: "Proficiency bonus per ",
	usagescalc: "event.value = Number(How('Proficiency Bonus'));",
	recovery: "long rest",
};
FeatsList["musician"] = {
	name: "Musician",
	source: [["P24", 201]],
	type: "origin",
	description: [
		"At the end of a Short or Long Rest, I can play an instrument I'm proficient with to give Heroic Inspiration to a number of allies up to my Proficiency Bonus, if they hear the song.",
		"I gain proficiency with three Musical Instruments of my choice.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Instrument Training***. You gain proficiency with three Musical Instruments of your choice.",
		"***Encouraging Song***. As you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear the song. The number of allies you can affect in this way equals your Proficiency Bonus.",
	],
	toolProfs: [["Musical Instrument", 3]],
};
FeatsList["tavern brawler"] = {
	name: "Tavern Brawler",
	source: [["P24", 202]],
	type: "origin",
	description: "Once per turn when I hit a creature with an Unarmed Strike as part of the Attack action on my turn, I can deal damage to the target and also push it 5 ft away from me. My Unarmed Strike deals 1d4 damage and I can reroll a 1 on its damage die, but must use the new roll. I'm proficient with improvised weapons. ",
	descriptionFull: [
		"You gain the following benefits.",
		"***Enhanced Unarmed Strike***. When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.",
		"***Damage Rerolls***. Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.",
		"***Improvised Weaponry***. You have proficiency with improvised weapons.",
		"***Push***. When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.",
	],
	weaponProfs: [false, false, ["Improvised weapons"]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName == "improvised weapon" || /improvised/i.test(v.WeaponName + v.baseWeaponName) || /improvised weapon/i.test(v.theWea.type)) {
					fields.Proficiency = true;
				};
				if (v.baseWeaponName == "unarmed strike") {
					fields.Description += (fields.Description ? "; " : "") + "1/turn also push 5 ft; reroll 1 on damage";
					if (fields.Damage_Die == 1) fields.Damage_Die = "1d4";
				};
			},
			"My Unarmed Strike deals 1d4 damage instead of 1.\n \u2022 Whenever I roll a 1 on the damage die of an Unarmed Strike, I can reroll it but must use the new roll.\n \u2022 Once per turn as part of the Attack action on my turn, I can deal damage and push the target 5 ft away from me.",
		],
	},
};
FeatsList["tough"] = {
	name: "Tough",
	source: [["P24", 202]],
	type: "origin",
	description: "My Hit Point maximum increases by an amount equal to twice my character level when I gain this feat. Whenever I gain a character level thereafter, my Hit Point maximum increases by an additional 2 Hit Points.",
	descriptionFull: [
		"Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.",
	],
	calcChanges: {
		hp: function (totalHD) {
			return [totalHD * 2, '\n + ' + totalHD + ' \xD7 2 from the Tough feat (' + (totalHD * 2) + ')', true];
		},
	},
};
// General feats
FeatsList["actor"] = {
	name: "Actor",
	source: [["P24", 202]],
	type: "general",
	prerequisite: "Level 4+, Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Cha") >= 13;
	},
	description: "While disguised as a specific person, I have Advantage on Charisma (Deception or Performance) checks to convince others that I am that person. I am able to mimic the sounds and speech of others. Wisdom (Insight) check (DC 8 + Cha mod + Prof Bonus) to determine the effect is faked. [+1 Charisma]",
	calculate: 'var dc = 8 + Number(How("Proficiency Bonus")) + Number(What("Cha Mod")); event.value = "While disguised as a specific person, I have Advantage on Charisma (Deception or Performance) checks to convince others that I am that person. I am able to mimic the sounds and speech of others. DC " + dc + " (8 + Cha mod + Prof Bonus) Wisdom (Insight) check to determine the effect is faked. [+1 Charisma]"',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Charisma score by 1, to a maximum of 20.",
		"***Impersonation***. While you're disguised as a real or fictional person, you have Advantage on Charisma (Deception or Performance) checks to convince others that you are that person.",
		"***Mimicry***. You can mimic the sounds of other creatures, including speech. A creature that hears the mimicry must succeed on a Wisdom (Insight) check to determine the effect is faked (8 plus your Charisma modifier and Proficiency Bonus).",
	],
	scores: [0, 0, 0, 0, 0, 1],
};
FeatsList["athlete"] = {
	name: "Athlete",
	source: [["P24", 202]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: [
		"I gain a Climb Speed equal to my Speed.",
		"I can make a running Long or High Jump after moving only 5 ft.",
		"I can right myself from the Prone condition with only 5 ft of movement. [+1 Str or Dex]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Climb Speed***. You gain a Climb Speed equal to your Speed.",
		"***Hop Up***. When you have the Prone condition, you can right yourself with only 5 feet of movement.",
		"***Jumping***. You can make a running Long or High Jump after moving only 5 feet.",
	],
	speed: { climb: { spd: "walk", enc: "walk" } },
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"I gain a Climb Speed equal to my Speed.",
			"I can make a running Long or High Jump after moving only 5 ft.",
			"I can right myself from the Prone condition with only 5 ft of movement. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"I gain a Climb Speed equal to my Speed.",
			"I can make a running Long or High Jump after moving only 5 ft.",
			"I can right myself from the Prone condition with only 5 ft of movement. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["charger"] = {
	name: "Charger",
	source: [["P24", 202]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal +1d8 damage or push the target 10 ft away from me if it's no more than 1 size larger. [+1 Str or Dex]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Improved Dash***. When you take the Dash action, your Speed increases by 10 feet for that action.",
		"***Charge Attack***. If you move at least 10 feet in a straight line toward a target immediately before hitting it with a melee attack roll as part of the Attack action, choose one of the following effects: gain a 1d8 bonus to the attack's damage roll, or push the target up to 10 feet away if it is no more than one size larger than you. You can use this benefit only once on each of your turns.",
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal +1d8 damage or push the target 10 ft away from me if it's no more than 1 size larger. [+1 Str" + (typePF ? "]" : "ength]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal +1d8 damage or push the target 10 ft away from me if it's no more than 1 size larger. [+1 Dex" + (typePF ? "]" : "terity]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["chef"] = {
	name: "Chef",
	source: [["P24", 202]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Wisdom score by 1, to a maximum of 20.",
		"***Cook's Utensils***. You gain proficiency with Cook's Utensils if you don't already have it.",
		"***Replenishing Meal***. As part of a Short Rest, you can cook special food if you have ingredients and Cook's Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points.",
		"***Bolstering Treats***. With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus.",
	],
	toolProfs: ["Cook's Utensils"],
	toNotesPage: [{
		name: "Replenishing Meal",
		note: ["As part of a Short Rest, I can cook special food if I have ingredients and Cook's Utensils on hand. I can prepare enough of this food for a number of creatures equal to 4 plus my Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points."],
	}, {
		name: "Bolstering Treats",
		note: [
			"With 1 hour of work or when I finish a Long Rest, I can cook a number of treats equal to my Proficiency Bonus if I have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made.",
			"As a Bonus Action, a creature can eat one of those treats to gain a number of Temporary Hit Points equal to my Proficiency Bonus.",
		],
		amendTo: "Replenishing Meal",
	}],
	choices: ["Constitution", "Wisdom"],
	choicesNotInMenu: true,
	"constitution": {
		description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP." + (typePF ? "" : " [+1 Constitution]"),
		scores: [0, 0, 1, 0, 0, 0],
	},
	"wisdom": {
		description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP." + (typePF ? "" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
};
FeatsList["crossbow expert"] = {
	name: "Crossbow Expert",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: "I ignore the Loading property of Hand, Light, and Heavy Crossbows. Being within 5 ft of an enemy doesn't impose Disadvantage on my crossbow attacks. I can add my ability modifier to the damage of off-hand attacks I make with crossbows that have the light property. [+1 Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Ignore Loading***. You ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow (all called crossbows elsewhere in this feat). If you're holding one of them, you can load a piece of ammunition into it even if you lack a free hand.",
		"***Firing in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with crossbows.",
		"***Dual Wielding***. When you make the extra attack of the Light property, you can add your ability modifier to the damage of the extra attack if that attack is with a crossbow that has the Light property and you aren't already adding that modifier to the damage.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (/(hand|heavy|light) crossbow/i.test(v.baseWeaponName)) {
					fields.Description = fields.Description.replace(/([,;]? ?loading|loading[,;]? ?)/i, '');
					if (v.isOffHand && /\blight\b/i.test(fields.Description))  {
						output.modToDmg = true;
					};
				};
			},
			"I ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow.",
		],
	},
};
FeatsList["crusher"] = {
	name: "Crusher",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Str or Con]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Constitution score by 1, to a maximum of 20.",
		"***Push***. Once per turn, when you hit a creature with an attack that deals Bludgeoning damage, you can move it 5 feet to an unoccupied space if the target is no more than one size larger than you.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of your next turn.",
	],
	choices: ["Strength", "Constitution"],
	choicesNotInMenu: true,
	"strength": {
		description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["defensive duelist"] = {
	name: "Defensive Duelist",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: "##Parry##. As a reaction when I'm holding a Finesse weapon and another creature hits me with a melee attack, I can add my Proficiency Bonus to my Armor Class, potentially causing the attack to miss me. I gain this bonus to my AC against melee attacks until the start of my next turn. [+1 Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Parry***. If you're holding a Finesse weapon and another creature hits you with a melee attack, you can take a Reaction to add your Proficiency Bonus to your Armor Class, potentially causing the attack to miss you. You gain this bonus to your AC against melee attacks until the start of your next turn.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	action: [["reaction", "Parry"]],
};
FeatsList["dual wielder"] = {
	name: "Dual Wielder",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Str or Dex]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Enhanced Dual Wielding***. When you take the Attack action on your turn and attack with a weapon that has the Light property, you can make one extra attack as a Bonus Action later on the same turn with a different weapon, which must be a Melee weapon that lacks the Two-Handed property. You don't add your ability modifier to the extra attack's damage unless that modifier is negative.",
		"***Quick Draw***. You can draw or stow two weapons that lack the Two-Handed property when you would normally be able to draw or stow only one.",
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["durable"] = {
	name: "Durable",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: [
		"##Defy Death##. I have Advantage on Death Saving Throws.",
		"##Speedy Recovery##. As a Bonus Action, I can expend and roll one of my Hit Dice to regain a number of Hit Points equal to the roll. [+1 Constitution]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution score by 1, to a maximum of 20.",
		"***Defy Death***. You have Advantage on Death Saving Throws.",
		"***Speedy Recovery***. As a Bonus Action, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the roll.",
	],
	scores: [0, 0, 1, 0, 0, 0],
	savetxt: {
		text: ["Adv. on Death Saves"],
	},
	action: [["bonus action", "Speedy Recovery (1 HD)"]],
};
FeatsList["elemental adept"] = {
	name: "Elemental Adept",
	source: [["P24", 203]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcasterClass;
	},
	description: "Choose one of the damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells I cast ignore resistance to damage from this damage type. For any spell I cast that deals this damage type, I can treat any 1 on a damage die as a 2. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Energy Mastery***. Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
		"***Repeatable***. You can take this feat more than once, but you must choose a different damage type each time for Energy Mastery.",
	],
	scorestxt: "+1 Intelligence, Wisdom, or Charisma",
	allowDuplicates: true,
	choices: ["Acid Energy Mastery", "Cold Energy Mastery", "Fire Energy Mastery", "Lightning Energy Mastery", "Thunder Energy Mastery"],
	"acid energy mastery": {
		name: "Elemental Adept [Acid]",
		description: [
			"Spells cast by me ignore Resistance to Acid damage.",
			"When I roll damage for a spell casted by me that deals Acid damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"cold energy mastery": {
		name: "Elemental Adept [Cold]",
		description: [
			"Spells cast by me ignore Resistance to Cold damage.",
			"When I roll damage for a spell casted by me that deals Cold damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"fire energy mastery": {
		name: "Elemental Adept [Fire]",
		description: [
			"Spells cast by me ignore Resistance to Fire damage.",
			"When I roll damage for a spell casted by me that deals Fire damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"lightning energy mastery": {
		name: "Elemental Adept [Lightning]",
		description: [
			"Spells cast by me ignore Resistance to Lightning damage.",
			"When I roll damage for a spell casted by me that deals Lightning damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"thunder energy mastery": {
		name: "Elemental Adept [Thunder]",
		description: [
			"Spells cast by me ignore Resistance to Thunder damage.",
			"When I roll damage for a spell casted by me that deals Thunder damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
};
FeatsList["fey-touched"] = {
	name: "Fey-Touched",
	source: [["P24", 204]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spells prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and by expending a spell slot as normal. The spells' spellcasting ability is the ability increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"Your exposure to the Feywild's magic grants you the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Fey Magic***. Choose one level 1 spell from the Divination or Enchantment school of magic. You always have that spell and the Misty Step spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can't cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	],
	spellFirstColTitle: "PR",
	spellcastingBonus: [{
		name: "Misty Step",
		spells: ["misty step"],
		selection: ["misty step"],
		firstCol: "oncelr+markedbox",
	}, {
		name: "1st-level Ench/Div spell",
		school: ["Ench", "Div"],
		level: [1, 1],
		firstCol: "oncelr+markedbox",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Int" + (typePF ? "]" : "elligence]"),
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["great weapon master"] = {
	name: "Great Weapon Master",
	source: [["P24", 204]],
	type: "general",
	prerequisite: "Level 4+, Strength 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Str") >= 13;
	},
	description: [
		"##Heavy Weapon Mastery##. During the Attack action on my turn, I can add my Proficiency Bonus to the damage of " + (typePF ? "Heavy weapons. " : "weapons with the Heavy property."),
		"##Hew##. Immediately after I reduce a creature to 0 HP with a melee weapon or score a Critical Hit with one, I can make another attack with that weapon as a Bonus Action. [+1 Str]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength score by 1, to a maximum of 20.",
		"***Heavy Weapon Mastery***. When you hit a creature with a weapon that has the Heavy property as part of the Attack action on your turn, you can cause the weapon to deal extra damage to the target. The extra damage equals your Proficiency Bonus.",
		"***Hew***. Immediately after you score a Critical Hit with a Melee weapon or reduce a creature to 0 Hit Points with one, you can make one attack with the same weapon as a Bonus Action.",
	],
	scores: [1, 0, 0, 0, 0, 0],
	action: [["bonus action", "Hew (Great Weapon Master)"]],
	calcChanges: {
		atkCalc: [
			function (fields, v, output) {
				if (v.isWeapon && /heavy/i.test(fields.Description) && /\bgwm\b|power.{0,3}attack|great.{0,3}weapon.{0,3}master/i.test(v.WeaponTextName)) {
					output.extraDmg += Number(How("Proficiency Bonus"));
				};
			},
			"If I include the words 'Power Attack', 'Great Weapon Master', or 'GWM' in the name of a weapon with the Heavy property, my Proficiency Bonus is added to its damage.",
		],
	},
};
FeatsList["heavily armored"] = {
	name: "Heavily Armored",
	source: [["P24", 204]],
	type: "general",
	prerequisite: "Level 4+, Medium Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	description: "I gain training with Heavy armor. [+1 Strength or Constitution]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Strength score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Heavy armor.",
	],
	armorProfs: [false, false, true, false],
	choices: ["Constitution", "Strength"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Heavy armor. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "I gain training with Heavy armor. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["heavy armor master"] = {
	name: "Heavy Armor Master",
	source: [["P24", 204]],
	type: "general",
	prerequisite: "Level 4+, Heavy Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.heavyArmorProf;
	},
	description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Strength or Constitution]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Strength score by 1, to a maximum of 20.",
		"***Damage Reduction***. When you're hit by an attack while you're wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus.",
	],
	choices: ["Constitution", "Strength"],
	choicesNotInMenu: true,
	"strength": {
		description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["inspiring leader"] = {
	name: "Inspiring Leader",
	source: [["P24", 204]],
	type: "general",
	prerequisite: "Level 4+, Wisdom or Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Wis") >= 13 || What("Cha") >= 13);
	},
	description: "When I finish a Short or Long Rest, I can give an inspiring performance. Up to six allies (which can include myself) within 30 ft who witness this performance each gain Temporary Hit Points equal to my character level plus the modifier of the ability increased by this feat. [+1 Wisdom or Charisma]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Wisdom or Charisma score by 1, to a maximum of 20.",
		"***Bolstering Performance***. When you finish a Short or Long Rest, you can give an inspiring performance: a speech, song, or dance. When you do so, choose up to six allies (which can include yourself) within 30 feet of yourself who witness the performance. The chosen creatures each gain Temporary Hit Points equal to your character level plus the modifier of the ability you increased with this feat.",
	],
	choices: ["Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"wisdom": {
		calculate: 'event.value = "When I finish a Short or Long Rest, I can give an inspiring performance. I can choose up to six allies (or five and myself) within 30 ft of myself who witness this performance to each gain " + ( Number(What("Character Level")) + Number(What("Wis Mod")) ) + " Temporary Hit Points (= character level + Wisdom modifier). [+1 Wisdom]";',
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		calculate: 'event.value = "When I finish a Short or Long Rest, I can give an inspiring performance. I can choose up to six allies (or five and myself) within 30 ft of myself who witness this performance to each gain " + ( Number(What("Character Level")) + Number(What("Cha Mod")) ) + " Temporary Hit Points (= character level + Charisma modifier). [+1 Charisma]";',
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["keen mind"] = {
	name: "Keen Mind",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+, Intelligence 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Int") >= 13;
	},
	description: "##Quick Study##. I can take the Study action as a Bonus Action. ##Lore Knowledge##. I gain proficiency in one Intelligence skill of my choice. If I already have proficiency in it, I gain Expertise in it. [+1 Intelligence]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence score by 1, to a maximum of 20.",
		"***Lore Knowledge***. Choose one of the following skills: Arcana, History, Investigation, Nature, or Religion. If you lack proficiency in the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.",
		"***Quick Study***. You can take the Study action as a Bonus Action.",
	],
	scores: [0, 0, 0, 1, 0, 0],
	action: [["bonus action", "Study"]],
	choices: ["Arcana", "History", "Investigation", "Nature", "Religion"],
	choicesNotInMenu: true,
	"arcana": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Arcana skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Arcana", "increment"]],
	},
	"history": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the History skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["History", "increment"]],
	},
	"investigation": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Investigation", "increment"]],
	},
	"nature": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Nature skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Nature", "increment"]],
	},
	"religion": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Religion skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Religion", "increment"]],
	},
};
FeatsList["lightly armored"] = {
	name: "Lightly Armored",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I gain training with Light armor and Shields. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Light armor and Shields.",
	],
	armorProfs: [true, false, false, true],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Light armor and Shields. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain training with Light armor and Shields. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["mage slayer"] = {
	name: "Mage Slayer",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Concentration Breaker***. When you damage a creature that is Concentrating, it has Disadvantage on the saving throw it makes to maintain Concentration.",
		"***Guarded Mind***. If you fail an Intelligence, a Wisdom, or a Charisma saving throw, you can cause yourself to succeed instead. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	extraLimitedFeatures: [{
		name: "Guarded Mind (Mage Slayer)",
		usages: 1,
		recovery: "short rest",
	}],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["martial weapon training"] = {
	name: "Martial Weapon Training",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I gain proficiency with Martial weapons. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Weapon Proficiency***. You gain proficiency with Martial weapons.",
	],
	weaponProfs: [false, true],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain proficiency with Martial weapons. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain proficiency with Martial weapons. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["medium armor master"] = {
	name: "Medium Armor Master",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+, Medium Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Dexterous Wearer***. While you're wearing Medium armor, you can add 3, rather than 2 to your AC if you have a Dexterity score of 16 or higher.",
	],
	eval: function () {
		Value("Medium Armor Max Mod", 3);
		ApplyArmor(What("AC Armor Description"));
	},
	removeeval: function () {
		tDoc.resetForm(["Medium Armor Max Mod"]);
		ApplyArmor(What("AC Armor Description"));
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["moderately armored"] = {
	name: "Moderately Armored",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+, Light Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.lightArmorProf;
	},
	description: "I gain training with Medium armor. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Medium armor.",
	],
	armorProfs: [false, true, false, false],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Medium armor. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain training with Medium armor. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["mounted combatant"] = {
	name: "Mounted Combatant",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "While I'm mounted and not Incapacitated: ##\u2022 Mounted Strike##. I have Advantage on attacks against unmounted within 5 ft that are smaller than my mount. ##\u2022 Leap Aside##. If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail. ##\u2022 Veer##. When an attack hits my mount, I can have it hit me instead. [+1 Strength, Dexterity, or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength, Dexterity, or Wisdom score by 1, to a maximum of 20.",
		"***Mounted Strike***. While mounted, you have Advantage on attack rolls against any unmounted creature within 5 feet of your mount that is at least one size smaller than the mount.",
		"***Leap Aside***. If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw and only half damage if it fails. For your mount to gain this benefit, you must be riding it, and neither of you can have the Incapacitated condition.",
		"***Veer***. While mounted, you can force an attack that hits your mount to hit you instead if you don't have the Incapacitated condition.",
	],
	choices: ["Strength", "Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"strength": {
		description: "While I'm mounted and not Incapacitated:"+
			(typePF ? " \u2022 " : " ##\u2022 Mounted Strike##. ") + "I have Advantage on attacks against unmounted within 5 ft that are smaller than my mount."+
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail."+
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead."+
			(typePF ? "" : " [+1 Str]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While I'm mounted and not Incapacitated:"+
			(typePF ? " \u2022 " : " ##\u2022 Mounted Strike##. ") + "I have Advantage on attacks against unmounted within 5 ft that are smaller than my mount."+
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail."+
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead."+
			(typePF ? "" : " [+1 Dex]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "While I'm mounted and not Incapacitated:"+
			(typePF ? " \u2022 " : " ##\u2022 Mounted Strike##. ") + "I have Advantage on attacks against unmounted within 5 ft that are smaller than my mount."+
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail."+
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead."+
			(typePF ? "" : " [+1 Wis]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
};
FeatsList["observant"] = {
	name: "Observant",
	source: [["P24", 205]],
	type: "general",
	prerequisite: "Level 4+, Intelligence or Wisdom 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Int") >= 13 || What("Wis") >= 13);
	},
	description: "##Quick Search##. I can take the Search action as a Bonus Action. ##Keen Observer##. I gain proficiency in Insight, Investigation, or Perception. If I already have proficiency in it, I gain Expertise in it. [+1 Intelligence or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence or Wisdom score by 1, to a maximum of 20.",
		"***Keen Observer***. Choose one of the following skills: Insight, Investigation, or Perception. If you lack proficiency with the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.",
		"***Quick Search***. You can take the Search action as a Bonus Action.",
	],
	action: [["bonus action", "Search"]],
	choices: [
		"Intelligence, Insight", "Intelligence, Investigation", "Intelligence, Perception",
		"Wisdom, Insight", "Wisdom, Investigation", "Wisdom, Perception",
	],
	choicesNotInMenu: true,
	"intelligence, insight": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Insight skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Insight", "increment"]],
	},
	"intelligence, investigation": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Investigation", "increment"]],
	},
	"intelligence, perception": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Perception skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Perception", "increment"]],
	},
	"wisdom, insight": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Insight skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Insight", "increment"]],
	},
	"wisdom, investigation": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Investigation", "increment"]],
	},
	"wisdom, perception": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Perception skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Perception", "increment"]],
	},
};
FeatsList["piercer"] = {
	name: "Piercer",
	source: [["P24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Puncture##. Once per turn when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll. ##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Puncture***. Once per turn, when you hit a creature with an attack that deals Piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Piercing damage to a creature, you can roll one additional damage die when determining the extra Piercing damage the target takes.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/pierc/i.test(fields.Damage_Type)) {
					var descrAdd = '1/turn reroll 1 dmg die';
					var dmgDice = fields.Damage_Die.match(/(\b\w|\b\d+|\b)d\d+/ig);
					if (dmgDice && !v.isDC) {
						var dieSize = dmgDice.reduce(function (acc, val) {
							var size = Number(val.replace(/.+d/, ''));
							return size > acc ? size : acc;
						}, 0);
						descrAdd += '; Crit: +1' + dieSize + ' dmg';
					};
					fields.Description += (fields.Description ? '; ' : '') + descrAdd;
				};
			},
			'Attacks that deal Piercing damage get the benefits from the Piercer feat added to their description: Once per turn reroll 1 damage die, and to roll an extra damage die on a Critical Hit.',
		],
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Puncture##. Once per turn, when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll."+
			(typePF ? " " : "\n") + "##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Puncture##. Once per turn, when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll."+
			(typePF ? " " : "\n") + "##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["poisoner"] = {
	name: "Poisoner",
	source: [["P24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a Con save (DC 8+Prof+mod) or take 2d8 Poison damage and be Poisoned until my next turn ends. Poison damage I deal ignores Resistance. I can create poisons. See Notes page. [+1 Dex or Int]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Intelligence score by 1, to a maximum of 20.",
		"***Potent Poison***. When you make a damage roll that deals Poison damage, it ignores Resistance to Poison damage.",
		"***Brew Poison***. You gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, you can create a number of poison doses equal to your Proficiency Bonus. As a Bonus Action, you can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until you deal damage with the poisoned item, whichever is shorter. When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 plus the modifier of the ability increased by this feat and your Proficiency Bonus) or take 2d8 Poison damage and have the Poisoned condition until the end of your next turn.",
	],
	toolProfs: [["Poisoner's Kit"]],
	action: [["bonus action", "Apply Poison"]],
	toNotesPage: [{
		name: "Potent Poison",
		note: ["When I make a damage roll that deals Poison damage, it ignores Resistance to Poison damage."],
	}],
	choices: ["Dexterity", "Intelligence"],
	choicesNotInMenu: true,
	"dexterity": {
		calculate: 'var abi = "Dex";\n var dc = 8 + Number(How("Proficiency Bonus")) + Number(What(abi + " Mod"));\n event.value = "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a DC " + dc + " Con save or take 2d8 Poison damage and be Poisoned until my next turn ends. Poison damage I deal ignores Resistance. I can create poisons. See Notes page. [+1 " + abi + "]";',
		scores: [0, 1, 0, 0, 0, 0],
		toNotesPage: [{
			name: "Brew Poison",
			note: [
				"I gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, I can create a number of poison doses equal to my Proficiency Bonus.",
				"As a Bonus Action, I can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until I deal damage with the poisoned item, whichever is shorter.",
				"When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 + my Proficiency Bonus + my Dexterity modifier) or take 2d8 Poison damage and have the Poisoned condition until the end of my next turn.",
			],
			amendTo: "Potent Poison",
		}],
	},
	"intelligence": {
		calculate: 'var abi = "Int";\n var dc = 8 + Number(How("Proficiency Bonus")) + Number(What(abi + " Mod"));\n event.value = "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a DC " + dc + " Con save or take 2d8 Poison damage and be Poisoned until my next turn ends. Poison damage I deal ignores Resistance. I can create poisons. See Notes page. [+1 " + abi + "]";',
		scores: [0, 0, 0, 1, 0, 0],
		toNotesPage: [{
			name: "Brew Poison",
			note: [
				"I gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, I can create a number of poison doses equal to my Proficiency Bonus.",
				"As a Bonus Action, I can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until I deal damage with the poisoned item, whichever is shorter.",
				"When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 + my Proficiency Bonus + my Intelligence modifier) or take 2d8 Poison damage and have the Poisoned condition until the end of my next turn.",
			],
			amendTo: "Potent Poison",
		}],
	},
};
FeatsList["polearm master"] = {
	name: "Polearm Master",
	source: [["P24", 206]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "While wielding a Quarterstaff, Spear, or Heavy Reach weapon: ##Pole Strike##. As a Bonus Action directly after an Attack action with it, I can make a 1d4 Bludgeoning attack with its other end. ##Reactive Strike##. As a Reaction when a creature enters my reach with it, I can make one melee attack against them. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Strength score by 1, to a maximum of 20.",
		"***Pole Strike***. Immediately after you take the Attack action and attack with a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a melee attack with the opposite end of the weapon. The weapon deals Bludgeoning damage, and the weapon's damage die for this attack is a d4.",
		"***Reactive Strike***. While you're holding a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can take a Reaction to make one melee attack against a creature that enters the reach you have with that weapon.",
	],
	weaponOptions: [{
		name: "Pole Strike",
		regExpSearch : /pole strike|polearm master|^(?=.*(polearm|(quarterstaff|\bstaff\b|\bbo\b)|(spear|qiang|\byaris?\b)|(glaive|guandao|bisento|naginata)|(halberd|\bji\b|kamayari)|(lance|umayari)|(pike|\bmaos?\b|nagaeyari)))(?=.*butt)(?=.*end).*$/i,
		source: [["P24", 206]],
		ability: 1,
		type: "polearm master",
		damage: [1, 4, "bludgeoning"],
		range: "Melee",
		description: "As Bonus Action after Attack action with Quarterstaff, Spear, or Heavy Reach weapon",
		abilitytodamage: true,
		selectNow: true,
		isAlwaysProf: true,
	}],
	action: [
		["bonus action", "Pole Strike (after Attack action)"],
		["reaction", "Reactive Strike (if enters my reach)"],
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "While wielding a Quarterstaff, Spear, or Heavy Reach weapon: ##Pole Strike##. As a Bonus Action directly after an Attack action with it, I can make a 1d4 Bludgeoning attack with its other end. ##Reactive Strike##. As a Reaction when a creature enters my reach with it, I can make one melee attack against them." + (typePF ? "" : " [+1 Strength]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While wielding a Quarterstaff, Spear, or Heavy Reach weapon: ##Pole Strike##. As a Bonus Action directly after an Attack action with it, I can make a 1d4 Bludgeoning attack with its other end. ##Reactive Strike##. As a Reaction when a creature enters my reach with it, I can make one melee attack against them." + (typePF ? "" : " [+1 Dexterity]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["resilient"] = {
	name: "Resilient",
	source: [["P24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select an ability score using the square button on this feat line. I gain proficiency with the saving throw of that ability score and a +1 added to it.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Saving Throw Proficiency***. You gain saving throw proficiency with the chosen ability.",
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain proficiency with Strength saving throws. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
		saves: ["Str"],
	},
	"dexterity": {
		description: "I gain proficiency with Dexterity saving throws. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
		saves: ["Dex"],
	},
	"constitution": {
		description: "I gain proficiency with Constitution saving throws. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
		saves: ["Con"],
	},
	"intelligence": {
		description: "I gain proficiency with Intelligence saving throws. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
		saves: ["Int"],
	},
	"wisdom": {
		description: "I gain proficiency with Wisdom saving throws. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
		saves: ["Wis"],
	},
	"charisma": {
		description: "I gain proficiency with Charisma saving throws. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
		saves: ["Cha"],
	},
};
var PHB24_RitualCasterDescription = [
	"##Ritual Spells##. I know a number of 1st-level Ritual spells equal to my Proficiency Bonus." + (typePF ? " " : "\n") + "I always have these spells prepared and can cast them as a Ritual or using spell slots.",
	"##Quick Ritual##. Once per Long Rest, I can cast a prepared Ritual spell using its regular casting time without " + (typePF ? "using" : "expending") + " a spell slot.",
]; if (typePF) PHB24_RitualCasterDescription.reverse();
FeatsList["ritual caster"] = {
	name: "Ritual Caster",
	source: [["P24", 206]],
	type: "general",
	prerequisite: "Level 4+; Intelligence, Wisdom, or Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Int") >= 13 || What("Wis") >= 13 || What("Cha") >= 13);
	},
	description: PHB24_RitualCasterDescription.join("\n") + " [+1 Intelligence, Wisdom, or Charisma]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Ritual Spells***. Choose a number of level 1 spells equal to your Proficiency Bonus that have the Ritual tag. You always have those spells prepared, and you can cast them with any spell slots you have. The spells' spellcasting ability is the ability increased by this feat. Whenever your Proficiency Bonus increases thereafter, you can add an additional level 1 spell with the Ritual tag to the spells always prepared with this feature.",
		"***Quick Ritual***. With this benefit, you can cast a Ritual spell that you have prepared using its regular casting time rather than the extended time for a Ritual. Doing so doesn't require a spell slot. Once you cast the spell in this way, you can't use this benefit again until you finish a Long Rest.",
	],
	spellcastingBonus: [{
		name: "1st-level Ritual spell",
		ritual: true,
		level: [1, 1],
		times: ProficiencyBonusList,
		firstCol: "markedbox",
	}],
	extraLimitedFeatures: [{
		name: "Quick Ritual",
		usages: 1,
		recovery: "long rest",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: PHB24_RitualCasterDescription.join("\n") + (typePF ? " [+1 Int]" : " [+1 Intelligence]"),
		scores: [0, 0, 0, 1, 0, 0],
		spellcastingAbility: 4,
	},
	"wisdom": {
		description: PHB24_RitualCasterDescription.join("\n") + (typePF ? " [+1 Wis]" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
		spellcastingAbility: 5,
	},
	"charisma": {
		description: PHB24_RitualCasterDescription.join("\n") + (typePF ? " [+1 Cha]" : " [+1 Charisma]"),
		scores: [0, 0, 0, 0, 0, 1],
		spellcastingAbility: 6,
	},
};
FeatsList["sentinel"] = {
	name: "Sentinel",
	source: [["P24", 207]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: [
		"##Guardian##. When a creature within 5 ft of me takes the Disengage action or hits a target other than me with an attack, I can make an Opportunity Attack against them.",
		"##Halt##. When I make an Opportunity Attack against a creature, its Speed becomes 0 for the rest of the current turn. [+1 Strength or Dexterity]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Guardian***. Immediately after a creature within 5 feet of you takes the Disengage action or hits a target other than you with an attack, you can make an Opportunity Attack against that creature.",
		"***Halt***. When you hit a creature with an Opportunity Attack, the creature's Speed becomes 0 for the rest of the current turn.",
	],
	action: [["reaction", "Guardian (ally hit/enemy Disengages)"]],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"##Guardian##. When a creature within 5 ft of me takes the Disengage action or hits a target other than me with an attack, I can make an Opportunity Attack against them.",
			"##Halt##. When I make an Opportunity Attack against a creature, its Speed becomes 0 for the rest of the current turn. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"##Guardian##. When a creature within 5 ft of me takes the Disengage action or hits a target other than me with an attack, I can make an Opportunity Attack against them.",
			"##Halt##. When I make an Opportunity Attack against a creature, its Speed becomes 0 for the rest of the current turn. [+1  Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["shadow-touched"] = {
	name: "Shadow-Touched",
	source: [["P24", 207]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spells prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and by expending a spell slot as normal. The spells' spellcasting ability is the ability increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"Your exposure to the Shadowfell's magic grants you the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Shadow Magic***. Choose one level 1 spell from the Illusion or Necromancy school of magic. You always have that spell and the Invisibility spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can't cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	],
	spellFirstColTitle: "PR",
	spellcastingBonus: [{
		name: "Invisibility",
		spells: ["invisibility"],
		selection: ["invisibility"],
		firstCol: "oncelr+markedbox",
	}, {
		name: "1st-level Illus/Necro spell",
		school: ["Illus", "Necro"],
		level: [1, 1],
		firstCol: "oncelr+markedbox",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["sharpshooter"] = {
	name: "Sharpshooter",
	source: [["P24", 207]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: [
		"My attack rolls with Ranged weapons:",
		"\n##Bypass Cover##. Ignore Half Cover and Three-Quarters Cover.",
		"\n##Firing in Melee##. Suffer no Disadvantage when I'm within 5 ft of an enemy.",
		"\n##Long Shots##. Suffer no Disadvantage when used at long range.",
		" [+1 Dexterity]",
	].map(function (n, idx, arr) {
		// Swap 'Firing in Melee' with 'Long Shots' lines on the Printer Friendly sheet
		return typePF && idx === 2 ? arr[3] : typePF && idx === 3 ? arr[2] : n;
	}).join(""),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Bypass Cover***. Your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.",
		"***Firing in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with Ranged weapons.",
		"***Long Shots***. Attacking at long range doesn't impose Disadvantage on your attack rolls with Ranged weapons.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isRangedWeapon || v.isThrownWeapon) {
					fields.Description += (fields.Description ? "; " : "") + "No Disadv. at long range; Ignores \u00BD \x26 \u00BE cover";
				};
			},
			"My attack rolls with Ranged weapons suffer no Disadvantage from being used at long range nor from me being within 5 ft of an enemy. They also ignore Half Cover and Three-Quarters Cover.",
		],
	},
};
FeatsList["shield master"] = {
	name: "Shield Master",
	source: [["P24", 207]],
	type: "general",
	prerequisite: "Level 4+, Shield Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.shieldProf;
	},
	description: "##Shield Bash##. Once per turn after I hit a creature in 5 ft during the Attack action, I can have it make a Str save (DC 8 + Str mod + Prof B.) or be pushed 5 ft away or knocked Prone. ##Interpose Shield##. As a Reaction when I succeed on a Dex save to halve damage, I can interpose my shield to avoid all the damage. [+1 Strength]",
	calculate: 'var dc = 8 + Number(How("Proficiency Bonus")) + Number(What("Str Mod"));\n var txt = ["##Shield Bash##. Once per turn after I hit a creature in 5 ft during the Attack action, I can have it make a DC " + dc + " (8+Str+Prof) Str save or be pushed 5 ft away or knocked Prone.", "##Interpose Shield##. As a Reaction when I succeed on a Dex save to halve damage, I can interpose my shield to avoid all the damage."];\n if (typePF) { txt.reverse(); };\n event.value = txt.join("\\n") + " [+1 Strength]";',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength score by 1, to a maximum of 20.",
		"***Shield Bash***. If you attack a creature within 5 feet of you as part of the Attack action and hit with a Melee weapon, you can immediately bash the target with your Shield if it's equipped, forcing the target to make a Strength saving throw (8 plus your Strength modifier and Proficiency Bonus). On a failed save, you either push the target 5 feet from you or cause it to have the Prone condition (your choice). You can use this benefit only once on each of your turns.",
		"***Interpose Shield***. If you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can take a Reaction to take no damage if you succeed on the saving throw and are holding a Shield.",
	],
	scores: [1, 0, 0, 0, 0, 0],
	weaponOptions: [{
		name: "Shield Bash",
		regExpSearch: /^(?=.*shield)(?=.*bash).*$/i,
		source: [["P24", 207]],
		ability: 1,
		type: "shield master",
		damage: ["Str save", "", "Shove/Prone"],
		range: "Melee",
		description: "1/turn after Melee weapon hit during Attack action",
		abilitytodamage: false,
		dc: true,
		selectNow: true,
		isNotWeapon: true,
		isAlwaysProf: true,
	}],
	action: [["reaction", "Interpose Shield"]],
};
FeatsList["skill expert"] = {
	name: "Skill Expert",
	source: [["P24", 207]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: [
		"I gain proficiency in one skill of my choice.",
		"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
		"Neither are automated. [+1 to one ability score of my choice]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Skill Proficiency***. You gain proficiency in one skill of your choice.",
		"***Expertise***. Choose one skill in which you have proficiency but lack Expertise. You gain Expertise with that skill.",
	],
	skillstxt: "Proficiency in one skill, and Expertise with one skill I'm proficient with.",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"constitution": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Constitution]",
		].join("\n"),
		scores: [0, 0, 1, 0, 0, 0],
	},
	"intelligence": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Charisma]",
		].join("\n"),
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["skulker"] = {
	name: "Skulker",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: [
		"##Fog of War##. I have Advantage on Dexterity (Stealth) checks when using the Hide action during combat.",
		"##Sniper##. If I miss an attack while hidden, making the attack doesn't reveal my location.",
		"##Blindsight##. I have Blindsight with a range of 10 ft. [+1 Dexterity]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Blindsight***. You have Blindsight with a range of 10 feet.",
		"***Fog of War***. You exploit the distractions of battle, gaining Advantage on any Dexterity (Stealth) check you make as part of the Hide action during combat.",
		"***Sniper***. If you make an attack roll while hidden and the roll misses, making the attack roll doesn't reveal your location.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	vision: [["Blindsight", 10]],
};
FeatsList["slasher"] = {
	name: "Slasher",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Hamstring##. Once per turn when I hit a creature with an attack that deals Slashing damage, I can reduce its Speed by 10 ft until the start of my next turn. ##Enhanced Critical##. When I score a Critical Hit that deals Slashing damage to a creature, it gets Disadvantage on attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Hamstring***. Once per turn when you hit a creature with an attack that deals Slashing damage, you can reduce the Speed of that creature by 10 feet until the start of your next turn.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Slashing damage to a creature, it has Disadvantage on attack rolls until the start of your next turn.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/slash/i.test(fields.Damage_Type)) {
					fields.Description += (fields.Description ? '; ' : '') + '1/turn target -10 ft Spd till my next SoT, Crit: also Disadv. on atks';
				};
			},
			'Attacks that deal Slashing damage get the benefits from the Slasher feat added to their description: Once per turn -10 ft Speed, and on a Critical Hit target gets Disadvantage on attacks. Each effect lasts until the start of my next turn.',
		],
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Hamstring##. Once per turn when I hit a creature with an attack that deals Slashing damage, I can reduce its Speed by 10 ft" + (typePF ? "." : " until the start of my next turn.")+
			"\n##Enhanced Critical##. When I score a Critical Hit that deals Slashing damage to a creature, it gets Disadvantage on attack rolls" + (typePF ? "." : " until the start of my next turn.")+
			(typePF ? "\nEach effect lasts until the start of my next turn." : "")+
			" [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Hamstring##. Once per turn when I hit a creature with an attack that deals Slashing damage, I can reduce its Speed by 10 ft" + (typePF ? "." : " until the start of my next turn.")+
			"\n##Enhanced Critical##. When I score a Critical Hit that deals Slashing damage to a creature, it gets Disadvantage on attack rolls" + (typePF ? "." : " until the start of my next turn.")+
			(typePF ? "\nEach effect lasts until the start of my next turn." : "")+
			" [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["speedy"] = {
	name: "Speedy",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+, Dexterity or Constitution 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Dex") >= 13 || What("Con") >= 13);
	},
	description: [
		"##Agile Movement##. Opportunity Attacks have Disadvantage against me.",
		"##Dash over Difficult Terrain##. When I take the Dash action on my turn, Difficult Terrain doesn't cost me extra movement that turn.",
		"##Speed Increase##. I have +10 ft Speed. [+1 Dexterity or Constitution]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Constitution score by 1, to a maximum of 20.",
		"***Speed Increase***. Your Speed increases by 10 feet.",
		"***Dash over Difficult Terrain***. When you take the Dash action on your turn, Difficult Terrain doesn't cost you extra movement for the rest of that turn.",
		"***Agile Movement***. Opportunity Attacks have Disadvantage against you.",
	],
	speed: { allModes: { bonus: "+10" } },
	choices: ["Dexterity", "Constitution"],
	choicesNotInMenu: true,
	"dexterity": {
		description: [
			"##Agile Movement##. Opportunity Attacks have Disadvantage against me.",
			"##Dash over Difficult Terrain##. When I take the Dash action on my turn, Difficult Terrain doesn't cost me extra movement that turn.",
			"##Speed Increase##. I have +10 ft Speed. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"constitution": {
		description: [
			"##Agile Movement##. Opportunity Attacks have Disadvantage against me.",
			"##Dash over Difficult Terrain##. When I take the Dash action on my turn, Difficult Terrain doesn't cost me extra movement that turn.",
			"##Speed Increase##. I have +10 ft Speed. [+1 Constitution]",
		].join("\n"),
		scores: [0, 0, 1, 0, 0, 0],
	},
};
var PHB24_SpellSniperDescription = [
	"My attack rolls with spells:",
	"##Bypass Cover##. Ignore Half Cover and Three-Quarters Cover.",
	"##Casting in Melee##. Suffer no Disadvantage when I'm within 5 ft of an enemy.",
	"##Increased Range##. Gain +60 ft range if the spell's range is " + (typePF ? "\u226510 ft." : "10 ft or more."),
].map(function (n, idx, arr) {
	// Swap 'Increased Range' with 'Casting in Melee' lines on the Printer Friendly sheet
	return typePF && idx === 2 ? arr[3] : typePF && idx === 3 ? arr[2] : n;
}).join("\n");
FeatsList["spell sniper"] = {
	name: "Spell Sniper",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcasterClass;
	},
	description: PHB24_SpellSniperDescription + " [+1 Intelligence, Wisdom, or Charisma]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Bypass Cover***. Your attack rolls for spells ignore Half Cover and Three-Quarters Cover.",
		"***Casting in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with spells.",
		"***Increased Range***. When you cast a spell that has a range of at least 10 feet and requires you to make an attack roll, you can increase the spell's range by 60 feet.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.isDC && v.isSpell) {
					var name = "spell sniper", addition = "+60";
					var useRange = v.rangeObject ? v.rangeObject : fields.Range;
					var stopFunction = function (sRange, nRangeFT) { return nRangeFT < 10; };
					v.rangeObject = amendRangeObject(useRange, name, addition, stopFunction);
					// Test if something changed
					if (v.rangeObject && v.rangeObject.result !== fields.Range) {
						fields.Range = v.rangeObject.result;
					};
				};
			},
			"My spells and cantrips that require an attack roll and have a range of 10 ft or more gain +60 ft range.",
			700,
		],
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ( !spellObj.psionic && /spell at(tac)?k/i.test(spellObj.description + spellObj.descriptionFull) && /^(?!.*(S:|rad|touch|self|cone|cube)).*\d+([.,]\d+)?.?(f.{0,2}t|m).*$/i.test(spellObj.range) ) {
					var name = "spell sniper", addition = "+60";
					var useRange = spellObj.rangeObject ? spellObj.rangeObject : spellObj.range;
					var stopFunction = function (sRange, nRangeFT) { return nRangeFT < 10; };
					spellObj.rangeObject = amendRangeObject(useRange, name, addition, stopFunction);
					// Test if something changed
					if (spellObj.rangeObject && spellObj.rangeObject.result !== spellObj.range) {
						spellObj.range = spellObj.rangeObject.result;
						return true;
					};
				};
			},
			"My spells and cantrips that require an attack roll and have a range of 10 ft or more gain +60 ft range.",
			700,
		],
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: PHB24_SpellSniperDescription + " [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: PHB24_SpellSniperDescription + " [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: PHB24_SpellSniperDescription + " [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["telekinetic"] = {
	name: "Telekinetic",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs. this feat's spell save DC) or move it 5 ft from or towards me. My spellcasting ability is the one increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Minor Telekinesis***. You learn the Mage Hand spell. You can cast it without Verbal or Somatic components, you can make the spectral hand Invisible, and its range and the distance it can be away from you both increase by 30 feet when you cast it. The spell's spellcasting ability is the ability increased by this feat.",
		"***Telekinetic Shove***. As a Bonus Action, you can telekinetically shove one creature you can see within 30 feet of yourself. When you do so, the target must succeed on a Strength saving throw (8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or be moved 5 feet toward or away from you.",
	],
	action: [["bonus action", "Telekinetic Shove"]],
	spellcastingBonus: [{
		name: "Mage Hand",
		spells: ["mage hand"],
		selection: ["mage hand"],
		firstCol: "atwill",
	}],
	spellChanges: {
		"mage hand": {
			components: "",
			range: "60 ft",
			description: "(in)visible hand does simple task, carry \u226410lb; Act: control again \x26 move 30ft; ends if recast/out range",
			changes: "I can cast Mage Hand without Verbal or Somatic components, can make the spectral hand Invisible, and can the range and distance it can be away from me increases by +30 ft.",
		},
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Intelligence is my spellcasting ability for it. "+
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs. this feat's spell save DC) or move it 5 ft from or towards me. [+1 Int]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Wisdom is my spellcasting ability for it. "+
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs. this feat's spell save DC) or move it 5 ft from or towards me. [+1 Wis]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Charisma is my spellcasting ability for it. "+
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs. this feat's spell save DC) or move it 5 ft from or towards me. [+1 Cha]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["telepathic"] = {
	name: "Telepathic",
	source: [["P24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Telepathic Utterance##. I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. My spellcasting ability is the one increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Telepathic Utterance***. You can speak telepathically to any creature you can see within 60 feet of yourself. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
		"***Detect Thoughts***. You always have the Detect Thoughts spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat.",
	],
	spellcastingBonus: [{
		name: "Detect Thoughts",
		spells: ["detect thoughts"],
		selection: ["detect thoughts"],
		firstCol: "oncelr+markedbox",
	}],
	spellChanges: {
		"detect thoughts": {
			components: "(V,S,M)",
			changes: "My Telepathic feat allows me to cast Detect Thoughts once per Long Rest without requiring a spell slot or components, or by using a spell slot to cast it with components as normal.",
		},
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Intelligence is my spellcasting ability for it. [+1 Int]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Wisdom is my spellcasting ability for it. [+1 Wis]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Charisma is my spellcasting ability for it. [+1 Cha]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["war caster"] = {
	name: "War Caster",
	source: [["P24", 209]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcasterClass;
	},
	description: "I have Advantage on Con saves to maintain ##Concentration##. I can do ##Somatic components## even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Concentration***. You have Advantage on Constitution saving throws that you make to maintain Concentration.",
		"***Reactive Spell***. When a creature provokes an Opportunity Attack from you by leaving your reach, you can take a Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of one action and must target only that creature.",
		"***Somatic Components***. You can perform the Somatic components of spells even when you have weapons or a Shield in one or both hands.",
	],
	action: [["reaction", "Reactive Spell"]],
	savetxt: { text: "Adv. on Con (Concentration) saves" },
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Intelligence]"),
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Charisma]"),
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["weapon master"] = {
	name: "Weapon Master",
	source: [["P24", 209]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) { return v.characterLevel >= 4; },
	description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Strength or Dexterity]',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Mastery Property***. Your training with weapons allows you to use the mastery property of one kind of Simple or Martial weapon of your choice, provided you have proficiency with it. Whenever you finish a Long Rest, you can change the kind of weapon to another eligible kind.",
	],
	bonusClassExtrachoices: [{
		"class": "fighter",
		"feature": "weapon mastery",
		"bonus": 1,
	}],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Strength]',
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Dexterity]',
		scores: [0, 1, 0, 0, 0, 0],
	},
};
// Fighting Style feats
FeatsList["blind fighting"] = {
	name: "Blind Fighting",
	source: [["P24", 209]],
	type: "fighting style",
	description: "I have Blindsight with a range of 10 ft.",
	descriptionFull: [
		"You have Blindsight with a range of 10 feet.",
	],
	vision : [["Blindsight", 10]],
};
FeatsList["dueling"] = {
	name: "Dueling",
	source: [["P24", 209]],
	type: "fighting style",
	description: "When I'm holding a Melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon.",
	descriptionClassFeature: "\nI add +2 to damage rolls when wielding a Melee weapon in one hand and no other weapons.",
	descriptionFull: [
		"When you're holding a Melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
	],
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				for (var i = 1; i <= FieldNumbers.actions; i++) {
					if (/off.hand.attack/i.test(What('Bonus Action ' + i))) return;
				};
				if (v.isMeleeWeapon && !v.isNaturalWeapon && !/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i.test(fields.Description)) output.extraDmg += 2;
			},
			"When I'm holding a Melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists.",
		],
	},
};
FeatsList["interception"] = {
	name: "Interception",
	source: [["P24", 209]],
	type: "fighting style",
	description: "As a reaction when a creature I can see hits another creature within 5 ft of me with an attack, I can reduce the damage dealt by 1d10 plus my Proficiency Bonus. I must be holding a Shield or a Simple or Martial weapon to do this.",
	calculate: 'event.value = "As a reaction when a creature I can see hits another creature within 5 ft of me with an attack, I can reduce the damage dealt by 1d10 plus my Proficiency Bonus (1d10+" + Number(How("Proficiency Bonus")) + "). I must be holding a Shield or a Simple or Martial weapon to do this.";',
	descriptionClassFeature: "\nAs a reaction when a creature I can see hits another within 5 ft of me, I can use a Shield or Simple/Martial weapon I'm holding to reduce the damage done by 1d10 + my Prof Bonus.",
	descriptionFull: [
		"When a creature you can see hits another creature within 5 feet of you with an attack roll, you can take a Reaction to reduce the damage dealt to the target by 1d10 plus your Proficiency Bonus. You must be holding a Shield or a Simple or Martial weapon to use this Reaction.",
	],
	action : [["reaction", "Interception Fighting Style"]],
};
FeatsList["protection"] = {
	name: "Protection",
	source: [["P24", 209]],
	type: "fighting style",
	description: "As a reaction when a creature I can see attacks a target other than me within 5 ft of me, I can interpose my Shield if I'm holding one. This gives Disadv" + (typePF ? "antage" : ".") + " to the triggering attack and all other attacks against the target until the start of my next turn while I stay within 5 ft" + (typePF ? " of the target." : "."),
	descriptionClassFeature: "\nAs a reaction when a creature I can see attacks another within 5 ft of me, I can use a shield I'm holding to impose Disadv" + (typePF ? "antage" : ".") + " on this and other attacks vs. them until my next turn starts.",
	descriptionFull: [
		"When a creature you can see attacks a target other than you that is within 5 feet of you, you can take a Reaction to interpose your Shield if you're holding one. You impose Disadvantage on the triggering attack roll and all other attack rolls against the target until the start of your next turn if you remain within 5 feet of the target.",
	],
	action : [["reaction", "Protection Fighting Style"]],
};
FeatsList["thrown weapon fighting"] = {
	name: "Thrown Weapon Fighting",
	source: [["P24", 210]],
	type: "fighting style",
	description: "I add +2 to the damage roll when I hit with a ranged attack roll using a weapon that has the Thrown property.",
	descriptionClassFeature: "\nI add +2 damage to ranged attacks made with weapons with the Thrown property.",
	descriptionFull: [
		"When you hit with a ranged attack roll using a weapon that has the Thrown property, you gain a +2 bonus to the damage roll.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isThrownWeapon && v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
				};
			},
			"I deal +2 damage when I hit a ranged attack made with a thrown weapon.",
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isThrownWeapon && !v.isMeleeWeapon) {
					output.extraDmg += 2;
				};
			},
			"",
		],
	},
};
FeatsList["unarmed fighting"] = {
	name: "Unarmed Fighting",
	source: [["P24", 210]],
	type: "fighting style",
	description: "My Unarmed Strikes deal 1d6 damage instead of 1. If I'm not holding any weapons or a Shield when I make the attack roll, the d6 becomes a d8. At the start of each of my turns, I can deal 1d4 Bludgeoning damage to one creature Grappled by me.",
	descriptionClassFeature: "\nMy unarmed strikes deal 1d6 damage, or 1d8 when I'm not holding any weapons or Shield.\nAt the start of my turn, I can deal 1d4 Bludgeoning damage to a creature I'm Grappling.",
	descriptionFull: [
		"When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d6 plus your Strength modifier instead of the normal damage of an Unarmed Strike. If you aren't holding any weapons or a Shield when you make the attack roll, the d6 becomes a d8.",
		"At the start of each of your turns, you can deal 1d4 Bludgeoning damage to one creature Grappled by you.",
	],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8)';
				};
			},
			"My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I'm not holding any weapons or a Shield when I make the attack roll.",
			1,
		],
	},
};
// Epic Boons feats
FeatsList["boon of energy resistance"] = {
	name: "Boon of Energy Resistance",
	source: [["P24", 210]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "I gain **Resistance** to two non-physical damage types, which I can change after a Long Rest. **Energy Redirection**. As a reaction when I take these types of damage, I can have a creature I can see within 60 ft make a Dex save DC 8 + Con mod + Prof Bonus, or take 2d12+Con mod damage of the same type.",
	calculate: 'var conMod = Number(What("Con Mod")), profB = Number(How("Proficiency Bonus")); var conModStr = conMod > 0 ? "+" + conMod : conMod === 0 ? "" : conMod; event.value = "I gain **Resistance** to two non-physical damage types, which I can change after a Long Rest. **Energy Redirection**. As a reaction when I take these types of damage, I can have a creature I can see within 60 ft make a Dex save DC " + (8+conMod+profB) + " (8 + Con mod + Prof Bonus) or take 2d12" + conModStr + " (Con mod) damage of the same type.";',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Energy Resistances***. You gain Resistance to two of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder. Whenever you finish a Long Rest, you can change your choices.",
		"***Energy Redirection***. When you take damage of one of the types chosen for the Energy Resistances benefit, you can take a Reaction to direct damage of the same type toward another creature you can see within 60 feet of yourself that isn't behind Total Cover. If you do so, that creature must succeed on a Dexterity saving throw (8 plus your Constitution modifier and Proficiency Bonus) or take damage equal to 2d12 plus your Constitution modifier.",
	],
	action: [["reaction", "Energy Redirection"]],
};
FeatsList["boon of fortitude"] = {
	name: "Boon of Fortitude",
	source: [["P24", 210]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
	description: "My Hit Point maximum increases by 40. When I regain Hit Points, I can add my Constitution modifier to the amount of HP regained. Once I've regained these additional HP, I can't do so again until the start of my next turn.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Fortified Health***. Your Hit Point maximum increases by 40. In addition, whenever you regain Hit Points, you can regain additional Hit Points equal to your Constitution modifier. Once you've regained these additional Hit Points, you can't do so again until the start of your next turn.",
	],
	calcChanges: {
		hp: function (totalHD, HDobj, prefix) { return [40, "Boon of Fortitude"]; },
	},
};
FeatsList["boon of recovery"] = {
	name: "Boon of Recovery",
	source: [["P24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
	description: [
		"##Last Stand##. Once per Long Rest when I would be reduced to 0 HP, I can instead drop to 1 HP and regain half my max HP.",
		"n##Recover Vitality##. I have a pool of ten d10s, which replenish after a Long Rest. As a Bonus Action, I can expend and roll a number of dice from this pool to regain HP.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Last Stand***. When you would be reduced to 0 Hit Points, you can drop to 1 Hit Point instead and regain a number of Hit Points equal to half your Hit Point maximum. Once you use this benefit, you can't use it again until you finish a Long Rest.",
		"***Recover Vitality***. You have a pool of ten d10s. As a Bonus Action, you can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll's total. You regain all the expended dice when you finish a Long Rest.",
	],
	action: [["bonus action", "Recover Vitality"]],
	extraLimitedFeatures: [{
		name: "Last Stand",
		usages: 1,
		recovery: "long rest",
	}, {
		name: "Recover Vitality (d10)",
		usages: 10,
		recovery: "long rest",
	}],
};
FeatsList["boon of skill"] = {
	name: "Boon of Skill",
	source: [["P24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "I gain proficiency in all skills and Expertise in one skill of my choice.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***All-Around Adept***. You gain proficiency in all skills.",
		"***Expertise***. Choose one skill in which you lack Expertise. You gain Expertise in that skill.",
	],
	skills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
	skillstxt: "I gain proficiency in all skills and Expertise in one skill of my choice.",
};
FeatsList["boon of speed"] = {
	name: "Boon of Speed",
	source: [["P24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "**Escape Artist**. As a Bonus Action, I can take the Disengage action, which also ends the Grappled condition on me.\n**Quickness**. My Speed increases by 30 ft.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Escape Artist***. As a Bonus Action, you can take the Disengage action, which also ends the Grappled condition on you.",
		"***Quickness***. Your Speed increases by 30 feet.",
	],
	speed: { allModes: { bonus: "+30" } },
	action: [["bonus action", "Escape Artist (Disengage \x26 Escape Grapple)"]],
};

[ // Add ability score choices to the epic boons
	["boon of energy resistance", true, false],
	["boon of fortitude", true, false],
	["boon of recovery", true, true],
	["boon of skill", false, false],
	["boon of speed", false, false],
].forEach(function (entry) {
	addAbilityScoreChoicesToFeat(FeatsList[entry[0]], false, 30, entry[1], entry[2]);
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
	description: "Int save to avoid; Target has -1d4 on next save before my next turn ends",
	abilitytodamage: false,
	dc: true,
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
	description: "Wis save to avoid; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage: false,
	dc: true,
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
	abilitytodamage: false,
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
	description: "Con save to avoid; All creatures in area; Audible in 100 ft",
	abilitytodamage: false,
	dc: true,
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
	description: "Con save to avoid; Only chosen creatures I can see are affected",
	abilitytodamage: false,
	dc: true,
};

// Spells
SpellsList["arcane gate"] = {
	name: "Arcane Gate",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["P24", 242]],
	reqLoS: true,
	level: 6,
	school: "Conj",
	time: "Act",
	range: "500 ft",
	components: "V,S",
	duration: "Conc, 10 min",
	description: "Two portals up to 500 ft apart filled with opaque mist; teleport any between; Bns change orientation",
	descriptionFull: [
		"You create linked teleportation portals. Choose two Large, unoccupied spaces on the ground that you can see, one space within range and the other one within 10 feet of you. A circular portal opens in each of those spaces and remains for the duration.",
		"The portals are two-dimensional glowing rings filled with mist that blocks sight. They hover inches from the ground and are perpendicular to it.",
		"A portal is open on only one side (you choose which). Anything entering the open side of a portal exits from the open side of the other portal as if the two were adjacent to each other. As a Bonus Action, you can change the facing of the open sides.",
	],
};
SpellsList["arcane vigor"] = {
	name: "Arcane Vigor",
	classes: ["sorcerer", "wizard"],
	source: [["P24", 242]],
	level: 2,
	school: "Abjur",
	time: "Bns",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	description: "Expend and roll up to 2+1/SL unused Hit Dice; Heal roll + spellcasting ability modifier in HP",
	descriptionFull: [
		"You tap into your life force to heal yourself. Roll one or two of your unexpended Hit Point Dice, and regain a number of Hit Points equal to the roll's total plus your spellcasting ability modifier. Those dice are then expended.",
		UsingHigherLvl + "The number of unexpended Hit Dice you can roll increases by one for each spell slot level above 2.",
	],
};
SpellsList["armor of agathys"] = {
	name: "Armor of Agathys",
	classes: ["warlock"],
	source: [["P24", 243]],
	level: 1,
	school: "Abjur",
	time: "Bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A shard of blue glass",
	duration: "1 h",
	description: "5+5/SL temp HP; crea that hit me with melee atk take 5+5/SL Cold dmg; spell ends if 0 temp HP left",
	descriptionShorter: "5+5/SL temp HP; melee attackers vs. me take 5+5/SL Cold dmg; spell ends if 0 temp HP",
	descriptionFull: [
		"Protective magical frost surrounds you. You gain 5 Temporary Hit Points. If a creature hits you with a melee attack roll before the spell ends, the creature takes 5 Cold damage. The spell ends early if you have no Temporary Hit Points.",
		UsingHigherLvl + "The Temporary Hit Points and the Cold damage both increase by 5 for each spell slot level above 1.",
	],
};
SpellsList["arms of hadar"] = {
	name: "Arms of Hadar",
	classes: ["warlock"],
	source: [["P24", 243]],
	level: 1,
	school: "Conj",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	description: "All crea in range 2d6+1d6/SL Necrotic dmg; save halves; on failed save no reactions until next turn",
	descriptionFull: [
		"Invoking Hadar, you cause tendrils to erupt from yourself. Each creature in a 10-foot Emanation originating from you makes a Strength saving throw. On a failed save, a target takes 2d6 Necrotic damage and can't take Reactions until the start of its next turn. On a successful save, a target takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["aura of purity"] = {
	name: "Aura of Purity",
	classes: ["cleric", "paladin"],
	source: [["P24", 244]],
	level: 4,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "Me \x26 allies resist Poison dmg, adv. on saves vs. blind, charm, deaf, fright, paralysis, poison, and stun",
	descriptionFull: [
		"An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Poison damage and Advantage on saving throws to avoid or end effects that include the Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, or Stunned condition.",
	],
};
SpellsList["aura of vitality"] = {
	name: "Aura of Vitality",
	classes: ["cleric", "druid", "paladin"],
	source: [["P24", 244]],
	level: 3,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "On cast and at the start of each of my turns, 1 creature in aura heals 2d6 HP",
	descriptionFull: [
		"An aura radiates from you in a 30-foot Emanation for the duration. When you create the aura and at the start of each of your turns while it persists, you can restore 2d6 Hit Points to one creature in it.",
	],
};
SpellsList["banishing smite"] = {
	name: "Banishing Smite",
	classes: ["paladin"],
	source: [["P24", 245]],
	level: 5,
	school: "Conj",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	description: "Cast on melee wea hit; +5d10 Force dmg; if this brings target HP\u226450, banished until spell ends",
	descriptionFull: [
		"The target hit by the attack roll takes an extra 5d10 Force damage from the attack. If the attack reduces the target to 50 Hit Points or fewer, the target must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
	],
	dynamicDamageBonus: {
		multipleDmgMoments: false,
	},
};
SpellsList["beast sense"] = {
	name: "Beast Sense",
	classes: ["druid", "ranger"],
	source: [["P24", 245]],
	ritual: true,
	level: 2,
	school: "Div",
	time: "Act",
	range: "Touch",
	components: "S",
	duration: "Conc, 1 h",
	description: "Use 1 willing Beast's senses as well as my own for the duration",
	descriptionFull: [
		"You touch a willing Beast. For the duration, you can perceive through the Beast's senses as well as your own. When perceiving through the Beast's senses, you benefit from any special senses it has.",
	],
};
SpellsList["blade ward"] = {
	name: "Blade Ward",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["P24", 247]],
	level: 0,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Creatures subtract 1d4 from attack rolls made against me for the duration",
	descriptionFull: ["Whenever a creature makes an attack roll against you before the spell ends, the attacker subtracts 1d4 from the attack roll."],
};
SpellsList["blinding smite"] = {
	name: "Blinding Smite",
	classes: ["paladin"],
	source: [["P24", 247]],
	level: 3,
	school: "Evoc",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Con",
	description: "Cast on melee wea hit; +3d8+1d8/SL Radiant dmg and Blinded; save at end of its turns to stop",
	descriptionFull: [
		"The target hit by the strike takes an extra 3d8 Radiant damage from the attack, and the target has the Blinded condition until the spell ends. At the end of each of its turns, the Blinded target makes a Constitution saving throw, ending the spell on itself on a success.",
		UsingHigherLvl + "The extra damage increases by 1d8 for each spell slot level above 3.",
	],
	dynamicDamageBonus: { multipleDmgMoments: false },
};
SpellsList["circle of power"] = {
	name: "Circle of Power",
	classes: ["cleric", "paladin", "wizard"],
	source: [["P24", 250]],
	level: 5,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "While in aura, me \x26 allies adv. on saves vs magical effects; if save would half dmg, we take no dmg",
	descriptionFull: [
		"An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Advantage on saving throws against spells and other magical effects. When an affected creature makes a saving throw against a spell or magical effect that allows a save to take only half damage, it takes no damage if it succeeds on the save.",
	],
};
SpellsList["cloud of daggers"] = {
	name: "Cloud of Daggers",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["P24", 251]],
	level: 2,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A sliver of glass",
	duration: "Conc, 1 min",
	description: "5-ft cube all in it on cast/enter/end 4d4+2d4/SL Slashing dmg; Act to teleport cube 30 ft",
	descriptionFull: [
		"You conjure spinning daggers in a 5-foot Cube centered on a point within range. Each creature in that area takes 4d4 Slashing damage. A creature also takes this damage if it enters the Cube or ends its turn there or if the Cube moves into its space. A creature takes this damage only once per turn.",
		"On your later turns, you can take a Magic action to teleport the Cube up to 30 feet.",
		UsingHigherLvl + "The damage increases by 2d4 for each spell slot level above 2.",
	],
};
SpellsList["compelled duel"] = {
	name: "Compelled Duel",
	classes: ["paladin"],
	source: [["P24", 252]],
	reqLoS: true,
	level: 1,
	school: "Ench",
	time: "Bns",
	range: "30 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 crea save or dis. atk vs. not-me, can't move >30ft away; ends if ally dmg, I atk other or move >30ft",
	descriptionFull: [
		"You try to compel a creature into a duel. One creature that you can see within range makes a Wisdom saving throw. On a failed save, the target has Disadvantage on attack rolls against creatures other than you, and it can't willingly move to a space that is more than 30 feet away from you.",
		"The spell ends if you make an attack roll against a creature other than the target, if you cast a spell on an enemy other than the target, if an ally of yours damages the target, or if you end your turn more than 30 feet away from the target.",
	],
};
SpellsList["conjure barrage"] = {
	name: "Conjure Barrage",
	classes: ["ranger"],
	source: [["P24", 254]],
	reqLoS: true,
	level: 3,
	school: "Conj",
	time: "Act",
	range: "S:60-ft cone",
	components: "V,S,M\u0192",
	compMaterial: "A Melee or Ranged weapon worth at least 1 CP",
	duration: "Instantaneous",
	save: "Dex",
	description: "Conjure more of held weapon (or its ammo); any creatures in area 5d8+1d8/SL Force dmg; save half",
	descriptionFull: [
		"You brandish the weapon used to cast the spell and conjure similar spectral weapons (or ammunition appropriate to the weapon) that launch forward and then disappear. Each creature of your choice that you can see in a 60-foot Cone makes a Dexterity saving throw, taking 5d8 Force damage on a failed save or half as much damage on a successful one.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 3.",
	],
};
SpellsList["conjure volley"] = {
	name: "Conjure Volley",
	classes: ["ranger"],
	source: [["P24", 255]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "150 ft",
	components: "V,S,M\u0192",
	compMaterial: "A Melee or Ranged weapon worth at least 1 CP",
	duration: "Instantaneous",
	save: "Dex",
	description: "Volley falls in 40-ft rad 20-ft high cylinder; any seen creatures in it take 8d8 Force dmg; save halves",
	descriptionFull: [
		"You brandish the weapon used to cast the spell and choose a point within range. Hundreds of similar spectral weapons (or ammunition appropriate to the weapon) fall in a volley and then disappear. Each creature of your choice that you can see in a 40-foot-radius, 20-foot-high Cylinder centered on that point makes a Dexterity saving throw. A creature takes 8d8 Force damage on a failed save or half as much damage on a successful one.",
	],
};
SpellsList["cordon of arrows"] = {
	name: "Cordon of Arrows",
	classes: ["ranger"],
	source: [["P24", 258]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "Four or more arrows or bolts",
	duration: "8 h",
	save: "Dex",
	description: "4+2/SL ammo in space; undesignated crea enter/end in 30 ft: 1 ammo atk, save or 2d4 Piercing dmg",
	descriptionShorter: "4+2/SL ammo; undesignated crea enter/end in 30 ft: 1 ammo atk, save or 2d4 Piercing dmg",
	descriptionFull: [
		"You touch up to four nonmagical Arrows or Bolts and plant them in the ground in your space. Until the spell ends, the ammunition can't be physically uprooted, and whenever a creature other than you enters a space within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 2d4 Piercing damage. The piece of ammunition is then destroyed. The spell ends when none of the ammunition remains planted in the ground.",
		"When you cast this spell, you can designate any creatures you choose, and the spell ignores them.",
		UsingHigherLvl + "The amount of ammunition that can be affected increases by two for each spell slot level above 2.",
	],
};
SpellsList["crown of madness"] = {
	name: "Crown of Madness",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["P24", 259]],
	reqLoS: true,
	level: 2,
	school: "Ench",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 humanoid save or Charmed \x26 melee atk chosen crea before move; Act to keep; repeat save turn's end",
	descriptionFull: [
		"One creature that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The creature succeeds automatically if it isn't Humanoid.",
		"A spectral crown appears on the Charmed target's head, and it must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if no creature is within its reach. The target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
		"On your later turns, you must take the Magic action to maintain control of the target, or the spell ends.",
	],
};
SpellsList["crusader's mantle"] = {
	name: "Crusader's Mantle",
	classes: ["paladin"],
	source: [["P24", 259]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "Allies within the aura and I deal +1d4 Radiant dmg with weapons and unarmed strikes",
	descriptionFull: [
		"You radiate a magical aura in a 30-foot Emanation. While in the aura, you and your allies each deal an extra 1d4 Radiant damage when hitting with a weapon or an Unarmed Strike.",
	],
};
SpellsList["destructive wave"] = {
	name: "Destructive Wave",
	classes: ["paladin"],
	source: [["P24", 261]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "Any crea 5d6 Thunder dmg \x26 5d6 Radiant or Necrotic dmg \x26 knocked prone; save halves, not prone",
	descriptionShorter: "Any crea 5d6 Thunder dmg \x26 5d6 Radiant or Necrotic dmg \x26 prone; save half, not prone",
	descriptionFull: [
		"Destructive energy ripples outward from you in a 30-foot Emanation. Each creature you choose in the Emanation makes a Constitution saving throw. On a failed save, a target takes 5d6 Thunder damage and 5d6 Radiant or Necrotic damage (your choice) and has the Prone condition. On a successful save, a target takes half as much damage only.",
	],
	dynamicDamageBonus: {
		allDmgTypesSingleMoment: true,
		multipleDmgTypes: {
			dmgTypes: ["radiant", "necrotic"],
			inDescriptionAs: "Radiant or Necrotic",
		},
	},
};
SpellsList["elemental weapon"] = {
	name: "Elemental Weapon",
	classes: ["artificer", "druid", "paladin", "ranger"],
	source: [["P24", 267]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "Nonmagical to +1 wea \x26 +1d4 Acid/Cold/Fire/Lightn./Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionShorter: "+1 wea \x26 +1d4 Acid/Cold/Fire/Lightning/Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionFull: [
		"A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.",
		UsingHigherLvl + "If you use a level 5-6 spell slot, the bonus to attack rolls increases to +2, and the extra damage increases to 2d4. If you use a level 7+ spell slot, the bonus increases to +3, and the extra damage increases to 3d4.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["acid", "cold", "fire", "lightning", "thunder"],
			inDescriptionAs: "Acid/Cold/Fire/Lightning/Thunder|Acid/Cold/Fire/Lightn\./Thunder",
		},
	},
};
SpellsList["feign death"] = {
	name: "Feign Death",
	classes: ["bard", "cleric", "druid", "wizard"],
	source: [["P24", 271]],
	ritual: true,
	level: 3,
	school: "Necro",
	time: "Act",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A pinch of graveyard dirt",
	duration: "1 h",
	description: "Willing crea looks dead: Blinded, Incapacitated, speed 0, resist. all dmg but Psychic, Poisoned immune",
	descriptionFull: [
		"You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
		"For the duration, the target appears dead to outward inspection and to spells used to determine the target's status. The target has the Blinded and Incapacitated conditions, and its Speed is 0.",
		"The target also has Resistance to all damage except Psychic damage, and it has Immunity to the Poisoned condition.",
	],
};
SpellsList["fount of moonlight"] = {
	name: "Fount of Moonlight",
	classes: ["bard", "druid"],
	source: [["P24", 277]],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Radiant dmg resistance; melee atk +2d6 Radiant dmg; 20-ft rad bright/20-ft dim light; Reaction below",
	descriptionShorter: "Radiant resistance; melee atk +2d6 Radiant dmg; 20-ft bright/20-ft dim light; React below",
	descriptionFull: [
		"A cool light wreathes your body for the duration, emitting Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
		"Until the spell ends, you have Resistance to Radiant damage, and your melee attacks deal an extra 2d6 Radiant damage on a hit.",
		"In addition, immediately after you take damage from a creature you can see within 60 feet of yourself, you can take a Reaction to force the creature to make a Constitution saving throw. On a failed save, the creature has the Blinded condition until the end of your next turn.",
	],
	dependencies: ["fount of moonlight-1-reaction"],
	withoutDependencies: {
		description: "Radiant resist; melee atk +2d6 Radiant dmg; 60ft React vis. crea dmg me: save or Blind to my next EoT",
		descriptionShorter: "Radiant resist; melee atk+2d6 Radiant dmg; 60ft React vis. crea dmg me: save or Blind to EoT",
	},
};
SpellsList["fount of moonlight-1-reaction"] = {
	name: "Fount of Moonlight: Reaction",
	nameShort: "Fount of Moon: reaction", // capitalized Reacton doesn't fit
	classes: ["bard", "druid"],
	source: [["P24", 277]],
	reqLoS: true,
	level: 4,
	school: "Evoc",
	time: "React",
	range: "60 ft",
	components: "option",
	duration: "My next EoT",
	save: "Con",
	description: "Reaction if crea I can see within 60 ft damages me: save or Blinded until the end of my next turn",
	descriptionFull: [
		"Immediately after you take damage from a creature you can see within 60 feet of yourself, you can take a Reaction to force the creature to make a Constitution saving throw. On a failed save, the creature has the Blinded condition until the end of your next turn.",
		"This is an option of the Fount of Moonlight spell, see the line above for its full description.",
	],
	dynamicDamageBonus: {
		doNotProcess: true, // sheet makes mistake because "damage" comes after a numerical
	},
};
SpellsList["friends"] = {
	name: "Friends",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["P24", 277]],
	reqLoS: true,
	level: 0,
	school: "Ench",
	time: "Act",
	range: "10 ft",
	components: "S,M",
	compMaterial: "Some makeup",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 humanoid save or Charmed; once/24h; ends if dmged or if I atk, dmg, force save a crea; knows after",
	descriptionFull: [
		"You magically emanate a sense of friendship toward one creature you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target succeeds automatically if it isn't a Humanoid, if you're fighting it, or if you have cast this spell on it within the past 24 hours.",
		"The spell ends early if the target takes damage or if you make an attack roll, deal damage, or force anyone to make a saving throw. When the spell ends, the target knows it was Charmed by you.",
	],
};
SpellsList["grasping vine"] = {
	name: "Grasping Vine",
	classes: ["druid", "ranger"],
	source: [["P24", 280]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Bns",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Place vine; at cast/Bns: 30 ft melee spell atk: 4d8 Bludg. dmg, pull \u226430 ft, \u2264Huge Grappled (1+1/SL)",
	descriptionShorter: "Place vine; cast/Bns: 30 ft melee spell atk: 4d8 Bludg. dmg, pull \u226430 ft, Grappled (1+1/SL)",
	descriptionFull: [
		"You conjure a vine that sprouts from a surface in an unoccupied space that you can see within range. The vine lasts for the duration.",
		"Make a melee spell attack against a creature within 30 feet of the vine. On a hit, the target takes 4d8 Bludgeoning damage and is pulled up to 30 feet toward the vine; if the target is Huge or smaller, it has the Grappled condition (escape DC equal to your spell save DC). The vine can grapple only one creature at a time, and you can cause the vine to release a Grappled creature (no action required).",
		"As a Bonus Action on your later turns, you can repeat the attack against a creature within 30 feet of the vine.",
		UsingHigherLvl + "The number of creatures the vine can grapple increases by one for each spell slot level above 4.",
	],
};
SpellsList["hail of thorns"] = {
	name: "Hail of Thorns",
	classes: ["ranger"],
	source: [["P24", 283]],
	level: 1,
	school: "Conj",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Ranged weapon",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "Cast on ranged wea hit: target and all crea in 5 ft take 1d10+1d10/SL Piercing dmg; save halves",
	descriptionFull: [
		"As you hit the creature, this spell creates a rain of thorns that sprouts from your Ranged weapon or ammunition. The target of the attack and each creature within 5 feet of it make a Dexterity saving throw, taking 1d10 Piercing damage on a failed save or half as much damage on a successful one.",
		UsingHigherLvl + "The damage increases by 1d10 for each spell slot level above 1.",
	],
};
/*
	Hunger of Hadar doesn't behave correctly with `genericSpellDmgEdit`,
	if adding a bonus that matches both damage types (Cold and Acid) and not
	restricted to a single roll. There is no setting to prevent both damage types
	getting the bonus added.,
	However, no official feature allows for adding damage to multiple rolls of a spell.
*/
SpellsList["hunger of hadar"] = {
	name: "Hunger of Hadar",
	classes: ["warlock"],
	source: [["P24", 286]],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A pickled tentacle",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "20-ft rad all in area Blinded; start in: 2d6 Cold dmg; end in: save or 2d6 Acid dmg; +1d6/SL one type",
	descriptionShorter: "20-ft rad all in: Blinded; start: 2d6 Cold dmg; end save or 2d6 Acid dmg; +1d6/SL one type",
	descriptionFull: [
		"You open a gateway to the Far Realm, a region infested with unspeakable horrors. A 20-foot-radius Sphere of Darkness appears, centered on a point with range and lasting for the duration. The Sphere is Difficult Terrain, and it is filled with strange whispers and slurping noises, which can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within it have the Blinded condition.",
		"Any creature that starts its turn in the area takes 2d6 Cold damage. Any creature that ends its turn there must succeed on a Dexterity saving throw or take 2d6 Acid damage from otherworldly tentacles.",
		UsingHigherLvl + "The Cold or Acid damage (your choice) increases by 1d6 for each spell slot level above 3.",
	],
};
SpellsList["jallarzi's storm of radiance"] = {
	name: "Jallarzi's Storm of Radiance",
	nameShort: "J's Storm of Radiance",
	nameAlt: "Storm of Radiance",
	classes: ["warlock", "wizard"],
	source: [["P24", 289]],
	reqLoS: true,
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A pinch of phosphorus",
	duration: "Conc, 1 min",
	save: "Con",
	description: "10\xD740ft all cast/enter/end 2d10+1d10/SL Radiant \x26 again Thunder dmg; save \xBD; all in Blind \x26 Deaf",
	descriptionMetric: "3\xD712m all cast/enter/end 2d10+1d10/SL Radiant \x26 again Thunder dmg; save \xBD; all in Blind \x26 Deaf",
	descriptionShorter: "10\xD740ft all cast/enter/end 2d10+1d10/SL Radiant \x26 Thndr dmg; save \xBD; all in blind, deaf",
	descriptionShorterMetric: "3\xD712m all cast/enter/end 2d10+1d10/SL Radiant \x26 Thndr dmg; save \xBD; all in blind, deaf",
	descriptionFull: [
		"You unleash a storm of flashing light and raging thunder in a 10-foot-radius, 40-foot-high Cylinder centered on a point you can see within range. While in this area, creatures have the Blinded and Deafened conditions, and they can't cast spells with a Verbal component.",
		"When the storm appears, each creature in it makes a Constitution saving throw, taking 2d10 Radiant damage and 2d10 Thunder damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.",
		UsingHigherLvl + "The Radiant and Thunder damage increase by 1d10 for each spell slot level above 5.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["radiant", "thunder"],
			inDescriptionAs: "Radiant \x26 again Thunder dmg|Radiant \x26 Thndr dmg",
		},
	},
};
SpellsList["lightning arrow"] = {
	name: "Lightning Arrow",
	classes: ["ranger"],
	source: [["P24", 292]],
	level: 3,
	school: "Trans",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting or missing a target with a ranged attack using a weapon",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "After rngd wea atk: 4d8+1d8/SL Lightn. dmg, miss half; all in 10ft 2d8+1d8/SL Lightn. dmg, save \xBD",
	descriptionShorter: "Aftr rng wea atk: 4d8+1d8/SL Lightn. dmg, miss half; 10ft all 2d8+1d8/SL Lightn. dmg, save \xBD",
	descriptionFull: [
		"As your attack hits or misses the target, the weapon or ammunition you're using transforms into a lightning bolt. Instead of taking any damage or other effects from the attack, the target takes 4d8 Lightning damage on a hit or half as much damage on a miss. Each creature within 10 feet of the target then makes a Dexterity saving throw, taking 2d8 Lightning damage on a failed save or half as much damage on a successful one.",
		"The weapon or ammunition then returns to its normal form.",
		UsingHigherLvl + "The damage for both effects of the spell increases by 1d8 for each spell slot level above 3.",
	],
	dynamicDamageBonus: {
		multipleDmgMoments: false,
		skipDmgGroupIfNotMultiple: /(atk .*?lightn\. dmg.*?)/i,
	},
};
SpellsList["mind sliver"] = {
	name: "Mind Sliver",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["P24", 298]],
	reqLoS: true,
	level: 0,
	school: "Ench",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Int",
	description: "1 crea save or 1d6 Psychic dmg \x26 -1d4 on first save before my next EoT; +1d6 at CL 5, 11, \x26 17",
	descriptionCantripDie: "1 crea save or `CD`d6 Psychic dmg and -1d4 on first saving throw before my next turn ends",
	descriptionFull: [
		"You try to temporarily sliver the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 Psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["power word fortify"] = {
	name: "Power Word Fortify",
	classes: ["bard", "cleric"],
	source: [["P24", 306]],
	reqLoS: true,
	level: 7,
	school: "Ench",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	description: "Divide 120 Temporary HP equally among up to 6 visible creatures in range",
	descriptionFull: ["You fortify up to six creatures you can see within range. The spell bestows 120 Temporary Hit Points, which you divide among the spell's recipients."],
};
SpellsList["staggering smite"] = {
	name: "Staggering Smite",
	classes: ["paladin"],
	source: [["P24", 320]],
	level: 4,
	school: "Ench",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Wis",
	description: "Cast on melee wea hit; +4d6+1d6/SL Psychic dmg; target save or Stunned until my next EoT",
	descriptionFull: [
		"The target takes an extra 4d6 Psychic damage from the attack, and the target must succeed on a Wisdom saving throw or have the Stunned condition until the end of your next turn.",
		UsingHigherLvl + "The extra damage increases by 1d6 for each spell slot level above 4.",
	],
};
SpellsList["steel wind strike"] = {
	name: "Steel Wind Strike",
	classes: ["ranger", "wizard"],
	source: [["P24", 320]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "30 ft",
	components: "S,M\u0192",
	compMaterial: "A Melee weapon worth 1+ SP",
	duration: "Instantaneous",
	description: "Melee spell atk vs. 5 visible creature for each 6d10 Force dmg; after, I teleport next to 1 target",
	descriptionFull: [
		"You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 Force damage.",
		"You then teleport to an unoccupied space you can see within 5 feet of one of the targets.",
	],
	dynamicDamageBonus: { multipleDmgMoments: true },
};
SpellsList["summon aberration"] = {
	name: "Summon Aberration",
	classes: ["warlock", "wizard"],
	source: [["P24", 322]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A pickled tentacle and an eyeball in a platinum-inlaid vial worth 400+ GP",
	duration: "Conc, 1 h",
	description: (typePF ? "C" : "c") + "hosen Abberant spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range and uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Mind Flayer, or Slaad. The creature resembles an Aberration of that kind, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon beast"] = {
	name: "Summon Beast",
	classes: ["druid", "ranger"],
	source: [["P24", 322]],
	reqLoS: true,
	level: 2,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Bestial Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (200gp)",
	descriptionFull: [
		"You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon celestial"] = {
	name: "Summon Celestial",
	classes: ["cleric", "paladin"],
	source: [["P24", 323]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A reliquary worth 500+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Celestial Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (500gp)",
	descriptionFull: [
		"You call forth a Celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range and uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon construct"] = {
	name: "Summon Construct",
	classes: ["artificer", "wizard"],
	source: [["P24", 324]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A lockbox worth 400+ GP",
	duration: "Conc, 1 h",
	description: (typePF ? "C" : "c") + "hosen Construct " + (typePF ? "S" : "s") + "pirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth the spirit of a Construct. It manifests in an unoccupied space that you can see within range and uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles an animate statue (you determine the appearance) made of the chosen material, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon elemental"] = {
	name: "Summon Elemental",
	classes: ["druid", "ranger", "wizard"],
	source: [["P24", 325]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "Air, a pebble, ash, and water inside a gold-inlaid vial worth 400+ GP",
	duration: "Conc, 1 h",
	description: (typePF ? "C" : "c") + "hosen Elemental " + (typePF ? "S" : "s") + "pirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth an Elemental spirit. It manifests in an unoccupied space that you can see within range and uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon fey"] = {
	name: "Summon Fey",
	classes: ["druid", "ranger", "warlock", "wizard"],
	source: [["P24", 326]],
	reqLoS: true,
	level: 3,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded flower worth 300+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Fey Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (300gp)",
	descriptionFull: [
		"You call forth a Fey spirit. It manifests in an unoccupied space that you can see within range and uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a Fey creature of your choice marked by the chosen mood, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon fiend"] = {
	name: "Summon Fiend",
	classes: ["warlock", "wizard"],
	source: [["P24", 326]],
	reqLoS: true,
	level: 6,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A bloody vial worth 600+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Fiend Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (600gp)",
	descriptionFull: [
		"You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range and uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a Fiend of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon undead"] = {
	name: "Summon Undead",
	classes: ["warlock", "wizard"],
	source: [["P24", 328]],
	reqLoS: true,
	level: 3,
	school: "Necro",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded skull worth 300+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Undead Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (300gp)",
	descriptionFull: [
		"You call forth an Undead spirit. It manifests in an unoccupied space that you can see within range and uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an Undead creature with the chosen form, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["swift quiver"] = {
	name: "Swift Quiver",
	classes: ["ranger"],
	source: [["P24", 329]],
	level: 5,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A Quiver worth 1+ GP",
	duration: "Conc, 1 min",
	description: "At cast \x26 Bns after: attack twice with weapon that uses arrows or bolts; spell creates nonmagical ammo",
	descriptionFull: [
		"When you cast the spell and as a Bonus Action until it ends, you can make two attacks with a weapon that fires Arrows or Bolts, such as a Longbow or a Light Crossbow. The spell magically creates the ammunition needed for each attack. Each Arrow or Bolt created by the spell deals damage like a nonmagical piece of ammunition of its kind and disintegrates immediately after it hits or misses.",
	],
};
SpellsList["synaptic static"] = {
	name: "Synaptic Static",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["P24", 330]],
	level: 5,
	school: "Ench",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Int",
	description: "20-ft rad all save or 8d6 Psychic dmg, 1 min -1d6 on atk/chk/conc save; save half only; redo save EoT",
	descriptionShorter: "20ft rad all save or 8d6+1d8 Psychic dmg, 1 min -1d6 to atks/check/conc save; save \xBD only; EoT save",
	descriptionFull: [
		"You cause psychic energy to erupt at a point within range. Each creature in a 20-foot-radius Sphere centered on that point makes an Intelligence saving throw, taking 8d6 Psychic damage on a failed save or half as much damage on a successful one.",
		"On a failed save, a target also has muddled thoughts for 1 minute. During that time, it subtracts 1d6 from all its attack rolls and ability checks, as well as any Constitution saving throws to maintain Concentration. The target makes an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success.",
	],
};
SpellsList["tasha's bubbling cauldron"] = {
	name: "Tasha's Bubbling Cauldron",
	nameAlt: "Bubbling Cauldron",
	nameShort: "T's Bubbling Cauldron",
	classes: ["warlock", "wizard"],
	source: [["P24", 330]],
	level: 6,
	school: "Conj",
	time: "Act",
	range: "5 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded ladle worth 500+ GP",
	duration: "10 min",
	description: "Conjure immobile pot with spell mod of (un)common potion; Bns to take 1, lasting till recast (500 gp)",
	descriptionFull: [
		"You conjure a claw-footed cauldron filled with bubbling liquid. The cauldron appears in an unoccupied space on the ground within 5 feet of you and lasts for the duration. The cauldron can't be moved and disappears when the spell ends, along with the bubbling liquid inside it.",
		"The liquid in the cauldron duplicates the properties of a Common or an Uncommon potion of your choice (such as a Potion of Healing). As a Bonus Action, you or an ally can reach into the cauldron and withdraw one potion of that kind. The potion is contained in a vial that disappears when the potion is consumed. The cauldron can produce a number of these potions equal to your spellcasting ability modifier (minimum 1). When the last of these potions is withdrawn from the cauldron, the cauldron disappears, and the spell ends.",
		"Potions obtained from the cauldron that aren't consumed disappear when you cast this spell again.",
	],
};
SpellsList["telepathy"] = {
	name: "Telepathy",
	classes: ["wizard"],
	source: [["P24", 331]],
	level: 8,
	school: "Div",
	time: "Act",
	range: "Unlimited",
	components: "V,S,M",
	compMaterial: "A pair of linked silver rings",
	duration: "24 h",
	description: "1 familiar willing crea \x26 I telepathic link; share \x26 understand words, images, sounds and sensory info",
	descriptionFull: [
		"You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
		"Until the spell ends, you and the target can instantly share words, images, sounds, and other sensory messages with each other through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature to understand the meaning of your words and any sensory messages you send to it.",
	],
};
SpellsList["thorn whip"] = {
	name: "Thorn Whip",
	classes: ["artificer", "druid"],
	source: [["P24", 333]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "The stem of a plant with thorns",
	duration: "Instantaneous",
	description: "Melee spell atk for 1d6 Piercing dmg \x26 can pull \u2264Large crea up to 10 ft closer; +1d6 at CL 5, 11, \x26 17",
	descriptionShorter: "Melee spell atk for 1d6 Piercing dmg \x26 pull \u2264Large crea up to 10 ft closer; +1d6 at CL 5, 11, 17",
	descriptionCantripDie: "Melee spell atk for `CD`d6 Piercing dmg and can pull up to Large crea up to 10 ft closer",
	descriptionFull: [
		"You create a vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. On a hit, the target takes 1d6 Piercing damage, and if it is Large or smaller, you can pull it up to 10 feet closer to you.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["thunderclap"] = {
	name: "Thunderclap",
	classes: ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source: [["P24", 333]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S",
	duration: "Instantaneous",
	save: "Con",
	description: "All creatures but me save or 1d6 Thunder dmg; 100-ft rad audible; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "All creatures but me save or `CD`d6 Thunder dmg; 100-ft rad audible",
	descriptionFull: [
		"Each creature in a 5-foot Emanation originating from you must succeed on a Constitution saving throw or take 1d6 Thunder damage. The spell's thunderous sound can be heard up to 100 feet away.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["thunderous smite"] = {
	name: "Thunderous Smite",
	classes: ["paladin"],
	source: [["P24", 334]],
	level: 1,
	school: "Evoc",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Str",
	description: "Cast on melee wea hit; +2d6+1d6/SL Thunder dmg; save or 10 ft push \x26 Prone; audible in 300" + (typePF ? " " : "") + "ft",
	descriptionFull: [
		"Your strike rings with thunder that is audible within 300 feet of you, and the target takes an extra 2d6 Thunder damage from the attack. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and have the Prone condition.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["toll the dead"] = {
	name: "Toll the Dead",
	classes: ["cleric", "warlock", "wizard"],
	source: [["P24", 334]],
	reqLoS: true,
	level: 0,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Wis",
	description: "1 crea save or 1d12 Necrotic dmg (d8 if full HP); bell audible in 10 ft; +1d12/1d8 at CL 5, 11, \x26 17",
	descriptionShorter: "1 crea save or 1d12 Necrotic dmg (d8 not d12 if full HP); bell audible 10ft; +1d at CL 5, 11, 17",
	descriptionCantripDie: "1 crea save or `CD`d12 Necrotic damage (d8 not d12 if at full HP); bell audible in 10 ft",
	descriptionFull: [
		"You point at one creature you can see within range, and the single chime of a dolorous bell is audible within 10 feet of the target. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its Hit Points, it instead takes 1d12 Necrotic damage.",
		CantripUpgrade + "The damage increases by one die when you reach levels 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17 (4d8 or 4d12).",
	],
};
SpellsList["witch bolt"] = {
	name: "Witch Bolt",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["P24", 343]],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A twig struck by lightning",
	duration: "Conc, 1 min",
	description: "Rngd atk 2d12+1d12/SL Lightn. dmg; rnds after: Bns 1d12 Lightn. dmg; end: out of range/total cover",
	descriptionShorter: "Rngd atk 2d12+1d12/SL Lightn. dmg; Bns 1d12 Lightn. dmg; end: out of range/total cover",
	descriptionFull: [
		"A beam of crackling energy lances toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against it. On a hit, the target takes 2d12 Lightning damage.",
		"On each of your subsequent turns, you can take a Bonus Action to deal 1d12 Lightning damage to the target automatically, even if the first attack missed.",
		"The spell ends if the target is ever outside the spell's range or if it has Total Cover from you.",
		UsingHigherLvl + "The initial damage increases by 1d12 for each spell slot level above 1.",
	],
	dynamicDamageBonus: {
		multipleDmgMoments: false,
		extraDmgGroupsSameType: /(Bns )(.*?)( Lightn. dmg)/i, // WERKT DIT???
	},
};
SpellsList["word of radiance"] = {
	name: "Word of Radiance",
	classes: ["cleric"],
	source: [["P24", 343]],
	reqLoS: true,
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A sunburst token",
	duration: "Instantaneous",
	save: "Con",
	description: "Any creature save or 1d6 Radiant damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "Any creature save or `CD`d6 Radiant damage",
	descriptionFull: [
		"Burning radiance erupts from you in a 5-foot Emanation. Each creature of your choice that you can see in it must succeed on a Constitution saving throw or take 1d6 Radiant damage.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["wrathful smite"] = {
	name: "Wrathful Smite",
	classes: ["paladin"],
	source: [["P24", 343]],
	level: 1,
	school: "Necro",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Wis",
	description: "Cast on melee wea hit; +1d6 Necrotic dmg and save or Frightened; repeat save EoT to end",
	descriptionFull: [
		"The target takes an extra 1d6 Necrotic damage from the attack, and it must succeed on a Wisdom saving throw or have the Frightened condition until the spell ends. At the end of each of its turns, the Frightened target repeats the save, ending the spell on itself on a success.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["yolande's regal presence"] = {
	name: "Yolande's Regal Presence",
	nameShort: "Y's Regal Presence",
	classes: ["bard", "wizard"],
	source: [["P24", 343]],
	reqLoS: true,
	level: 5,
	school: "Ench",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S,M",
	compMaterial: "A miniature tiara",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "Any crea cast/enter/end 4d6 Psychic dmg, Prone, and can push it up to 10 ft away; save half dmg only",
	descriptionShorter: "Any crea cast/enter/end 4d6 Psychic dmg, Prone, can push it up to 10 ft; save half dmg only",
	descriptionFull: [
		"You surround yourself with unearthly majesty in a 10-foot Emanation. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. On a failed save, the target takes 4d6 Psychic damage and has the Prone condition, and you can push it up to 10 feet away. On a successful save, the target takes half as much damage only. A creature makes this save only once per turn.",
	],
};
