var iFileName = "ua_20161107_Barbarian-Primal-Paths.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Barbarian Primal Paths article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BPP"] = {
	name : "Unearthed Arcana: Barbarian Primal Paths",
	abbreviation : "UA:BPP",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf",
	date : "2016/11/07"
};

// A three subclasses for the Barbarian
AddSubClass("barbarian", "ancestral guardian", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["UA:BPP", 1],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["UA:BPP", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action while raging, I can choose a creature within 5 ft of me that I can see" + "\n   " + "The creature has disadvantage on attack rolls that don't target me" + "\n   " + "If it takes the Disengage action within 5 feet of me, its speed is halved for its turn" + "\n   " + "This lasts until the start of my next turn or my rage ends, whichever comes ",
			action : ["bonus action", " (in Rage)"]
		},
		"subclassfeature6" : {
			name : "Ancestral Shield",
			source : ["UA:BPP", 1],
			minlevel : 6,
			description : "\n   " + "While I'm raging, I can transfer my resistance to an ally I can see within 30 ft of me" + "\n   " + "As a reaction when an ally takes bludgeoning, piercing, or slashing damage" + "\n   " + "My ally keeps the resistance, and I lose it, until the start of my next turn",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["UA:BPP", 1],
			minlevel : 10,
			description : "\n   " + "I can consult my ancestral spirits to give myself advantage on a Int or Wis check",
			usages : 3,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["UA:BPP", 1],
			minlevel : 14,
			description : "\n   " + "While I'm raging, I can have my vengeful ancestors attack for 2d8 force damage" + "\n   " + "As a reaction when I or an ally I can see within 30 feet of me is damaged in melee",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("barbarian", "storm herald", {
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : ["UA:BPP", 2],
	fullname : "Storm Herald",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Storm Aura",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Use the \"Choose Feature\" button above to select the aura",
			choices : ["Desert", "Sea", "Tundra"],
			"desert" : {
				name : "Storm of Fury: Desert",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Any enemy that ends its turn in my aura takes fire damage",
				additional : ["", "", "2 fire damage", "3 fire damage", "3 fire damage", "3 fire damage", "3 fire damage", "4 fire damage", "4 fire damage", "4 fire damage", "4 fire damage", "5 fire damage", "5 fire damage", "5 fire damage", "5 fire damage", "6 fire damage", "6 fire damage", "6 fire damage", "6 fire damage", "7 fire damage"],
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'desert']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"sea" : {
				name : "Storm of Fury: Sea",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "At the end of each of my turns, I can choose a creature in my aura, other than myself" + "\n   " + "It must make a Dex save or take lightning damage, or half damage on a successful save" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Constitution modifier",
				additional : ["", "", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "4d6"],
				usages : 1,
				recovery : "turn",
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'sea']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"tundra" : {
				name : "Storm of Fury: Tundra",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Any enemy that ends its turn in my aura takes cold damage",
				additional : ["", "", "2 cold damage", "3 cold damage", "3 cold damage", "3 cold damage", "3 cold damage", "4 cold damage", "4 cold damage", "4 cold damage", "4 cold damage", "5 cold damage", "5 cold damage", "5 cold damage", "5 cold damage", "6 cold damage", "6 cold damage", "6 cold damage", "6 cold damage", "7 cold damage"],
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'tundra']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			}
		},
		"subclassfeature6" : {
			name : "Storm Soul",
			source : ["UA:BPP", 2],
			minlevel : 6,
			description : "\n   " + "Use the \"Choose Feature\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : "\n   " + "I have resistance to fire damage and don't suffer the effects of extreme heat",
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] }
			},
			"sea" : {
				name : "Storm Soul: Sea",
				description : "\n   " + "I have resistance to lightning damage and can breathe underwater",
				dmgres : ["Lightning"]
			},
			"tundra" : {
				name : "Storm Soul: Tundra",
				description : "\n   " + "I have resistance to cold damage and don't suffer the effects of extreme cold",
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature6,' + FeaChoice, false);};};"
		},
		"subclassfeature10" : {
			name : "Shield of the Storm",
			source : ["UA:BPP", 2],
			minlevel : 10,
			description : "\n   " + "While I'm raging, allies within my aura gain the benefits of my Storm Soul feature"
		},
		"subclassfeature14" : {
			name : "Raging Storm",
			source : ["UA:BPP", 2],
			minlevel : 14,
			description : "\n   " + "Use the \"Choose Feature\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : "\n   " + "Enemy in my aura move more than 5 ft on the ground must make a Strength save" + "\n   " + "On a fail, it moves only 5 ft and its speed drops to 0 until the start of its next turn" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Constitution modifier"
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : "\n   " + "Creatures in my aura hit by my attack must make a Str save or be knocked prone" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Strength modifier",
				calcChanges : {
					atkAdd : ["if (isMeleeWeapon && classes.known.barbarian && classes.known.barbarian.level > 13 && (/\\brage\\b/i).test(WeaponText)) {fields.Description += (fields.Description ? '; ' : '') + 'Str save or knocked prone'; }; ", "If I include the word 'Rage' in a melee weapon's name, it will show in its description that it forces targets that are hit to make a Strength saving throw or be knocked prone."]
				}
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : "\n   " + "The area within my aura is difficult terrain for my enemies"
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature14,' + FeaChoice, false);};};"
		}
	}
});
AddSubClass("barbarian", "zealot", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : ["UA:BPP", 2],
	fullname : "Zealot",
	features : {
		"subclassfeature3" : {
			name : "Divine Fury",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "While raging, I can become cloaked in an aura of divine power until my rage ends" + "\n   " + "Choose a damage type using the \"Choose Feature\" button above",
			additional : ["", "", "1d6+1", "1d6+2", "1d6+2", "1d6+3", "1d6+3", "1d6+4", "1d6+4", "1d6+5", "1d6+5", "1d6+6", "1d6+6", "1d6+7", "1d6+7", "1d6+8", "1d6+8", "1d6+9", "1d6+9", "1d6+10"],
			usages : 1,
			recovery : "turn",
			choices : ["Necrotic Damage", "Radiant Damage"],
			"necrotic damage" : {
				name : "Divine Fury: Necrotic",
				description : "\n   " + "While raging, I become cloaked in an aura of divine power until my rage ends" + "\n   " + "At the end of my turn, each creature within 5 feet of me takes necrotic damage"
			},
			"radiant damage" : {
				name : "Divine Fury: Radiant",
				description : "\n   " + "While raging, I become cloaked in an aura of divine power until my rage ends" + "\n   " + "At the end of my turn, each creature within 5 feet of me takes radiant damage"
			}
		},
		"subclassfeature3.1" : {
			name : "Warrior of the Gods",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "Spells restoring me to life (not undeath or anything else) don't need material comp."
		},
		"subclassfeature6" : {
			name : "Zealous Focus",
			source : ["UA:BPP", 3],
			minlevel : 6,
			description : "\n   " + "As a reaction when I fail a saving throw while raging, I can instead succeed on it" + "\n   " + "Doing so immediately ends my rage and I can't rage again until I finish a short rest",
			usages : 1,
			recovery : "short rest",
			action : ["reaction", " (in Rage)"]
		},
		"subclassfeature10" : {
			name : "Zealous Presence",
			source : ["UA:BPP", 3],
			minlevel : 10,
			description : "\n   " + "As an action, I howl in fury and unleash a battle cry infused with divine energy" + "\n   " + "Allies within 60 ft of me gain adv. on attacks and saves until the start of my next turn",
			usages : 1,
			recovery : "long rest",
			action : ["action", " (allies within 60 feet)"]
		},
		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : ["UA:BPP", 3],
			minlevel : 14,
			description : "\n   " + "While raging, having 0 hit points doesn't knock me unconscious" + "\n   " + "I still must make death saves, and I suffer the normal effects of taking damage" + "\n   " + "However, if I would die due to failing death saves, I don't die until my rage ends"
		}
	}
});
