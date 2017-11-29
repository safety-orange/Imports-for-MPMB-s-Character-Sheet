var iFileName = "UA_20161114_Bard-Colleges.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Bard Colleges article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BC"] = {
	name : "Unearthed Arcana: Bard Colleges",
	abbreviation : "UA:BC",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf",
	date : "2016/11/14"
};

// Adds 2 subclasses for the Bard
AddSubClass("bard", "college of glamour", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : ["UA:BC", 1],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : ["UA:BC", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I expend one bardic inspiration die to aid those within 60 ft of me" + "\n   " + "A number of allies equal to my Cha mod gain twice the die roll in temporary HP" + "\n   " + "They can use a reaction to move their speed toward me, without opportunity attacks",
			additional : "1 bardic inspiration die",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : ["UA:BC", 1],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : "\n   " + "By performing for at least 10 minutes, I can charm humanoids within 60 ft of me" + "\n   " + "At the end of the performance, my Cha mod number of targets must make a Wis save" + "\n   " + "On a fail, a target is charmed for 1 hour; If success, it doesn't knows I tried to charm it" + "\n   " + "While charmed, the target idolizes me, hinders those opposing me, and avoids violence" + "\n   " + "This lasts until a target takes damage, I attack it, or if it sees me attacking its allies"
		},
		"subclassfeature6" : {
			name : "Mantle of Majesty",
			source : ["UA:BC", 1],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""],
			description : "\n   " + "As a bonus action, I take on an appearance of unearthly beauty for 1 minute" + "\n   " + "As a bonus action during this time, I can cast command without using a spell slot" + "\n   " + "Creatures charmed by me automatically fail their saves against these command spells",
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				oncelr : true
			}]
		},
		"subclassfeature14" : {
			name : "Unspeakable Majesty",
			source : ["UA:BC", 2],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : ["action", ""],
			description : "\n   " + "As an action, I can cast Sanctuary on myself without using a spell slot" + "\n   " + "If a creature fails its save to this, I gain adv. on all Cha checks against it for 1 min" + "\n   " + "In addition, the target has disadv. on saves it makes against my spells on my next turn",
			spellcastingBonus : [{
				name : "Unspeakable Majesty",
				spells : ["sanctuary"],
				selection : ["sanctuary"],
				oncesr : true
			}]
		}
	}
});
AddSubClass("bard", "college of whispers", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : ["UA:BC", 2],
	features : {
		"subclassfeature3" : {
			name : "Venomous Blades",
			source : ["UA:BC", 2],
			minlevel : 3,
			description : "\n   " + "When I hit with a weapon attack, I can expend a bardic inspiration die to add damage" + "\n   " + "I roll the inspiration die twice, dealing the total in Poison damage to the target" + "\n   " + "I can do this no more than once per round on my turn",
			additional : "1 bardic inspiration die"
		},
		"subclassfeature3.1" : {
			name : "Venomous Words",
			source : ["UA:BC", 2],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : "\n   " + "By speaking in private with a humanoid for at least 10 minutes, I can try to frighten it" + "\n   " + "After the conversation, the target must make a Wisdom save or be frightened of me" + "\n   " + "If the save is successful, the target doesn't know I try to frighten it" + "\n   " + "While frightened, the target avoids the company of others, including its allies" + "\n   " + "The target also tries to hide in the most secret, safest place available to it" + "\n   " + "This lasts for 1 hour or until it is attacked/damaged, or if it sees me attacking its allies"
		},
		"subclassfeature6" : {
			name : "Mantle of Whispers",
			source : ["UA:BC", 2],
			minlevel : 6,
			action : ["reaction", ""],
			description : "\n   " + "As a reaction when a creature dies within 5 ft or by my hand, I can capture its shadow" + "\n   " + "I can use shadows of those with the same type and size as me (or Medium if I'm Small)" + "\n   " + "I can have only one captured shadow at a time and I can don it as a shadow disguise",
			extraname : "Mantle of Whispers",
			"shadow disguise" : {
				name : "Shadow Disguise",
				source : ["UA:BC", 2],
				action : ["action", " (start)"],
				description : "\n   " + "As an action, I can don a shadow that I captured as a disguise for 1 hour or until I stop it" + "\n   " + "I take on the creature's appearance and I can access its surface memories, but not secrets" + "\n   " + "I have access to information that it would would freely share with a casual acquaintance" + "\n   " + "This is enough that I can pass yourself off as the creature by drawing on its memories" + "\n   " + "Anybody can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5" + "\n   " + "The knowledge disappears when the disguise ends",
				eval : "AddAction(\"bonus action\", \"Shadow Disguise (end)\", \"Bard (College of Whispers)\");",
				removeeval : "RemoveAction(\"bonus action\", \"Shadow Disguise (end)\");"
			},
			eval : "ClassFeatureOptions([\"bard\", \"subclassfeature6\", \"shadow disguise\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"bard\", \"subclassfeature6\", \"shadow disguise\", \"extra\"], \"remove\");"
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : ["UA:BC", 3],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			description : "\n   " + "As an action, I whisper to a creature within 30 ft that can hear and understand me" + "\n   " + "Only the target can hear me; It must make a Wisdom save or be charmed by me" + "\n   " + "If failed, it thinks I know its most mortifying secret, otherwise it only hears mumbling" + "\n   " + "While charmed, the target obeys my commands, but won't risk its life or fight for me" + "\n   " + "This lasts for 8 hours or until I or my allies attack or damage it" + "\n   " + "When the effect ends, the target has no idea why it was so afraid of me"
		}
	}
});
