var iFileName = "pub_20190521_GoS.js";
RequiredSheetVersion(12.999);
// This file adds all material from the Ghosts of Saltmarsh adventure to MPMB's Character Record Sheet

// Define the source
SourceList["GoS"] = {
	name : "Ghosts of Saltmarsh [backgrounds, beasts, items]",
	abbreviation : "GoS",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/ghosts-saltmarsh",
	date : "2019/05/21"
};

BackgroundList["fisher"] = {
	regExpSearch : /fisher/i,
	name : "Fisher",
	source : [["GoS", 29], ["ALbackground", 0]],
	skills : ["History", "Survival"],
	gold : 10,
	equipleft : [
		["Fishing tackle", "", 4],
		["Net", "", 3]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Fishing lure or oiled leather boots", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	feature : "Harvest the Water",
	trait : [
		"I am unmoved by the wrath of nature.",
		"My friends are my crew; we sink or float together.",
		"I need long stretches of quiet to clear my head.",
		"Rich folk don't know the satisfaction of hard work.",
		"I laugh heartily, feel deeply, and fear nothing.",
		"I work hard; nature offers no handouts.",
		"I dislike bargaining; state your price and mean it.",
		"Luck favors me, and I take risks others might not."
	],
	ideal : [
		["Camaraderie", "Camaraderie. Good people make even the longest voyage bearable. (Good)"],
		["Luck", "Luck. Our luck depends on respecting its rules—now throw this salt over your shoulder. (Lawful)"],
		["Daring", "Daring. The richest bounty goes to those who risk everything. (Chaotic)"],
		["Plunder", "Plunder. Take all that you can and leave nothing for the scavengers. (Evil)"],
		["Balance", "Balance. Do not fish the same spot twice in a row; suppress your greed, and nature will reward you. (Neutral)"],
		["Hard Work", "Hard Work. No wave can move a soul hard at work. (Any)"]
	],
	bond : [
		"I lost something important in the deep sea, and I intend to find it.",
		"Someone else's greed destroyed my livelihood, and I will be compensated.",
		"I will fish the many famous waters of this land.",
		"The gods saved me during a terrible storm, and I will honor their gift.",
		"My destiny awaits me at the bottom of a particular pond in the Feywild.",
		"I must repay my village's debt."
	],
	flaw : [
		"I am judgmental, especially of those I deem homebodies or otherwise lazy.",
		"I become depressed and anxious if I'm away from the sea too long.",
		"I have lived a hard life and find it difficult to empathize with others.",
		"I am inclined to tell long-winded stories at inopportune times.",
		"I work hard, but I play harder.",
		"I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits."
	],
	extra : [
		"Select a Fishing Tale",
		"Lobster wrestling",
		"It dragged the boat",
		"Fins of pure gold",
		"Ghost fish",
		"Nemesis clam",
		"It swallowed the sun",
		"Dive into the abyss",
		"Love story"
	]
};
BackgroundFeatureList["harvest the water"] = {
	description : "I gain advantage on ability checks made using fishing tackle. If I have access to a body of water that sustains marine life, I can maintain a moderate lifestyle while working as a fisher, and I can catch enough food to feed myself and up to ten other people each day.",
	source : [["GoS", 29], ["ALbackground", 0]]
};

BackgroundList["marine"] = {
	regExpSearch : /marine/i,
	name : "Marine",
	source : [["GoS", 31], ["ALbackground", 0]],
	skills : ["Athletics", "Survival"],
	gold : 10,
	equipleft : [
		["Folded flag with company symbol", "", 1]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Dagger", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	toolProfs : ["Vehicles (water)", "Vehicles (land)"],
	feature : "Steady",
	trait : [
		"I speak rarely but mean every word I say.",
		"I laugh loudly and see the humor in stressful situations.",
		"I prefer to solve problems without violence, but I finish fights decisively.",
		"I enjoy being out in nature; poor weather never sours my mood.",
		"I am dependable.",
		"I am always working on some project or other.",
		"I become cantankerous and quiet in the rain.",
		"When the sea is within my sight, my mood is jovial and optimistic."
	],
	ideal : [
		["Teamwork", "Teamwork. Success depends on cooperation and communication. (Good)"],
		["Code", "Code. The marines' code provides a solution for every problem, and following it is imperative. (Lawful)"],
		["Embracing", "Embracing. Life is messy. Throwing yourself into the worst of it is necessary to get the job done. (Chaotic)"],
		["Might", "Might. The strong train so that they might rule those who are weak. (Evil)"],
		["Bravery", "Bravery. To act when others quake in fear—this is the essence of the warrior. (Any)"],
		["Perseverance", "Perseverance. No injury or obstacle can turn me from my goal. (Any)"]
	],
	bond : [
		"I face danger and evil to offset an unredeemable act in my past.",
		"I. Will. Finish. The. Job.",
		"I must set an example of hope for those who have given up.",
		"I'm searching for a fellow marine captured by an elusive enemy.",
		"Fear leads to tyranny, and both must be eradicated.",
		"My commander betrayed my unit, and I will have revenge."
	],
	flaw : [
		"I grow combative and unpredictable when I drink.",
		"I find civilian life difficult and struggle to say the right thing in social situations.",
		"My intensity can drive others away.",
		"I hold grudges and have difficulty forgiving others.",
		"I become irrational when innocent people are hurt.",
		"I sometimes stay up all night listening to the ghosts of my fallen enemies."
	],
	extra : [
		"Select a Hardship Endured",
		"Nearly drowned",
		"Captured",
		"Sacrifice",
		"Juggernaut",
		"Stowaway",
		"Leave none behind"
	]
};
BackgroundFeatureList["steady"] = {
	description : "I can move twice the normal amount of time (up to 16 hours) each day before being subject to the effect of a forced march and need to make Constitution saves at the end of each extra hour to avoid gaining a level of exhaustion. Additionally, I can automatically find a safe route to land a boat on shore, provided such a route exists.",
	source : [["GoS", 31], ["ALbackground", 0]]
};

BackgroundList["shipwright"] = {
	regExpSearch : /shipwright/i,
	name : "Shipwright",
	source : [["GoS", 33], ["ALbackground", 0]],
	skills : ["History", "Perception"],
	gold : 10,
	equipleft : [
		["Blank book", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
		["Carpenter's tools", "", 8]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	toolProfs : ["Carpenter's tools", "Vehicles (water)"],
	feature : "I'll Patch It!",
	trait : [
		"I love talking and being heard more than I like to listen.",
		"I'm extremely fond of puzzles.",
		"I thrive under pressure.",
		"I love sketching and designing objects, especially boats.",
		"I'm not afraid of hard work—in fact, I prefer it.",
		"A pipe, an ale, and the smell of the sea: paradise.",
		"I have an endless supply of cautionary tales related to the sea.",
		"I don't mind getting my hands dirty."
	],
	ideal : [
		["Crew", "Crew. If everyone on deck pitches in, we'll never sink. (Good)"],
		["Careful Lines", "Careful Lines. A ship must be balanced according to the laws of the universe. (Lawful)"],
		["Invention", "Invention. Make what you need out of whatever is at hand. (Chaotic)"],
		["Perfection", "Perfection. To measure a being and find it lacking is the greatest disappointment. (Evil)"],
		["Reflection", "Reflection. Muddied water always clears in time. (Any)"],
		["Hope", "Hope. The horizon at sea holds the greatest promise. (Any)"]
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
		"I don't know when to throw something away. You never know when it might be useful again.",
		"I get frustrated to the point of distraction by shoddy craftsmanship.",
		"Though I am an excellent crafter, my work tends to look as though it belongs on a ship.",
		"I am so obsessed with sketching my ideas for elaborate inventions that I sometimes forget little thing like eating and sleeping.",
		"I'm judgmental of those who are not skilled with tools of some kind.",
		"I sometimes take things that don't belong to me, especially if they are very well made."
	],
	extra : [
		"Select a Sea's Influence",
		"Grand designs",
		"Solid and sound",
		"Favored",
		"Master of armaments",
		"Low places",
		"Mysteries of the deep"
	]
};
BackgroundFeatureList["i'll patch it!"] = {
	description : "Provided I have carpenter's tools and wood, I can perform repairs on a water vehicle. When I use this ability, I restore a number of hit points to the hull of a water vehicle equal to 5\xD7 my proficiency modifier. A vehicle cannot be patched by me in this way again until after it has been pulled ashore and fully repaired.",
	source : [["GoS", 33], ["ALbackground", 0]]
};

BackgroundList["smuggler"] = {
	regExpSearch : /smuggler/i,
	name : "Smuggler",
	source : [["GoS", 34], ["ALbackground", 0]],
	skills : ["Athletics", "Deception"],
	gold : 15,
	equipright : [
		["Common clothes", "", 3],
		["Leather boots or vest", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	toolProfs : ["Vehicles (water)"],
	feature : "Down Low",
	trait : [
		"I love being on the water but hate fishing.",
		"I think of everything in terms of monetary value.",
		"I never stop smiling.",
		"Nothing rattles me; I have a lie for every occasion.",
		"I love gold but won't cheat a friend.",
		"I enjoy doing things others believe to be impossible.",
		"I become wistful when I see the sun rise over the ocean.",
		"I am no common criminal; I am a mastermind."
	],
	ideal : [
		["Wealth", "Wealth. Heaps of coins in a secure vault is all I dream of. (Any)"],
		["Smuggler's Code", "Smuggler's Code. I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents. (Lawful)"],
		["All for a Coin", "All for a Coin. I'll do nearly anything if it means I turn a profit. (Evil)"],
		["Peace and Prosperity", "Peace and Prosperity. I smuggle only to achieve a greater goal that benefits my community. (Good)"],
		["People", "People. For all my many lies, I place a high value on friendship. (Any)"],
		["Daring", "Daring. I am most happy when risking everything. (Any)"]
	],
	bond : [
		"My vessel was stolen from me, and I burn with the desire to recover it.",
		"I intend to become the leader of the network of smugglers that I belong to.",
		"I owe a debt that cannot be repaid in gold.",
		"After one last job, I will retire from the business.",
		"I was tricked by a fellow smuggler who stole something precious from me. I will find that thief.",
		"I give most of my profits to a charitable cause, and I don't like to brag about it."
	],
	flaw : [
		"Lying is reflexive, and I sometimes engage in it without realizing.",
		"I tend to assess my relationships in terms of profit and loss.",
		"I believe everyone has a price and am cynical toward those who present themselves as virtuous.",
		"I struggle to trust the words of others.",
		"Few people know the real me.",
		"Though I act charming, I feel nothing for others and don't know what friendship is."
	],
	extra : [
		"Select a Claim to Fame",
		"Spirit of the whale",
		"Cart and sword",
		"The recruit",
		"River of shadows",
		"Gold-hearted",
		"Playing both sides"
	]
};
BackgroundFeatureList["down low"] = {
	description : "I am acquainted with a network of smugglers who are willing to help me out of tight spots. While in a particular town, city, or other similarly sized community, my companions and I can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, I can choose to keep my presence (and that of my companions) a secret.",
	source : [["GoS", 34], ["ALbackground", 0]]
};

CreatureList["fish"] = {
	name : "Fish",
	source : ["GoS", 215],
	size : 5,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "swim 40 ft",
	scores : [2, 16, 9, 1, 7, 2],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 8,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [],
	traits : [{
		name : "Water Breathing",
		description : "The fish can breathe only underwater."
	}]
}
CreatureList["giant white moray eel"] = {
	name : "Giant White Moray Eel",
	source : ["GoS", 216],
	size : 1,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 60,
	hd : [8, 12],
	speed : "swim 40 ft",
	scores : [19, 14, 12, 1, 10, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 2,
		"stealth" : 4
	},
	senses : "Blindsight 10 ft",
	passivePerception : 12,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [2, 6, "piercing"],
		range : "Melee (10 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Breathing",
		description : "The eel can breathe only underwater."
	}]
}
CreatureList["giant coral snake"] = {
	name : "Giant Coral Snake",
	source : ["GoS", 236],
	size : 2,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 90,
	hd : [12, 10],
	speed : "30 ft, swim 30 ft",
	scores : [12, 16, 14, 2, 10, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 2
	},
	senses : "Blindsight 10 ft",
	passivePerception : 12,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Target DC 12 Con save or stunned until end of its next turn and short-term madness for 10 min"
	}]
}
CreatureList["giant sea eel"] = {
	name : "Giant Sea Eel",
	source : ["GoS", 237],
	size : 2,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 19,
	hd : [3, 10],
	speed : "swim 40 ft",
	scores : [11, 14, 12, 2, 10, 7],
	saves : ["", 4, "", "", "", ""],
	skills : {
		"perception" : 2,
		"stealth" : 4
	},
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [2, 10, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Breathing",
		description : "The eel can breathe only underwater."
	}]
}
CreatureList["sea lion"] = {
	name : "Sea Lion",
	source : ["GoS", 252],
	size : 2,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 16,
	hp : 15,
	hd : [2, 10],
	speed : "15 ft, swim 30 ft",
	scores : [17, 10, 14, 5, 10, 12],
	saves : ["", 2, 4, "", "", ""],
	skills : {
		"athletics" : 5,
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "One bite and two claw attacks as an Attack action"
	}, {
		name : "Claw",
		ability : 1,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "Target pushed up to 5 ft away; 2 claw and 1 bite attack as Attack action"
	}],
	traits : [{
		name : "Hold Breath",
		description : "The sea lion can hold its breath for 15 minutes."
	}, {
		name : "Multiattack",
		description : "The sea lion makes three attacks: one with its bite and two with its claws."
	}]
}
