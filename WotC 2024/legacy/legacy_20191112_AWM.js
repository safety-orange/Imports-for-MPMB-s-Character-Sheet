var iFileName = "legacy_20191112_AWM.js";
RequiredSheetVersion("24.1.3");
// This file adds the Dankwood Goblin race from the Adventure with Muk from Extra Life to MPMB's Character Record Sheet
// Be aware that this race is not legal in adventurers league!

SourceList["AwM"] = {
	name: "Adventure with Muk",
	abbreviation: "AwM",
	group: "Legacy Extra Life",
	url: "https://www.dmsguild.com/product/294712/Adventure-with-Muk-5e",
	date: "2019/11/12",
	defaultExcluded: true,
};

// [dupl_start] In case the goblin race doesn't exist, create a new one
if (!RaceList["goblin"]) {
	RaceList["dankwood goblin"] = {
		regExpSearch: /^(?=.*dankwood)(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
		name: "Dankwood Goblin",
		sortname: "Goblin, Dankwood",
		source: [["AwM", 35]],
		plural: "Dankwood goblins",
		size: 4,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		languageProfs: ["Common", "Goblin"],
		vision: [["Darkvision", 60]],
		age: " reach adulthood at age 8 and live up to 60 years",
		height: " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
		weight: " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
		heightMetric: " are between 100 and 120 cm tall (100 + 5d4 cm)",
		weightMetric: " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
		action: [["bonus action", "Nimble Escape (Disengage/Hide)"]],
		trait: [
			"**Dankwood Goblin**",
			"##\u25C6 Speak with Small Beasts##. Through sounds and gestures, I can communicate simple ideas with Small or smaller Beasts. Dankwood goblins love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.",
			"##\u25C6 Nimble Escape##. As a Bonus Action, I can take the Disengage or Hide action.",
		],
	};
} else // But otherwise make it a subrace
// dupl_end
{
	AddSubRace("goblin", "dankwood", {
		regExpSearch: /^(?=.*dankwood)(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
		name: "Dankwood Goblin",
		source: [["AwM", 35]],
		plural: "Dankwood goblins",
		features: {
			"fury of the small": null,
		},
		trait: [
			"**Dankwood Goblin**",
			"##\u25C6 Speak with Small Beasts##. Through sounds and gestures, I can communicate simple ideas with Small or smaller Beasts. Dankwood goblins love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.",
			"##\u25C6 Nimble Escape##. As a Bonus Action, I can take the Disengage or Hide action.",
		],
	});
}
