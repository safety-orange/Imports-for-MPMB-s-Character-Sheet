var iFileName = "ua_20210311_Folk-of-the-Feywild.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2021: Folk of the Feywild article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FotF"] = {
	name : "Unearthed Arcana: Folk of the Feywild",
	abbreviation : "UA:FotF",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_FeyFolk.pdf",
	date : "2021/03/11"
};

// Adds four races:

// Fairy
RaceList["fairy-ua"] = {
	regExpSearch : /fairy/i,
	name : "Fairy",
	source : ["UA:FotF", 2],
	plural : "Fairies",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 20 },
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one score and +1 to a different score -OR- +1 to three different scores. Chosen scores cannot be raised above 20",
	trait : "I am a Small Fey.\nFairy Flight: My flying speed equals my walking speed and I can hover. My flight is magical and does not require the use of wings.\nFairy Magic: I know the druidcraft and faerie fire spells. I can cast faerie fire without expending a spell slot, and I must finish a long rest before I can cast it this way again. I can also cast this spell using any spell slots I have. My spellcasting ability for these spells is Intelligence, Wisdom, or Charisma.\nFey Passage: I can squeeze through a space as narrow as 1 inch wide."
};

// Hobgoblin of the Feywild
RaceList["hobgoblin-ua"] = {
	regExpSearch : /hobgoblin/i,
	name : "Hobgoblin of the Feywild",
	source : ["UA:FotF", 2],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	scorestxt : "+2 to one score and +1 to a different score -OR- +1 to three different scores. Chosen scores cannot be raised above 20",
	trait : "I am a Medium Humanoid.\nDarkvision: I can see in dim light within 60ft as bright and darkness as dim. I discern only shades of gray in darkness.\nFey Ancestry: I have advantage on saving throws I make to avoid or end the charmed condition on myself.\nFortune from the Many: If I miss with an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30ft of me (max +5). I can use this a number of times equal to my proficiency bonus, and regain all expended uses a long rest.\nFey Gift: I can Help as a bonus action a number of times equal to my proficiency bonus. I regain all expended uses after a long rest. Starting at 3rd level, I choose one of these options below each time I Help:\nHospitality: Me and the target of Help each gain a number of temporary hit points equal to 1d6 plus my proficiency bonus.\nPassage: Me and the target of Help each increase walking speed by 10ft until the start of my next turn.\nSpite: Until the start of my turn, the first time me or the target of Help hits a creature with an attack roll, that creature has disadvantage on the next attack roll that it makes within the next minute.",
	action : ['bonus action', 'Fey Gift']
};

// Owlfolk
RaceList["owlfolk-ua"] = {
	regExpSearch : /owlfolk/i,
	name : "Owlfolk",
	source : ["UA:FotF", 3],
	plural : "Owlfolk",
	size : 3, // can be medium (3) or small (4)
	skills : ["Stealth"],
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 20 },
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 90]],
	scorestxt : "+2 to one score and +1 to a different score -OR- +1 to three different scores. Chosen scores cannot be raised above 20",
	trait : "I am a Medium or Small Humanoid.\nDarkvision: I can see in dim light within 90ft as bright and darkness as dim. I discern only shades of gray in darkness.\nMagic Sight: I can cast Detect Magic, only as a ritual. My spellcasting ability for this spell is Intelligence, Wisdom, or Charisma. I can also cast this normally with any spell slots.\nNimble Flight: When I fall, I can use my reaction to make a Dexterity saving throw (DC 10) to fly in place until my next turn.\nSilent Feathers: I am proficient in Stealth.",
	action : ['reaction', 'Nimble Flight']
};

// Rabbitfolk
RaceList["rabbitfolk-ua"] = {
	regExpSearch : /rabbitfolk/i,
	name : "Rabbitfolk",
	source : ["UA:FotF", 3],
	plural : "Rabbitfolk",
	size : 3, // can be medium (3) or small (4)
	skills : ["Perception"],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one score and +1 to a different score -OR- +1 to three different scores. Chosen scores cannot be raised above 20",
	trait : "I am a Medium or Small Humanoid.\nHare-Trigger: I add my proficiency bonus to my initiative rolls.\nLeporine Senses: I have proficiency in Perception.\nLucky Footwork: When I fail a Dexterity saving throw, I can use my reaction to roll a d4 and add it to the result.\nRabbit Hop: Once during each of my turns when I walk at least 5 feet, I can hop, rolling a d12 and moving that many feet in any direction. This doesn’t cost movement, but my speed must not be 0.",
	action : ['reaction', 'Lucky Footwork']
};