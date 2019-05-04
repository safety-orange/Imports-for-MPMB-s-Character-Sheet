# A way to concate and minify all the JavaScript in this folder
# Requires UglifyJS to be available through PATH (thus npm is also needed) & uglify-es (npm install uglify-es -g)
$outArr = @("all_WotC_published", "all_WotC_unearthed_arcana")
$matchArr = @("pub_*.js", "ua_*.js")
for ($i=0; $i -lt $outArr.length; $i++) {
	$out = $outArr[$i]
	ni “$out.temp.js“

	# make sure the files are looped through alphabetically
	$thefiles = gci * -filter $matchArr[$i] -exclude "*_dupl.js"
	$sorted = $thefiles | sort
	for ($a=0; $a -lt $sorted.length; $a++) {
		gc $sorted[$a] | ac “$out.temp.js“
	}
	& UglifyJS “$out.temp.js“ -o “$out.min.temp.js“ --verbose

	# now make the files with the correct iFileName
	ni “$out.js“ -force -value “var iFileName = `"$out.js`";`n“
	gc “$out.temp.js“ | ac “$out.js“ 
	ri “$out.temp.js“
	ni “$out.min.js“ -force -value “var iFileName=`"$out.min.js`";“
	gc “$out.min.temp.js“ | ac “$out.min.js“ 
	ri “$out.min.temp.js“
}
ni 'all_WotC_pub+UA.js' -force -value “var iFileName = `"all_WotC_pub+UA.js`";`n“
ni 'all_WotC_pub+UA.min.js' -force -value “var iFileName = `"all_WotC_pub+UA.min.js`";`n“
cat "all_WotC_published.js", "all_WotC_unearthed_arcana.js" | ac "all_WotC_pub+UA.js"
cat "all_WotC_published.min.js", "all_WotC_unearthed_arcana.min.js" | ac "all_WotC_pub+UA.min.js"
cmd /c pause
