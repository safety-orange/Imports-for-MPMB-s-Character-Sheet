var iFileName = "pub_20150714_AL-RoD.js";
RequiredSheetVersion(13);
// This file adds the optional backgrounds from the Adventurers League season 3 (Rage of Demons) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:RoD"]={
	name : "Rage of Demons Backgrounds [Hillsfar]",
	abbreviation : "AL:RoD",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2015/07/Hillsfar-Regional-Character-Options.pdf",
	date : "2015/07/14"
};

// Backgrounds (with contributions by AggieBear)
BackgroundList["cormanthor refugee"] = {
	regExpSearch :  /^(?=.*cormanthor)(?=.*refugee).*$/i,
	name : "Cormanthor Refugee",
	source : [["AL:RoD", 5], ["ALbackground", 0]],
	skills : ["Nature", "Survival"],
	gold : 5,
	equipleft : [
		["Two-person tent", "", 20],
		["Set of artisan's tools", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Holy symbol (type)", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Shelter of the Elven Clergy",
	trait : [
		"I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
		"Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
		"I live in the moment, knowing my life could be turned upside down any day.",
		"I appreciate beauty in all of its forms.",
		"I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
		"I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
		"I was raised alongside children of many other races. I harbor no racial prejudices at all.",
		"The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings."
	],
	ideal : [
		["Patient",
			"Patient: The elves have taught me to think and plan for the long-term. (Lawful)"
		],
		["Rebellious",
			"Rebellious: Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)"
		],
		["Self-Absorbed",
			"Self-Absorbed: I've had to look out for number one so long that it has become second nature. (Any)"
		],
		["Wanderlust",
			"Wanderlust: I want to see as much of the world beyond the camps as I can. (Any)"
		],
		["Generous",
			"Generous: I give everything I can to help those in need, regardless of who they are. (Good)"
		],
		["To the Abyss with Them",
			"To the Abyss with Them: The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)"
		]
	],
	bond : [
		"The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
		"I seek revenge against the people of Hillsfar for driving my family into the forest.",
		"My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
		"The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
		"I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
		"Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly."
	],
	flaw : [
		"I am very uncomfortable indoors and underground",
		"I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
		"Elf this, elf that. I am sick and tired of the elves.",
		"I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
		"I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
		"I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!"
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : ["Elvish"],
	lifestyle : "poor"
};
BackgroundList["gate urchin"] = {
	regExpSearch :  /^(?=.*gate)(?=.*urchin).*$/i,
	name : "Gate Urchin",
	source : [["AL:RoD", 6], ["ALbackground", 0]],
	skills : ["Deception", "Sleight of Hand"],
	gold : 10,
	equipleft : [
		["Battered alms box", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Cast-off military jacket, cap, or scarf", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""]
	],
	feature : "Red Plume and Mage Guild Contacts",
	trait : [
		"I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
		"My problems are always caused by others. I'm never to blame.",
		"I am afraid I could wind up back on the streets any day.",
		"I get along with everyone.",
		"I see people as marks for a con and have difficulty feeling true empathy for them.",
		"I have a real flair for matchmaking. I can find anyone a spouse!",
		"I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
		"I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore."
	],
	ideal : [
		["Loyal",
			"Loyal: I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)"
		],
		["Adventurous",
			"Adventurous: I don't like doing the same thing every day. I crave variety. (Chaotic)"
		],
		["Strong",
			"Strong: Only the strong survive. I respect those who are strong and powerful. (Any)"
		],
		["Witty",
			"Witty: Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)"
		],
		["Honest",
			"Honest: Others can do what they want, but I won't lie or steal, even to feed my family. (Good)"
		],
		["Ungrateful",
			"Ungrateful: Those who give, only do it to make themselves feel better. I steal from them. (Evil)"
		]
	],
	bond : [
		"The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
		"Busking has taught me to love music above all else.",
		"The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt.",
		"I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
		"I will be wealthy some day. My descendants will live in comfort and style.",
		"I know how hard life on the streets is. I do everything I can for those who have less than me."
	],
	flaw : [
		"Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
		"Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
		"I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
		"I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
		"I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
		"I do not trust anyone who has not had a hard life."
	],
	toolProfs : [["Thieves' tools", "Dex"], ["Musical instrument", 1]],
	lifestyle : "poor"
};
BackgroundList["hillsfar merchant"] = {
	regExpSearch :  /^(?=.*hillsfar)(?=.*merchant).*$/i,
	name : "Hillsfar Merchant",
	source : [["AL:RoD", 7], ["ALbackground", 0]],
	skills : ["Insight", "Persuasion"],
	gold : 25,
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Letter of introduction from family's trading house", "", 1]
	],
	feature : "Factor",
	featureAlt : "Trade Contact",
	trait : [
		"I fill my evenings with wine or mead and song.",
		"I greatly admire gladiators and enjoy the Arena.",
		"I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
		"I leave broken hearts all around the Moonsea and up and down the Sword Coast.",
		"I work hard and seldom make time for fun.",
		"I am a particularly devout and pray often.",
		"The Red Plumes caught me once. I hate them.",
		"I ask a lot of questions to get information about those with whom I am working and dealing."
	],
	ideal : [
		["Frugal",
			"Frugal: I spend my money very carefully. (Lawful)"
		],
		["Profligate",
			"Profligate: I tend to spend extravagantly. (Chaotic)"
		],
		["Honest",
			"Honest: I deal with others above board. (Any)"
		],
		["Sharp",
			"Sharp: I seek to make the best deal possible. (Any)"
		],
		["Charitable",
			"Charitable: I give generously to others. (Good)"
		],
		["Greedy",
			"Greedy: I do not share my wealth with others. (Evil)"
		]
	],
	bond : [
		"I am fiercely loyal to those with whom I work.",
		"I must uphold the good name of my family.",
		"I will prove myself to my family as an adventurer.",
		"Deals are sacrosanct. I never go back on my word.",
		"I love making deals and negotiating agreements.",
		"I guard my wealth jealously."
	],
	flaw : [
		"I am a braggart. I promote myself shamelessly.",
		"I am vain. I always wear the latest fashions.",
		"I am a glutton. I eat and drink to excess.",
		"I am a snob. I want only the finest things in life.",
		"I am lazy. I want others to take care of everything.",
		"I am overconfident. I overestimate my abilities."
	],
	toolProfs : ["Vehicles (land)", "Vehicles (water)"],
	lifestyle : "wealthy"
};
BackgroundList["hillsfar smuggler"] = {
	regExpSearch :  /^(?=.*hillsfar)(?=.*smuggler).*$/i,
	name : "Hillsfar Smuggler",
	source : [["AL:RoD", 8], ["ALbackground", 0]],
	skills : ["Perception", "Stealth"],
	gold : 5,
	equipleft : [
		["Forgery kit", "", 5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Passage",
	trait : [
		"When I'm not smuggling, I gamble.",
		"I just love Halfling cooking and baking!",
		"I party with dwarves whenever I can.",
		"I'm a terrible singer, but I love to do it.",
		"I was raised to honor Chauntea and still do.",
		"The blood sports of the Arena sicken me.",
		"I think non-humans are really interesting.",
		"I exaggerate the tales of my exploits."
	],
	ideal : [
		["Fair",
			"Fair: I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)"
		],
		["Impulsive",
			"Impulsive: Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)"
		],
		["Curious",
			"Curious: I want to learn as much as I can about the people and places I encounter. (Any)"
		],
		["Prepared",
			"Prepared: I think success depends on preparing as much as possible in advance. (Any)"
		],
		["Respectful",
			"Respectful: I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)"
		],
		["Corrupt",
			"Corrupt: I will break the law or act dishonestly if the money is right. (Evil)"
		]
	],
	bond : [
		"I am loyal to the Rogues Guild and would do anything for them.",
		"I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
		"I admire the elves. I help them whenever I can.",
		"A gnome helped me once. I pay the favor forward.",
		"I enjoy tricking the Red Plumes at every opportunity.",
		"I smuggled agricultural goods for non-human farmers. I try to help them when I can."
	],
	flaw : [
		"My hatred for the Red Plumes burns so brightly that I have difficulty suppressing It around them.",
		"The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire..",
		"I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
		"I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
		"I am greedy. There Isn't much I won't do for money.",
		"I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar."
	],
	toolProfs : ["Forgery kit"],
	languageProfs : [1],
	lifestyle : "modest"
};
BackgroundList["secret identity"] = {
	regExpSearch : /^(?=.*secret)(?=.*identity).*$/i,
	name : "Secret Identity",
	source : [["AL:RoD", 9], ["ALbackground", 0]],
	skills : ["Deception", "Stealth"],
	gold : 5,
	equipleft : [
		["Disguise kit", "", 3],
		["Forgery kit", "", 5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Identity",
	trait : [
		"Despite its problems, I love Hillsfar, it's the greatest city in the world. The only one for me.",
		"I move from place to place, never staying anywhere long and leaving nothing behind.",
		"I think flattery is the best way to direct attention away from me.",
		"I don't make friends easily. They're a liability I cannot afford.",
		"Risk and danger are exhilarate me. Pulling off schemes and deceptions is a rush.",
		"The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
		"I avoid people of my own race, as well as things associated with my race, lest they give me away.",
		"I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!"
	],
	ideal : [
		["Quisling",
			"Quisling: Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)"
		],
		["Scoflaw",
			"Scoflaw: The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic))"
		],
		["Optimist",
			"Optimist: Everyone Is basically good. Though the government is misguided it will all be okay. (Any)"
		],
		["Secretive",
			"Secretive: I am in the habit of not talking about myself. My business is none of yours. (Any)"
		],
		["Heroic",
			"Heroic: I do everything I can to help non-humans, regardless of the personal cost to me. (Good)"
		],
		["Depraved",
			"Depraved: I have lost my moral compass. The ends justify most any means. (Evil)"
		]
	],
	bond : [
		"The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
		"I am part of an underground network that smuggles non-humans into and out of the city.",
		"I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
		"I am a spy. I report on events in and around Hillfar.",
		"My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
		"I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it."
	],
	flaw : [
		"After years of denying who I am, I now despise myself and other members of my pathetic race.",
		"Years of hiding have made me somewhat paranoid. I trust no one.",
		"I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
		"I am ashamed. I failed to protect a member of my family who was seized and thrown into the Area.",
		"I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
		"Years of successfully deceiving others have made me cocky. I think no one can see through my lies."
	],
	toolProfs : ["Disguise kit", "Forgery kit"],
	lifestyle : "modest"
};
BackgroundList["shade fanatic"] = {
	regExpSearch : /^(?=.*shade)(?=.*fanatic).*$/i,
	name : "Shade Fanatic",
	source : [["AL:RoD", 10], ["ALbackground", 0]],
	skills : ["Deception", "Intimidation"],
	gold : 15,
	equipleft : [
		["Forgery kit", "", 5],
		["Transparent shadow cylinder", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Secret Society",
	trait : [
		"I am a bully; I try to hide it though.",
		"I let my actions speak for themselves",
		"I am important; I will not let anyone forget that.",
		"You are either with me or against me.",
		"I know it is only a time before I am betrayed by those I care for.",
		"I never understand why people get so emotional.",
		"They are out to get me. It is only my cunning that keeps me ahead of them",
		"Everyone has a choice, the one I make is always right though."
	],
	ideal : [
		["Hope",
			"Hope: I know even if I need do evil acts, history will be my redemption. (Chaos)"
		],
		["Dedicated",
			"Dedicated: I can do anything I put my mind to (Lawful)"
		],
		["Exciting",
			"Exciting: I have found the truth of the Shadovar and want to share it with everyone. (Any)"
		],
		["Frugal",
			"Frugal: I horde my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)"
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to my beliefs. (Any)"
		],
		["Compassionate",
			"Compassionate: It is through love that others will join In our cause. (Good)"
		]
	],
	bond : [
		"They say the Shade broke the bonds of mortality; I want to find out how.",
		"The whispers in my head remind me that there is power to be found in the shadows.",
		"For the glory of Netheril, I will grow in power.",
		"I once lived in Hillsfar, I was chased out before I was able to say farewell.",
		"My true love was a killed by the Red Plumes; I plot to make them suffer.",
		"I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!"
	],
	flaw : [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I am incapable of standing up for myself.",
		"The group I am with has committed atrocities; I am always worried their actions will become public.",
		"I always enjoy a good mug of ale … or five.",
		"I know what I do is wrong, but am afraid to speak up about it."
	],
	toolProfs : ["Forgery kit"],
	languageProfs : ["Netherese"],
	lifestyle : "moderate"
};
BackgroundList["trade sheriff"] = {
	regExpSearch :  /^(?=.*trade)(?=.*sheriff).*$/i,
	name : "Trade Sheriff",
	source : [["AL:RoD", 11], ["ALbackground", 0]],
	skills : ["Investigation", "Persuasion"],
	gold : 17,
	equipleft : [
		["Thieves' tools", "", 1]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Gray cloak", "", ""],
		["Sheriff's insignia", "", ""]
	],
	feature : "Investigative Services",
	trait : [
		"I am always polite and respectful",
		"I let my actions speak for themselves",
		"I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to.",
		"I am quick to judge and slow to vindicate",
		"I can be very persuasive and am able to ask questions where others might not be able to.",
		"I have a quirky personality that seems to take others off their guard.",
		"My sense of humor is considered by most to be awkward",
		"Everyone has a choice, and they can always make the right choice, mine!"
	],
	ideal : [
		["Hope",
			"Hope: my job is to speak for the victim (good)"
		],
		["Dedicated",
			"Dedicated: Once I start an investigation, until told to do so, I do not quit, not matter where it leads. (Lawful)"
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter (any)"
		],
		["Mercenary",
			"Mercenary: When I do investigations, I expect answers immediately (Any)"
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to give me answers.(good)"
		],
		["Might",
			"Might: It is through threats and force that I get my answers (lawful)"
		]
	],
	bond : [
		"To this day an unsolved case will always leave me haunted and bother me.",
		"Through the might of my personality I will solve an investigation or puzzle.",
		"It is my right to believe what I will, just try and stop me.",
		"I need to prove my worth to my fellow Sheriffs.",
		"Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
		"I speak for those that cannot speak for themselves."
	],
	flaw : [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I took a bribe to tank an investigation and I would do anything to keep it secret.",
		"I have little respect for those that are of \"low\" intelligence/race.",
		"I always enjoy a good mug of ale … or five to cover up my past.",
		"I speak for the First Lord of Hillsfar and make sure everyone knows it."
	],
	toolProfs : [["Thieves' tools", "Dex"]],
	languageProfs : ["Elvish"],
	lifestyle : "moderate"
};

// Background features
BackgroundFeatureList["factor"] = {
	description : "My family has assigned me the services of a loyal retainer from the business. This person can perform mundane tasks for me such as making purchases, delivering messages, and running errands. He or she will not fight for me or follow me into danger, and will leave if frequently endangered or abused. If killed, my family assigns me another within days.",
	source : [["AL:RoD", 7], ["ALbackground", 0]]
};
BackgroundFeatureList["investigative services"] = {
	description : "I have a way of communicating with others that puts them at ease. I can invoke my rank to allow me access to a crime scene or to requisition equipment or horses on a temporary basis. When entering a settlement around Hillsfar, I can identify a contact who will give me information and would help me because I want to stop anyone from disrupting trade.",
	source : [["AL:RoD", 11], ["ALbackground", 0]]
};
BackgroundFeatureList["red plume and mage guild contacts"] = {
	description : "I made friends among the Red Plumes and Mage's Guild when I lived at the Hillsfar Gate. They remember me fondly and help me in little ways when they can. I can invoke their assistance in and around Hillsfar to obtain food, simple equipment for temporary use, and to gain access to the low-security areas of their garrisons, halls, and encampments.",
	source : [["AL:RoD", 6], ["ALbackground", 0]]
};
BackgroundFeatureList["secret identity"] = {
	description : "I have created a secret identity that I use to conceal my true race and that offers a covering explanation for my presence in Hillsfar. In addition, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source : [["AL:RoD", 9], ["ALbackground", 0]]
};
BackgroundFeatureList["secret passage"] = {
	description : "I can call on my smuggler contacts to secure secret passage into or out of Hillsfar for myself and my friends, no questions asked, and no Red Plume entanglements. Because I'm calling in a favor, I can't be certain when or if they can help. In return for passage, my companions and I may owe the Rogue's Guild a favor and/or may have to pay bribes.",
	source : [["AL:RoD", 8], ["ALbackground", 0]]
};
BackgroundFeatureList["secret society"] = {
	description : "I have a special way of communicating with others who feel the same way I do about the Shade. When I enter a village or larger city, I can identify a contact who will give me information on those that would hinder my goals and those would help me simply because of my desire to see the Shade Enclave return in all its glory.",
	source : [["AL:RoD", 10], ["ALbackground", 0]]
};
BackgroundFeatureList["shelter of the elven clergy"] = {
	description : "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help me when they can, including providing me and my companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide me (but only me) with a poor lifestyle.",
	source : [["AL:RoD", 5], ["ALbackground", 0]]
};
BackgroundFeatureList["trade contact"] = {
	description : "My family and I have trade contacts such as caravan masters, sailors, artisans, farmers, and shopkeepers throughout the Moonsea region and all along the Sword Coast. When adventuring in either of those areas, I can use those contacts to get information about the local area or to pass a message to someone in those areas, even across great distance.",
	source : [["AL:RoD", 7], ["ALbackground", 0]]
};
