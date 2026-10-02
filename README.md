# Imports for MPMB's Character Sheet
This git repository holds different fan-created materials that can be used with **MorePurpleMoreBetter's D&D Character Record Sheet**, both the 5e and the 2024 versions. The repositories for the document-level code for these sheets can be found on MPMB's GitHub, [the repository for 5e D&D (2014)](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet) and the [the repository for 2024 D&D (5.5e)](https://github.com/morepurplemorebetter/2024_MPMBs-Character-Record-Sheet).

You can get the sheets for free on [MPMB's website](https://www.flapkan.com/#download).

&nbsp;

## Join the discussion
Questions or remarks are best made on the MPMB [Discord server](https://discord.gg/P6drkuk9bt) or the [subreddit](https://www.reddit.com/r/mpmb/).

&nbsp;

## How to use
To get all the non-duplicate WotC content, all you need is the **all_WotC** files from a [release](../../releases). Be aware that the files above might be for a version of MPMB's that is still under development.

1. Download the latest version of the PDF from [MPMB's website](https://www.flapkan.com/#download). Make sure to grab the appropriate one for the edition that you want to play.
2. Click one of the following links to download the minified file for the latest release, depending on which edition sheet you are using:
    1. [5e D&D (2014)](../../releases/latest/download/all_WotC_5e_pub+UA.min.js)
    2. [2024 D&D (5.5e)](../../releases/latest/download/all_WotC_2024_pub+legacy.min.js)
3. Open the PDF and click on the bookmark **Functions** >> **Add Extra Materials**.
4. From the menu that appears, select the option **Import a file with additional material**.
5. In the dialog that opens, click **Add file**, and select the file you saved in step 2.
6. Click **Apply changes** in the Import Files dialog and the sheet will process the file you added. You will get a pop-up message if it was successful or not.

MPMB has a more flashy explanation on his website that includes a video walkthrough in [this how-to guide](https://www.flapkan.com/how-to/add-more-content).

&nbsp;

## Different Versions
The code above is under development, [see releases](../../releases) for the latest stable build. The code in this repository is updated along with the development of MPMB's Character Record Sheet and thus might be ahead of the latest stable release of MPMB's.

In [releases](../../releases) you can find the files for the latest version of MPMB's Character Record Sheet as well as for older versions (v13.1.13 until current).

If you are looking for versions before v13.1.13, see [tags](../../tags).

Be aware that content in the respective folders is designed to be used with the character sheet for that same version. Importing a file from the WotC 5e folder to the 2024 (5.5e) sheet might work, but you have been warned!

&nbsp;

## Legacy Content
Files in the [WotC 2024 folder](../../tree/master/WotC%202024) named "legacy" contain only the content that hasn't been reprinted for the 2024 (5.5e) rules.

This repository doesn't offer a solution for using 5e (2014) rules that have been superseded in the newer edition (5.5e, 2024).

&nbsp;

## Concatenation and Minification

### Setup
Ensure you have `node` and `npm` installed, then:
```sh
npm install
```

### Use
To minify run one of these three commands:
```sh
# For all (5e and 2024)
npm run minify
# Just 5e (2014)
npm run minify5e
# Just 2024 (5.5e)
npm run minify2024
```
