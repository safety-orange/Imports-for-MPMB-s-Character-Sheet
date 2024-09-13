var iFileName = "ua_20170320_Wizard-Revisited.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Wizard Revisited article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WR"] = {
	name : "Unearthed Arcana: Wizard Revisited",
	abbreviation : "UA:WR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/MJ320UAWizardVF2017.pdf",
	date : "2017/03/20"
};

// Adds 1 new subclass for the Wizard (with contributions by erickrause)
AddSubClass("wizard", "war magic-ua", {
	regExpSearch : /^(?=.*war)(?=.*(magic|mage)).*$/i,
	subname : "War Magic",
	source : [["UA:WR", 2]],
	fullname : "War Mage",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : [["UA:WR", 2]],
			minlevel : 2,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a Con save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature2.1" : {
			name : "Tactical Wit",
			source : [["UA:WR", 2]],
			minlevel : 2,
			description : desc([
				"I gain a bonus to my initiative rolls equal to my Intelligence modifier"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : [["UA:WR", 2]],
			minlevel : 6,
			description : desc([
				"When multiple targets have to save vs. one of my spells, I can have it do more damage",
				"On the turn I cast the spell, I can roll 2 additional damage dice for it"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Durable Magic",
			source : [["UA:WR", 2]],
			minlevel : 10,
			description : desc([
				"While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
			])
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : [["UA:WR", 2]],
			minlevel : 14,
			description : desc([
				"When I use my Arcane Deflection feature, magical energy arcs from me",
				"Any creatures of my choice within 10 ft of me take half my level in force damage"
			]),
			additional : levels.map( function(n) { return n < 14 ? "" : Math.floor(n/2) + " force damage"; })
		}
	}
});
// [dupl_start] Don't add the Theurgy subclass if the source UA:TF is present, as that class is identical to the one found in Unearthed Arcana: The Faithful (2016/08/01)
if (!SourceList["UA:TF"]) {
RunFunctionAtEnd(function() {
	var theTheurgySubclass = AddSubClass("wizard", "theurgy-ua", { // Still valid 2021-09-21
		regExpSearch : /^((?=.*mystic)(?=.*theurge))|(?=.*(theurgy|theurgist)).*$/i,
		subname : "Theurgy",
		source : [["UA:TF", 1], ["UA:WR", 1]],
		fullname : "Theurgist",
		features : {
			"subclassfeature2" : {
				name : "Arcane Initiate",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + 'Choose a Cleric Domain using the "Choose Feature" button above' + "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the chosen domain spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
							if (spName !== "wizard" || spType.indexOf("bonus") !== -1 || !CurrentSpells.wizard.extra || !CurrentSpells.wizard.selectSp || !spList.level || !spList.level[1]) return;
							var domainSpells = CurrentSpells.wizard.extra;
							// now stop this function if even one of the domain spells is not already in the spellbook
							var knownSpells = [].concat(CurrentSpells.wizard.selectSp ? CurrentSpells.wizard.selectSp : []).concat(CurrentSpells.wizard.selectSpSB ? CurrentSpells.wizard.selectSpSB : []);
							for (var i = 0; i < domainSpells.length; i++) {
								if (knownSpells.indexOf(domainSpells[i]) == -1) return;
							}
							// get all the cleric spells, level 1-9
							var clericSpells = CreateSpellList({"class" : "cleric", level : [1,9]}, false, false, false);
							spList.extraspells = spList.extraspells.concat(clericSpells);
						},
						"When I gain a wizard level after my spellbook already has all the spells of my chosen domain, I can instead select any cleric spell of a level I can cast as one of the spells I gain from levelling up."
					]
				},
				choices : [],
				choiceDependencies : [{
					feature : "subclassfeature2.3"
				}, {
					feature : "subclassfeature6"
				}, {
					feature : "subclassfeature10"
				}, {
					feature : "subclassfeature14"
				}]
			},
			"subclassfeature2.1" : {
				name : "Channel Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "I can channel arcane energy from my deity; the save for this is my wizard spell DC",
				usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
				recovery : "short rest"
			},
			"subclassfeature2.2" : {
				name : "Channel Arcana: Divine Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "As a bonus action, I speak a prayer to control the flow of magic around me" + "\n   " + "The next spell I cast gains a +2 bonus to its attack roll or saving throw DC",
				action : [["bonus action", ""]]
			},
			"subclassfeature2.3" : {
				name : "Channel Arcana: Domain",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature6" : {
				name : "Arcane Acolyte",
				source : [["UA:TF", 3], ["UA:WR", 1]],
				minlevel : 6,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature10" : {
				name : "Arcane Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 10,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			},
			"subclassfeature14" : {
				name : "Arcane High Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 14,
				description : "\n   " + 'Use the "Choose Feature" button above to select the domain',
				choices : [],
				choicesNotInMenu : true
			}
		}
	});
	var MTfeat = ClassSubList[theTheurgySubclass].features;
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var aDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (!aDomain) continue;
		var dSource = aDomain.source ? aDomain.source : aDomain.features["subclassfeature1"] && aDomain.features["subclassfeature1"].source ? aDomain.features["subclassfeature1"].source : [["UA:TF", 0], ["UA:WR", 0]];
		
		var suffix = 1;
		var entryDoNm = aDomain.subname;
		while (MTfeat["subclassfeature2"].choices.indexOf(entryDoNm) !== -1) {
			suffix += 1;
			entryDoNm = aDomain.subname + " (" + suffix + ")";
		};
		MTfeat["subclassfeature2"].choices.push(entryDoNm);
		MTfeat["subclassfeature2"][entryDoNm.toLowerCase()] = {
			name : "Arcane Initiate: " + aDomain.subname,
			source : dSource,
			spellcastingExtra : aDomain.spellcastingExtra,
			description : "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the " + aDomain.subname.toLowerCase() + " spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks"
		};
		var AIdomain = MTfeat["subclassfeature2"][entryDoNm.toLowerCase()];
		for (var aFea in aDomain.features) {
			var dFea = aDomain.features[aFea];
			if (dFea.minlevel === 2 && (/channel divinity/i).test(dFea.name)) {
				MTfeat["subclassfeature2.3"].choices.push(entryDoNm);
				MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()] = newObj(dFea);
				MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name = MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name.replace(/channel divinity/i, "Channel Arcana");
			};
			if (dFea.minlevel === 1 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature6"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature6"].choices.push(entryDoNm);
					MTfeat["subclassfeature6"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature6"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 6 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature10"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature10"].choices.push(entryDoNm);
					MTfeat["subclassfeature10"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature10"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 17 && !dFea.armor && !dFea.weapons && !dFea.armorProfs && !dFea.weaponProfs) {
				if (MTfeat["subclassfeature14"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature14"].choices.push(entryDoNm);
					MTfeat["subclassfeature14"][entryDoNm.toLowerCase()] = newObj(dFea);
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature14"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
		};
	};
});
}; // dupl_end
