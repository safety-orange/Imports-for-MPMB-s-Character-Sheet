var iFileName = "pub_20171121_XGtE.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds and beasts from Xanathar's Guide to Everything to MPMB's Character Record Sheet

// Define the source
SourceList.X={
	name : "Xanathar's Guide to Everything",
	abbreviation : "XGtE",
	group : "Primary Sources",
	url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything",
	date : "2017/11/21"
};

AddSubClass("cleric", "grave domain2", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave)).*$/i,
	subname : "Grave Domain",
	source : ["X", 19],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Circle of Mortality",
			source : ["X", 20],
			minlevel : 1,
			action : ["bonus action", ""],
			description : "\n   " + "Spells I cast to heal a living creature at 0 HP have their dice count as their max result" + "\n   " + "I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft",
			spellcastingBonus : {
				name : "Circle of Mortality",
				spells : ["spare the dying"],
				selection : ["spare the dying"],
				atwill : true
			}
		},
		"subclassfeature1.1" : {
			name : "Eyes of the Grave",
			source : ["X", 20],
			minlevel : 1,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest",
			description : "\n   " + "As an action, I sense undead within 60 ft that aren't protected from divination magic" + "\n   " + "Until the end of my next turn, I sense the location of any undead not behind total cover"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : ["X", 20],
			minlevel : 2,
			action : ["action", ""],
			description : "\n   " + "As an action, I can curse a creature within 30 ft until the end of my next turn" + "\n   " + "It is vulnerable to all the damage from the next attack by me or my allies that hits it"
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : ["X", 20],
			minlevel : 6,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest",
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["X", 20],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : ["X", 20],
			minlevel : 17,
			description : "\n   " + "Once per round, if I'm not incapacitated, I can manipulate the energy of the dying" + "\n   " + "When an enemy I can see dies within 60 ft of me, I or an ally within 60 ft regain HP" + "\n   " + "The HP regained is equal to the enemy's number of Hit Dice"
		}
	}
});



/* SpellsList["catnap"]
SpellsList["cause fear"] // UA:SS
SpellsList["ceremony"] // UA:SS
SpellsList["chaos bolt"] // UA:SS
SpellsList["charm monster"]
SpellsList["create homunculus"]
SpellsList["crown of stars"]
SpellsList["dance macabre"]
SpellsList["dawn"]
SpellsList["dragon's breath"]
SpellsList["druid grove"]
SpellsList["enemies abound"]
SpellsList["far step"]
SpellsList["find greater steed"]
SpellsList["guardian of nature"]
SpellsList["healing spirit"]
SpellsList["holy weapon"]
SpellsList["illusory dragon"]
SpellsList["infernal calling"]
SpellsList["infestation"] // UA:SS
SpellsList["invulnerability"]
SpellsList["life transferece"]
SpellsList["maddening darkness"]
SpellsList["mass polymorph"]
SpellsList["mental prison"]
SpellsList["mighty fortress"]
SpellsList["mind spike"]
SpellsList["negative energy flood"]
SpellsList["power word pain"]
SpellsList["primal savagery"] // UA:SS
SpellsList["psychic scream"]
SpellsList["scatter"]
SpellsList["shadow blade"]
SpellsList["sickening radiance"]
SpellsList["skill empowerment"]
SpellsList["snare"] // UA:SS
SpellsList["soul cage"]
SpellsList["sleet wind strike"]
SpellsList["summon greater demon"]
SpellsList["summon lesser demon"]
SpellsList["synaptic static"]
SpellsList["temple of the gods"]
SpellsList["tenser's transformation"]
SpellsList["thunder step"]
SpellsList["tiny servant"]
SpellsList["toll the dead"] // UA:SS
SpellsList["wall of light"]
SpellsList["word of radiance"]
SpellsList["wrath of nature"]
SpellsList["zephyr strike"] // UA:SS
 */