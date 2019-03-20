var iFileName = "pub_20141104_RoT.js";
RequiredSheetVersion(13);
// This file adds the magic items from the Rise of Tiamat adventure to MPMB's Character Record Sheet

// Define the source
SourceList["RoT"] = {
	name : "Rise of Tiamat [items]",
	abbreviation : "RoT",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/rise-tiamat",
	date : "2014/11/04"
};

// Magic Items
MagicItemsList["draakhorn"] = {
	name : "Draakhorn",
	source : ["RoT", 93],
	type : "wondrous item",
	rarity : "artifact",
	description : "",
	descriptionFull : "The Draakhorn was a gift from Tiamat in the war between dragons and giants. It was once the horn of her ancient red dragon consort, Ephelomon, that she gave to dragonkind to help them in their war against the giants. The Draakhorn is a signaling device, and it is so large that it requires two Medium creatures (or one Large or larger) to hold it while a third creature sounds it, making the earth resonate to its call. The horn has been blasted with fire into a dark ebony hue and is wrapped in bands of bronze with draconic runes that glow with purple eldritch fire.\n   The low, moaning drone of the Draakhorn discomfits normal animals within a few miles, and it alerts all dragons within two thousand miles to rise and be wary, for great danger is at hand. Coded blasts were once used to signal specific messages. Knowledge of those codes has been lost to the ages.\n   Those with knowledge of the Draakhorn's history know that it was first built to signal danger to chromatic dragons\u2014a purpose the Cult of the Dragon has corrupted to call chromatic dragons to the Well of Dragons from across the North.\n   Within 50 feet of any enclosed space where the horn is blown, the air begins to shimmer from the sound. Any character within 20 feet of the entry to the enclosed space must succeed on a DC 12 Strength check to continue pushing against the pressure of the sound. A failure indicates the character can advance no farther toward the entry.\n   For any character entering the enclosed space, the sound fades to silence\u2014because any creature that enters the enclosed space is temporarily deafened and must make a DC 12 Constitution saving throw. Success indicates the deafness ends 2 minutes after the Draakhorn ceases to sound. Failure indicates the character remains deafened for 1 hour after the Draakhorn ceases to sound.\n   While the horn is sounding, a creature must make a DC 15 Constitution saving throw the first time on a turn the creature enters a 150-foot cone in front of the horn or starts its turn there. On a failed save, the creature takes 27 (6d8) thunder damage and is knocked prone. On a successful save, the creature takes half damage and isn't knocked prone."
}
MagicItemsList["dragontooth dagger"] = {
	name : "Dragontooth Dagger",
	source : ["RoT", 94],
	type : "weapon (dagger)",
	rarity : "rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "A dagger fashioned from the tooth of a dragon. While the blade is obviously a fang or predator's tooth, the handle is leather wrapped around the root of the tooth, and there is no crossguard.\n   You gain a +1 bonus to attack and damage rolls made with this weapon. On a hit with this weapon, the target takes an extra 1d6 acid damage.\n   " + toUni("Draconic Potency") + ". Against enemies of the Cult of the Dragon, the dagger's bonus to attack and damage rolls increases to 2, and the extra acid damage increases to 2d6.",
	weight : 1
}
MagicItemsList["mask of the dragon queen"] = {
	name : "Mask of the Dragon Queen",
	source : ["RoT", 94],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "Individually, the five dragon masks resemble the dragons they are named for. When two or more of the dragon masks are assembled, however, they transform magically into the Mask of the Dragon Queen. Each mask shrinks to become the modeled head of a chromatic dragon, appearing to roar its devotion to Tiamat where all the masks brought together are arranged crown-like on the wearer's head. Below the five masks, a new mask shapes itself, granting the wearer a draconic visage that covers the face, neck, and shoulders.\n   While you are attuned to and wear this mask, you can have any of the properties from any one mask. Additionally, you gain the Damage Absorption from each of the five dragon masks, and you gain five uses of the Legendary Resistance property.",
	attunement : true
}
