var iFileName = "ua_20151217_That-Old-Black-Magic.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: That Old Black Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:TOBM"] = {
	name : "Unearthed Arcana: That Old Black Magic",
	abbreviation : "UA:TOBM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/07_UA_That_Old_Black_Magic.pdf",
	date : "2015/12/17"
};

// Adds the Abyssal Tiefling
RaceList["abyssal tiefling"] = {
	regExpSearch : /^(?=.*abyssal)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
	name : "Abyssal tiefling",
	sortname : "Tiefling, Abyssal",
	source : ["UA:TOBM", 1],
	plural : "Abyssal tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Abyssal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Abyssal Tiefling (+1 Constitution, +2 Charisma)\nAbyssal Fortitude: My HP maximum increases with half the levels I have (min 1). Abyssal Arcana: After each long rest I gain randomly determined spellcasting ability (d6). This is a cantrip, and on both 3rd and 5th level a spell that I can cast once, at 2nd-level.\n1: (Dancing Lights, Burning Hands, Alter Self); 2: (True Strike, Charm Person, Darkness)" + (!typePF ? ";" : " ") + " 3: (Light, Magic Missile, Invisibility); 4: (Spare the Dying, Hideous Laughter, Mirror Image)" + (!typePF ? ";" : " ") + " 5: (Message, Cure Wounds, Levitate); 6: (Prestidigitation, Thunderwave, Spider Climb)",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Abyssal Arcana (level 1)",
		spells : ["dancing lights", "true strike", "light", "message", "spare the dying", "prestidigitation"],
		firstCol : 'atwill'
	},
	calcChanges : {
		hp : function (totalHD) { return [Math.max(1, Math.floor(totalHD / 2)), "Abyssal Fortitude"]; }
	},
	features : {
		"abyssal arcana (level 3)" : {
			name : "Abyssal Arcana (level 3)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Abyssal Arcana (level 3)",
				spells : ["burning hands", "charm person", "magic missile", "cure wounds", "tasha's hideous laughter", "thunderwave"],
				firstCol : 'oncelr'
			}
		},
		"abyssal arcana (level 5)" : {
			name : "Abyssal Arcana (level 5)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Abyssal Arcana (level 5)",
				spells : ["alter self", "darkness", "invisibility", "levitate", "mirror image", "spider climb"],
				firstCol : 'oncelr'
			}
		}
	},
	variants : RaceList.tiefling && RaceList.tiefling.variants ? RaceList.tiefling.variants : []
};
//now do the variants
var addAbyssalTiefling = function(){
	var replaceTraitTxt = ["+1 Intelligence, +2 Charisma", "+1 Constitution, +2 Charisma"];
	var replaceNameTxt = ["tiefling", "abyssal tiefling"];
	RaceList["abyssal tiefling"].variants.forEach( function(nVar) {
		if (!RaceSubList["tiefling-" + nVar]) return;
		RaceSubList["abyssal tiefling-" + nVar] = newObj(RaceSubList["tiefling-" + nVar]);
		var thisVar = RaceSubList["abyssal tiefling-" + nVar];
		thisVar.trait = thisVar.trait.replace(replaceTraitTxt[0], replaceTraitTxt[1]);
		thisVar.trait = thisVar.trait.replace(replaceNameTxt[0].capitalize(), replaceNameTxt[1].capitalize());
		thisVar.name = thisVar.name.replace(replaceNameTxt[0], replaceNameTxt[1]);
		thisVar.plural = thisVar.plural.replace(replaceNameTxt[0], replaceNameTxt[1]);
	});
}();

/*	Adds 5 spells for summoning fiends to the Sorcerer and the Wizard spell lists
	
	This code was contributed by David
*/
SpellsList["conjure lesser demon"] = {
	name : "Conjure Lesser Demon",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from an intelligent humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon 8 (16 at SL6, 32 at SL8) manes/dretches that are hostile to all non-demons, attacking nearest",
	descriptionFull : "You summon up to a total of eight manes or dretches that appear in unoccupied spaces you can see within range. A manes or dretch disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The demons are hostile to all creatures. Roll initiative for the summoned demons as a group, which has its own turns. The demons attack the nearest non-demons to the best of their ability." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. The summoned demons cannot cross the circle or target anyone in it while the spell lasts. Using the material component in this manner consumes it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th or 7th level, you summon sixteen demons. If you cast it using a spell slot of 8th or 9th level, you summon thirty-two demons."
};
SpellsList["conjure barlgura"] = {
	name : "Conjure Barlgura",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "10 min",
	description : "Summon a barlgura that is hostile to all non-demons, attacking the nearest",
	descriptionFull : "You summon a barlgura that appears in an unoccupied space you can see within range. The barlgura disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The barlgura is hostile to all non-demons. Roll initiative for the barlgura, which has its own turns. At the start of its turn, it moves toward and attacks the nearest non-demon it can perceive. If two or more creatures are equally near, it picks one at random. If it cannot see any potential enemies, the barlgura moves in a random direction in search of foes." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned barlgura cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure hezrou"] = {
	name : "Conjure Hezrou",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "Food worth at least 100 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Summon a hezrou that I might control as long as there is food; At half HP it leaves, see B (100gp cons.)",
	descriptionFull : "You summon a hezrou that appears in an unoccupied space you can see within range. The hezrou disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The hezrou's attitude depends on the value of the food used as a material component for this spell. Roll initiative for the hezrou, which has its own turns. At the start of the hezrou's turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the food's value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the hezrou and have it obey you as long as you succeed on the Charisma check." + "\n   " + "If the check fails, the spell no longer requires concentration and the demon is no longer under your control. The hezrou then focuses on devouring any corpses it can see. If there are no such meals at hand, it attacks the nearest creatures and eats anything it kills. If its hit points are reduced to below half its hit point maximum, it returns to the Abyss." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned hezrou cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure shadow demon"] = {
	name : "Conjure Shadow Demon",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 3],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from an intelligent humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon a shadow demon that I control while not in bright light, can attack, and within 100 ft, see B",
	descriptionFull : "You summon a shadow demon that appears in an unoccupied space you can see within range. The shadow demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "Roll initiative for the shadow demon, which has its own turns. You can issue orders to the shadow demon, and it obeys you as long as it can attack a creature on each of its turns and does not start its turn in an area of bright light. If either of these conditions is not met, the shadow demon immediately makes a Charisma check contested by your Charisma check. If you fail the check, the spell no longer requires concentration and the demon is no longer under your control. The demon automatically succeeds on the check if it is more than 100 feet away from you." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned shadow demon cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure vrock"] = {
	name : "Conjure Vrock",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 3],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "A gem worth at least 100 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Summon a vrock that I might control for some rounds, depending on gem value, see B (100gp cons.)",
	descriptionFull : "You summon a vrock that appears in an unoccupied space you can see within range. The vrock disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The vrock's attitude depends on the value of the gem used as a material component for this spell. Roll initiative for the vrock, which has its own turns. At the start of the vrock's turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the gem's value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the vrock and have it obey you as long as you succeed on the Charisma check." + "\n   " + "If the check fails, the spell no longer requires concentration and the vrock is no longer under your control. The vrock takes no actions on its next turn and uses its telepathy to tell any creature it can see that it will fight in exchange for treasure. The creature that gives the vrock the most expensive gem can command it for the next 1d6 rounds. At the end of that time, it offers the bargain again. If no one offers the vrock treasure before its next turn begins, it attacks the nearest creatures for 1d6 rounds before returning to the Abyss." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned vrock cannot cross the circle or target anyone in it while the spell lasts."
};
