function getMailto(e){
	var coded = "jtBqz.UcBBW6z6W@zFUKzzO.qzj";
	var key = "1SfU2GF37ksaN0BZqIjoHJKdeihAVwQ4ngpXO8tyRuvECYz9LrDcWm5MPlb6xT";
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