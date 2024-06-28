var iFileName = "pub_20160315_CoS.js";
RequiredSheetVersion("13.1.14");
// This file adds the backgrounds from the Curse of Strahd adventure book and the optional backgrounds from the Adventurers League season 4 (Curse of Strahd) to MPMB's Character Record Sheet

// Define the sources
SourceList.CoS={
	name : "Curse of Strahd [background, items, pack]",
	abbreviation : "CoS",
	group : "Adventure Books",
	campaignSetting : "Ravenloft",
	url : "https://media.wizards.com/2016/downloads/DND/CoS_Character_Options.pdf?dl=1",
	date : "2016/03/15"
};
SourceList["AL:CoS"]={
	name : "Curse of Strahd Backgrounds", // v1.1
	abbreviation : "AL:CoS",
	group : "Adventurers League",
	url : "https://www.dropbox.com/s/f9ktz5u2gcu2509/Curse-of-Strahd-Backgrounds-v1.1.pdf", // used to be https://dndadventurersleague.org/wp-content/uploads/2016/06/Curse-of-Strahd-Backgrounds-v1.1.pdf
	date : "2016/04/07"
};

// Backgrounds (with contributions by RCanine)
BackgroundList["haunted one"] = {
	regExpSearch : /haunted.one/i,
	name : "Haunted One",
	source : [["CoS", 209], ["VRGtR", 34], ["ALbackground", 0]],
	skillstxt : "Choose two from Arcana, Investigation, Religion, and Survival",
	languageProfs : [2], // was 1 in book, fixed in errata
	gold : 0.01,
	equipleft : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden Stakes", 3, 1],
		["Holy symbol", "", 1],
		["Holy water, flasks of", "", 1],
		["Manacles", "", 6],
		["Steel Mirror", "", 0.5],
		["Oil, flasks of", "", 1],
		["Tinderbox", "", 1],
		["Torch", 3, 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Trinket of special significance", "", ""]
	],
	feature : "Heart of Darkness",
	trait : [
		"I don't run from evil. Evil runs from me.",
		"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
		"I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
		"I live for the thrill of the hunt.",
		"I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
		"I expect danger around every corner.",
		"I refuse to become a victim, and I will not allow others to be victimized.",
		"I put no trust in divine beings."
	],
	ideal : [
		["Sacrifice", "Sacrifice: I try to help those in need, no matter what the personal cost. (Good)"],
		["Desperation", "Desperation: I'll stop the spirits that haunt me or die trying. (Any)"],
		["Cleansing", "Cleansing: I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)"],
		["Vigilante", "Vigilante: I have a dark calling that puts me above the law. (Chaotic)"],
		["Preparation", "Preparation: I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)"],
		["Destruction", "Destruction: I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"]
	],
	bond : [
		"I keep my thoughts and discoveries in a journal. My journal is my legacy.",
		"I would sacrifice my life and my soul to protect the innocent.",
		"My torment drove away the person I love. I strive to win back the love I've lost.",
		"A terrible guilt consumes me. I hope that I can find redemption through my actions.",
		"There's evil in me, I can feel it. It must never be set free.",
		"I have a child to protect. I must make the world a safer place for him (or her)."
	],
	flaw : [
		"I have certain rituals that I must follow every day. I can never break them.",
		"I assume the worst in people.",
		"I feel no compassion for the dead. They're the lucky ones.",
		"I have an addiction.",
		"I am a purveyor of doom and gloom who lives in a world without hope.",
		"I talk to spirits that no one else can see."
	],
	extra : [
		"Select a Harrowing Event",
		"Monster spared my life",
		"Born under a dark star",
		"Haunted by an apparition",
		"Dark arts in the family",
		"An oni took my sibling",
		"Memory of cured lycanthropy",
		"Raised by a hag",
		"Studied an eldritch tome",
		"Formerly possessed by a fiend",
		"Avenged a murder"
	]
};
BackgroundList["black fist double agent"] = {
	regExpSearch : /black\W*fist/i,
	name : "Black Fist Double Agent",
	source : [["AL:CoS", 2], ["ALbackground", 0]],
	skills : ["Deception", "Insight"],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Tears of Virulence emblem", "", ""],
		["Writ of free agency", "", ""],
		["Set of artisan's tools or gaming set", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Double Agent",
	trait : [
		"People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around.",
		"My eloquence and sophistication are tools I use to avoid arousing suspicion myself.",
		"I am a thrill-seeker, excited by covert and dangerous missions.",
		"I live by my wits and always check every lock twice, just to be certain.",
		"I never admit to my mistakes lest they be used against me.",
		"I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look.",
		"I am prepared for any eventuality; including the day my usefulness as a spy comes to an end.",
		"I always make certain to know my enemy before acting, lest I bite off more than I can chew."
	],
	ideal : [
		["Suspicious", "Suspicious: In my experience, everybody has something to hide, and what they hide can usually hurt me. (Any)"],
		["Secretive", "Secretive: I trade in secrets, and am not about to let any of mine slip. (Any)"],
		["Hedonist", "Hedonist: Life is short. I live my life to the fullest, as I know any day could be my last. (Chaotic)"],
		["Selfless", "Selfless: I use my position to help the downtrodden avoid persecution from the authorities. (Good)"],
		["Patriotic" , "Patriotic: I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy. (Lawful)"],
		["Manipulative", "Manipulative: I use my knowledge to blackmail and manipulate others to my own benefit. (Evil)"]
	],
	bond : [
		"I was framed for a crime I did not commit, and seek to bring the true culprit to justice.",
		"I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities.",
		"I miss the glory days of Phlan, before the coming of the dragon.",
		"I seek to prove myself worthy of joining the Black Fist as a member of their order.",
		"My sister was killed by a Tear of Virulence, and now I feed them false information whenever possible.",
		"My family was wrongly imprisoned, and I act as an informant in order to secure their release."
	],
	flaw : [
		"I think too highly of myself, and have an exaggerated sense of self-importance.",
		"I have difficulty trusting strangers. I see spies and informants everywhere.",
		"Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station.",
		"Years of seeing innocent people suffer have left me despondent and pessimistic for the future.",
		"My desire for vengeance often gets me into trouble",
		"I am spendthrift, and share my wealth with the patrons of my favorite tavern."
	],
	toolProfs : ["Disguise Kit", ["Artisan's tools or gaming set", 1]],
	lifestyle : "modest"
};
BackgroundList["dragon casualty"] = {
	regExpSearch : /^(?=.*dragon)(?=.*casualty).*$/i,
	name : "Dragon Casualty",
	source : [["AL:CoS", 3], ["ALbackground", 0]],
	skills : ["Intimidation", "Survival"],
	toolProfs : ["Based on my origin"],
	gold : 5,
	equipleft : [
		["Loaf of moldy bread", "", 1],
		["Cast-off Vorgansharax scale", "", ""]
	],
	equipright : [
		["Tattered Rags", "", 3],
		["Dagger", "", 1],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Dragonscarred",
	extra : [
		"Select an Origin (or Disfigurement)",
		"Dockworker",
		"Fisherman",
		"Tradesperson",
		"Merchant",
		"Black Fist Soldier",
		"Adventurer",
		"Visitor",
		"Entertainer",
		"Scholar",
		"Healer",
		"Criminal",
		"Unskilled laborer",
		"",
		"- Disfigurements (optional):",
		"Extensive scarring",
		"Small non-functional wing(s)",
		"Misshapen, wing-like membrane(s)",
		"Elongated, claw-like hand(s) or feet",
		"Painful green scales embedded in skin",
		"Bulbous, reptilian eye(s)",
		"Enlarged dorsal spines",
		"Small irregular spines instead of hair"
	],
	trait : [
		"I am driven to escape my past, and rarely stay in one place long.",
		"I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them.",
		"Speaking of my ordeal helps sooth the still open wounds in my soul.",
		"My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future.",
		"I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable.",
		"I am haunted my tortured past, and wake at night screaming at half-remembered horrors.",
		"I sleep with my back to a wall or tree, and a weapon within arm's reach.",
		"I am slow to trust, but incredibly loyal to those who have earned it."
	],
	ideal : [
		["Survivor", "Survivor: No matter the cost, I will take any action necessary to survive (any)"],
		["Independence", "Independence: When in trouble, the only person I can rely on is myself (Chaotic)"],
		["Compassionate", "Compassionate: I have suffered long at the hands of a Dragon, and take pity and compassion on the suffering of others (Good)"],
		["Secretive", "Secretive: I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)"],
		["Justice", "Justice: I have been wronged, and will not allow the same fate to befall others. (Lawful)"],
		["Sycophant", "Sycophant: During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)"]
	],
	bond : [
		"I have sworn vengeance on the Maimed Virulence and those that follow him.",
		"I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them.",
		"While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!",
		"I seek to reclaim and rebuild my former life to the best of my ability.",
		"I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor.",
		"I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor."
	],
	flaw : [
		"I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied.",
		"I secretly believe others are plotting to harm me.",
		"I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat.",
		"Anyone who refuses to celebrate my celebrity does not deserve my company.",
		"I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence.",
		"Once I make up my mind, I follow my chosen course of action regardless of the consequences."
	],
	languageProfs : ["Draconic"],
	lifestyle : "wretched"
};
BackgroundList["iron route bandit"] = {
	regExpSearch : /^(?=.*iron)(?=.*route)(?=.*bandit).*$/i,
	name : "Iron Route Bandit",
	source : [["AL:CoS", 5], ["ALbackground", 0]],
	skills : ["Animal Handling", "Stealth"],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	gold : 5,
	equipleft : [
		["Backpack, with:", "", 5],
		["Bag of 1000 ball bearings", 1, 2],
		["String, feet of", 10, ""],
		["Bell", "", ""],
		["Candles", 5, ""],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Pitons", 10, .25],
		["Hooded lantern", "", 2],
		["Oil, flasks of", 2, 1],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5],
		["Hempen rope, feet of", 50, 0.2]
	],
	equipright : [
		["Dark common clothes", "", 3],
		["Pack Saddle", "", ""],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Black-Market Breeder",
	trait : [
		"If people leave their gear unsecured, they must not want it very much.",
		"I feel more comfortable sleeping under the open sky.",
		"I always pre-plan my escape should things go bad; I always like to have an exit strategy.",
		"I tend to give animal owners breeding and care advice whether or not they want it.",
		"I lost a pet as a child and sadly reflect on it to this day.",
		"I always form a powerful, emotional bond with my mount.",
		"I recoil at the thought of killing someone else's pet or mount.",
		"I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me."
	],
	ideal : [
		["Loyalty", "Loyalty: Never bite the hand that feeds. (Good)"],
		["Unpredictability", "Unpredictability: Keep your enemy guessing and off-balance like a confused deer. (Chaotic)"],
		["Power", "Power: I strive to become leader of the pack at all costs. (Lawful)"],
		["Freedom", "Freedom: I bow to no one I don't respect. (Chaotic)"],
		["Resourcefulness", "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)"],
		["Unity", "Unity: Lone wolves fail where the pack succeeds. (Any)"]
	],
	bond : [
		"I cannot leave a harmed animal behind; I must save it or put it out of its misery.",
		"I leave behind my own personal calling cards when I do a job.",
		"I do not trust people who do not have a pet, mount, or furry companion.",
		"The pelt I wear on my back was from an animal that died saving my life, I will always cherish it.",
		"If my pet does not like you, I do not like you!",
		"Once you've ridden with me and fought by my side, I'll be there for you odds be damned."
	],
	flaw : [
		"I talk to animals; I believe they understand me, even if they do not.",
		"I growl at and bite anyone who gets too close to my food while I am eating.",
		"I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them.",
		"I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge.",
		"I'm an inveterate gambler.",
		"I judge people based on how well they stand their ground in a fight. I got not time for cowards…"
	],
	lifestyle : "poor"
};
BackgroundList["phlan insurgent"] = {
	regExpSearch : /^(?=.*phlan)(?=.*insurgent).*$/i,
	name : "Phlan Insurgent",
	source : [["AL:CoS", 6], ["ALbackground", 0]],
	skills : ["Stealth", "Survival"],
	toolProfs : [["Artisan's tools", 1], "Vehicles (land)"],
	gold : 5,
	equipleft : [
		["Caltrops", 20, 0.1],
		["Small trinket of my life before", "", ""],
		["Healer's kit", "", 3]
	],
	equipright : [
		["Dark common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Guerilla",
	extra : [
		"Select an Origin",
		"Fisher",
		"Hunter",
		"Craftsperson",
		"Priest/Priestess",
		"Cook",
		"City Watch",
		"Servant",
		"Unskilled laborer",
		"Stojanow river worker",
		"Twilight Marsh worker",
		"Mantor's Library scribe",
		"Clergy of Ilmater",
		"Laughing Goblin server",
		"Black Fist guard",
		"House Sokol retainer",
		"Bay of Phlan dockworker"
	],
	trait : [
		"My patience knows no bounds, so long as my goal is in sight.",
		"In life and in struggle, the ends justify my actions.",
		"If you aren't helping me, you'd best at least stay out of my way.",
		"I long for the life that was taken away from me.",
		"Friends and family perished, tragically, before my eyes. I hope never to undergo that again.",
		"Making the right choices in life are important to me. The choices I make might save not just my life, but the lives of others as well.",
		"I can never allow my foes to get the drop on me.",
		"Time is a precious resource that I must spend wisely."
	],
	ideal : [
		["Leadership", "Leadership: The oppressed need someone to inspire them to courageous acts. (Good)"],
		["Unpredictability", "Unpredictability: Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)"],
		["Determination", "Determination: Threats to my home must be eliminated at all costs. (Any)"],
		["Freedom", "Freedom: Those who are enslaved and unjustly imprisoned deserve my aid. (Good)"],
		["Resourcefulness", "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)"],
		["Unity", "Unity: Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)"]
	],
	bond : [
		"I'll never let my fellow insurgents down. They are my only remaining friends.",
		"I was separated from a loved one during my escape from town. I will find them.",
		"One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions.",
		"An item I hold close is my last remaining connection to the family I lost during the fall.",
		"The dragon who took my past life away from me will feel the full extent of my vengeance.",
		"The knowledge in Mantor's Library is an irreplaceable treasure that must be protected."
	],
	flaw : [
		"I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan.",
		"Ale is the only way I can escape the desperation of my circumstances.",
		"It doesn't take much to get me into a fight.",
		"Being an insurgent means doing things that aren't always ethical. I'm still learning to live with that.",
		"My desire to liberate Phlan oftentimes clouds my judgement, despite my best efforts.",
		"I relentlessly despise the Maimed Virulence and his allies. I'd abandon other goals in order to strike out at them"
	],
	lifestyle : "poor"
};
BackgroundList["stojanow prisoner"] = {
	regExpSearch : /^(?=.*stojanow)(?=.*prisoner).*$/i,
	name : "Stojanow Prisoner",
	source : [["AL:CoS", 8], ["ALbackground", 0]],
	skills : ["Deception", "Perception"],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]],
	gold : 10,
	equipleft : [
		["Small knife", "", 0.25],
		["Small trinket from my life before", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Ex-Convict",
	trait : [
		"I am a bully; others will suffer as I have.",
		"I always say yes even when I mean no; it's just easier.",
		"I aim to misbehave.",
		"I go out of my way to frustrate or anger those in power.",
		"I strive to obey the law. I will never again make the mistake of going against authority.",
		"I always plan everything out. The one time I let others plan things it did not end well for me.",
		"I take blame to protect others from pain.",
		"I horde information, you never know what may come in handy."
	],
	ideal : [
		["Loss", "Loss: I freely give those who offend me what was so brutally denied me, death. (Chaos)"],
		["Dedication", "Dedication: I never betray those who trust me. (Law)"],
		["Vengeance", "Vengeance: I use any means to get information I need; I have been well taught. (Evil)"],
		["Redemption", "Redemption: Everyone deserves a second chance. (Good)"],
		["Resilience", "Resilience: I can survive any challenge. (Any)"],
		["Leadership", "Leadership: The best teams are made up of those that society has discarded. (Any)"]
	],
	bond : [
		"I take up arms to help establish a free Phlan.",
		"The horrors of my time in Stojanow haunt my dreams, only after a day of hard work can I find sleep.",
		"I am indebted to those who freed me from prison, I will repay this debt.",
		"My torturer survived the attack that set me free, I will find him/her.",
		"I will not rest while others suffer fates similar to mine.",
		"I am searching for a way to heal the scars of Stojanow, both physical and emotional."
	],
	flaw : [
		"During stressful times, I find myself crying for no reason.",
		"My nerve endings are shot from the interrogations; I am numb to all but the harshest touch.",
		"I am incapable of standing up for myself.",
		"I folded under the torture, and gave information that I promised would be kept secret. My life would be in jeopardy if others found out.",
		"Survival is worth more than friendship.",
		"The ghosts from my past hinder my actions."
	],
	lifestyle : "poor"
};
BackgroundList["ticklebelly nomad"] = {
	regExpSearch : /^(?=.*ticklebelly)(?=.*nomad).*$/i,
	name : "Ticklebelly Nomad",
	source : [["AL:CoS", 9], ["ALbackground", 0]],
	skills : ["Animal Handling", "Nature"],
	toolProfs : ["Herbalism Kit"],
	gold : 5,
	equipleft : [
		["Herbalism kit", "", 3],
		["Small tribal jewelry", "", ""],
		["Hunting trap", "", 25]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "At Home in the Wild",
	trait : [
		"I eagerly inject myself into the unknown.",
		"Villages, towns, and cities do not suit me. I'd rather be out in the wilderness any day.",
		"I accomplish my tasks efficiently, using as few resources as possible.",
		"It's difficult for me to remain in one place for long.",
		"I loudly brag about my tribe every chance I get.",
		"Having walked among giants, I am fearless in the face of bigger creatures.",
		"I am quiet and reserved, but observant. Nothing escapes my attention.",
		"My word is my bond. I see a promise to completion, even if it conflicts with my beliefs."
	],
	ideal : [
		["Kinship", "Kinship: Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others' lives as well. (Good)"],
		["Preservation", "Preservation: Nature must not be despoiled by encroaching civilization. (Any)"],
		["Wanderlust", "Wanderlust: One must expand their horizons by seeing the world and exploring. (Chaos)"],
		["Isolation", "Isolation: My tribe and its ways must be protected and shielded from outside influence. (Neutral)"],
		["Protection", "Protection: Threats to the land and to the people must be dealt with at any and all costs. (Law)"],
		["Belonging", "Belonging: All creatures have a place in the world, so I strive to help others find theirs. (Good)"]
	],
	bond : [
		"I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled.",
		"The dragon cultists that invaded my homeland stole away one of my tribe's people. I will not know rest until I've found them.",
		"The dragon's presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done.",
		"I carry a trinket that spiritually and emotionally ties me to my people and my home.",
		"I discovered a strange relic in the hills during my tribe's wanderings. I must discover what it is.",
		"One of the stone giant clans from the Giant's Cairn has graced me with a mark of kinship."
	],
	flaw : [
		"I throw myself and my friends into situations rarely ever thinking about consequences.",
		"Unfamiliar people and surroundings put me on edge.",
		"I have absolutely no patience for slowpokes and those who prove indecisive.",
		"My desire to experience new things causes me to make unsafe choices.",
		"I am overly protective of nature, sometimes to the detriment of my companions and myself.",
		"My lack of worldliness often proves my undoing in social, commercial, and hostile situations."
	],
	languageProfs : ["Giant"],
	lifestyle : "poor"
};

// Background features
BackgroundFeatureList["at home in the wild"] = {
	description : "In the wilderness, my home, I can find a place to hide, rest, or recuperate that is secure enough to conceal me from most natural threats, but not all supernatural, magical, or threats that actively seek me out. However, this feature doesn't shield or conceal me from scrying, mental probing, nor from threats that don't need the five senses to find me.",
	source : [["AL:CoS", 9], ["ALbackground", 0]]
};
BackgroundFeatureList["black-market breeder"] = {
	description : "I know how to find people who are always looking for stolen animals and vehicles, for pit fights or getaways during an illegal job. This provides me with information of what such animals & vehicles are in high demand in the area, but also offer to give me favors and information (DM choice) if I bring such animals and vehicles to them.",
	source : [["AL:CoS", 5], ["ALbackground", 0]]
};
BackgroundFeatureList["double agent"] = {
	description : "I have a trusty contact in the Tears of Virulence garrison in Phlan to whom I pass information. In exchange, I get away with minor criminal offenses in Phlan. My Black Fists contacts can help me get an audience with the Lord Regent, the Lord Sage, Black Fists members, or deposed nobles who are sympathetic to the Phlan refugees and insurgents.",
	source : [["AL:CoS", 2], ["ALbackground", 0]]
};
BackgroundFeatureList["dragonscarred"] = {
	description : "My extensive scars from being tortured by Vorgansharax give me fame and notoriety, but it is difficult to disguise my appearance and hide from prying eyes. I can use this to gain access to people and places I might not otherwise have, for me and my companions. However, I fear that my afflictions are not completely mundane, as they burn and writhe.",
	source : [["AL:CoS", 3], ["ALbackground", 0]]
};
BackgroundFeatureList["ex-convict"] = {
	description : "The knowledge gained during my incarceration lets me gain insight into local guards and jailors. I know which will accept bribes, or look the other way for me. I can also seek shelter for myself from authorities with other criminals in the area.",
	source : [["AL:CoS", 8], ["ALbackground", 0]]
};
BackgroundFeatureList["guerilla"] = {
	description : "I've come to know the surrounding other natural features in which I can take refuge--or set up ambushes. I can quickly survey my environment for advantageous features. Additionally, I can scavenge around my natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use.",
	source : [["AL:CoS", 6], ["ALbackground", 0]]
};
BackgroundFeatureList["heart of darkness"] = {
	description : "Those who look into my eyes can see that I have faced unimaginable horror and that I am no stranger to darkness. Though they might fear me, commoners will extend me every courtesy and do their utmost to help. Unless I have shown myself to be a danger to them, they will even take up arms to fight with me, should I find myself facing an enemy alone.",
	source : [["CoS", 209], ["VRGtR", 34], ["ALbackground", 0]]
};

// Equipment pack
PacksList.monsterhunter = {
	name : "Monster hunter's pack (33 gp)",
	source : [["CoS", 209], ["VRGtR", 34]],
	items : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden stake", 3, 1],
		["Amulet holy symbol", "", ""],
		["Holy water, flasks of", 1, 1],
		["Manacles", "", 6],
		["Steel mirror", "", 0.5],
		["Oil, flasks of", 1, 1],
		["Tinderbox", "", 1],
		["Torches", 3, 1]
	]
};

// Magic Items
MagicItemsList["plantslayer battleaxe"] = {
	name : "Plantslayer Battleaxe", // name taken from Adventurers League Content Catalogue v8.07, page 28
	nameAlt : "Adventurer's Battleaxe",
	source : [["CoS", 198]],
	type : "weapon (battleaxe)",
	rarity : "rare",
	magicItemTable : "F",
	description : "This battleaxe's handle is carved with leaves and vines. It deals an extra 1d8 slashing damage against ordinary plants and plant creatures. When a creature of non-good alignment makes an attack with it, it sprouts thorns, dealing 1 magical piercing damage to the wielder after the attack is made.",
	descriptionFull : "The axe's handle is carved with leaves and vines, and it weighs half as much as a normal battleaxe. When the axe hits a plant, whether an ordinary plant or a plant creature, the target takes an extra 1d8 slashing damage. When a creature of non-good alignment wields the axe, it sprouts thorns whenever its wielder makes an attack with it. These thorns prick the wielder for 1 piercing damage after the attack is made, and this damage is considered magical.",
	weight : 2,
	weaponOptions : [{
		baseWeapon : "battleaxe",
		regExpSearch : /^(?=.*plantslayer)(?=.*battleaxe).*$/i,
		name : "Plantslayer Battleaxe",
		source : [["CoS", 198]],
		description : "Versatile (1d10); +1d8 damage vs. plants",
		weight : 2,
		selectNow : true
	}]
}
MagicItemsList["blood spear"] = {
	name : "Blood Spear",
	source : [["CoS", 221]],
	type : "weapon (spear)",
	rarity : "uncommon",
	magicItemTable : "G",
	description : "This spear drains the life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting. When I use it to reduce the target to 0 HP, I gain 2d6 temporary HP. If I'm chosen by Kavan to wield this spear, I gain a +2 bonus to attack and damage rolls made with it.",
	descriptionFull : "Kavan was a ruthless chieftain whose tribe lived in the Balinok Mountains centuries before the arrival of Strahd von Zarovich. Although he was very much alive, Kavan had some traits in common with vampires: he slept during the day and hunted at night, he drank the blood of his prey, and he lived underground. In battle, he wielded a spear stained with blood. His was the first blood spear, a weapon that drains life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting.\n   When you hit with a melee attack using this magic spear and reduce the target to 0 hit points, you gain 2d6 temporary hit points.\n   Any creature can wield the spear, but only the character chosen by Kavan to wield it gains a +2 bonus to attack and damage rolls made with this magic weapon.",
	attunement : true,
	weight : 3,
	choices : ["Chosen of Kavan", "Not a chosen of Kavan"],
	choicesNotInMenu : true,
	"chosen of kavan" : {
		name : "Blood\u200A Spear",
		weaponOptions : [{
			baseWeapon : "spear",
			regExpSearch : /^(?=.*blood)(?=.*spear).*$/i,
			name : "Blood Spear",
			source : [["CoS", 221]],
			description : "Thrown, versatile (1d8); If used to reduce target to 0 HP, I gain 2d6 temp HP",
			modifiers : [2, 2],
			selectNow : true
		}]
	},
	"not a chosen of kavan" : {
		name : "Blood\u200A\u200A Spear",
		weaponOptions : [{
			baseWeapon : "spear",
			regExpSearch : /^(?=.*blood)(?=.*spear).*$/i,
			name : "Blood Spear",
			source : [["CoS", 221]],
			description : "Thrown, versatile (1d8); If used to reduce target to 0 HP, I gain 2d6 temp HP",
			selectNow : true
		}]
	}
}
MagicItemsList["green copper ewer"] = {
	name : "Green Copper Ewer",
	source : [["CoS", 188]],
	type : "wondrous item",
	rarity : "unknown",
	description : "Any poisonous liquid poured into the ewer is instantly transformed into an equal amount of sweet wine. If I speak the ewer's command word while grasping its handle, the ewer fills with 1 gallon of wine. After doing so, it can't produce more wine until the next dawn.",
	descriptionFull : "Any poisonous liquid poured into the ewer is instantly transformed into an equal amount of sweet wine. Furthermore, a creature that grasps the ewer's handle can command the ewer to fill with 1 gallon of wine, and it can't produce more wine until the next dawn."
}
MagicItemsList["gulthias staff"] = {
	name : "Gulthias Staff",
	source : [["CoS", 221]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "G",
	description : "This black wooden quarterstaff has 10 charges, regaining 1d6+4 at dusk. When I hit with it in melee, I can use 1 charge to regain HP equal to the damage dealt, but I must make a DC 12 Wis save or be afflicted by short-term madness (DMG 259). While attuned to it, evil plant creatures are indifferent to me.",
	descriptionLong : "This spongy, black wooden quarterstaff has 10 charges, regaining 1d6+4 at dusk. When I hit with it in melee, I can use 1 charge to regain HP equal to the damage dealt, but I must make a DC 12 Wis save or be afflicted by short-term madness (see table at SRD 201 or DMG 259). While I'm attuned to the staff, evil plant creatures don't regard me as hostile unless I harm them. If it is broken or burned to ashes, it releases an inhuman scream that can be heard out to 300 ft. All blights that can hear the scream immediately wither and die.",
	descriptionFull : "Made from the branch of a Gulthias tree (see the blights entry of the Monster Manual), a Gulthias staff is a spongy, black length of wood. Its evil makes beasts visibly uncomfortable while within 30 feet of it. The staff has 10 charges and regains 1d6+4 of its expended charges daily at dusk.\n   If the staff is broken or burned to ashes, its wood releases a terrible, inhuman scream that can be heard out to a range of 300 feet. All blights that can hear the scream immediately wither and die.\n   " + toUni("Vampiric Strike") + ". The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to regain a number of hit points equal to the damage dealt by the weapon. Each time a charge is spent, red blood oozes from the staff's pores, and you must succeed on a DC 12 Wisdom saving throw or be afflicted with short term madness (see \"Madness\" in chapter 8 of the Dungeon Master's Guide).\n   " + toUni("Blight Bane") + ". While you are attuned to the staff, blights and other evil plant creatures don't regard you as hostile unless you harm them.",
	attunement : true,
	weight : 4,
	usages : 10,
	recovery : "Dusk",
	additional : "regains 1d6+4",
	weaponOptions : [{
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*gulthias)(?=.*staff).*$/i,
		name : "Gulthias Staff",
		source : [["CoS", 221]],
		description : "Versatile (1d8); On hit, 1 charge to regain HP equal to damage dealt but DC 12 Wis save or madness",
		selectNow : true
	}]
}
MagicItemsList["holy symbol of ravenkind"] = {
	name : "Holy Symbol of Ravenkind",
	source : [["CoS", 222]],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	prerequisite : "Requires attunement by a cleric or paladin of good alignment",
	prereqeval : function(v) { return (/good/i).test(What("Alignment")) && (classes.known.cleric || classes.known.paladin); },
	description : "This platinum amulet has 10 charges, regaining 1d6+4 at dawn. As an action, I can use 1 charge to hold vampires (see 3rd page notes). I can use 3 charges with Turn Undead to give disadv. on its saves. As an action, ican use 5 charges to shed daylight, 30-ft radius bright light and dim light for another 30-ft for 10 minutes.",
	descriptionFull : "The Holy Symbol of Ravenkind is a unique holy symbol sacred to the good-hearted faithful of Barovia. It predates the establishment of any church in Barovia. According to legend, it was delivered to a paladin named Lugdana by a giant raven - or an angel in the form of a giant raven. Lugdana used the holy symbol to root out and destroy nests of vampires until her death. The high priests of Ravenloft kept and wore the holy symbol after Lugdana's passing.\n   The holy symbol is a platinum amulet shaped like the sun, with a large crystal embedded in its center.\n   The holy symbol has 10 charges for the following properties. It regains 1d6+4 charges daily at dawn.\n   " + toUni("Hold Vampires") + ". As an Action, you can expend 1 charge and present the holy symbol to make it flare with holy power. Vampires and vampire spawn within 30 feet of the holy symbol when it flares must make a DC 15 Wisdom saving throw. On a failed save, a target is paralyzed for 1 minute. It can repeat the saving throw at the end of its turns to end the effect on itself.\n   " + toUni("Turn Undead") + ". If you have the Turn Undead or the Turn the Unholy feature, you can expend 3 charges when you present the holy symbol while using that feature. When you do so, undead have disadvantage on their saving throws against the effect.\n   " + toUni("Sunlight") + ". As an action, you can expend 5 charges while presenting the holy symbol to make it shed bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight and lasts for 10 minutes or until you end the effect (no action required).",
	attunement : true,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action"]],
	toNotesPage : [{
		name : "Hold Vampires",
		page3notes : true,
		note : [
			"As an action, I can use 1 charge to have all vampires within 30 ft make a DC 15 Wis save",
			"If failed, a target is paralyzed for 1 minute but can repeat the save at the end of its turns"
		],
		additional : "1 charge"
	}]
}
MagicItemsList["icon of ravenloft"] = {
	name : "Icon of Ravenloft",
	source : [["CoS", 222]],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	prerequisite : "Requires attunement by a creature of good alignment",
	prereqeval : function(v) { return (/good/i).test(What("Alignment")); },
	description : "All within 30 ft of this silver statue are under the effect of Protection from Evil and Good that works against fiends and undead. As an action while attuned to it, I can cast Augury or Cure Wounds (3d8+3, 30 ft range) from it, each once per dawn and if I use it for my Turn Undead, the DC increases by 2.",
	descriptionFull : "The Icon of Ravenloft is a 12-inch tall statuette made of the purest silver, weighing 10 pounds. It depicts a cleric kneeling in supplication.\n   The icon was given to Strahd by the archpriest Ciril Romulich, an old family friend, to consecrate the castle and its chapel.\n   While within 30 feet of the icon, a creature is under the effect of a Protection from Evil and Good spell against fiends and undead. Only a creature attuned to the icon can use its other properties.\n   " + toUni("Augury") + ". You can use an action to cast an Augury spell from the icon, with no material components required. Once used, this property can't be used again until the next dawn.\n   " + toUni("Bane of the Undead") + ". You can use the icon as a holy symbol while using the Turn Undead or Turn the Unholy feature. If you do so, increase the save DC by 2.\n   " + toUni("Cure Wounds") + ". While holding the icon, you can take an action to heal one creature that you can see within 30 feet of you. The target regains 3d8+3 hit points, unless it is an undead, a construct, or a fiend. Once used, this property can't be used again until the next dawn.",
	attunement : true,
	weight : 10,
	extraLimitedFeatures : [{
		name : "Icon of Ravenloft [Augury]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Icon of Ravenloft [Cure Wounds]",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingBonus : [{
		name : "All in 30 ft",
		spells : ["protection from evil and good"],
		selection : ["protection from evil and good"],
		firstCol : "markedbox"
	}, {
		name : "Once per dawn",
		spells : ["augury", "cure wounds"],
		selection : ["augury", "cure wounds"],
		firstCol : "oncelr",
		times : 2
	}],
	spellChanges : {
		"protection from evil and good" : {
			range : "30-ft rad",
			time : "Always",
			description : "All in range immune to fear, charm, and possession by fiends and undead, they also disadv. on attacks",
			duration : "Unlimited",
			changes : "All within 30 ft of the Icon of Ravenloft have this spell protect them from undead and fiends."
		},
		"augury" : {
			time : "1 a",
			changes : "Using the Icon of Ravenloft, it only takes an action to cast."
		},
		"cure wounds" : {
			range : "30 ft",
			description : "1 living creature heals 3d8+3 HP if it not an undead, construct, or fiend",
			dynamicDamageBonus : { doNotProcess : true },
			changes : "Using the Icon of Ravenloft, it has a range of 30 ft and always heals 3d8+3 HP, but can't affect undead, a construct, or a fiend."
		}
	}
}
MagicItemsList["lost sword"] = {
	name : "Lost Sword",
	source : [["CoS", 81]],
	type : "weapon (shortsword)",
	rarity : "very rare",
	magicItemTable : "G",
	prerequisite : "Requires attunement by a creature of lawful good alignment",
	prereqeval : function(v) { return (/^(?=.*lawful)(?=.*good).*$/i).test(What("Alignment")); },
	description : "This lawful good shortsword is sentient (Int 11, Wis 13, Cha 13). It adds +1 to hit and damage and shines bright light in a 15-ft radius and dim light for an additional 15 ft. Attuning to it takes only 1 minute. Once per dawn, I can use it to cast Crusader's Mantle. Its purpose is to fight evil. See Notes page.",
	descriptionFull : "The Lost Sword is a sentient lawful good +1 shortsword (Intelligence 11, Wisdom 13, Charisma 13). It has hearing and normal vision out to a range of 120 feet. It communicates by transmitting emotion to the creature carrying or wielding it.\n   The sword's purpose is to fight evil. The sword has the following additional properties:\n \u2022 The sword continually sheds bright light in a 15-foot radius and dim light for an additional 15 feet. Only by destroying the sword can this light be extinguished.\n \u2022 A lawful good creature can attune itself to the sword in 1 minute.\n \u2022 While attuned to the weapon, the sword's wielder can use the sword to cast the Crusader's Mantle spell. Once used, this property of the sword can't be used again until the next dawn.",
	attunement : true,
	weight : 2,
	usages : 1,
	recovery : "dawn",
	additional : "Crusader's Mantle",
	weaponOptions : [{
		baseWeapon : "shortsword",
		regExpSearch : /^(?=.*lost)(?=.*sword).*$/i,
		name : "Lost Sword",
		source : [["CoS", 81]],
		modifiers : [1, 1],
		selectNow : true
	}],
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["crusader's mantle"],
		selection : ["protection from evil and good"],
		firstCol : "oncelr"
	},
	toNotesPage : [{
		name : "Features",
		note : desc([
			"The Lost Sword is a sentient lawful good +1 shortsword.",
			"A lawful good creature can attune itself to the sword in 1 minute.",
			"It continually sheds bright light in a 15-ft radius and dim light for an additional 15 ft. Only by destroying the sword can this light be extinguished.",
			"While attuned to the weapon, the sword's wielder can use the sword to cast the Crusader's Mantle spell. Once used, this property of the sword can't be used again until the next dawn.",
			"It has Intelligence 11, Wisdom 13, and Charisma 13 and can hear and see as a human out to a range of 120 ft. It communicates by transmitting emotion to the creature carrying or wielding it. The sword's purpose is to fight evil."
		]) + "\n\n" + sentientItemConflictTxt
	}]
}
MagicItemsList["saint markovia's thighbone"] = {
	name : "Saint Markovia's Thighbone",
	source : [["CoS", 222]],
	type : "weapon (mace)",
	rarity : "rare",
	description : "This mace sheds bright light in a 20-ft radius and dim light for another 20 ft while held. Fiends and undead hit with it take +2d6 radiant damage, become frightened of me until my next turn ends, and if below 26 HP after its damage, must make a DC 15 Wis save or die. If it hits an undead, it crumbles after the combat.",
	descriptionFull : "Saint Markovia's thighbone has the properties of a mace of disruption. If it scores one or more hits against a vampire or a vampire spawn in the course of a single battle, the thighbone crumbles into dust once the battle concludes.\n   As a youth, Markovia followed her heart and became a priest of the Morninglord soon after her eighteenth birthday. She proved to be a charismatic proselytizer and, before the age of thirty, had gained a reputation for allowing no evil to stand before her.\n   Markovia had long considered Strahd a mad tyrant, but only after his transformation into a vampire did she dare to challenge him. As she rallied her followers and prepared to march on Castle Ravenloft, Strahd sent a group of vampire spawn to her abbey. They confronted Markovia and were destroyed to a one.\n   Suffused with confidence born of a righteous victory, Markovia advanced on Castle Ravenloft. A great battle raged from the catacombs to the parapets. In the end, Markovia never returned to Barovia, and Strahd long afterward walked with a limp and a grimace of pain. It is said that he trapped Markovia in a crypt beneath his castle, and her remains linger there yet.\n   The essence of Markovia's saintliness passed partly into her bones as the rest of her body decomposed. Her remaining thighbone is imbued with power that inflicts grievous injury on the undead.\n   Mace of Disruption. When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
	attunement : true,
	weight : 4,
	weaponOptions : [{
		baseWeapon : "mace",
		regExpSearch : /^(?=.*markovia)(?=.*thighbone).*$/i,
		name : "Saint Markovia's Thighbone",
		source : [["CoS", 222]],
		description : "Fiend/undead +2d6 radiant damage, frightened until my next turn ends, and if HP<26, DC 15 Wis save or die",
		selectNow : true
	}]
}
MagicItemsList["silver dragon shield +2"] = {
	name : "Silver Dragon Shield +2",
	source : [["CoS", 68]],
	type : "shield",
	rarity : "rare",
	description : "While holding this shield, I have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC. It is emblazoned with a stylized silver dragon that is the emblem of the Order of the Silver Dragon. The shield whispers warnings to me, granting me a +2 bonus to initiative while I am not incapacitated.",
	descriptionFull : "While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.\n   The shield is emblazoned with a stylized silver dragon that is the emblem of the Order of the Silver Dragon (see Curse of Strahd, chapter 7). The shield whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
	weight : 6,
	shieldAdd : "Silver Dragon Shield +2",
	addMod : [{ type : "skill", field : "Init", mod : 2, text : "While I carry the Silver Dragon Shield, it whispers warnings to me, granting me a +2 bonus to initiative rolls." }]
}
MagicItemsList["statuette of saint markovia"] = {
	name : "Statuette of Saint Markovia",
	source : [["CoS", 152]],
	type : "wondrous item",
	rarity : "unknown",
	storyItemAL : true,
	description : "This golden statuette grants any good-aligned creature that carries it a +1 bonus to saving throws.",
	descriptionFull : "This golden statuette grants any good-aligned creature that carries it a +1 bonus to saving throws.",
	addMod : [{ type : "save", field : "all", mod : 1, text : "While I carry the Statuette of Saint Markovia, I gain a +1 bonus to all my saving throws." }]
}
MagicItemsList["sunsword"] = {
	name : "Sunsword",
	source : [["CoS", 223]],
	type : "weapon (longsword)",
	rarity : "legendary",
	storyItemAL : true,
	description : "As a bonus action, I can have this hilt create a blade of radiance. It acts like a longsword with +2 to hit and damage, does radiant damage (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. As an action, I can change the light's radius by 5 ft. It is sentient, see Notes page.",
	descriptionLong : "As a bonus action, I can have this longsword hilt create or dismiss a blade of pure radiance. While the blade exists, it acts like a longsword that has +2 to attack and damage rolls, does radiant damage, and has the finesse property. It deals +1d8 damage to undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15-ft radius. As an action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each. I'm proficient with it if I'm proficient with either longswords or shortswords. It is sentient, see Notes page.",
	descriptionFull : "The Sunsword is a unique blade once possessed by Strahd's brother, Sergei von Zarovich. In its original form, it had a platinum hilt and guard, and a thin crystal blade as strong as steel.\n   Strahd employed a powerful wizard named Khazan to destroy the weapon after Sergei's death. The first part of the process required the hilt and the blade to be separated, which Khazan accomplished. While Khazan was busying himself destroying the blade, his apprentice stole the hilt and fled. Khazan later located his apprentice's mutilated corpse in the Svalich Woods, but the hilt was nowhere to be found. To avoid the vampire's wrath, Khazan told Strahd that the entire weapon had been destroyed.\n   The hilt, which is sentient, knows that it can never be reunited with its original crystal blade. It has, however, gained the properties of a sun blade.\n   While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.\n   " + toUni("Sentience") + ". The Sunsword is a sentient chaotic good weapon with an Intelligence of 11, a Wisdom of 17, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon communicates by transmitting emotions to the creature carrying it or wielding it.\n   " + toUni("Personality") + ". The Sunsword's special purpose is to destroy Strahd, not so much because it wants to free the land of Barovia from evil but because it wants revenge for the loss of its crystal blade. The weapon secretly fears its own destruction.",
	attunement : true,
	weight : 3,
	action : [["bonus action", " (start/stop)"], ["action", " (change light)"]],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /sunsword/i,
		name : "Sunsword",
		source : [["CoS", 223]],
		damage : [1, 8, "radiant"],
		description : "Finesse, versatile (1d10); +1d8 damage to undead",
		modifiers : [2, 2],
		selectNow : true
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.name == "Sunsword" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, ''
		]
	},
	toNotesPage : [{
		name : "Features",
		note : desc([
			"The Sunsword is a unique blade once possessed by Strahd's brother, Sergei von Zarovich. In its original form, it had a platinum hilt and guard, and a thin crystal blade as strong as steel.",
			"Strahd employed a powerful wizard named Khazan to destroy the weapon after Sergei's death. The first part of the process required the hilt and the blade to be separated, which Khazan accomplished. While Khazan was busying himself destroying the blade, his apprentice stole the hilt and fled. Khazan later located his apprentice's mutilated corpse in the Svalich Woods, but the hilt was nowhere to be found. To avoid the vampire's wrath, Khazan told Strahd that the entire weapon had been destroyed.",
			"The hilt, which is sentient, knows that it can never be reunited with its original crystal blade. It has, however, gained the properties of a sun blade. While grasping the hilt, I can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, it functions as a magic longsword that has the finesse property. I'm proficient with it if I'm proficient with either shortswords or longswords.",
			"I gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When I hit an undead with it, that target takes an extra 1d8 radiant damage.",
			"The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 ft. The light is sunlight. As an action while the blade persists, I can expand or reduce its radius of bright and dim light by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each.",
			"The Sunsword is a sentient chaotic good weapon with an Intelligence of 11, a Wisdom of 17, and a Charisma of 16. It has hearing and normal vision out to a range of 60 feet. The weapon communicates by transmitting emotions to the creature carrying it or wielding it.",
			"The Sunsword's special purpose is to destroy Strahd, not so much because it wants to free the land of Barovia from evil but because it wants revenge for the loss of its crystal blade. The weapon secretly fears its own destruction"
		]) + "\n\n" + sentientItemConflictTxt
	}]
}
