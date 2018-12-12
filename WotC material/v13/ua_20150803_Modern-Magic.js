var iFileName = "ua_20150803_Modern-Magic.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Modern Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MM"] = {
	name : "Unearthed Arcana: Modern Magic",
	abbreviation : "UA:MM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/UA_ModernMagic.pdf",
	date : "2015/08/03"
};

// A subclass for the Cleric, called "City Domain"
AddSubClass("cleric", "city domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(urban|city)).*$/i,
	subname : "City Domain",
	source: ["UA:MM", 1],
	spellcastingExtra : ["comprehend languages", "remote access", "find vehicle", "heat metal", "lightning bolt", "protection from ballistics", "locate creature", "synchronicity", "commune with city", "shutdown"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : "\n   " + "I learn the On/Off cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off"],
				selection : ["on/off"]
			}
		},
		"subclassfeature1.1" : {
			name : "Bonus Proficiency",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with sidearms and land vehicles",
			weaponProfs : [false, false, ["Sidearms"]],
			toolProfs : ["Hacking tools"]
		},
		"subclassfeature1.2" : {
			name : "Heart of the City",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : desc([
				"While I'm in a city, I can gain adv. on a Cha (Deception, Intimidation, Persuasion) check",
				"I'm considered proficient with the appropriate skill for that one check"
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Spirits of the City",
			source: ["UA:MM", 1],
			minlevel : 2,
			description : desc([
				"As an action, I make all city utilities in 30 ft either stop or work perfectly for 1 min",
				"Additionally, all hostiles within 30 ft must make a Cha save at the time of use",
				"If failed, it is either knocked prone or restrained (my choice) by city hazards",
				"A restrained target can escape with an Athletics or Acrobatics check vs. my spell DC"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Block Watch",
			source: ["UA:MM", 2],
			minlevel : 6,
			description : "\n   " + "While in an urban environment, I'm proficient and expertise in Insight and Perception"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source: ["UA:MM", 2],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Express Transit",
			source: ["UA:MM", 2],
			minlevel : 17,
			description : desc([
				"As an action, I can teleport from one mass transit site to another in the same city",
				"This works just like a Teleport spell; Mass transits sites include bus/train/subway stops"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	}
});

// A subclass for the Warlock, called "Ghost in the Machine"
AddSubClass("warlock", "ghost in the machine", {
	regExpSearch : /^(?=.*warlock)(?=.*ghost)(?=.*(machine|computer)).*$/i,
	subname : "the Ghost in the Machine",
	source : ["UA:MM", 2],
	spellcastingExtra : ["infallible relay", "remote access", "arcane hacking", "digital phantom", "haywire", "invisibility to cameras", "conjure knowbot", "system backdoor", "shutdown", "synchronicity"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA:MM", 2],
			minlevel : 1,
			description : "\n   " + "I am proficient with hacking tools and know the On/Off cantrip",
			toolProfs : ["Hacking tools"],
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off"],
				selection : ["on/off"]
			}
		},
		"subclassfeature1.1" : {
			name : "Information Surge",
			source : ["UA:MM", 2],
			minlevel : 1,
			description : desc([
				"As an action, I can cause a computerized device within 30 ft to make an Int save",
				"If the device is held/used by a creature, that creature makes the saving throw",
				"If the device is not held/used, it makes a save with a +0 modifier and disadvantage",
				"On a failed save, the device stops functioning until the end of my next turn"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Wire Walk",
			source : ["UA:MM", 3],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can teleport through a hardwired network to a point I can see",
				"Both where I start and end must be a device, cable, or socket connected to the network"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Personal Encryption",
			source : ["UA:MM", 3],
			minlevel : 10,
			description : desc([
				"I have adv. on saves vs. scrying, thought detection, and magics for learning my location",
				"If the effect doesn't let me a save, the user has disadv. on checks to use it on me, if any"
			])
		},
		"subclassfeature14" : {
			name : "Technovirus",
			source : ["UA:MM", 3],
			minlevel : 14,
			description : desc([
				"As an action, I make a melee spell attack to infect someone with a techno-organic virus",
				"The target takes 8d10 psychic damage, or half that with a successful Con save",
				"If it failed its save, I can use an action to cast Command on it while it remains infected",
				"It makes its save vs. this Command with disadvantage and I can cast it at any range",
				"It is infected until my next long rest; The virus can be removed with Lesser Restoration"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});

// A subclass for the Wizard, called "Technomancy" (contributed by AKA_Sketch)
AddSubClass("wizard", "technomancy", {
	regExpSearch: /technomancy|technomancer/i,
	subname: "Technomancy",
	source: ["UA:MM", 3],
	fullname: "Technomancer",
	features: {
		"subclassfeature2": {
			name: "Bonus Proficiencies",
			source: ["UA:MM", 3],
			minlevel: 2,
			description: "\n   " + "I gain proficiency with sidearms and hacking tools",
			weaponProfs : [false, false, ["Sidearms"]],
			toolProfs : ["Hacking tools"]
		},
		"subclassfeature2.1": {
			name: "Technological Savant",
			source: ["UA:MM", 3],
			minlevel: 2,
			description: desc([
				"I can use a single tablet computer (or similar) instead of a spellbook",
				"Spells copied into this device cost half the normal amount of gp"
			])
		},
		"subclassfeature6": {
			name: "Program Spell",
			source: ["UA:MM", 4],
			minlevel: 6,
			description: desc([
				"I can cast a spell into a device of at least smartphone-level of computing power",
				"Variables of the spell are chosen at time of casting; I can have only one active at a time",
				"As an action within the next 48 hours, the spell can be cast from the device",
				"I can't activate a concentration spell in this way if I am concentrating on another spell"
			]),
			recovery: "long rest",
			usages: 1
		},
		"subclassfeature10": {
			name: "Online Casting",
			source: ["UA:MM", 4],
			minlevel: 10,
			description: desc([
				"I can cast a spell, that is not area-of-effect, through networked electronic devices",
				"If the spell requires sight/hearing, the audio/visual must be transmitted electronically",
				"The spell's range is determined from me to my device plus from the target to its device"
			]),
			usages: "Intelligence modifier per ",
			usagescalc: "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Chained Device",
			source: ["UA:MM", 4],
			minlevel: 14,
			description: "\n   " + "I can use a held/worn tablet computer to concentrate on a spell I cast instead of me" + "\n   " + "If the device is separated from me, turned off, or broken, the effect is lost",
			recovery: "long rest",
			usages: 1
		}
	}
});

// Add a new Warlock invocation
AddWarlockInvocation("Arcane Gunslinger (prereq: Pact of the Blade)", {
	name : "Arcane Gunslinger",
	description : desc([
		"My pact weapon can take firearm forms, and I can transform magical firearms into one"
	]),
	source : ["UA:MM", 3],
	prereqeval : "GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isRangedWeapon && ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) && (/\bpact\b/i).test(v.WeaponText)) {
					fields.Proficiency = true;
					fields.Description += v.thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; };
			},
			"If I include the word 'Pact' in a firearm weapon's name, it gets treated as my Pact Weapon."
		]
	}
});

/*	Adds 14 spells that are, according to the article, 'suitable' for the Sorcerer, Warlock, or Wizard spell list. 1 of those is also considered suitable for the Paladin spell list.
	
	Strangely enough, adding all these spells to the Warlock spell list makes the Ghost in the Machine's Expanded Spell List class feature completely useless
*/
SpellsList["arcane hacking"] = {
	name : "Arcane Hacking",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Hacking tools",
	duration : "Conc, 1 h",
	description : "Adv on Int (hacking tools) vs. encryption; Use Int (hacking tools) to remove protective spells; See book",
	descriptionFull : "[Technomagic]\n   You gain advantage on all Intelligence checks using hacking tools to break software encryption or online security when using a foreign system. This spell also allows you to break 2nd-level and lower protective spells such as arcane lock or glyph of warding by making an Intelligence check using hacking tools against the spell save DC of the spell's caster." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can attempt to counteract a spell set to secure the foreign system if the spell's level is equal to or less than the level of the spell slot you used."
};
SpellsList["commune with city"] = {
	name : "Commune with City",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : true,
	level : 5,
	school : "Div",
	time : "1 min",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "Learn up to three facts about surrounding city, out to 1 mile above- or 600 ft underground; see B",
	descriptionFull : "You briefly become one with the city and gain knowledge of the surrounding area. Aboveground, this spell gives you knowledge of the area within 1 mile of you. In sewers and other underground settings, you gain knowledge of the area within 600 feet of you." + "\n   " + "You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:" + "\n  \u2022 " + "Terrain and bodies of water" + "\n  \u2022 " + "Prevalent buildings, plants, animals, or intelligent creatures" + "\n  \u2022 " + "Powerful (CR 1 or higher) celestials, fey, fiends, elementals, or undead" + "\n  \u2022 " + "Influences from other planes of existence" + "\n  \u2022 " + "Electrical currents, wireless signals, and active transit lines and tracks" + "\n\n   " + "For example, you could determine the location of powerful undead in the area, the location of major sources of electrical power or interference, and the location of any nearby parks."
};
SpellsList["conjure knowbot"] = {
	name : "Conjure Knowbot",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "500 ft",
	components : "V,S",
	duration : "10 min",
	description : "Create bot in touched device; computer checks 1 bns instead of 1 a for me; SL5: 1 h, 1000 ft, see book",
	descriptionFull : "[Technomagic]\n   You touch a single computerized device or computer system to conjure a knowbot\u2014a partially sentient piece of software imprinted with vestiges of your own skills and computer abilities. For the duration of the spell, you can use a bonus action to have the knowbot execute a computer-related task that would normally require an action. The knowbot makes Intelligence ability checks using your ability score and proficiency bonuses (including your proficiency with hacking tools, if applicable)." + "\n   " + "You have a limited telepathic bond with the knowbot, out to a range of 500 feet from the device or system where the knowbot was conjured. If you move beyond this range, the knowbot disappears in 2d4 rounds, as if the duration of the spell had expired. Moving within range again immediately reestablishes the bond. The knowbot is bound to the system in which it was created, and it stays there until it is dismissed or the spell's duration expires." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the spell's duration increases to 1 hour. Additionally, your telepathic bond with the knowbot is effective out to a range of 1,000 feet, and if you leave the range of the bond, the knowbot continues performing its last directed task until the spell expires."
};
SpellsList["digital phantom"] = {
	name : "Digital Phantom",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 6],
	ritual : false,
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A small piece of copper wire",
	duration : "Conc, 1 h",
	description : "You and any others in same computer system +10 on Int to avoid detection; leave no trace on exit",
	descriptionFull : "[Technomagic]\n   This spell works to actively hide your presence within a computer system. For the spell's duration, you and any other users you choose on your local network gain a +10 bonus to Intelligence checks to avoid detection by administrators, knowbots, tracking software, and the like. Whenever you and your chosen users leave any computer system you are working in while this spell is in effect, all trace of your previous presence in that system is erased."
};
SpellsList["find vehicle"] = {
	name : "Find Vehicle",
	classes : ["paladin", "sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 6],
	ritual : false,
	level : 2,
	school : "Conj",
	time : "10 min",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "Gain services of land spirit-vehicle; expertise, share spells with it; SL3: water, SL5: air, SL7: any; see B",
	descriptionFull : "You summon a spirit that assumes the form of a nonmilitary land vehicle of your choice, appearing in an unoccupied space within range. The vehicle has the statistics of a normal vehicle of its sort, though it is celestial, fey, or fiendish (your choice) in origin. The physical characteristics of the vehicle reflect its origin to some degree. For example, a fiendish SUV might be jet black in color, with tinted windows and a sinister-looking front grille." + "\n   " + "You have a supernatural bond with the conjured vehicle that allows you to drive beyond your normal ability. While driving the conjured vehicle, you are considered proficient with vehicles of its type, and you add double your proficiency bonus to ability checks related to driving the vehicle. While driving the vehicle, you can make any spell you cast that targets only you also target the vehicle." + "\n   " + "If the vehicle drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss the vehicle at any time as an action, causing it to disappear." + "\n   " + "You can't have more than one vehicle bonded by this spell at a time. As an action, you can release the vehicle from its bond at any time, causing it to disappear." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can conjure a nonmilitary water vehicle large enough to carry six Medium creatures. When you cast this spell using a spell slot of 5th level or higher, you can conjure a nonmilitary air vehicle large enough to carry ten Medium creatures. When you cast this spell using a spell slot of 7th level or higher, you can conjure any type of vehicle, subject to the DM's approval."
};
SpellsList["haywire"] = {
	name : "Haywire",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "10 ft(+5 ft/SL) rad all electronic devices go haywire, see B; for hold devices, crea gets to save",
	descriptionFull : "[Technomagic]\n   This spell plays havoc with electronic devices, making the use of such devices all but impossible. Each electronic device in a 10-foot-radius sphere centered on a point you choose within range is subject to random behavior while it remains within the area. A device not held by a creature is automatically affected. If an electronic device is held by a creature, that creature must succeed on a Wisdom saving throw or have the device affected by the spell." + "\n   " + "At the start of each of your turns, roll a d6 for each affected device to determine its behavior. Except where otherwise indicated, that behavior lasts until the start of your next turn while this spell is in effect." + "\n\n" + toUni("d10") + "\t" + toUni("Behavior") + "\n  " + "1\tThe device shuts down and must be restarted. Do not roll again for this device until it is restarted.\n2–4\tThe device does not function." + "\n  " + "5\tThe device experiences a power surge, causing an electric shock to the wielder (if any) and one random creature within 5 feet of the device. Each affected creature must make a Dexterity saving throw against your spell save DC, taking 6d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n  " + "6\tThe device is usable as normal.\n" + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere affected by the spell increases by 5 feet for each slot level above 3rd."
};
SpellsList["infallible relay"] = {
	name : "Infallible Relay",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A mobile phone",
	duration : "Conc, 10 min",
	save : "Cha",
	description : "1 known crea save or has to answer your call from phone within 100 ft of it; it has to save to end call",
	descriptionFull : "[Technomagic]\n   With this spell, you can target any creature with whom you have spoken previously, as long as the two of you are on the same plane of existence. When you cast the spell, the nearest functioning telephone or similar communications device within 100 feet of the target begins to ring. If there is no suitable device close enough to the target, the spell fails." + "\n   " + "The target must make a successful Charisma saving throw or be compelled to answer your call. Once the connection is established, the call is crystal clear and cannot be dropped until the conversation has ended or the spell's duration ends. You can end the conversation at any time, but a target must succeed on a Charisma saving throw to end the conversation."
};
SpellsList["invisibility to cameras"] = {
	name : "Invisibility to Cameras",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "10 ft",
	components : "V,S,M",
	compMaterial : "A scrap of black paper",
	duration : "Conc, 1 min",
	description : "Up to 4 crea and anything they are wearing or carrying become undetectable for electornic sensors",
	descriptionFull : "[Technomagic]\n   Four creatures of your choice within range become undetectable to electronic sensors and cameras for the duration of the spell. Anything a target is wearing or carrying is likewise undetectable as long as it is on the target's person. The targets remain visible to vision."
};
SpellsList["on/off"] = {
	name : "On/Off",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Activate or deactivate 1 electornic device that has a way of doing so accessible from the outside of it",
	descriptionFull : "[Technomagic]\n   This cantrip allows you to activate or deactivate any electronic device within range, as long as the device has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software- based shutdown sequence to activate or deactivate cannot be affected by on/off."
};
SpellsList["protection from ballistics"] = {
	name : "Protection from Ballistics",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A shell casing",
	duration : "Conc, 10 min",
	description : "1 crea gains resistance to nonmagical ballistic damage",
	descriptionFull : "This spell enchants the flesh of the target against the impact of bullets. Until the spell ends, the target has resistance to nonmagical ballistic damage."
};
SpellsList["remote access"] = {
	name : "Remote Access",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "10 min",
	description : "You can use any electronic device within range as if it were in your hands",
	descriptionFull : "[Technomagic]\n   You can use any electronic device within range as if it were in your hands. This is not a telekinesis effect. Rather, this spell allows you to simulate a device's mechanical functions electronically. You are able to access only functions that a person using the device manually would be able to access. You can use remote access with only one device at a time."
};
SpellsList["shutdown"] = {
	name : "Shutdown",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Shut down all electronic devices within range; if controlled/held by crea, it can save to keep active",
	descriptionFull : "[Technomagic]\n   This spell shuts down all electronic devices within range that are not wielded by or under the direct control of a creature. If an electronic device within range is used by a creature, that creature must succeed on a Constitution saving throw to prevent the device from being shut down. While the spell remains active, no electronic device within range can be started or restarted."
};
SpellsList["synchronicity"] = {
	name : "Synchronicity",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 crea not slowed by mundane delays, disadv on opportunity attacks to it, adv to Stealth and driving",
	descriptionFull : "The creature you touch feels reality subtly shifted to its favor while this spell is in effect." + "\n   " + "The target isn't inconvenienced by mundane delays of any sort. Traffic lights are always green, there's always a waiting elevator, and a taxi is always around the corner. The target can run at full speed through dense crowds, and attacks of opportunity provoked by the target's movement are made with disadvantage." + "\n   " + "Synchronicity grants advantage to Dexterity (Stealth) checks, since the target always finds a handy piece of cover available. Additionally, the target has advantage on all ability checks made to drive a vehicle." + "\n   " + "In the event that two or more creatures under the effect of synchronicity are attempting to avoid being inconvenienced by each other, the creatures engage in a contest of Charisma each time the effects of the spells would oppose each other."
};
SpellsList["system backdoor"] = {
	name : "System Backdoor",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 4,
	school : "Trans",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Hacking tools",
	duration : "Conc, 1 h",
	description : "Gain admin access to 1 system; defeats 3rd or lower technomancy spells; SL5+: defeats same or lower",
	descriptionFull : "[Technomagic]\n   This spell allows you to bypass system security in order to create a secure login on a foreign system. The login you create allows you administrator-level privileges in any computer system not enhanced through technomagic. The login defeats any technomagic spells of 3rd level or lower." + "\n   " + "Once the duration of the spell expires, the login and all privileges are wiped from the system." + "\n   " + "System logs still show the activity of the user, but the user identification cannot be found or traced." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you are able to bypass technomagic spells if the spell's level is equal to or less than the level of the spell slot you used."
};
