var iFileName = "pub_20160315_CoS.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds from the Curse of Strahd adventure book and the optional backgrounds from the Adventurers League season 4 (Curse of Strahd) to MPMB's Character Record Sheet

// Define the sources
SourceList.CoS={
	name : "Curse of Strahd [background, pack]",
	abbreviation : "CoS",
	group : "Adventure Books",
	url : "https://media.wizards.com/2016/downloads/DND/CoS_Character_Options.pdf",
	date : "2016/03/15"
};
SourceList["AL:CoS"]={
	name : "Curse of Strahd Backgrounds", // v1.1
	abbreviation : "AL:CoS",
	group : "Adventurers League",
	url : "https://dndadventurersleague.org/wp-content/uploads/2016/06/Curse-of-Strahd-Backgrounds-v1.1.pdf",
	date : "2016/04/07"
};

// Backgrounds (with contributions by RCanine)
BackgroundList["haunted one"] = {
	regExpSearch : /haunted/i,
	name : "Haunted One",
	source : [["CoS", 209], ["ALbackground", 0]],
	skills : "",
	skillstxt : "Choose two from Arcana, Investigation, Religion, and Survival", // As only one skill proficiency in Curse of Strahd, but that was corrected in Curse of Strahd: Character Options
	languageProfs : [1],
	gold : 0,
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
	],
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
	source : [["CoS", 209], ["ALbackground", 0]]
};

// Equipment pack
PacksList.monsterhunter = {
	name : "Monster hunter's pack (33 gp)",
	source : ["CoS", 209],
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
