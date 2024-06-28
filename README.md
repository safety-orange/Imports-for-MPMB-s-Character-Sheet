# Imports for MPMB's Character Sheet
This git repository holds different fan-created materials that can be used with **MorePurpleMoreBetter's D&D 5e Character Record Sheet**. The repository for the sheet is [found on MPMB's GitHub](https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet).

You can get the sheet for free on [MPMB's website](https://www.flapkan.com/#download).

&nbsp;

## Join the discussion
Questions or remarks are best made on the MPMB [Discord server](https://discord.gg/P6drkuk9bt) or the [subreddit](https://www.reddit.com/r/mpmb/).

&nbsp;

## How to use
To get all the non-duplicate WotC content, all you need is the **all_WotC** files from a [release](../../releases). Be aware that the files above might be for a version of MPMB's that is still under development.

1. Download the latest version of the PDF from [MPMB's website](https://www.flapkan.com/#download).
2. [Click here](https://github.com/safety-orange/Imports-for-MPMB-s-Character-Sheet/releases/latest/download/all_WotC_pub+UA.min.js) to download the latest all_WotC_pub+UA.min.js release, and save it somewhere on your machine.
3. Open the PDF and click on the bookmark **Functions** >> **Add Extra Materials**.
4. From the menu that appears, select the option **Import a file with additional material**.
5. In the dialog that opens, click **Add file**, and open the file you saved in step 1.
6. Click **Apply changes** in the Import Files dialog and the sheet will process the file you added. You will get a pop-up message if it was successful or not.

MPMB has a more flashy explanation, along with a video, on how to do this in [this how-to guide on his website](https://www.flapkan.com/how-to/add-more-content).

&nbsp;

## Different Versions
The code above is under development, [see releases](../../releases) for the latest stable build. It is updated along with the development of MPMB's Character Record Sheet and thus might be ahead of the latest stable version of MPMB's.

In [releases](../../releases) you can find the files for the latest version of MPMB's Character Record Sheet as well as for older versions (v13.1.13 or later).

If you are looking for versions before v13.1.13, see [tags](../../releases).

Be aware that this content is for the 5th edition of Dungeon & Dragons (2014).

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
# For all (stable and beta)
npm run minify
# Just stable
npm run minifyStable
# Just beta
npm run minifyBeta
```