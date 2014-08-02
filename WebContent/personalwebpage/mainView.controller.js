sap.ui.controller("personalwebpage.mainView", {

/**
 * Called when a controller is instantiated and its View controls (if available) are already created.
 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
 * @memberOf personalwebpage.mainView
 */
//	onInit: function() {},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered	
 * (NOT before the first rendering! onInit() is used for that one!).
 * @memberOf personalwebpage.mainView
 */
//	onBeforeRendering: function() {},

/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf personalwebpage.mainView
 */
//	onAfterRendering: function() {},

/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf personalwebpage.mainView
 */
//	onExit: function() {}
	
	getLoremIpsum: function() {
		return "Lorem ipsum dolor sit amet, eleifend nullam ut ipsum pede non, p" +
			   "urus facilisis lectus eget erat, suspendisse odio vel ac feugiat" +
			   " ac leo, vitae sed sit tellus sit hendrerit mattis. Suscipit mau" +
			   "ris etiam arcu. Leo condimentum qui risus leo, suspendisse non i" +
			   "nteger vehicula, mauris pede eu similique, ipsum in dolor consec" +
			   "tetuer odio. Consectetuer nisl pretium sed eleifend magnis moles" +
			   "tie, montes egestas lacus vitae urna amet, aliquam tempus augue " +
			   "interdum nunc urna vitae, arcu lectus bibendum est aliquam curae" +
			   " vestibulum, mi ultrices ipsum duis orci. Ligula beatae dapibus " +
			   "justo mi, neque lacinia magna pede accumsan, laoreet quam, morbi" +
			   " ab in purus eu orci, pede sit sed et odio iste ut. Feugiat enim" +
			   ", wisi fusce odio eu rutrum fermentum, integer nullam risus. Pur" +
			   "us justo class nullam ipsum tristique placerat, eu sit faucibus," +
			   " maecenas mi cursus etiam dis, ornare lorem in morbi luctus. Ris" +
			   "us justo et nisl, ultricies placerat nulla metus lacinia mauris " +
			   "mauris. Ultricies volutpat. Fringilla ligula quis, erat purus. N" +
			   "unc justo tristique dapibus ut fusce nulla, sit nec eu, felis qu" +
			   "ia lectus amet nec eu viverra, in ligula dolor neque consequat q" +
			   "uis tortor, neque a hendrerit nec odio mollis.\n";
	},
	
	getAboutMe: function() {
		return this.getLoremIpsum();
	},
	
	get2CareDesc: function() {
		return "<p>Internship at <a href='http://www.san.it/home.html' target='_" +
				"blank'>Gruppo SAN|S2 s.r.l</a> (Turin), from March to July 2012" +
				".</p><p>The final purpose of the stage was to get involved in t" +
				"he development of <a href='http://www.san.it/prodotti/tocare.ht" +
				"ml' target='_blank'>2care</a>, an ERP for an health care contex" +
				"t in a Cloud Computing architecture based on SaaS concept; in p" +
				"articular, the work included database creation (ER model defini" +
				"tion and implementation) and Web user interfaces implementation" +
				", based on a proprietary framework.</p><p>The technologies and " +
				"languages involved were the following:<ul><li>SQL</li><li><a hr" +
				"ef='http://www.postgresql.org/' target'_blank'>PostgreSQL</a></" +
				"li><li>HTML</li><li>JavaScript</li><li>XML</li><li><a href='htt" +
				"p://tortoisesvn.net/' target='_blank'>TortoiseSVN</a></li></ul>" +
				"</p>";
	},
	
	getOptetDesc: function() {
		return "<p>Internship at <a href='http://www.sap.com/france/about/sap-la" +
				"bs-france.html' target='_blank'>SAP Labs France</a> (Sophia-Ant" +
				"ipolis), from March to September 2014.</p><p>In the context of " +
				"the <a href='http://www.optet.eu/' target='_blank'>OPTET Projec" +
				"t</a>, the internship consisted in the development of a Trustwo" +
				"rthiness Marketplace prototype, focusing on the trustworthiness" +
				" aspects of the exposed offerings.</p><p>The technologies and l" +
				"anguages involved were the following:	<ul><li>JavaScript</li><" +
				"li>JSON</li><li><a href='http://nodejs.org/' target='_blank'>No" +
				"de.js</a></li><li><a href='http://expressjs.com/' target='_blan" +
				"k'>Express</a></li><li><a href='http://passportjs.org/' target=" +
				"'_blank'>Passport</a></li><li><a href='http://mongoosejs.com/' " +
				"target='_blank'>Mongoose</a></li><li><a href='http://www.mongod" +
				"b.org/' target='_blank'>MongoDB</a></li><li><a href='https://sa" +
				"pui5.hana.ondemand.com/sdk/#content/Overview.html' target='_bla" +
				"nk'>SAPUI5</a> / <a href='http://sap.github.io/openui5/' target" +
				"='_blank'>OpenUI5</a></li><li>RDF</li><li>USDL</li><li><a href=" +
				"'http://git-scm.com/' target='_blank'>Git</a></li><li><a href='" +
				"https://code.google.com/p/gerrit/' target='_blank'>Gerrit</a></" +
				"li</ul></p>";
	},
	
	getMailto: function(oEvent) {
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
		window.open("mailto:" + link);
	},
	
	getMail: function() {
		var coded = "1yVZO.JCVVLcOcL@ZVQSJO3yu.cCJ";
		var key = "lN9Hi1xfeDjVTEzAcShKPUoBuJGQW3RavL0FgCmdqMswrZ5X8npO72I4kbtYy6";
		var shift = coded.length;
		var link = "";
		for (var i = 0; i < coded.length; i++) {
			if (key.indexOf(coded.charAt(i)) == -1) {
				var ltr = coded.charAt(i);
				link += (ltr);
			} else {     
				var ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
				link += (key.charAt(ltr));
			}
		}
		return link;
	},
	
	getPubKey: function() { // TODO - modify this function in order to retrieve the key directly from an external file
		return "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
	   	  	   "mQENBFOJd2EBCADSCUN5tySll7y3wmBlTUy1fL6xf3T/r7Jeo2bMj0/I2xuV0mO8\n" +
	   	  	   "qO3ZpNG2pTy7+yh3EqXRngfEHsB6W7Ym8gaMfIpFYsE/8JZOCTfLZp+w8qs0zkpk\n" +
	   	  	   "sUgqPyc4MITrFG4xzBUX94IqrobWxk6lu4Jh6qIsVtjsdA4cptPOI5qigdbKGHJs\n" +
	   	  	   "LGqM35r18DGjCw8DFNge6QqwZHWbIC/GXyjHWO2CMd56UOFHtSQqmrZK80X3bXx/\n" +
	   	  	   "YoydKpJ6RNB4gKhm5HtwLWaqHDj5yrqkrFuWpPpS58C6Yo+sL8BZMoQ6L9y18125\n" +
	   	  	   "yHQ/E3l1VyceV0fUojKfO2mraK0cA+hL3O7rABEBAAG0LU1hcmNvIFRlcnJpbm9u\n" +
	   	  	   "aSA8bWFyY28udGVycmlub25pOTBAZ21haWwuY29tPokBPgQTAQIAKAUCU4l3YQIb\n" +
	   	  	   "IwUJCWYBgAYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQmuWqXFWbjY2a9wf/\n" +
	   	  	   "Z6p1CS/NGV+iZVrJf9BYZgIQVeOUeav2E21bLFQYbR6fLx6RlsQd8Mufo6JqKyHw\n" +
	   	  	   "3aRWrrfH0Uy+BFXqrhuXQC5lhLadf+RLSyNf7GXTqE79eaZJDtkv1FV+6OYunBtG\n" +
	   	  	   "wXDUqUjflQA+Bc9H150IeHNiaXI6Z8D3e9CHl3yfkithCoXCk+V2nHwkb2hB0k3P\n" +
	   	  	   "JAaX5xkMj+ssKENgJPoq9QpGEyuUYVKWXTwQUvKiJnul3TSR/ekxgPsxGUxMSFHc\n" +
	   	  	   "C+yo6ekw+q0Wc0LAPC5eEHm8ID9VWoNQOoet9oyrGK3U5iAuStFOZlP1JfAV8sut\n" +
	   	  	   "9+faUx+NTtQZs+ikqNhWTLkBDQRTiXdhAQgA+SAyvmS+VJeY3MBj/lxQIAZd9a+u\n" +
	   	  	   "mNV892WV+Ix5skMKzHV7J3fuR3R+BYKt81U/HU4nHtMCTIJkBni6OgG+5YnViCr+\n" +
	   	  	   "rLsEFFqnVcNwgZPh/cB/ooJVBRrPYjfZLhr444VB/FAVd+vw699nraKYFc/lyRRr\n" +
	   	  	   "+jY9mkH27ubDOi64GNzy2dSRhUz3tN+k6QNtuUgvfNkv7zAk41O+I8O7hqmglLXd\n" +
	   	  	   "VvEeZsNP7WPOp55QZTbYFYkeiXsN+W94yaH6krYgTaDSdt4X3bOZI5pJSS68Oa3K\n" +
	   	  	   "b1hrLnCcoop8TGhdR4Ilqm1nvRrEDYkTKSq8y7P8jn79tYHQ6dGfrmuxmQARAQAB\n" +
	   	  	   "iQElBBgBAgAPBQJTiXdhAhsMBQkJZgGAAAoJEJrlqlxVm42NmBsIAJZJLkNtjakX\n" +
	   	  	   "5Cm8PmV1jVMqSYejHsZ3jvY58iw9PnCjwHo/yXQV+DsKuNr/gV8bO88Kluvtw9ik\n" +
	   	  	   "VG+rMBTzTE03Dr9naA3nWy0ac0uKRo0NwbMXx3gJgmdxc3mtzJQpxu5oRtXa5+VU\n" +
	   	  	   "PoSVaswKVNXr1KkNfx0fCrxM+37siZ/Qx5EwPKEGLupxNE5ksMkhP61GewiWkbqL\n" +
	   	  	   "b7HQbBvn2kJXbHmcBALaRyQ2IzMTKzPN9bWcSiAloilNHHR8vT9oa3tpyYKl+x5y\n" +
	   	  	   "m/FXisAPe82f5mbOGyLIt3luBymPu3fs9dkeu6eNUI+7KYwMS9FmPGFWy/fVSRCG\n" +
	   	  	   "DyWEPkGZpB4=\n" +
	   	  	   "=iJgj\n" +
	   	  	   "-----END PGP PUBLIC KEY BLOCK-----";
	}

});