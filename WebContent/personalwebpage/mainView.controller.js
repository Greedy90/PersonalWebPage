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
	
	get2CareDesc: function() {
		return this.getLoremIpsum();
	},
	
	getOptetDesc: function() {
		return this.getLoremIpsum();
	},
	
	getMailto: function(oEvent) {
		window.open("mailto:marco.terrinoni@cryptolab.net");
	},
	
	getMail: function() {
		return "marco dot terrinoni at cryptolab dot net";
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