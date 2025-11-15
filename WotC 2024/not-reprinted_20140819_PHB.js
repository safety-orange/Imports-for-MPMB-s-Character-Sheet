var iFileName = "not-reprinted_20140819_PHB.js";
RequiredSheetVersion("24.0.0-beta");
// This file adds options from the 2014 Player's Handbook to MPMB's Character Record Sheet that have not been replaced with new options in the 2024 Player's Handbook

// Define the source
SourceList["P"] = {
	name: "2014 Player's Handbook",
	abbreviation: "PHB'14",
	abbreviationSpellsheet: "P",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/rpg_playershandbook",
	date: "2014/08/19",
	defaultExcluded: true,
};

// Races
RaceList["half-elf"] = {
	regExpSearch: /^(?=.*half)(?=.*(elf|elv|drow|silvanesti|qualinesti|grugach|kagonesti)).*$/i,
	name: "Half-elf",
	source: [["SRD", 6], ["P", 39]],
	plural: "Half-elves",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Elvish", 1],
	vision: [["Darkvision", 60]],
	savetxt: {
		text: ["Magic can't put me to sleep"],
		adv_vs: ["charmed"],
	},
	skillstxt: "Choose any two skills",
	age: " reach adulthood around age 20 and often live over 180 years",
	height: " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight: " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric: " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric: " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt: "+2 Charisma and +1 to two other ability scores of my choice",
	trait: "Half-Elf"+
	"\n##\u25C6 Fey Ancestry##. I have Advantage on saving throws against being charmed, and magic can't put me to sleep."+
	"\n##\u25C6 Skill Versatility##. I gain proficiency in two skills of my choice.",
};
RaceList["half-orc"] = {
	regExpSearch: /^(?=.*half)(?=.*\bor(c|k)).*$/i,
	name: "Half-orc",
	source: [["SRD", 7], ["P", 41]],
	plural: "Half-orcs",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Orc"],
	vision: [["Darkvision", 60]],
	skills: ["Intimidation"],
	age: " reach adulthood around age 14 and rarely live longer than 75 years",
	height: " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight: " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric: " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric: " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	features: {
		"relentless endurance": {
			name: "Relentless Endurance",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
		},
		"savage attacks": {
			name: "Savage Attacks",
			minlevel: 1,
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
							if (v.extraCritM) {
								v.extraCritM += 1;
								var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
								fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
							} else {
								v.extraCritM = 1;
								fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
							}
						}
					},
					"My melee weapon attacks roll 1 additional dice on a critical hit.",
					900
				],
			}
		}
	},
	trait: "Half-Orc"+
	"\n##\u25C6 Relentless Endurance##. When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can't use this feature again until I finish a long rest."+
	"\n##\u25C6 Savage Attacks##. When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
};

// Background Features
BackgroundFeatureList["shelter of the faithful"] = { // from Acolyte
	description: "I command the respect of those who share my faith. I can perform the religious ceremonies of my faith. My companions and I can expect free healing and care at an establishment of my faith, though I must provide any material components needed for spells. Those who share my religion will support me at a modest lifestyle.",
	source: [["SRD", 61], ["P", 127]],
};
BackgroundFeatureList["false identity"] = { // from Charlatan
	description: "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source: [["P", 128]],
};
BackgroundFeatureList["criminal contact"] = { // from Criminal
	description: "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages.",
	source: [["P", 129]],
};
BackgroundFeatureList["by popular demand"] = { // from Entertainer
	description: "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 130]],
};
BackgroundFeatureList["are you entertained?"] = { // from Gladiator
	description: "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 131]],
};
BackgroundFeatureList["rustic hospitality"] = { // from Folk Hero
	description: "Since I come from the ranks of the common folk, I fit in among them with ease. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown myself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source: [["P", 131]],
};
BackgroundFeatureList["guild membership"] = { // from Guild Artisan
	description: "5 gp membership fees per month: The guild offers lodging if possible. In case of being accused of a crime, the guild will support me if a good case can be made for my innocence or the crime is justifiable. I can also gain access to powerful political figures through the guild, as long as I'm in good standing and the guild is paid enough.",
	source: [["P", 133]],
};
BackgroundFeatureList["discovery"] = { // from Hermit
	description: "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history.",
	source: [["P", 134]],
};
BackgroundFeatureList["position of privilege"] = { // from Noble
	description: "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source: [["P", 135]],
};
BackgroundFeatureList["retainers"] = { // from Knight
	description: "I have the service of three retainers loyal to my family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source: [["P", 136]],
};
BackgroundFeatureList["wanderer"] = { // from Outlander
	description: "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source: [["P", 136]],
};
BackgroundFeatureList["researcher"] = { // from Researcher
	description: "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source: [["P", 138]],
};
BackgroundFeatureList["ship's passage"] = { // from Sailor
	description: "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage.",
	source: [["P", 139]],
};
BackgroundFeatureList["bad reputation"] = { // from Pirate
	description: "No matter where I go, people are afraid of me due to my reputation. When I am in a civilized settlement, I can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report my activity to the authorities.",
	source: [["P", 139]],
};
BackgroundFeatureList["military rank"] = { // from Soldier
	description: "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized.",
	source: [["P", 140]],
};
BackgroundFeatureList["city secrets"] = { // from Urchin
	description: "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow.",
	source: [["P", 141]],
};

// Feats
FeatsList["dungeon delver"] = {
	name: "Dungeon Delver",
	source: [["P", 166]],
	description: "I have adv. on Wis (Perception) and Int (Investigation) checks made to detect the presence of secret doors. I have resistance to damage dealt by traps and advantage on saves to avoid or resist traps. Travelling at a fast pace doesn't impose -5 on my passive Perception.",
	descriptionFull: [
		"Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
		" \u2022 You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.",
		" \u2022 You have advantage on saving throws made to avoid or resist traps.",
		" \u2022 You have resistance to the damage dealt by traps.",
		" \u2022 Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score."
	],
	dmgres: ["Traps"],
	savetxt: { adv_vs: ["traps"] },
	vision: [
		["Adv. on Perception and Investigation for secret doors", 0],
		["No -5 for travelling at fast pace", 0],
	],
};
FeatsList["linguist"] = {
	name: "Linguist",
	source: [["P", 167]],
	description: "",
	calculate: "event.value = \"I can ably create written ciphers that others can't decipher unless I teach them, they succeed on an Intelligence check DC \" + (Number(What('Int')) + Number(How('Proficiency Bonus'))) + ' (Intelligence score + proficiency bonus), or they use magic to decipher it. I learn three languages of my choice. [+1 Intelligence]';",
	descriptionFull: [
		"You have studied languages and codes, gaining the following benefits:",
		" \u2022 Increase your Intelligence score by 1, to a maximum of 20.",
		" \u2022 You learn three languages of your choice.",
		" \u2022 You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
	],
	scores: [0, 0, 0, 1, 0, 0],
	languageProfs: [3],
};
FeatsList["martial adept"] = {
	name: "Martial Adept",
	source: [["P", 168]],
	description: "",
	calculate: "event.value = 'I learn two maneuvers of my choice from those available to the Battle Master (2nd page \"Choose Feature\" button). The saving throw DC for this is ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Dex Mod')))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one superiority die (d6), which I regain when I finish a short rest.';",
	descriptionFull: [
		"You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
		" \u2022 You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
		" \u2022 You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
	],
	bonusClassExtrachoices: [{
		"class": "fighter",
		subclass: "fighter-battle master",
		feature: "subclassfeature3.1",
		bonus: 2,
	}],
	extraLimitedFeatures: [{
		name: "Combat Superiority",
		usages: 1,
		additional: 'd6',
		recovery: "short rest",
		addToExisting: true,
	}],
};