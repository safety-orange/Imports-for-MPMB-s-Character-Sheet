var iFileName = "ua_20200512_Subclasses-Revisited.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Fighter, Ranger, and Rogue article to MPMB's Character Record Sheet
// This file contains contributions by Undrhil and Metacomet10

SourceList["UA:SR"] = {
	name : "Unearthed Arcana: Subclasses Revisited",
	abbreviation : "UA:SR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_SubclassesRevisited_0512.pdf",
	date : "2020/05/12"
};

AddSubClass("rogue", "phantom-ua", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*phantom).*$/i,
	subname : "Phantom",
	source : [["UA:SR", 1]],
	fullname : "Phantom",
	features : {
		"subclassfeature3" : {
			name : "Whispers of the Dead",
			source : [["UA:SR", 1]],
			minlevel : 3,
			description : desc([
				"Whenever I finish a short or long rest, I can gain one skill or tool proficiency of my choice",
				"This proficiency lasts until I use this feature again to gain a different proficiency"
			]),
			skillstxt : "Choose one skill or tool; I can change the choice whenever I finish a short or long rest"
		},
		"subclassfeature3.1" : {
			name : "Wails from the Grave",
			source : [["UA:SR", 1]],
			minlevel : 3,
			description : levels.map(function (n) {
				var a = [
					"Directly after I deal sneak attack damage to a creature on my turn, I " + (n < 17 ? "can" : "also") + " harm another",
					n < 17 ? "I then deal half my sneak attack in psychic damage to a creature I can see within 30 ft" : "I deal half my sneak attack in psychic damage to both it and another I can see in 30 ft"
				];
				return desc(a);
			}),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return Math.ceil(n / 4) + "d6";
			}),
		},
		"subclassfeature9" : {
			name : "Tokens of the Departed",
			source : [["UA:SR", 2]],
			minlevel : 9,
			description : " [max Proficiency Bonus of soul trinkets]" + desc([
				"As a reaction when I see a creature within 30 ft die, I can create a Tiny soul trinket",
				"The token of its life essence appears in my free hand; The DM determines its appearance",
				"While a soul trinket is on my person, I have advantage on death and Constitution saves",
				"As an action, I can destroy one of my soul trinkets and ask its associated spirit a question",
				"Its spirit appears and answers concisely in a language it knew; Trinket can be anywhere"
			]),
			action : [
				["reaction", "Create Soul Trinket"],
				["action", "Destroy Soul Trinket"]
			],
			extraLimitedFeatures : [{
				name : "Soul Trinkets (max Prof. Bonus)",
				usages : "",
				recovery : "Special"
			}],
			savetxt : { text : ["While soul trinket is on me, Adv. on Con and death saves"] }
		},
		"subclassfeature13" : {
			name : "Ghost Walk",
			source : [["UA:SR", 2]],
			minlevel : 13,
			description : desc([
				"As a bonus action, I can assume a spectral form with 10 ft flying speed and can hover",
				"Attacks vs. me have disadv.; I can move through creatures and objects as difficult terrain",
				"This lasts 10 min; I take 1d10 force damage if I end my turn inside a creature or object",
				"I can assume this form once per long rest, or by destroying one of my soul trinkets (ST)"
			]),
			action : [["bonus action", " (start/end)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "ST"
		},
		"subclassfeature17" : {
			name : "Death Knoll",
			source : [["UA:SR", 2]],
			minlevel : 17,
			description : desc([
				"Wails from the Grave now also deals damage to the target of the original sneak attack"
			])
		}
	}
});

// [dupl_start] the same as in Tasha's Cauldron of Everything
if (!SourceList.T) {
	AddSubClass("warlock", "the genie", {
		regExpSearch : /^(?=.*warlock)(?=.*(genie|dao|djinni|efreeti|marid)).*$/i,
		subname : "the Genie",
		source : [["T", 73], ["UA:SR", 2]],
		features : {
			"subclassfeature1" : {
				name : "Choose Genie Kind",
				source : [["T", 73], ["UA:SR", 3]],
				minlevel : 1,
				description : '\n   Use the "Choose Feature" button above to choose the kind of genie your patron is',
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if (spType.indexOf("bonus") !== -1 && spList.name && /mystic arcanum/i.test(spList.name) && spList.level[0] === 9) {
								spList.extraspells.push("wish");
							} else if (spType.indexOf("bonus") === -1 && spName === "warlock") {
								if (!spList.notspells) spList.notspells = [];
								spList.notspells.push("wish");
							}
						},
						"The Genie patron adds Wish as a spell available for my 9th-level Mystic Arcanum selection."
					]
				},
				choices : ["Dao (earth)", "Djinni (air)", "Efreeti (fire)", "Marid (water)"],
				"dao (earth)" : {
					name : "Dao Genie Patron",
					description : "\n   My genie patron is a Dao, associated with earth",
					spellcastingExtra : ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "stone shape", "creation", "wall of stone", "wish"]
				},
				"djinni (air)" : {
					name : "Djinni Genie Patron",
					description : "\n   My genie patron is a Djinni, associated with air",
					spellcastingExtra : ["detect evil and good", "thunderwave", "gust of wind", "phantasmal force", "create food and water", "wind wall", "greater invisibility", "phantasmal killer", "creation", "seeming", "wish"]
				},
				"efreeti (fire)" : {
					name : "Efreeti Genie Patron",
					description : "\n   My genie patron is an Efreeti, associated with fire",
					spellcastingExtra : ["burning hands", "detect evil and good", "phantasmal force", "scorching ray", "create food and water", "fireball", "fire shield", "phantasmal killer", "creation", "flame strike", "wish"]
				},
				"marid (water)" : {
					name : "Marid Genie Patron",
					description : "\n   My genie patron is a Marid, associated with water",
					spellcastingExtra : ["detect evil and good", "fog cloud", "blur", "phantasmal force", "create food and water", "sleet storm", "control water", "phantasmal killer", "cone of cold", "creation", "wish"]
				},
				choiceDependencies : [{
					feature : "subclassfeature1.3"
				}, {
					feature : "subclassfeature6"
				}]
			},
			"subclassfeature1.1" : {
				name : "Genie's Vessel",
				source : [["T", 73], ["UA:SR", 3]],
				minlevel : 1,
				description : desc([
					"My patron gifts me a magical vessel, a Tiny object, granting me a measure of its power",
					"I choose the vessel's appearance; I can use it as my spellcasting focus for warlock spells",
					"The vessel's AC is my spell save DC and it has my warlock level + Proficiency Bonus in HP",
					"If it is destroyed or lost, I can get a replacement with a 1-hour ceremony during a rest"
				])
			},
			"subclassfeature1.2" : {
				name : "Genie's Vessel: Bottled Respite",
				source : [["T", 74], ["UA:SR", 3]],
				minlevel : 1,
				description : desc([
					"As an action, I can vanish and enter the extradimensional space inside my genie's vessel",
					"The vessel stays in its location; The space inside is a 20-ft high, 20-ft radius cylinder",
					"As a bonus action, I can exit my vessel; I exit it early if I die or the vessel is destroyed",
					"I can remain inside for twice my Proficiency Bonus in hours; Objects can be left inside"
				]),
				limfeaname : "Bottled Respite",
				action : [["action", " (enter)"], ["bonus action", " (eject)"]],
				usages : 1,
				recovery : "long rest"
			},
			"subclassfeature1.3" : {
				name : "Genie's Wrath",
				source : [["T", 73], ["UA:SR", 3]],
				minlevel : 1,
				description : desc([
					"I can deal bonus damage on my attacks, its type depending on my patron's genie kind",
					'Use the "Choose Feature" button above to choose the kind of genie your patron is'
				]),
				"dao (earth)" : {
					name : "Dao's Wrath",
					description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Prof. Bonus in extra bludgeoning damage",
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (!v.isDC) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' bludgeoning damage';
								}
							},
							"Once on each of my turns, I can have one of my attacks that hit deal extra bludgeoning damage equal to my proficiency bonus."
						]
					}
				},
				"djinni (air)" : {
					name : "Djinni's Wrath",
					description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra thunder damage",
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (!v.isDC) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' thunder damage';
								}
							},
							"Once on each of my turns, I can have one of my attacks that hit deal extra thunder damage equal to my proficiency bonus."
						]
					}
				},
				"efreeti (fire)" : {
					name : "Efreeti's Wrath",
					description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra fire damage",
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (!v.isDC) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' fire damage';
								}
							},
							"Once on each of my turns, I can have one of my attacks that hit deal extra fire damage equal to my proficiency bonus."
						]
					}
				},
				"marid (water)" : {
					name : "Marid's Wrath",
					description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra cold damage",
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (!v.isDC) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' cold damage';
								}
							},
							"Once on each of my turns, I can have one of my attacks that hit deal extra cold damage equal to my proficiency bonus."
						]
					}
				}
			},
			"subclassfeature6" : {
				name : "Elemental Gift",
				source : [["T", 75], ["UA:SR", 3]],
				minlevel : 6,
				description : desc([
					"I gain resistance to a damage type depending on my patron's genie kind",
					'Use the "Choose Feature" button above to choose the kind of genie your patron is',
					"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
				]),
				"dao (earth)" : {
					name : "Dao's Elemental Gift",
					description : desc([
						"I gain resistance to bludgeoning damage",
						"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
					]),
					action : [["bonus action", " (start fly)"]],
					dmgres : ["Bludgeoning"]
				},
				"djinni (air)" : {
					name : "Djinni's Elemental Gift",
					description : desc([
						"I gain resistance to thunder damage",
						"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
					]),
					action : [["bonus action", " (start fly)"]],
					dmgres : ["Thunder"]
				},
				"efreeti (fire)" : {
					name : "Efreeti's Elemental Gift",
					description : desc([
						"I gain resistance to fire damage",
						"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
					]),
					action : [["bonus action", " (start fly)"]],
					dmgres : ["Fire"]
				},
				"marid (water)" : {
					name : "Marid's Elemental Gift",
					description : desc([
						"I gain resistance to cold damage",
						"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
					]),
					action : [["bonus action", " (start fly)"]],
					dmgres : ["Cold"]
				},
				additional : "Fly 10 min",
				usages : "Prof. Bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest"
			},
			"subclassfeature10" : {
				name : "Sanctuary Vessel",
				source : [["T", 75], ["UA:SR", 3]],
				minlevel : 10,
				description : desc([
					"When I enter my vessel I can have up to 5 willing creatures I can see in 30 ft join me",
					"As a bonus action, I can eject any number of creatures from my genie's vessel",
					"Everyone is ejected when I leave it or if the vessel is destroyed",
					"Anyone who remains in the vessel for at least 10 min gains the benefits of a short rest",
					"Also, HD spend as part of this short rest has my Proficiency Bonus added to the roll"
				])
			},
			"subclassfeature14" : {
				name : "Limited Wish",
				source : [["T", 75], ["UA:SR", 3]],
				minlevel : 14,
				description : " [1\xD7 per 1d4 long rests]" + desc([
					"As an action, I can cast a 6th-level or lower spell with a casting time time of one action",
					"This can be any spell; It doesn't require any costly components, it simply takes effect"
				]),
				action : [["action", ""]],
				extraLimitedFeatures : [{
					name : "Limited Wish",
					usages : 1,
					recovery : "1d4 LR"
				}]
			}
		}
	});
} // dupl_end

/* This UA version of Order of Scribes is not done yet
AddSubClass("wizard","order of scribes-ua", {
	regExpSearch : /^(?=.*wizard)(?=.*order)(?=.*scribes?).*$|scrivener/i,
	subname : "Order of Scribes",
	source : [["UA:SR", 4]],
	features : {
		"subclassfeature2" : {
			name : "Wizardly Quill",
			source : [["UA:SR", 4]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can magically create a Tiny quill with the following properties:",
				" \u2022 It doesn't require ink and produces ink in the color of my choice when writing with it",
				" \u2022 The gold and time required to transcribe spells into my spellbook with it are halved",
				" \u2022 As a bonus action, I can use it to erase a text written with it if within 5 ft of the text",
				"The quill disappear if I create another or if I die"
			]),
			action : [["bonus action", " (create/erase)"]]
		},
		"subclassfeature2.1" : {
			name : "Awakened Spellbook",
			source : [["UA:SR", 4]],
			minlevel : 2,
			description : desc ([
				"My spellbook gains sentience and grants me the following benefits while I am holding it:",
				" \u2022 I can use the book as a spellcasting focus for my wizard spells",
				" \u2022 When I cast a wizard spell using a spell slot, I can temporarily replace its damage type",
				"   The new damage type must appear in another spell in my awakened spellbook",
				" \u2022 Once per long rest, I can ritual cast a wizard spell without 10 min extra casting time",
				"I can replace it over a short rest, transferring its spells and sentience to a blank book"
			]),
			additional : "fast ritual cast",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Master Scrivener",
			source : [["UA:SR", 4]],
			minlevel : 6,
			description : desc([
				"When I finish a long rest, I can write a spell in my awakened spellbook on a blank paper",
				"It must be a level 1 or 2 spell with 1 action casting time; My spellbook must be in 5 ft",
				"As an action, I can use this scroll to cast the spell on it at one higher level than normal",
				"Only I can use the scroll; The scroll turns blank again when I use it or finish a long rest",
				"Also, using my Wizardly Quill, the gold and time I need to craft spell scrolls is halved"
			]),
			action : [["action", " (cast scroll)"]],
			usages : 1,
			recovery : "long rest"
		},
		// Finished until here
		"subclassfeature10" : {
			name : "Manifest Mind",
			source : [["UA:SR", 5]],
			minlevel : 10,
			description : desc(["As a bonus action, I can cause my Awakened Spellbook to manifest. See \"Notes\" page"]),
			toNotesPage : [{
				name : "Manifest Mind",
				source : [["UA:SR", 5]],
				page3notes : false,
				note : desc (["As a bonus action with my Awakened Spellbook on my person, I can cause the mind to",
				"manifest as a Tiny spectral construct, hovering in an unoccupied space of my choice within",
				"60 ft. It is intangible and doesn't occupy its space, and it sheds dim light in a 10 ft radius.",
				"It looks like a ghostly tome, a cascade of text, or a scholar from the past \(my choice.\).",
				"\(See Companion Page for statistics for this construct.\)",
				"While manifested, it can hear and see and has darkvision with a range of 60 ft. As an",
				"action, I can hear and see using its senses instead of my own, until my concentration",
				"ends \(as if concentrating on a spell\).",
				"Whenever I cast a wizard spell on my turn, I can cast it as if I were in the spectral mind's",
				"space, using its senses. I can do this a number of times per day equal to my proficiency",
				"bonus, and I regain all uses when I finish a long rest.",
				"As a bonus action, I can cause it to hover up to 30 ft to an unoccupied space that I or it",
				"can see. It can pass through creatures but not objects. It stops manifesting if it is ever",
				"more than 300 ft away from me, if it drops to 0 hit points, if I die, or if I dismiss it as",
				"a bonus action."
				])
			}],
			eval : function() {
				var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificer.CompFunc;
				companionFunctions.add("Manifest Mind");
				ClassList.wizard.wizardCompFunc.update(10, What('Int mod'),What('AC'),What('Str mod'),What('Dex mod'),What('Con mod'),What('Wis mod'),What('Cha mod'));
			},
			removeeval : function() {
				var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificerCompFunc;
				companionFunctions.remove("Manifest Mind");
			},
			action : [["bonus action",""],["bonus action","Hover spellbook 30ft"],["bonus action","dismiss Manifestation"]],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "One with the Word",
			source : [["UA:SR", 5]],
			minlevel : 14,
			description : desc([
				"While I am holding my Awakened Spellbook and it is manifest, I can take an action to",
				"swap places with the manifestation. I can do this a number of times equal to my",
				"proficiency bonus and I regain all expended uses when I finish a long rest.",
				"If I die but at least one spell remains in my Awakened Spellbook, I can return to",
				"life after 1 minute within 5 ft of the book. I revive with 1 hit point. I then roll",
				"3d6 and the spellbook loses spells of my choice that have a combined spell level",
				"equal to that roll or higher. I am incapable of casting the lost spells, even if I",
				"find them on a scroll or in another spellbook. I can only restore my ability to cast",
				"one of these spells with the wish spell, which will restore one spell per casting."
			]),
			action : ["action","Swap places with spellbook"],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
});
*/
