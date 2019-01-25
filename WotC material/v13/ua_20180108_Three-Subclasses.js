var iFileName = "ua_20180108_Three-Subclasses.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Three Subclasses article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:TS"] = {
	name : "Unearthed Arcana: Three Subclasses",
	abbreviation : "UA:TS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA-3Subclasses0108.pdf",
	date : "2018/01/08"
};

// Adds 3 subclasses: 1 for the Druid, 1 for the Fighter, and 1 for the Wizard
AddSubClass("druid", "circle of spores", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*spores).*$/i,
	subname : "Circle of Spores",
	source : ["UA:TS", 1],
	spellcastingExtra : ["gentle repose", "ray of enfeeblement", "animate dead", "gaseous form", "blight", "confusion", "cloudkill", "contagion"],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : ["UA:TS", 1],
			minlevel : 2,
			description : desc([
				"My link to the cycle of life and death gives me with the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare",
				"In addition, I learn the Chill Touch cantrip"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["chill touch"],
				selection : ["chill touch"],
				firstCol : 'atwill'
			}
		},
		"subclassfeature2.1" : {
			name : "Halo of Spores",
			source : ["UA:TS", 1],
			minlevel : 2,
			description : "\n   " + "As a reaction on my turn, I can do poison damage to one creature I can see within 10 ft",
			additional : levels.map(function (n) { return n < 2 ? "" : (n < 6 ? 3 : n < 10 ? 6 : n < 14 ? 9 : 12) + " poison damage"; }),
			action : ["reaction", " (on my turn)"]
		},
		"subclassfeature2.2" : {
			name : "Symbiotic Entity",
			source : ["UA:TS", 1],
			minlevel : 2,
			description : desc([
				"As an action, I expend a Wild Shape use to boost my spores instead of transforming",
				"I then gain 3 temporary HP per druid level and my Halo of Spores does double damage",
				"Also, my melee weapon attacks do +1d6 poison damage with every hit",
				"This lasts for 10 minutes or until I use Wild Shape again"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : Math.floor(n*3) + " temp HP; Halo of Spores: " + (n < 6 ? 6 : n < 10 ? 12 : n < 14 ? 18 : 24) + " damage";
			}),
			action : ["action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon && !v.isNaturalWeapon && (/\b(spore|symbiotic)\b/i).test(v.WeaponText)) {
							fields.Description += (fields.Description ? '; ' : '') + '+1d6 poison damage';
						};
					},
					"If I include the word 'Spore' or 'Symbiotic' in a melee weapon's name or description, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 poison damage in the description."
				]
			}
		},
		"subclassfeature6" : {
			name : "Fungal Infestation",
			source : ["UA:TS", 2],
			minlevel : 6,
			description : desc([
				"If I kill a humanoid with my Halo of Spores, it rises as a zombie at the end of my turn",
				"This zombie has 1 HP, only takes the Attack action, and can only make 1 attack with it",
				"It follows my mental commands and takes it turn after mine; It lasts for 1 hour"
			])
		},
		"subclassfeature10" : {
			name : "Spreading Spores",
			source : ["UA:TS", 2],
			minlevel : 10,
			description : desc([
				"As a bonus action, I create a 10-ft cube of fungal spores within 30 ft, lasting for 1 min",
				"Any creature starting its turn in the cube takes the damage of my Halo of Spores",
				"The cube ends if I use this again; While the cube persists, I can't use my Halo of Spores"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Fungal Body",
			source : ["UA:TS", 2],
			minlevel : 14,
			description : "\n   " + "I'm immune to critical hits and to being blinded, deafened, frightened, and poisoned",
			savetxt : { immune : ["blinded", "deafened", "frightened", "poisoned", "critical hits"] }
		}
	}
});
AddSubClass("fighter", "brute", {
	regExpSearch : /brute/i,
	subname : "Brute",
	source : ["UA:TS", 2],
	fullname : "Brute",
	features : {
		"subclassfeature3" : {
			name : "Brute Force",
			source : ["UA:TS", 2],
			minlevel : 3,
			description : "\n   " + "I do additional damage with weapons that I'm proficient with",
			additional : levels.map(function (n) { 
				return n < 3 ? "" : "+1d" + (n < 10 ? 4 : n < 16 ? 6 : n < 20 ? 8 : 10) + " weapon damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level > 2 && !v.isSpell && !v.isNaturalWeapon && fields.Proficiency) {
							fields.Description += (fields.Description ? '; ' : '') + '+1d' + (classes.known.fighter.level < 10 ? 4 : classes.known.fighter.level < 16 ? 6 : classes.known.fighter.level < 20 ? 8 : 10) + ' damage';
						};
					},
					"I do +1d4 damage with weapons that I'm proficient with. This increases to 1d6 at 10th level, 1d8 at 16th level, and 1d10 at 20th level."
				]
			}
		},
		"subclassfeature7" : {
			name : "Brutish Durability",
			source : ["UA:TS", 2],
			minlevel : 7,
			description : desc([
				"I add +1d6 to all my saving throws, including death saves",
				"If the total of a death save is 20 or more, it counts as rolling a 20"
			]),
			savetxt : { text : ["Add 1d6 to all saves"] }
		},
		"subclassfeature10" : function () {
			var FSfea = newObj(Base_ClassList.fighter.features["fighting style"]);
			FSfea.name = "Additional Fighting Style";
			FSfea.source = ["UA:TS", 2];
			FSfea.minlevel = 10;
			FSfea.description = "\n   " + "Choose an Additional Fighting Style using the \"Choose Feature\" button above ";
			return FSfea;
		}(),
		"subclassfeature15" : {
			name : "Devastating Critical",
			source : ["UA:TS", 2],
			minlevel : 15,
			description : "\n   " + "Whenever I score a critical hit with a weapon, I add my fighter level to the damage",
			additional : levels.map(function (n) { return n < 15 ? "" : "+" + n + " damage on crit"; })
		},
		"subclassfeature18" : {
			name : "Survivor",
			source : ["UA:TS", 2],
			minlevel : 18,
			description : desc([
				"If I have less than half my max HP at the start of my turn, I heal myself",
				"I regain HP equal to 5 + Constitution modifier (min 1); This doesn't work if I'm at 0 HP"
			])
		}
	}
});
AddSubClass("wizard", "school of invention", {
	regExpSearch : /^(?=.*wizard)(?=.*invent(ion|or)).*$/i,
	subname : "School of Invention",
	source : ["UA:TS", 2],
	fullname : "Wizard (Inventor)",
	features : {
		"subclassfeature2" : {
			name : "Tools of the Inventor",
			source : ["UA:TS", 3],
			minlevel : 2,
			description : "\n   " + "I gain proficiency with light armor and two tools of my choice",
			toolProfs : [["Any one tool", 2]],
			armorProfs : [true, false, false, false]
		},
		"subclassfeature2.1" : {
			name : "Arcanomechanical Armor",
			source : ["UA:TS", 3],
			minlevel : 2,
			description : desc([
				"After a long rest, I can transform a studded leather armor into arcanomechanical armor",
				"This is a magic light armor that gives AC 12 + Dex mod and force resistance, if attuned",
				"Only I can attune to it; Creating a new one removes the magic from the previous"
			]),
			dmgres : ["Force"],
			armourOptions : {
				regExpSearch : /arcanomechanical/i,
				name : "Arcanomechanical",
				source : ["UA:TS", 3],
				type : "light",
				ac : 12,
				weight : 8,
				invName : "Arcanomechanical armor"
			},
			armorAdd : "Arcanomechanical"
		},
		"subclassfeature2.2" : {
			name : "Reckless Casting",
			source : ["UA:TS", 3],
			minlevel : 2,
			description : desc([
				"As an action, I can attempt to cast a random spell or cantrip by rolling a d10 on a table",
				"On a roll of 10, I roll again twice on that table and cast both results",
				"However, if I then roll 10 on either dice, the whole casting fails and the action is wasted",
				"If I choose cantrip, I roll on the table once and cast the result",
				"If I choose a spell, I expend a spell slot and roll twice on the table for the slot's level",
				"I can then choose which of the results I use; Use 5th-level table for spell slots over level 5"
			]),
			castingTable : "\u25C6 Reckless Casting Tables (School of Invention 2, UA:TS 3)\nd10\tCantrip\t\td10\tCantrip" + desc([
				" 1\tAcid Splash\t\t    6\tRay of Frost",
				" 2\tChill Touch\t\t    7\tShocking Grasp",
				" 3\tFire Bolt\t\t    8\tSacred Flame",
				" 4\tLight\t\t    9\tThorn Whip",
				" 5\tPoison Spray\t  10\tRoll twice; Another 10, all is wasted"
			]) + "\n\nd10\t1st-Level Spell\td10\t1st-Level Spell" + desc([
				" 1\tBurning Hands\t    6\tFog Cloud",
				" 2\tChromatic Orb\t    7\tJump",
				" 3\tColor Spray\t\t    8\tMagic Missile",
				" 4\tFaerie Fire\t\t    9\tThunderwave",
				" 5\tFalse Life\t\t  10\tRoll twice; Another 10, all is wasted"
			]) + "\n\nd10\t2nd-Level Spell\td10\t2nd-Level Spell" + desc([
				" 1\tBlur\t\t    6\tLevitate",
				" 2\tDarkness\t\t    7\tMelf's Acid Arrow",
				" 3\tEnlarge/Reduce\t    8\tScorching Ray",
				" 4\tGust of Wind\t    9\tShatter",
				" 5\tInvisibility\t\t  10\tRoll twice; Another 10, all is wasted"
			]) + "\n\nd10\t3rd-Level Spell\td10\t3rd-Level Spell" + desc([
				" 1\tBlink\t\t    6\tGaseous Form",
				" 2\tFear\t\t    7\tLightning Bolt",
				" 3\tFeign Death \t    8\tSleet Storm",
				" 4\tFireball\t\t    9\tStinking Cloud",
				" 5\tFly\t\t  10\tRoll twice; Another 10, all is wasted"
			]) + "\n\nd10\t4th-Level Spell\td10\t4th-Level Spell" + desc([
				" 1\tBlight\t\t    6\tIce Storm",
				" 2\tConfusion\t\t    7\tPhantasmal Killer",
				" 3\tEvard's Black Tentacles\t    8\tStoneskin",
				" 4\tFire Shield\t\t    9\tWall of Fire",
				" 5\tGreater Invisibility\t  10\tRoll twice; Another 10, all is wasted"
			]) + "\n\nd10\t5th-Level Spell\td10\t5th-Level Spell" + desc([
				" 1\tCloudkill\t\t    6\tInsect Plague",
				" 2\tCone of Cold\t    7\tMass Cure Wounds",
				" 3\tDestructive Wave\t    8\tWall of Force",
				" 4\tFlame Strike\t    9\tWall of Stone",
				" 5\tHold Monster\t  10\tRoll twice; Another 10, all is wasted"
			]),
			eval : "try {AddToNotes(ClassSubList['wizard-school of invention'].features['subclassfeature2.2'].castingTable, \"School of Invention's Reckless Casting tables\");} catch (er) {};",
			removeeval : "try {AddToNotes('', '', ClassSubList['wizard-school of invention'].features['subclassfeature2.2'].castingTable);} catch (er) {};"
		},
		"subclassfeature6" : {
			name : "Alchemical Casting",
			source : ["UA:TS", 4],
			minlevel : 6,
			description : desc([
				"I can manipulate spells cast while wearing and attuned to my Arcanomechanical Armor",
				"By expending an additional 1st or 2nd-level spell slot, I do the following:",
				"\u2022 1st: I can substitute acid, cold, fire, lightning, or thunder damage for another type",
				"\u2022 2nd: I increase the spells damage, if any, by 2d10 force damage against one target"
			])
		},
		"subclassfeature10" : {
			name : "Prodigious Inspiration",
			source : ["UA:TS", 4],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can replace a prepared spell with another from my spellbook",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : ["UA:TS", 4],
			minlevel : 14,
			description : desc([
				"When I expend a spell slot to cast a spell using Reckless Casting, it is more powerful",
				"I can roll on the table that is one level higher than the spell slot expended"
			])
		}
	}
});
