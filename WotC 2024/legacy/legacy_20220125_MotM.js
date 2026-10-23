var iFileName = "legacy_20220125_MotM.js";
RequiredSheetVersion("24.1.3");
// This file adds the player-material from Mordenkainen Presents: Monsters of the Multiverse to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules
// Includes many contributions by Nod_Hero and BraabHimself

// Define the source
SourceList["MotM"] = {
	name: "Mordenkainen Presents: Monsters of the Multiverse",
	abbreviation: "MotM",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/monsters-of-the-multiverse",
	date: "2022/01/25", // box set release date
	defaultExcluded: true,
};

// Aarakocra
var MotM_Aarakocra = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*aarakocra).*$/i,
	name: "Aarakocra (multiverse)",
	sortname: "Multiverse Aarakocra",
	source: [["MotM", 5]],
	speed: {
		walk: { spd: 30, enc: 20 },
		fly: { spd: "walk", enc: 0 },
	},
	languageProfs: ["Common", 2], // not the languages of the EE aarakocra
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /talon/i,
		name: "Talons",
		source: [["MotM", 5]],
		damage: [1, 6, "slashing"],
		selectNow: true,
	}],
	spellcastingAbility: [4, 5, 6],
	features: {
		"wind caller": {
			name: "Wind Caller",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Wind Caller",
				spells: ["gust of wind"],
				selection: ["gust of wind"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"gust of wind": {
					components: SpellsList["gust of wind"].components + "*",
					compMaterial: SpellsList["gust of wind"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Wind Caller trait.",
					changes: "Using Wind Caller, I can cast *Gust of Wind* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
				},
			},
		},
	},
	trait: [
		"**Aarakocra** (multiverse)",
		"##\u25C6 Flight##. I have a Fly Speed equal to my Speed. To use this speed, I can't be wearing Medium or Heavy armor.",
		"##\u25C6 Talons##. My Unarmed Strikes with talons deal 1d6 Slashing damage.",
		"##\u25C6 Wind Caller##. At 3rd level, I can cast *Gust of Wind* without using a spell slot or Material component once per Long Rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for this (one-time choice).",
	],
};
// [dupl_start] In case the aarakocra race doesn't exist, create a new one
if (!RaceList["aarakocra"]) {
	RaceList["multiverse aarakocra"] = Object.assign(MotM_Aarakocra, {
		sortname: "Aarakocra, Multiverse",
		plural: "Aarakocra",
		size: 3,
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("aarakocra", "multiverse", MotM_Aarakocra); }

// Bugbear
var MotM_Bugbear = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*bugbear).*$/i,
	name: "Bugbear (multiverse)",
	sortname: "Multiverse Bugbear",
	source: [["MotM", 8]],
	savetxt: { adv_vs: ["Charmed"] },
	languageProfs: ["Common", 2], // not the languages of the VGtM bugbear
	trait: [
		"**Bugbear** (multiverse) ##\u25C6 Creature Type##. Humanoid (goblinoid).",
		"##\u25C6 Fey Ancestry##. I have Adv on saves to avoid or end being Charmed.",
		"##\u25C6 Powerful Build##. I count as one size larger for the weight I can carry.",
		"##\u25C6 Long-Limbed##. I add 5 ft of reach with my melee attacks on my turn.",
		"##\u25C6 Sneaky##. I am proficient in Stealth and can move through and stop in a space large enough for a Small creature without squeezing.",
		"##\u25C6 Surprise Attack##. My attacks deal +2d6 damage if the target hasn't taken a turn yet" + (typePF ? " in the current combat." : "."),
	],
};
// [dupl_start] In case the bugbear race doesn't exist, create a new one
if (!RaceList["bugbear"]) {
	RaceList["multiverse bugbear"] = Object.assign(MotM_Bugbear, {
		sortname: "Bugbear, Multiverse",
		plural: "Bugbears",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		vision: [["Darkvision", 60]],
		skills: ["Stealth"],
		carryingCapacity: 2,
	});
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("bugbear", "multiverse", Object.assign(MotM_Bugbear, {
		features: {
			"surprise attack": null, // no longer once per combat
		},
	}));
}

// Centaur
var MotM_Centaur = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*centaur).*$/i,
	name: "Centaur (multiverse)",
	sortname: "Multiverse Centaur",
	source: [["MotM", 9]],
	languageProfs: ["Common", 2], // not the languages of the GGtR centaur
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /\b(hoofs?|hooves)\b/i,
		name: "Hooves",
		source: [["MotM", 9]],
		damage: [1, 6, "bludgeoning"],
		description: "Use as Bonus Action after charge 30 ft",
		selectNow: true,
	}],
	trait: [
		"**Centaur** (multiverse)",
		"##\u25C6 Fey##. My creature type is Fey, rather than Humanoid.",
		"##\u25C6 Hooves##. I can use my hooves for Unarmed Strikes that deal 1d6 Bludgeoning damage.",
		"##\u25C6 Charge##. If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a Bonus Action.",
		"##\u25C6 Equine Build##. I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft.",
	],
};
// [dupl_start] In case the centaur race doesn't exist, create a new one
if (!RaceList["centaur"]) {
	RaceList["multiverse centaur"] = Object.assign(MotM_Centaur, {
		sortname: "Centaur, Multiverse",
		plural: "Centaurs",
		size: 3,
		speed: {
			walk: { spd: 40, enc: 30 },
		},
		action: [["bonus action", "Hooves (after charge)"]],
		skillstxt: "Choose one from Animal Handling, Medicine, Nature, or Survival",
		carryingCapacity: 2,
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("centaur", "multiverse", MotM_Centaur); }

// Svirfneblin
AddSubRace("gnome", "deep-multiverse", {
	regExpSearch: /^(?=.*(multiverse|motm\b))((?=.*\b(underdarks?|deep|depths?)\b)(?=.*\bgnomes?\b)|(?=.*svirfneblin)).*$/i,
	name: "Svirfneblin (multiverse)",
	sortname: "Multiverse Deep Gnome (Svirfneblin)",
	source: [["MotM", 41]],
	plural: "Svirfneblin",
	vision: [["Darkvision", 120]],
	savetxt: { text: ["Adv on Int/Wis/Cha saves vs spells"] },
	trait: [
		"**Svirfneblin** (multiverse) ##\u25C6 Creature Type##. Humanoid (gnome).",
		"##\u25C6 Svirfneblin Camouflage##. Proficiency Bonus per Long Rest, I can gain Adv on Stealth checks.",
		"##\u25C6 Gnomish Magic Resistance##. I have Advantage on Int, Wis, and Cha saves vs spells.",
		"##\u25C6 Gift of the Svirfneblin##. At 3rd level, I can cast *Disguise Self* once per Long Rest without a spell slot. At 5th level, I can cast *Nondetection* once per Long Rest without a spell slot or Material components. I can also cast each spell using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
	],
	spellcastingAbility: [4, 5, 6],
	features: {
		"svirfneblin camouflage": {
			name: "Svirfneblin Camouflage",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"gift of the svirfneblin (level 3)": {
			name: "Gift of the Svirfneblin (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Gift of the Svirfneblin",
				spells: ["disguise self"],
				selection: ["disguise self"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
		},
		"gift of the svirfneblin (level 5)": {
			name: "Gift of the Svirfneblin (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Gift of the Svirfneblin",
				spells: ["nondetection"],
				selection: ["nondetection"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"nondetection": {
					components: "V,S,M*",
					compMaterial: SpellsList["nondetection"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Gift of the Svirfneblin trait.",
					changes: "Using Gift of the Svirfneblin, I can cast *Nondetection* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
				},
			},
		},
	},
});

// Duergar
AddSubRace("dwarf", "gray-multiverse", {
	regExpSearch: /^(?=.*(multiverse|motm\b))((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name: "Duergar (multiverse)",
	sortname: "Multiverse Duergar",
	source: [["MotM", 12]],
	plural: "Duergar",
	vision: [["Darkvision", 120]],
	savetxt: { adv_vs: ["Charmed", "Poisoned", "Stunned"] },
	calcChanges: null, // no Dwarven Toughness
	trait: [
		"**Duergar** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Creature Type##. Humanoid (dwarf).",
		"##\u25C6 Dwarven Resilience & Psionic Fortitude##. I have Advantage on saving throws to avoid or end being Poisoned, Charmed, or Stunned and I have Resistance to Poison damage.",
		"##\u25C6 Duergar Magic##. At 3rd level, I learn the *Enlarge/Reduce* spell. At 5th level, I learn the *Invisibility* spell. I can cast each spell on myself once per Long Rest without using a spell slot or Material components, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
	],
	spellcastingAbility: [4, 5, 6],
	features: {
		"stonecunning": null, // not the PHB'24 Tremorsense version
		"duergar magic (level 3)": {
			name: "Duergar Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Duergar Magic",
				spells: ["enlarge/reduce"],
				selection: ["enlarge/reduce"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"enlarge/reduce": {
					range: "Self/" + SpellsList["enlarge/reduce"].range,
					components: SpellsList["enlarge/reduce"].components + "*",
					compMaterial: SpellsList["enlarge/reduce"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Duergar Magic trait.",
					changes: "Using Duergar Magic, I can cast *Enlarge/Reduce* on myself once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
				},
			},
		},
		"duergar magic (level 5)": {
			name: "Duergar Magic (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Duergar Magic",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"invisibility": {
					range: "Self/" + SpellsList["invisibility"].range,
					components: SpellsList["invisibility"].components + "*",
					compMaterial: SpellsList["invisibility"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Duergar Magic trait.",
					changes: "Using Duergar Magic, I can cast *Invisibility* on myself once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
				},
			},
		},
	},
});

// Eladrin
AddSubRace("elf", "fey-multiverse", {
	regExpSearch: /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name: "Eladrin (multiverse)",
	sortname: "Multiverse Fey Elf (Eladrin)",
	source: [["MotM", 13]],
	plural: "Eladrin",
	skills: ["Perception"],
	skillstxt: null,
	toolProfs: [["Trance: tool or weapon", 2]],
	abilitySave: [4, 5, 6],
	trait: [
		"**Eladrin** (multiverse) ##\u25C6 Creature Type##. Humanoid (elf).",
		"##\u25C6 Trance##. I don't need to sleep, and magic can't put me to sleep. I can finish a Long Rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next Long Rest.",
		"##\u25C6 Shifting Seasons##. After I finish a Long Rest, I can align with a season.",
		"##\u25C6 Fey Step##. Prof Bonus per Long Rest, as a Bonus Action, I can magically teleport up to 30 ft to an unoccupied space I can see. At 3rd level, additional effects based on my season.",
	],
	features: {
		"fey step": {
			name: "Fey Step",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			action: [["bonus action", ""]],
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
	},
	toNotesPage: [{
		name: "Shifting Seasons",
		source: [["MotM", 13]],
		popupName: "Eladrin Shifting Season Features",
		page3notes: true,
		note: [
			"***Autumn***. After using Fey Step, up to 2 creatures I can see within 10 ft must make a Wisdom save or be Charmed by me for 1 minute, or until I or my allies damage it.",
			"***Winter***. When I use Fey Step, one target within 5 ft of where I teleported from must make a Wisdom save or be Frightened of me until the end of my next turn.",
			"***Spring***. When I use Fey Step, I can instead teleport one willing creature within 5 ft that I touch. It teleports to an unoccupied space of my choice that I can see within 30 ft of me.",
			"***Summer***. After using Fey Step, each creature of my choice that I can see within 5 ft takes Fire damage equal to my Proficiency Bonus.",
		],
	}],
});

// [dupl_start] reprints from Wild Beyond the Witchlight
if (!RaceList["fairy"]) {
	RaceList["fairy"] = {
		regExpSearch: /fairy/i,
		name: "Fairy",
		source: [["MotM", 14], ["WBtW", 12]],
		plural: "Fairies",
		size: 4,
		speed: {
			walk: { spd: 30, enc: 20 },
			fly: { spd: "walk", enc: 0 },
		},
		spellcastingAbility: [4, 5, 6],
		spellcastingBonus: [{
			name: "Fairy Magic",
			spells: ["druidcraft"],
			selection: ["druidcraft"],
		}],
		features: {
			"fairy magic (level 3)": {
				name: "Fairy Magic (level 3)",
				minlevel: 3,
				spellcastingBonus: [{
					name: "Fairy Magic (level 3)",
					spells: ["faerie fire"],
					selection: ["faerie fire"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
			},
			"fairy magic (level 5)": {
				name: "Fairy Magic (level 5)",
				minlevel: 5,
				spellcastingBonus: [{
					name: "Fairy Magic (level 5)",
					spells: ["enlarge/reduce"],
					selection: ["enlarge/reduce"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
			},
		},
		trait: [
			"**Fairy**",
			"##\u25C6 Fey##. My creature type is Fey, rather than Humanoid." + (typePF ? "\r" : " ") + "##\u25C6 Flight##. I have a Fly Speed equal to my Speed. To use this speed, I can't be wearing Medium or Heavy armor.",
			"##\u25C6 Fairy Magic##. I know the *Druidcraft* cantrip. At 3rd level, I can cast *Faerie Fire*. At 5th level, I can cast *Enlarge/Reduce*. I can cast each spell without using a spell slot once per Long Rest, as well as by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
		],
	};
}
if (!RaceList["harengon"]) {
	RaceList["harengon"] = {
		regExpSearch: /harengon/i,
		name: "Harengon",
		source: [["MotM", 22], ["WBtW", 13]],
		plural: "Harengons",
		size: [3, 4],
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		skills: ["Perception"],
		addMod: [{ type: "skill", field: "Init", mod: "Prof", text: "I can add my Proficiency Bonus to my Initiative rolls." }],
		action: [["reaction", "Lucky Footwork"], ["bonus action", "Rabbit Hop"]],
		features: {
			"rabbit hop": {
				name: "Rabbit Hop",
				minlevel: 1,
				usages: "Proficiency Bonus per ",
				usagescalc: "event.value = How('Proficiency Bonus');",
				recovery: "Long Rest",
				additional: ProficiencyBonusList.map(function (n) {
					var hopDistance = n * 5 + " ft";
					return What("Unit System") === "metric" ? ConvertToMetric(hopDistance) : hopDistance;
				}),
			},
		},
		trait: [
			"**Harengon**",
			"##\u25C6 Hare-Trigger##. I can add my Proficiency Bonus to my Initiative rolls.",
			"##\u25C6 Leporine Senses##. I have proficiency in the Perception skill.",
			"##\u25C6 Lucky Footwork##. As a Reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm Prone or my Speed is 0.",
			"##\u25C6 Rabbit Hop##. As a Bonus Action if my Speed isn't 0, I can jump 5 ft times my Prof Bonus without provoking Opportunity Attacks. I can do this my Prof Bonus times per Long Rest.",
		],
	};
} // dupl_end

// Firbolg
var MotM_Firbolg = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*firbolg).*$/i,
	name: "Firbolg (multiverse)",
	sortname: "Multiverse Firbolg",
	source: [["MotM", 15]],
	languageProfs: ["Common", "Speech of Beast and Leaf", 1],
	age: " can live up to 500 years",
	trait: [
		"**Firbolg** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Powerful Build##. I count as one size larger for my carrying capacity.",
		"##\u25C6 Hidden Step##. Proficiency Bonus per Long Rest, as a Bonus Action, I can turn Invisible until my next turn starts, as per the *Invisibility* spell.",
		"##\u25C6 Firbolg Magic##. I can cast *Detect Magic* and *Disguise Self* each once per Long Rest, or using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
		"##\u25C6 Speech of Beast and Leaf##. I can make my words understood, in a limited manner, by Beasts, Plants, and vegetation. I have Advantage on Charisma checks to influence them.",
	],
	spellcastingAbility: [4, 5, 6],
	features: {
		"firbolg magic": {
			name: "Firbolg Magic",
			spellcastingBonus: [{
				name: "Firbolg Magic",
				spells: ["detect magic", "disguise self"],
				selection: ["detect magic", "disguise self"],
				firstCol: "oncelr+markedbox",
				times: 2,
				allowUpCasting: true,
			}],
			spellChanges: {
				"disguise self": {
					description: "Alter appearance with illusion, \u22643 ft shorter/taller; Study action: Int (Investigation) vs DC discerns",
					changes: "Using Firbolg Magic, I can cast *Disguise Self* once per Long Rest without using a spell slot. When I cast it using Firbolg Magic, I can also seem up to 3 feet shorter or taller.",
				},
			},
		},
		"hidden step": {
			name: "Hidden Step",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
	},
};
// [dupl_start] In case the firbolg race doesn't exist, create a new one
if (!RaceList["firbolg"]) {
	RaceList["multiverse firbolg"] = Object.assign(MotM_Firbolg, {
		sortname: "Firbolg, Multiverse",
		plural: "Firbolg",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		carryingCapacity: 2,
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("firbolg", "multiverse", MotM_Firbolg); }

// Genasi
var MotM_Genasi = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched)).*$/i,
	name: "Genasi (multiverse)",
	sortname: "Genasi, Multiverse",
	source: [["MotM", 16]],
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", 2], // not the languages of the EE genasi
	vision: [["Darkvision", 60]],
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " are about 2-4 ft (small) or 5-7 ft (medium) tall (4'8\" + 2d10\")",
	weight: " (medium) weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " are about 60-120 cm (small) or 120-210 cm (medium) tall (145 + 5d10 cm)",
	weightMetric: " (medium) weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	spellcastingAbility: [4, 5, 6],
};
// [dupl_start] In case the genasi race doesn't exist, create a new one
if (!RaceList["genasi"]) {
	RaceList["multiverse genasi"] = Object.assign(MotM_Genasi, {
		plural: "Genasi",
		variants: [], // filled by the AddSubRace() calls below
	});
	MotM_Genasi = {};
} // dupl_end
// The genasi subraces, added to the genasi race from EEPC if it exists, or otherwise to the multiverse genasi above
[
	Object.assign({}, MotM_Genasi, {
		regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
		name: "Air Genasi (multiverse)",
		sortname: "Multiverse Air Genasi",
		source: [["MotM", 16]],
		plural: "Air genasi",
		speed: {
			walk: { spd: 35, enc: 25 },
		},
		dmgres: ["Lightning"],
		trait: [
			"**Air Genasi** (multiverse)",
			"##\u25C6 Unending Breath##. I can hold my breath indefinitely while I am not Incapacitated.",
			"##\u25C6 Lightning Resistance##. I have Resistance to Lightning damage.",
			"##\u25C6 Mingle with the Wind##. I know the *Shocking Grasp* cantrip. At 3rd level, I learn *Feather Fall*. At 5th level, I learn *Levitate*. I can cast each spell without using a spell slot or Material components once per Long Rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
		],
		spellcastingBonus: [{
			name: "Mingle with the Wind",
			spells: ["shocking grasp"],
			selection: ["shocking grasp"],
		}],
		features: {
			"mingle with the wind (level 3)": {
				name: "Mingle with the Wind (level 3)",
				minlevel: 3,
				spellcastingBonus: [{
					name: "Mingle with the Wind",
					spells: ["feather fall"],
					selection: ["feather fall"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
				spellChanges: {
					"feather fall": {
						components: SpellsList["feather fall"].components + "*",
						compMaterial: SpellsList["feather fall"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Mingle with the Wind trait.",
						changes: "Using Mingle with the Wind, I can cast *Feather Fall* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
					},
				},
			},
			"mingle with the wind (level 5)": {
				name: "Mingle with the Wind (level 5)",
				minlevel: 5,
				spellcastingBonus: [{
					name: "Mingle with the Wind",
					spells: ["levitate"],
					selection: ["levitate"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
				spellChanges: {
					"levitate": {
						components: SpellsList["levitate"].components + "*",
						compMaterial: SpellsList["levitate"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Mingle with the Wind trait.",
						changes: "Using Mingle with the Wind, I can cast *Levitate* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
					},
				},
			},
		},
	}),
	Object.assign({}, MotM_Genasi, {
		regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
		name: "Earth Genasi (multiverse)",
		sortname: "Multiverse Earth Genasi",
		source: [["MotM", 17]],
		plural: "Earth genasi",
		trait: [
			"**Earth Genasi** (multiverse)",
			"##\u25C6 Earth Walk##. I can move across difficult terrain without expending extra movement if I am using my Speed on the ground or a floor.",
			"##\u25C6 Merge with Stone##. I can cast the *Blade Ward* cantrip as normal and as a Bonus Action Prof Bonus times per Long Rest. At 5th level, I can cast *Pass Without Trace* without using a spell slot or Material component once per Long Rest, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
		],
		features: {
			"Merge with Stone (level 1)": {
				name: "Merge with Stone",
				minlevel: 1,
				spellcastingBonus: [{
					name: "Merge with Stone",
					spells: ["blade ward"],
					selection: ["blade ward"],
				}],
				extraLimitedFeatures: [{
					name: "Blade Ward (as Bonus Action)",
					usages: "Proficiency Bonus per ",
					recovery: "Long Rest",
					usagescalc: "event.value = How('Proficiency Bonus');",
				}],
				action: [["bonus action", "Blade Ward"]],
				spellChanges: {
					"blade ward": {
						time: "act/bns",
						changes: "Using Merge with Stone, I can cast *Blade Ward* as a Bonus Action a number of times per Long Rest equal to my Proficiency Bonus.",
					},
				},
			},
			"merge with stone (level 5)": {
				name: "Merge with Stone (level 5)",
				minlevel: 5,
				spellcastingBonus: [{
					name: "Merge with Stone",
					spells: ["pass without trace"],
					selection: ["pass without trace"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
				spellChanges: {
					"pass without trace": {
						components: SpellsList["pass without trace"].components + "*",
						compMaterial: SpellsList["pass without trace"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Merge with Stone trait.",
						changes: "Using Merge with Stone, I can cast *Pass Without Trace* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
					},
				},
			},
		},
	}),
	Object.assign({}, MotM_Genasi, {
		regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
		name: "Fire Genasi (multiverse)",
		sortname: "Multiverse Fire Genasi",
		source: [["MotM", 17]],
		plural: "Fire genasi",
		dmgres: ["Fire"],
		trait: [
			"**Fire Genasi** (multiverse)",
			"##\u25C6 Fire Resistance##. I have Resistance to Fire damage.",
			"##\u25C6 Reach to the Blaze##. I know the *Produce Flame* cantrip. At 3rd level, I learn *Burning Hands*. At 5th level, I learn *Flame Blade*. I can cast each spell without using a spell slot or Material components once per Long Rest, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
		],
		spellcastingBonus: [{
			name: "Reach to the Blaze",
			spells: ["produce flame"],
			selection: ["produce flame"],
		}],
		features: {
			"reach to the blaze (level 3)": {
				name: "Reach to the Blaze (level 3)",
				minlevel: 3,
				spellcastingBonus: [{
					name: "Reach to the Blaze",
					spells: ["burning hands"],
					selection: ["burning hands"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
			},
			"reach to the blaze (level 5)": {
				name: "Reach to the Blaze (level 5)",
				minlevel: 5,
				spellcastingBonus: [{
					name: "Reach to the Blaze",
					spells: ["flame blade"],
					selection: ["flame blade"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
				spellChanges: {
					"flame blade": {
						components: SpellsList["flame blade"].components + "*",
						compMaterial: SpellsList["flame blade"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Reach to the Blaze trait.",
						changes: "Using Reach to the Blaze, I can cast *Flame Blade* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
					},
				},
			},
		},
	}),
	Object.assign({}, MotM_Genasi, {
		regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
		name: "Water Genasi (multiverse)",
		sortname: "Multiverse Water Genasi",
		source: [["MotM", 17]],
		plural: "Water genasi",
		speed: {
			walk: { spd: 30, enc: 20 },
			swim: { spd: "walk", enc: "walk" },
		},
		dmgres: ["Acid"],
		trait: [
			"**Water Genasi** (multiverse)",
			"##\u25C6 Amphibious##. I can breathe air and water" + (typePF ? " and I have a Swim Speed equal to my Speed." : ", have a Swim Speed equal to my Speed."),
			"##\u25C6 Acid Resistance##. I have Resistance to Acid damage.",
			"##\u25C6 Call to the Wave##. I know the *Acid Splash* cantrip. At 3rd level, I can cast *Create or Destroy Water* without using a spell slot once per Long Rest. At 5th level, I can cast *Water Walk* without using a spell slot or Material components once per Long Rest. I can also cast each spell using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these" + (typePF ? " (one-time choice)." : "."),
		],
		spellcastingBonus: [{
			name: "Call to the Wave",
			spells: ["acid splash"],
			selection: ["acid splash"],
		}],
		features: {
			"call to the wave (level 3)": {
				name: "Call to the Wave (level 3)",
				minlevel: 3,
				spellcastingBonus: [{
					name: "Call to the Wave",
					spells: ["create or destroy water"],
					selection: ["create or destroy water"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
			},
			"call to the wave (level 5)": {
				name: "Call to the Wave (level 5)",
				minlevel: 5,
				spellcastingBonus: [{
					name: "Call to the Wave",
					spells: ["water walk"],
					selection: ["water walk"],
					firstCol: "oncelr+markedbox",
					allowUpCasting: true,
				}],
				spellChanges: {
					"water walk": {
						components: SpellsList["water walk"].components + "*",
						compMaterial: SpellsList["water walk"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Call to the Wave trait.",
						changes: "Using Call to the Wave, I can cast *Water Walk* once per Long Rest without requiring Material components. I can also cast it using a spell slot as normal, but then it does require Material components.",
					},
				},
			},
		},
	}),
].forEach(function (oGenasi) {
	var sParent = !RaceList["genasi"] ? "multiverse genasi" : "genasi";
	var sVariant = oGenasi.name.split(" ")[0].toLowerCase();
	if (RaceList["genasi"]) sVariant += "-multiverse";
	AddSubRace(sParent, sVariant, oGenasi);
});

// Githyanki
var MotM_Githyanki = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*githyanki).*$/i,
	name: "Githyanki (multiverse)",
	sortname: "Multiverse Githyanki",
	source: [["MotM", 18]],
	dmgres: ["Psychic"],
	languageProfs: ["Common", 2], // not the languages of the MToF githyanki
	skillstxt: "Choose any one skill that lasts until the end of my next Long Rest",
	toolProfs: [["Astral Knowledge: tool/weapon", 1]],
	age: " typically live to be around 100 years old. Githyanki who reside in the Astral Plane can live indefinitely.",
	trait: [
		"**Githyanki** (multiverse)",
		"##\u25C6 Astral Knowledge##. When I finish a Long Rest, I gain proficiency with 1 skill and with 1 weapon or tool from the PHB until the end of my next Long Rest.",
		"##\u25C6 Githyanki Psionics##. I know the *Mage Hand* cantrip, but require no components to cast it and the hand is invisible. At 3rd level, I learn *Jump*. At 5th level, I learn *Misty Step*. I can cast each without using components or a spell slot once per Long Rest, as well as by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
	],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Githyanki Psionics (1)",
		spells: ["mage hand"],
		selection: ["mage hand"],
	}],
	features: {
		"githyanki psionics (level 3)": {
			name: "Githyanki Psionics (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Githyanki Psionics (3)",
				spells: ["jump"],
				selection: ["jump"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"jump": {
					components: SpellsList["jump"].components + "*",
					compMaterial: SpellsList["jump"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Githyanki Psionics trait.",
					changes: "Using Githyanki Psionics, I can cast *Jump* once per Long Rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components.",
				},
			},
		},
		"githyanki psionics (level 5)": {
			name: "Githyanki Psionics (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Githyanki Psionics (5)",
				spells: ["misty step"],
				selection: ["misty step"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"misty step": {
					components: SpellsList["misty step"].components + "*",
					changes: "Using Githyanki Psionics, I can cast *Misty Step* once per Long Rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components.",
				},
			},
		},
	},
};
// [dupl_start] In case the githyanki race doesn't exist, create a new one
if (!RaceList["githyanki"]) {
	RaceList["multiverse githyanki"] = Object.assign(MotM_Githyanki, {
		sortname: "Githyanki, Multiverse",
		plural: "Githyanki",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		spellChanges: {
			"mage hand": {
				components: "",
				description: "Invisible hand does simple task, carry \u226410lb; Act to control again, move 30ft; ends if recast/out range",
				changes: "Using Githyanki Psionics, I can cast *Mage Hand* without requiring components and the spectral hand is invisible.",
			},
		},
	});
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("githyanki", "multiverse", Object.assign(MotM_Githyanki, {
		armorProfs: null, // no Martial Prodigy
		weaponProfs: null, // no Martial Prodigy
	}));
}

// Githzerai
var MotM_Githzerai = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*githzerai).*$/i,
	name: "Githzerai (multiverse)",
	sortname: "Multiverse Githzerai",
	source: [["MotM", 19]],
	dmgres: ["Psychic"],
	languageProfs: ["Common", 2], // not the languages of the MToF githzerai
	age: " typically live to be around 100 years old. Githzerai who reside in the Astral Plane can live indefinitely.",
	trait: [
		"**Githzerai** (multiverse)",
		"##\u25C6 Githzerai Psionics##. I know the *Mage Hand* cantrip, but require no components to cast it and the hand is invisible. At 3rd level, I learn *Shield*. At 5th level, I learn *Detect Thoughts*. I can cast each without using components or a spell slot once per Long Rest, or by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
		"##\u25C6 Mental Discipline##. I have Advantage on saving throws to avoid or end the Charmed and Frightened conditions on myself.",
	],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Githzerai Psionics (1)",
		spells: ["mage hand"],
		selection: ["mage hand"],
	}],
	features: {
		"githzerai psionics (level 3)": {
			name: "Githzerai Psionics (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Githzerai Psionics (3)",
				spells: ["shield"],
				selection: ["shield"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"shield": {
					components: SpellsList["shield"].components + "*",
					changes: "Using Githzerai Psionics, I can cast *Shield* once per Long Rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components.",
				},
			},
		},
		"githzerai psionics (level 5)": {
			name: "Githzerai Psionics (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Githzerai Psionics (5)",
				spells: ["detect thoughts"],
				selection: ["detect thoughts"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
			spellChanges: {
				"detect thoughts": {
					components: SpellsList["detect thoughts"].components.replace("\u0192", "") + "*",
					compMaterial: SpellsList["detect thoughts"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Githzerai Psionics trait.",
					changes: "Using Githzerai Psionics, I can cast *Detect Thoughts* once per Long Rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components.",
				},
			},
		},
	},
};
// [dupl_start] In case the githzerai race doesn't exist, create a new one
if (!RaceList["githzerai"]) {
	RaceList["multiverse githzerai"] = Object.assign(MotM_Githzerai, {
		sortname: "Githzerai, Multiverse",
		plural: "Githzerai",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		savetxt: { adv_vs: ["Charmed", "Frightened"] },
		spellChanges: {
			"mage hand": {
				components: "",
				description: "Invisible hand does simple task, carry \u226410lb; Act to control again, move 30ft; ends if recast/out range",
				changes: "Using Githzerai Psionics, I can cast *Mage Hand* without requiring components and the spectral hand is invisible.",
			},
		},
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("githzerai", "multiverse", MotM_Githzerai); }

// Goblin
var MotM_Goblin = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*\bgoblin)(?!.*(hobgoblin|bugbear)).*$/i,
	name: "Goblin (multiverse)",
	sortname: "Multiverse Goblin",
	source: [["MotM", 20]],
	savetxt: { adv_vs: ["Charmed"] },
	languageProfs: ["Common", 2], // not the languages of the VGtM goblin
	features: {
		"fury of the small": {
			name: "Fury of the Small",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return "+" + n + " damage"; }),
		},
	},
	trait: [
		"**Goblin** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Creature Type##. Humanoid (goblinoid).",
		"##\u25C6 Fey Ancestry##. I have Advantage on saving throws to avoid or end the Charmed condition on myself.",
		"##\u25C6 Fury of the Small##. A number of times per Long Rest equal to my Proficiency Bonus, when I damage a creature of a size category larger than mine with an attack or a spell, I can have it take extra damage equal to my Proficiency Bonus.",
		"##\u25C6 Nimble Escape##. As a Bonus Action, I can take the Disengage or Hide action.",
	],
};
// [dupl_start] In case the goblin race doesn't exist, create a new one
if (!RaceList["goblin"]) {
	RaceList["multiverse goblin"] = Object.assign(MotM_Goblin, {
		sortname: "Goblin, Multiverse",
		plural: "Goblins",
		size: 4,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		vision: [["Darkvision", 60]],
		action: [["bonus action", "Nimble Escape (Disengage/Hide)"]],
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("goblin", "multiverse", MotM_Goblin); }

// Hobgoblin
var MotM_Hobgoblin = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*hobgoblin).*$/i,
	name: "Hobgoblin (multiverse)",
	sortname: "Multiverse Hobgoblin",
	source: [["MotM", 23]],
	savetxt: { adv_vs: ["Charmed"] },
	languageProfs: ["Common", 2], // not the languages of the VGtM hobgoblin
	features: {
		"fey gift": {
			name: "Fey Gift",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			action: [["bonus action", " (Help action)"]],
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"fortune from the many": {
			name: "Fortune from the Many",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"fey gift: additional effect": {
			name: "Fey Gifts: Additional Effects",
			minlevel: 3,
			toNotesPage: [{
				page3notes: true,
				note: [
					"Whenever I use Fey Gift to take the Help action, I can choose one of these additional effects.",
					" \u2022 **Hospitality**. The one I help and I each gain 1d6 + my Prof Bonus in Temporary HP.",
					" \u2022 **Passage**. The one I help and I both gain +10 ft Speed until my next turn starts.",
					" \u2022 **Spite**. The first time the one I help hits an attack roll before my next turn starts, the creature hit gains Disadvantage on its next attack roll within the next minute.",
				],
			}],
		},
	},
	trait: [
		"**Hobgoblin** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Creature Type##. Humanoid (goblinoid).",
		"##\u25C6 Fey Ancestry##. I have Adv on saves to avoid or end being Charmed.",
		"##\u25C6 Fey Gift##. Prof Bonus per Long Rest, I can take the Help action as a Bonus Action. From 3rd-level, I can produce an additional effect when I do this: Hospitality, Passage, or Spite.",
		"##\u25C6 Fortune from the Many##. Prof Bonus per Long Rest, when I miss an attack or fail an ability check or saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +3).",
	],
};
// [dupl_start] In case the hobgoblin race doesn't exist, create a new one
if (!RaceList["hobgoblin"]) {
	RaceList["multiverse hobgoblin"] = Object.assign(MotM_Hobgoblin, {
		sortname: "Hobgoblin, Multiverse",
		plural: "Hobgoblins",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		vision: [["Darkvision", 60]],
	});
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("hobgoblin", "multiverse", Object.assign(MotM_Hobgoblin, {
		armorProfs: null, // no Martial Training
		features: Object.assign({
			"saving face": null, // replaced by Fortune from the Many
		}, MotM_Hobgoblin.features),
	}));
}

// Kenku
var MotM_Kenku = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*kenku).*$/i,
	name: "Kenku (multiverse)",
	sortname: "Multiverse Kenku",
	source: [["MotM", 24]],
	size: [3, 4],
	skillstxt: "Choose any two skills",
	languageProfs: ["Common", 2], // not the languages of the VGtM kenku
	abilitySave: 6,
	features: {
		"kenku recall": {
			name: "Kenku Recall",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
	},
	trait: [
		"**Kenku** (multiverse)",
		"##\u25C6 Expert Duplication##. I have Adv on checks to produce exact copies of writing or craftwork.",
		"##\u25C6 Kenku Recall##. Proficiency Bonus per Long Rest, I can give myself Advantage on an ability check using any skill in which I have proficiency.",
		"##\u25C6 Mimicry##. I can mimic sounds and voices I have heard. Creatures hearing me can determine the imitation with a successful Wisdom (Insight) check against a DC of 8 + my Proficiency Bonus + my Charisma modifier.",
	],
};
// [dupl_start] In case the kenku race doesn't exist, create a new one
if (!RaceList["kenku"]) {
	RaceList["multiverse kenku"] = Object.assign(MotM_Kenku, {
		sortname: "Kenku, Multiverse",
		plural: "Kenku",
		speed: {
			walk: { spd: 30, enc: 20 },
		},
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("kenku", "multiverse", MotM_Kenku); }

// Kobold
var MotM_Kobold_Draconic_Cry = "##\u25C6 Draconic Cry##. As a Bonus Action, I can let out a cry. Until the start of my next turn, my allies and I have Advantage on attack rolls against enemies within 10 ft of me who could hear the cry. I can do this a number of times per Long Rest equal to my Proficiency Bonus.";
var MotM_Kobold = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*kobold).*$/i,
	name: "Kobold (multiverse)",
	sortname: "Kobold, Multiverse",
	source: [["MotM", 25]],
	vision: [["Darkvision", 60]], // no Sunlight Sensitivity
	languageProfs: ["Common", 2], // not the languages of the VGtM kobold
	features: {
		"draconic cry": {
			name: "Draconic Cry",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			action: [["bonus action", ""]],
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
	},
};
var MotM_Kobold_Legacies = [{
	type: "craftiness",
	regExpSearch: /craftiness/i,
	name: "Craftiness Kobold (multiverse)",
	sortname: "Multiverse Kobold (Craftiness)",
	source: [["MotM", 25]],
	skillstxt: "Choose one from Arcana, Investigation, Medicine, Sleight of Hand, or Survival",
	trait: [
		"**Kobold** (multiverse)",
		"##\u25C6 Kobold Legacy (Craftiness)##. I gain proficiency in one of the following skills of my choice: Arcana, Investigation, Medicine, Sleight of Hand, or Survival.",
		MotM_Kobold_Draconic_Cry,
	],
}, {
	type: "defiance",
	regExpSearch: /defiance/i,
	name: "Defiance Kobold (multiverse)",
	sortname: "Multiverse Kobold (Defiance)",
	source: [["MotM", 25]],
	savetxt: { adv_vs: ["Frightened"] },
	trait: [
		"**Kobold** (multiverse)",
		"##\u25C6 Kobold Legacy (Defiance)##. I have Advantage on saving throws to avoid or end the Frightened condition on myself.",
		MotM_Kobold_Draconic_Cry,
	],
}, {
	type: "draconic sorcery",
	regExpSearch: /sorcery/i,
	name: "Draconic Sorcery Kobold (multiverse)",
	sortname: "Multiverse Kobold (Draconic Sorcery)",
	source: [["MotM", 25]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Kobold Legacy",
		"class": "sorcerer",
		level: [0, 0],
	}],
	trait: [
		"**Kobold** (multiverse)",
		"##\u25C6 Kobold Legacy (Draconic Sorcery)##. I know one cantrip from the Sorcerer spell list. Intelligence, Wisdom, or Charisma is my spellcasting ability for it (one-time choice).",
		MotM_Kobold_Draconic_Cry,
	],
}];
// [dupl_start] In case the kobold race doesn't exist, create a new one
if (!RaceList["kobold"]) {
	RaceList["multiverse kobold"] = Object.assign(MotM_Kobold, {
		plural: "Kobolds",
		size: 4,
		speed: { walk: { spd: 30, enc: 20 } },
	});
	MotM_Kobold_Legacies.forEach(function (oLegacy) {
		var type = oLegacy.type;
		delete oLegacy.type;
		oLegacy.name = oLegacy.sortname.replace("Multiverse ", "");
		delete oLegacy.sortname;
		AddSubRace("multiverse kobold", type, oLegacy);
	});
} else // But otherwise make each Kobold Legacy a subrace
// dupl_end
{
	MotM_Kobold_Legacies.forEach(function (oLegacy) {
		var type = oLegacy.type;
		delete oLegacy.type;
		delete oLegacy.name;
		var oSubrace = Object.assign({}, MotM_Kobold, {
			features: Object.assign({
				"grovel, cower, and beg": null, // replaced by Draconic Cry
			}, MotM_Kobold.features),
		}, oLegacy)
		AddSubRace("kobold", "multiverse-" + type, oSubrace);
	});
}

// Lizardfolk
var MotM_Lizardfolk = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*lizard(folk|man|men)).*$/i,
	name: "Lizardfolk (multiverse)",
	sortname: "Multiverse Lizardfolk",
	source: [["MotM", 26]],
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: "walk", enc: "walk" },
	},
	skillstxt: "Choose two from Animal Handling, Medicine, Nature, Perception, Stealth, and Survival",
	languageProfs: ["Common", 2], // not the languages of the VGtM lizardfolk
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /\bbite\b/i,
		name: "Bite",
		source: [["MotM", 26]],
		damage: [1, 6, "slashing"],
		selectNow: true,
	}],
	armorOptions: [{
		regExpSearch: /^(?=.*natural)(?=.*armou?r).*$/i,
		name: "Natural Armor",
		source: [["MotM", 26]],
		ac: 13,
		selectNow: true,
	}],
	features: {
		"hungry jaws": {
			name: "Hungry Jaws",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return n + " Temp HP"; }),
			action: [["bonus action", ""]],
		},
	},
	trait: [
		"**Lizardfolk** (multiverse)",
		"##\u25C6 Bite##. My Unarmed Strikes with my fanged maw deal 1d6 Slashing damage.",
		"##\u25C6 Hold Breath##. I can hold my breath for up to 15 minutes at a time.",
		"##\u25C6 Hungry Jaws##. Prof Bonus per Long Rest, as a Bonus Action, I can make a special bite attack. If it hits, it deals damage and I gain Temporary HP equal to my Proficiency Bonus.",
		"##\u25C6 Natural Armor##. I have an AC of 13 + Dexterity modifier + shield.",
		"##\u25C6 Nature's Intuition##. " + (typePF ? "I gain proficiency with two of the following:" : "2 of:") + " Animal Handling, Medicine, Nature, Perception, Stealth, " + (typePF ? "or " : "") + "Survival.",
	],
};
// [dupl_start] In case the lizardfolk race doesn't exist, create a new one
if (!RaceList["lizardfolk"]) {
	RaceList["multiverse lizardfolk"] = Object.assign(MotM_Lizardfolk, {
		sortname: "Lizardfolk, Multiverse",
		plural: "Lizardfolk",
		size: 3,
	});
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("lizardfolk", "multiverse", Object.assign(MotM_Lizardfolk, {
		features: Object.assign({
			"cunning artisan": null, // not part of the multiverse lizardfolk
		}, MotM_Lizardfolk.features),
	}));
}

// Minotaur
var MotM_Minotaur = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*minotaur).*$/i,
	name: "Minotaur (multiverse)",
	sortname: "Multiverse Minotaur",
	source: [["MotM", 27]],
	languageProfs: ["Common", 2], // not the languages of the GGtR minotaur
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /\bhorns?\b/i,
		name: "Horns",
		source: [["MotM", 27]],
		damage: [1, 6, "piercing"],
		description: "Attack as a Bonus Action after moving 20 ft with the Dash action",
		selectNow: true,
	}],
	vision: [["Always know north", 0], ["Adv on Survival to navigate or track", 0]],
	trait: [
		"**Minotaur** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Horns##. My Unarmed Strikes with horns deal 1d6 Piercing damage.",
		"##\u25C6 Goring Rush##. When taking a Dash action and moving at least 20 ft, I can make a horns attack as a Bonus Action.",
		"##\u25C6 Hammering Horns##. As a Bonus Action after I hit a melee attack on my turn during my Attack action, I can shove the target, if it's up to one size larger than me. It must make a Str save (DC 8 + Str mod + Prof Bonus) or be pushed up to 10 ft away from me.",
		"##\u25C6 Labyrinthine Recall##. " + (typePF ? "I always know which direction is north, and have Adv on any Wis (Survival) check I make to navigate or track." : "I have Adv on Survival to navigate or track and always know north."),
	],
};
// [dupl_start] In case the minotaur race doesn't exist, create a new one
if (!RaceList["minotaur"]) {
	RaceList["multiverse minotaur"] = Object.assign(MotM_Minotaur, {
		sortname: "Minotaur, Multiverse",
		plural: "Minotaurs",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		abilitySave: 1,
		action: [
			["bonus action", "Goring Rush (with Dash)"],
			["bonus action", "Hammering Horns (after hit)"],
		],
	});
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("minotaur", "multiverse", Object.assign(MotM_Minotaur, {
		skillstxt: null, // no Imposing Presence
	}));
}

// Satyr
var MotM_Satyr = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*satyr).*$/i,
	name: "Satyr (multiverse)",
	sortname: "Multiverse Satyr",
	source: [["MotM", 29]],
	savetxt: { adv_vs: ["spells"] },
	languageProfs: ["Common", 2], // not the languages of the MOT satyr
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*(satyr|\bram\b))(?=.*headbutt).*$/i,
		name: "Satyr Headbutt",
		source: [["MotM", 29]],
		damage: [1, 6, "bludgeoning"],
		selectNow: true,
	}],
	trait: [
		"**Satyr** (multiverse) ##\u25C6 Fey##. My creature type is Fey" + (typePF ? "." : ", rather than Humanoid."),
		"##\u25C6 Ram##. My Unarmed Strikes with my horned head deal 1d6 Bludgeoning damage.",
		"##\u25C6 Magic Resistance##. I have Advantage on saves against spells.",
		"##\u25C6 Mirthful Leaps##. Whenever I make a Long or High Jump, I can roll a d8 and add the number rolled to the number of ft I cover, even when making a standing jump. This extra distance costs movement as normal.",
		"##\u25C6 Reveler##. I have proficiency in Performance, Persuasion, and one musical instrument.",
	],
};
// [dupl_start] In case the satyr race doesn't exist, create a new one
if (!RaceList["satyr"]) {
	RaceList["multiverse satyr"] = Object.assign(MotM_Satyr, {
		sortname: "Satyr, Multiverse",
		plural: "Satyr",
		size: 3,
		speed: {
			walk: { spd: 35, enc: 25 },
		},
		toolProfs: [["Musical instrument", 1]],
		skills: ["Performance", "Persuasion"],
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("satyr", "multiverse", MotM_Satyr); }

// Sea Elf
AddSubRace("elf", "sea-multiverse", {
	regExpSearch: /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name: "Sea Elf (multiverse)",
	sortname: "Multiverse Sea Elf",
	source: [["MotM", 30]],
	plural: "Sea Elves",
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: "walk", enc: "walk" },
	},
	languageProfs: ["Common", "Friend of the Sea", 1],
	dmgres: ["Cold"],
	skills: ["Perception"],
	skillstxt: null,
	toolProfs: [["Trance: tool or weapon", 2]],
	age: " can live to be 750 years old",
	trait: [
		"**Sea Elf** (multiverse) ##\u25C6 Creature Type##. Humanoid (elf).",
		"##\u25C6 Trance##. I don't need to sleep, and magic can't put me to sleep. I can finish a Long Rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next Long Rest.",
		"##\u25C6 Child of the Sea##. I can breathe air and water and have Resistance to Cold damage.",
		"##\u25C6 Friend of the Sea##. I can communicate simple ideas to Beasts with a Swim Speed. It can understand my words, though I have no special ability to understand it in return.",
	],
});
AddSubRace("elf", "shadow-multiverse", {
	regExpSearch: /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name: "Shadar-Kai (multiverse)",
	sortname: "Multiverse Shadow Elf (Shadar-Kai)",
	source: [["MotM", 31]],
	plural: "Shadar-kai",
	dmgres: ["Necrotic"],
	skills: ["Perception"],
	skillstxt: null,
	toolProfs: [["Trance: tool or weapon", 2]],
	trait: [
		"**Shadar-Kai** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Creature Type##. Humanoid (elf).",
		"##\u25C6 Trance##. I don't need to sleep, and magic can't put me to sleep. I can finish a Long Rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next Long Rest.",
		"##\u25C6 Blessing of the Raven Queen##. Prof Bonus per Long Rest, as a Bonus Action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, I then also appear translucent and have Resistance to all damage until the start of my next turn.",
	],
	features: {
		"blessing of the raven queen": {
			name: "Blessing of the Raven Queen",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
	},
});

// Tabaxi
RaceList["tabaxi-motm"] = { // just a plain improvement over the previous, no need to make it a separate "multiverse" choice
	regExpSearch: /tabaxi/i,
	name: "Tabaxi",
	source: [["MotM", 33]],
	plural: "Tabaxi",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
		climb: { spd: "walk", enc: "walk" },
	},
	skills: ["Perception", "Stealth"],
	vision: [["Darkvision", 60]],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*(tabaxi|\bcat\b))(?=.*claw).*$/i,
		name: "Tabaxi Claws",
		source: [["MotM", 33]],
		damage: [1, 6, "slashing"],
		selectNow: true,
	}],
	age: " reach adulthood in their late teens and live less than 100 years [according to VGtM]",
	height: ", when Medium sized, range from 5 to well over 6 feet tall (4'10\" + 2d10\") [according to VGtM]",
	weight: ", when Medium sized, weigh around 150 lb (90 + 2d10 \xD7 2d4 lb) [according to VGtM]",
	heightMetric: ", when Medium sized, range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm) [according to VGtM]",
	weightMetric: ", when Medium sized, weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	features: {
		"feline agility": {
			name: "Feline Agility",
			minlevel: 1,
			usages: 1,
			recovery: " Turn",
			additional: "still for 1 turn to recover",
		},
	},
	trait: [
		"**Tabaxi**",
		"##\u25C6 Cat's Talent##. I have proficiency in Perception and Stealth.",
		"##\u25C6 Cat's Claws##. I can use my retractable claws to make Unarmed Strikes dealing 1d6 Slashing damage. They also give me a Climb Speed equal to my Speed.",
		"##\u25C6 Feline Agility##. When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns.",
	],
};

// Tortle
RaceList["tortle-motm"] = { // just a plain improvement over the previous, no need to make it a separate "multiverse" choice
	regExpSearch: /tortle/i,
	name: "Tortle",
	sortname: "Tortle",
	source: [["MotM", 34]],
	plural: "Tortles",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	skillstxt: "Choose one from Animal Handling, Medicine, Nature, Perception, Stealth, or Survival",
	armorOptions: [{
		regExpSearch: /^(?=.*tortle)(?=.*shell).*$/i,
		name: "Tortle's Shell",
		source: [["MotM", 34]],
		ac: 17,
		dex: -10,
		selectNow: true,
	}],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*tortle)(?=.*\bclaws?\b).*$/i,
		name: "Tortle's Claws",
		source: [["MotM", 34]],
		damage: [1, 6, "slashing"],
		selectNow: true,
	}],
	age: " reach adulthood by the age of 15 and live an average of 50 years [according to the Tortle Package]",
	height: ", when Medium sized, stand between 5 and 6 feet tall (4'10\" + 2d8\") [according to the Tortle Package]",
	weight: ", when Medium sized, weigh around 450 lb (400 + 2d8 \xD7 2d4 lb) [according to the Tortle Package]",
	heightMetric: ", when Medium sized, stand between 1,5 and 1,8 metres tall (150 + 5d8 cm) [according to the Tortle Package]",
	weightMetric: ", when Medium sized, weigh around 190 kg (180 + 5d8 \xD7 4d4 / 10 kg) [according to the Tortle Package]",
	action: [["action", "Shell Defense (start)"], ["bonus action", "Shell Defense (end)"]],
	trait: [
		"**Tortle**",
		"##\u25C6 Claws##. My Unarmed Strikes with my claws deal 1d6 Slashing damage.",
		"##\u25C6 Hold Breath##. I can hold my breath for up to 1 hour at a time.",
		"##\u25C6 Natural Armor##. I have a base AC of 17, but I can't add my Dex to it or wear armor.",
		"##\u25C6 Shell Defense##. As an action, I can withdraw into my shell and gain +4 AC and Adv on Str and Con saves, but I count as Prone, have speed 0, have Disadv on Dex saves, and can't take Reactions. The only action I can take is a Bonus Action to emerge from the shell.",
	],
};

// Triton
var MotM_Triton = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*triton).*$/i,
	name: "Triton (multiverse)",
	sortname: "Multiverse Triton",
	source: [["MotM", 35]],
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: "walk", enc: "walk" },
	},
	languageProfs: ["Common", "Emissary of the Sea", 1],
	trait: [
		"**Triton** (multiverse)" + (typePF ? "\r" : " ") + "##\u25C6 Control Air and Water##. I can cast the *Fog Cloud* spell. At 3rd level, *Gust of Wind*. At 5th level, *Water Walk*. I can cast each without using a spell slot once per Long Rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
		"##\u25C6 Emissary of the Sea##. I can communicate simple ideas to Beasts, Elementals, and Monstrosities with a Swim Speed. They can understand my words, though I have no special ability to understand them in return." + (typePF ? "\r" : " ") + "##\u25C6 Amphibious##. I can breathe air and water.",
	],
	spellcastingAbility: [4, 5, 6],
	features: {
		"control air and water (level 1)": {
			name: "Control Air and Water (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Control Air and Water",
				spells: ["fog cloud"],
				selection: ["fog cloud"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
		},
		"control air and water (level 3)": {
			name: "Control Air and Water (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Control Air and Water",
				spells: ["gust of wind"],
				selection: ["gust of wind"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
		},
		"control air and water (level 5)": {
			name: "Control Air and Water (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Control Air and Water",
				spells: ["water walk"],
				selection: ["water walk"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
		},
	},
};
// [dupl_start] In case the triton race doesn't exist, create a new one
if (!RaceList["triton"]) {
	RaceList["multiverse triton"] = Object.assign(MotM_Triton, {
		sortname: "Triton, Multiverse",
		plural: "Triton",
		size: 3,
		dmgres: ["Cold"],
		vision: [["Darkvision", 60]],
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("triton", "multiverse", MotM_Triton); }

// Yuan-Ti
var MotM_YuanTi = {
	regExpSearch: /^(?=.*(multiverse|motm\b))(?=.*yuan.ti).*$/i,
	name: "Yuan-Ti (multiverse)",
	sortname: "Multiverse Yuan-Ti",
	source: [["MotM", 36]],
	plural: "Yuan-Ti",
	size: [3, 4],
	languageProfs: ["Common", 2], // not the languages of the VGtM yuan-ti pureblood
	dmgres: ["Poison"],
	savetxt: {
		adv_vs: ["Poisoned", "spells"],
	},
	trait: [
		"**Yuan-Ti** (multiverse)",
		"##\u25C6 Serpentine Spellcasting##. I know the *Poison Spray* cantrip and I can cast *Animal Friendship* on snakes at will. Once I reach 3rd level, I can cast *Suggestion* once per Long Rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (one-time choice).",
		"##\u25C6 Magic and Poison Resistance##. I have Advantage on saving throws against spells and on saving throws to avoid or end being Poisoned. I also have Resistance to Poison damage.",
	],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Serpentine Spellcasting (level 1)",
		spells: ["poison spray", "animal friendship"],
		selection: ["poison spray", "animal friendship"],
		firstCol: "atwill",
		times: 2,
	}],
	features: {
		"suggestion": {
			name: "Serpentine Spellcasting (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Serpentine Spellcasting (level 3)",
				spells: ["suggestion"],
				selection: ["suggestion"],
				firstCol: "oncelr+markedbox",
				allowUpCasting: true,
			}],
		},
	},
	height: " are about 2-4 ft (small) or 5-7 ft (medium) tall (4'8\" + 2d10\")",
	weight: " (medium) weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " are about 60-120 cm (small) or 120-210 cm (medium) tall (145 + 5d10 cm)",
	weightMetric: " (medium) weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
};
// [dupl_start] In case the yuan-ti race doesn't exist, create a new one
if (!RaceList["yuan-ti pureblood"]) {
	RaceList["multiverse yuan-ti"] = Object.assign(MotM_YuanTi, {
		sortname: "Yuan-Ti, Multiverse",
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		vision: [["Darkvision", 60]],
		spellChanges: {
			"animal friendship": {
				description: "One snake save or Charmed; ends if the snake is damaged by me or my allies",
				changes: "I can cast *Animal Friendship* at-will, but only to target snakes.",
			},
		},
	});
} else // But otherwise make it a subrace
// dupl_end
{ AddSubRace("yuan-ti pureblood", "multiverse", MotM_YuanTi); }

// Creatures
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList["V"]) {
	CreatureList["aurochs"] = {
		name: "Aurochs",
		source: [["MotM", 71], ["V", 207]],
		size: 2, //Large
		type: "Beast",
		subtype: "cattle", // MotM addition
		alignment: "Unaligned",
		ac: 11,
		hp: 38,
		hd: [4, 10],
		speed: "50 ft",
		scores: [20, 10, 19, 2, 12, 5],
		passivePerception: 11,
		challengeRating: "2",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [2, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, see Charge trait",
		}],
		traits: [{
			name: "Charge",
			description: "If the [THIS] moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d8 Piercing damage. A targeted creature must succeed on a DC 15 Strength saving throw or be knocked Prone.",
		}],
	};
	CreatureList["ox"] = {
		name: "Ox",
		source: [["MotM", 72], ["V", 208]],
		size: 2, //Large
		type: "Beast",
		subtype: "cattle", // MotM addition
		alignment: "Unaligned",
		ac: 10,
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 12, 2, 10, 4],
		passivePerception: 10,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)",
		}],
		traits: [{
			name: "Charge",
			description: "If the [THIS] moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d6 Piercing damage.",
		}, {
			name: "Beast of Burden",
			description: "The [THIS] is considered to be a Huge animal for the purpose of determining its carrying capacity.",
		}],
	};
	CreatureList["deep rothe"] = {
		name: "Deep Roth\xE9",
		nameAlt: ["Roth\xE9, Deep"],
		nameThis: "roth\xe9",
		source: [["MotM", 71], ["V", 208]],
		size: 3, //Medium
		type: "Beast",
		subtype: "cattle", // MotM addition
		alignment: "Unaligned",
		ac: 10,
		hp: 13,
		hd: [2, 8],
		speed: "30 ft",
		scores: [18, 10, 12, 2, 10, 4],
		senses: "Darkvision 60 ft",
		passivePerception: 10,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)",
		}],
		traits: [{
			name: "Charge",
			description: "If the [THIS] moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d6 Piercing damage.",
		}, {
			name: "Dancing Lights",
			description: "The [THIS] casts *dancing lights*, requiring no spell components and using Wisdom as the spellcasting ability.",
		}],
	};
	CreatureList["stench kow"] = {
		name: "Stench Kow",
		source: [["MotM", 72], ["V", 208]],
		size: 2, //Large
		type: "Fiend", // Change in MotM from Beast
		subtype: "cattle", // MotM addition
		alignment: "Unaligned",
		ac: 10,
		hp: 15,
		hd: [2, 10],
		speed: "30 ft",
		scores: [18, 10, 12, 2, 10, 4],
		resistances: "Cold, Fire, and Poison damage",
		senses: "Darkvision 60 ft",
		passivePerception: 10,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Gore",
			ability: 1,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)",
		}],
		traits: [{
			name: "Charge",
			description: "If the [THIS] moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 2d6 Piercing damage.",
		}, {
			name: "Stench",
			description: "Any creature other than a stench kow starting its turn within 5 ft of a stench kow must make a DC 12 Constitution saving throw or be Poisoned until the start of the creature's next turn. On a successful saving throw, the creature is Immune to the stench of all stench kows for 1 hour.",
		}],
		wildshapeString: [
			"##Senses##. Darkvision 60 ft." + (typePF ? "\n" : " ") + "##Resistances##. Cold, Fire, Poison.",
			"##Charge##. If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, it deals extra 2d6 Piercing damage.",
			"##Stench##. Any creature starting its turn within 5 ft of a stench kow must make a DC 12 Con save or be Poisoned until the start of its next turn. On a success, it is Immune to the stench of all stench kows for 1 hour.",
		].join("\n"),
	};
	CreatureList["dolphin"] = {
		name: "Dolphin",
		source: [["MotM", 97], ["V", 208]],
		size: 3, //Medium
		type: "Beast",
		alignment: "Unaligned",
		ac: 12,
		hp: 11,
		hd: [2, 8],
		speed: "swim 60 ft",
		scores: [14, 13, 13, 6, 12, 7],
		skills: {
			"perception": 3,
		},
		senses: "Blindsight 60 ft",
		passivePerception: 13,
		challengeRating: "1/8",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Slam",
			ability: 1,
			damage: [1, 6, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "If used after moving 30 ft straight in the same round, deals extra 1d6 damage (Charge)",
		}],
		traits: [{
			name: "Charge",
			description: "If the [THIS] moves at least 30 ft straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 1d6 Bludgeoning damage.",
		}, {
			name: "Hold Breath",
			description: "The [THIS] can hold its breath for 20 minutes.",
		}],
	};
	CreatureList["cranium rat"] = {
		name: "Cranium Rat",
		nameAlt: ["Rat, Cranium"],
		source: [["MotM", 83], ["V", 133]],
		size: 5, //Tiny
		type: "Aberration", // Change in MotM from Beast
		alignment: "Lawful Evil",
		ac: 12,
		hp: 2,
		hd: [1, 4],
		speed: "30 ft",
		scores: [2, 14, 10, 4, 11, 8],
		senses: "Darkvision 30 ft",
		passivePerception: 10,
		challengeRating: "0",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
			abilitytodamage: false,
		}],
		traits: [{
			name: "Illumination",
			description: "As a Bonus Action, the [THIS] can shed Dim Light from its brain in a 5-foot radius or extinguish the light.",
		}, {
			name: "Telepathic Shroud",
			description: "The [THIS] is Immune to any effect that would sense its emotions or read its thoughts, as well as to all Divination spells.",
		}],
	};
	CreatureList["brontosaurus"] = {
		name: "Brontosaurus",
		source: [["MotM", 95], ["V", 139], ["ToA", 215]],
		size: 0, //Gargantuan
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 15,
		hp: 121,
		hd: [9, 20],
		speed: "30 ft",
		scores: [21, 9, 17, 2, 10, 7],
		saves: ["", "", 6, "", "", ""],
		passivePerception: 10,
		challengeRating: "5",
		proficiencyBonus: 3,
		attacksAction: 1,
		attacks: [{
			name: "Stomp",
			ability: 1,
			damage: [5, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Target must succeed on a DC 14 Strength saving throw or be knocked Prone",
		}, {
			name: "Tail",
			ability: 1,
			damage: [6, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}],
	};
	CreatureList["deinonychus"] = {
		name: "Deinonychus",
		source: [["MotM", 95], ["V", 139], ["ToA", 217]],
		size: 3, //Medium
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 26,
		hd: [4, 8],
		speed: "40 ft",
		scores: [15, 15, 14, 4, 12, 6],
		skills: {
			"perception": 3,
		},
		passivePerception: 13,
		challengeRating: "1",
		proficiencyBonus: 2,
		attacksAction: 3,
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Two claw and one bite as one Attack action (also, see Pounce trait)",
		}],
		actions: [{
			name: "Multiattack",
			description: "As an Attack action, the [THIS] can make two Claw and one Bite attack.",
		}],
		traits: [{
			name: "Pounce",
			description: "If the [THIS] moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked Prone. If the target is Prone, the [THIS] can make one bite attack against it as a Bonus Action.",
		}],
	};
	CreatureList["dimetrodon"] = {
		name: "Dimetrodon",
		source: [["MotM", 95], ["V", 139], ["ToA", 217]],
		size: 3, //Medium
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 12,
		hp: 19,
		hd: [3, 8],
		speed: "30 ft, swim 20 ft",
		scores: [14, 10, 15, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}],
	};
	CreatureList["hadrosaurus"] = {
		name: "Hadrosaurus",
		source: [["MotM", 96], ["V", 140], ["ToA", 224]],
		size: 2, //Large
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 11,
		hp: 19,
		hd: [3, 10],
		speed: "40 ft",
		scores: [15, 10, 13, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}],
	};
	CreatureList["quetzalcoatlus"] = {
		name: "Quetzalcoatlus",
		source: [["MotM", 96], ["V", 140], ["ToA", 230]],
		size: 1, //Huge
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 30,
		hd: [4, 12],
		speed: "10 ft, fly 80 ft",
		scores: [15, 13, 13, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "2",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)",
		}],
		traits: [{
			name: "Dive Attack",
			description: "If the [THIS] is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 3d6 damage to the target.",
		}, {
			name: "Flyby",
			description: "The [THIS] doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
		}],
	};
	CreatureList["stegosaurus"] = {
		name: "Stegosaurus",
		source: [["MotM", 96], ["V", 140], ["ToA", 231]],
		size: 1, //Huge
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 76,
		hd: [8, 12],
		speed: "40 ft",
		scores: [20, 9, 17, 2, 11, 5],
		passivePerception: 10,
		challengeRating: "4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}],
	};
	CreatureList["velociraptor"] = {
		name: "Velociraptor",
		source: [["MotM", 96], ["V", 140], ["ToA", 235]],
		size: 5, //Tiny
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 10,
		hd: [3, 4],
		speed: "30 ft",
		scores: [6, 14, 13, 4, 12, 6],
		skills: {
			"perception": 3,
		},
		passivePerception: 13,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 2,
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}],
		actions: [{
			name: "Multiattack",
			description: "As an Attack action, the [THIS] can make one Bite and one Claw attack.",
		}],
		traits: [{
			name: "Pack Tactics",
			description: "The [THIS] has Advantage on an attack roll against a creature if at least one of the [THIS]'s allies is within 5 ft of the creature and the ally isn't Incapacitated.",
		}],
	};
	CreatureList["gazer"] = {
		name: "Gazer",
		source: [["MotM", 134], ["V", 126]],
		size: 5, //Tiny
		type: "Aberration",
		subtype: "Beholder", // MotM addition
		companion: ["familiar_not_al"],
		alignment: "Neutral Evil",
		ac: 13,
		hp: 13,
		hd: [3, 4],
		speed: "0 ft, fly 30 ft",
		scores: [3, 17, 14, 3, 10, 7],
		saves: ["", "", "", "", 2, ""],
		skills: {
			"perception": 4,
			"stealth": 5,
		},
		senses: "Darkvision 60 ft",
		passivePerception: 14,
		challengeRating: "1/2",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, "", "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}, {
			name: "Eye Rays",
			ability: 3,
			damage: ["Special", "", ""],
			range: "60 ft",
			description: "Shoot two randomly determined different rays as one action; Each ray has its own target; See traits",
			dc: true,
			abilitytodamage: false,
		}],
		features: [{
			name: "Mimicry",
			description: "The [THIS] can mimic simple speech it has heard, in any language. Any who hear this can tell it is an imitation with a successful DC 10 Wis (Insight) check.",
		}],
		actions: [{
			name: "Aggressive",
			description: "As a Bonus Action, the [THIS] moves its speed toward an enemy that it can see.",
		}, {
			name: "Eye Rays",
			description: [
				"1. **Dazing Ray**. Wisdom saving throw or Charmed until the start of the [THIS]'s next turn. While Charmed, half speed and Disadv on attacks.",
				"2. **Fear Ray**. Wisdom saving throw or Frightened until the start of the [THIS]'s next turn.",
				"3. **Frost Ray**. Target must make a Dexterity saving throw or 3d6 Cold damage.",
				"4. **Telekinetic Ray**. Medium or smaller creature, Strength saving throw or be moved up to 30 ft away from the [THIS]. If it is an unattended Tiny object, the [THIS] moves it up to 30 ft in any direction. It can exert fine control on objects this way.", // MotM: no longer 10 lb limit, just Tiny object
			].join("\n"),
		}],
		variant: [{
			name: "Variant: Familiar",
			description: "The gazer can serve another creature as a familiar, forming a *telepathic bond* with its willing master, provided that the master is at least a 3rd-level spellcaster. While the two are bonded, the master can sense what the gazer senses as long as they are within 1 mile of each other. If its master causes it physical harm, the gazer will end its service as a familiar, breaking the *telepathic bond*.",
		}],
	};
} // dupl_end
