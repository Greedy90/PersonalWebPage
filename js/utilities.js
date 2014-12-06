function getMailto(e){
	var coded = "eyfU1.mIffZE1EZ@Ufxrm1Lyz.EIm";
	var key = "h0qY3rHi2IUjymOlzS8RKMkQ1BCTEw4FGJfVZvp9WxecLat7ubsXD6gANo5Pdn";
	var shift = coded.length;
	var link = "";
	for (var i = 0; i < coded.length; i++) {
		if (key.indexOf(coded.charAt(i)) == -1) {
			var ltr = coded.charAt(i);
			link += (ltr);
		} else {     
			var ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
			link += (key.charAt(ltr));
		}
	}
	window.location.href = ("mailto:" + link);
}