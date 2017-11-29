# A way to concate and minify all the JavaScript in this folder
# Requires Java RE and Yui Compressor 2.4.8 (in the right directories)
$java='C:\Java_port\bin\java.exe'
$yui='C:\Java_port\lib\yuicompressor-2.4.8.jar'
$outArr = @("all_WotC_published", "all_WotC_unearthed_arcana")
$matchArr = @("pub_*.js", "ua_*.js")
for ($i=0 ; $i -lt $outArr.length; $i++) {
	$out = $outArr[$i]
#	if (Test-Path “$out.js“) { ri “$out.js“ }
	ni “$out.js“ -force -value “var iFileName = `"$out.js`";`n“
	cat $matchArr[$i] | ac “$out.js“
	& $java -jar $yui “$out.js“ '-o' “$out.min.js“
}
ni 'all_WotC_pub+UA.js' -force -value “var iFileName = `"all_WotC_pub+UA.js`";`n“
ni 'all_WotC_pub+UA.min.js' -force -value “var iFileName = `"all_WotC_pub+UA.min.js`";`n“
cat "all_WotC_published.js", "all_WotC_unearthed_arcana.js" | ac "all_WotC_pub+UA.js"
cat "all_WotC_published.min.js", "all_WotC_unearthed_arcana.min.js" | ac "all_WotC_pub+UA.min.js"
cmd /c pause