var iFileName = "pub_20140819_HotDQ.js";
RequiredSheetVersion(12.999);
// This file adds the background features from the Hoard of the Dragon Queen adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.HotDQ={
	name : "Hoard of the Dragon Queen [background features]",
	abbreviation : "HotDQ",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/hoard-dragon-queen",
	date : "2014/08/19"
};

// Background features
BackgroundFeatureList["cult of the dragon infiltrator"] = {
	description : "I have infiltrated the ranks of the Cult of the Dragon. Having spied on the organization for quite some time, I am familiar with its inner workings and customs. I have a second identity as an initiate of the cult, enough of a facade to blend in as a simple grunt or servant.",
	source : ["HotDQ", 87]
};
BackgroundFeatureList["dragon scholar"] = {
	description : "I have studied dragons and their lore for many years. I can automatically identify locations built or used by dragons, and I can identify dragon eggs and scales by sight. If I fail an Intelligence check to recall lore relating to dragons, I know someone or some book that I can consult for the answer unless the DM rules that the lore is unknown.",
	source : ["HotDQ", 87]
};
