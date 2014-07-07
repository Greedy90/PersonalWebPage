function setContentHomePanel(oController) {
	var homePanelRef = sap.ui.getCore().byId("homePanelId");

	var homePanelLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 1,
		width: "100%"
	});

	var constructionSiteImg = new sap.ui.commons.Image({src: "images/under_construction.jpg"});
	var constructionSiteImgCell = new sap.ui.commons.layout.MatrixLayoutCell({
		content: [constructionSiteImg],
		hAlign: sap.ui.core.TextAlign.Center
	});
	homePanelLayout.createRow(constructionSiteImgCell);

	homePanelRef.addContent(homePanelLayout);
}

function setContentAboutMePanel(oController) {
	var aboutMePanelRef = sap.ui.getCore().byId("aboutMePanelId");

	var aboutMePanelLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "100%"
	});

	aboutMePanelRef.addContent(aboutMePanelLayout);
}

function setContentWorkExperiencePanel(oController) {
	var workExperiencePanelRef = sap.ui.getCore().byId("workExperiencePanelId");

	var workExperienceLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "100%"
	});

	workExperiencePanelRef.addContent(workExperienceLayout);
}

function setContentGitHubPanel(oController) {
	var gitHubPanelRef = sap.ui.getCore().byId("gitHubPanelId");

	var gitHubLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "90%",
		widths: ["25%", "75%"]
	});
	
	var gitLinkLabel = new sap.ui.commons.TextView({text: "You can find all my public works on this Git repository: "});
	var gitLink = new sap.ui.commons.Link({
		text: "Greedy90",
		href: "https://github.com/Greedy90"
	});
	
	gitHubLayout.createRow(gitLinkLabel, gitLink);

	gitHubPanelRef.addContent(gitHubLayout);
}

function setContentContactsPanel(oController) {
	var contactsPanelRef = sap.ui.getCore().byId("contactsPanelId");

	var contactsLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 3,
		width: "90%",
		widths: ["10%", "15%", "75%"]
	});

	var iconPicture = new sap.ui.commons.Image({
		alt: "Mail icon",
		src: "images/Mail-icon.png",
		width: "25px",
		press: function(oEvent) {
			window.open("mailto:marco.terrinoni@cryptolab.net");
		}
	});
	var firstMailField = new sap.ui.commons.TextView({
		text: "marco dot terrinoni at cryptolab dot net",
		design: sap.ui.commons.TextViewDesign.H6
	});
	var firstMailCell = new sap.ui.commons.layout.MatrixLayoutCell({
		colSpan: 2,
		hAlign: sap.ui.commons.layout.HAlign.Left,
		content: [firstMailField]
	});
	contactsLayout.createRow(iconPicture, firstMailCell);
	
	var pubKeyBtn = new sap.ui.commons.Button({
		text: "Get my Public Key (PGP)",
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function(oEvent) {
			var pubKeyString = new sap.ui.commons.TextView({ // TODO - modify this control in order to retrieve the key directly from an external file
				design: sap.ui.commons.TextViewDesign.Monospace,
				text: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
			  	   	  "Version: GnuPG v1\n" +
			  	   	  "\n" +
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
			  	   	  "-----END PGP PUBLIC KEY BLOCK-----"
			});
			
			var rsaKeyDialog = new sap.ui.commons.Dialog("rsaKeyDialogId", {
				modal: true,
				keepInWindow: true,
				applyContentPadding: true,
				//width: "40%",
				//height: "30%",
				title: "PGP - Public Key",
				content: [pubKeyString],
				closed: function(oEvent) {
					sap.ui.getCore().byId("rsaKeyDialogId").destroy();
				}
			});
			
			rsaKeyDialog.open();
		}
	});
	var pubKeyBtnCell = new sap.ui.commons.layout.MatrixLayoutCell({
		colSpan: 2,
		content: [pubKeyBtn]
	});
	var facebookIcon = new sap.ui.commons.Image({
		alt: "Facebook Icon",
		src: "images/Facebook-logo.png",
		width: "20px",
		press: function(oEvent) {
			window.open("https://www.facebook.com/marco.terrinoni", "_blank");
		}
	});
	var twitterIcon = new sap.ui.commons.Image({
		alt: "Twitter Icon",
		src: "images/Twitter-logo.png",
		width: "20px",
		press: function(oEvent) {
			window.open("https://twitter.com/TerrinoniMarco", "_blank");
		}
	});
	var linkedInIcon = new sap.ui.commons.Image({
		alt: "LinkedIn Icon",
		src: "images/linkedin-icon.png",
		width: "20px",
		press: function(oEvent) {
			window.open("http://fr.linkedin.com/pub/marco-terrinoni/79/a66/963/", "_blank");
		}
	});
	var socialLinksCell = new sap.ui.commons.layout.MatrixLayoutCell({
		hAlign: sap.ui.commons.layout.HAlign.Left,
		//colSpan: 2,
		content: [facebookIcon, twitterIcon, linkedInIcon]
	});
	contactsLayout.createRow(pubKeyBtnCell, socialLinksCell);

	contactsPanelRef.addContent(contactsLayout);
}

sap.ui.jsview("personalwebpage.mainView", {

	/**
	 * Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf personalwebpage.mainView
	 */ 
	getControllerName: function() {
		return "personalwebpage.mainView";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf personalwebpage.mainView
	 */ 
	createContent: function(oController) {
		var homePanel = new sap.ui.commons.Panel("homePanelId", {
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Marco Terrinoni"})
		});
		setContentHomePanel(oController);
		
		var aboutMePanel = new sap.ui.commons.Panel("aboutMePanelId", {
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Personal Profile"})
		});
		setContentAboutMePanel(oController);
		
		var workExperiencePanel = new sap.ui.commons.Panel("workExperiencePanelId", {
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Previous Work Experience"})
		});
		setContentWorkExperiencePanel(oController);
		
		var gitHubPanel = new sap.ui.commons.Panel("gitHubPanelId", {
			showCollapseIcon: false,
			title: new sap.ui.core.Title({
				text: "Personal Repository",
				icon: "images/github.png"
			})
		});
		setContentGitHubPanel(oController);
		
		var contactsPanel = new sap.ui.commons.Panel("contactsPanelId", {
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Contact Me"})
		});
		setContentContactsPanel(oController);
		
		var mainShell = new sap.ui.ux3.Shell("mainShellId", {
			appTitle: "Welcome to my home page",
			showLogoutButton: false,
			showSearchTool: false,
			showFeederTool: false,
			showTools: false,
			showPane: false,
			//headerType: sap.ui.ux3.ShellHeaderType.SlimNavigation,
			//designType: sap.ui.ux3.ShellDesignType.Crystal,
			headerType: sap.ui.ux3.ShellHeaderType.Standard,
			designType: sap.ui.ux3.ShellDesignType.Standard,
			worksetItems: [new sap.ui.ux3.NavigationItem("navHome", {text: "Home"}),
			               new sap.ui.ux3.NavigationItem("navAboutMe", {text: "About Me"}),
			               new sap.ui.ux3.NavigationItem("navWorkExp", {text: "Work Experience"}),
			               new sap.ui.ux3.NavigationItem("navGitHub", {text: "GitHub"}),
			               new sap.ui.ux3.NavigationItem("navContacts", {text: "Contacts"})],
			worksetItemSelected: function(oEvent) {
				var sId = oEvent.getParameter("id");
				var mainShellRef = oEvent.oSource;
				switch(sId) {
					case "navHome":
						mainShellRef.setContent(homePanel);
						break;
					case "navAboutMe":
						mainShellRef.setContent(aboutMePanel);
						break;
					case "navWorkExp":
						mainShellRef.setContent(workExperiencePanel);
						break;
					case "navGitHub":
						mainShellRef.setContent(gitHubPanel);
						break;
					case "navContacts":
						mainShellRef.setContent(contactsPanel);
						break;
					default:
						mainShellRef.setContent(homePanel);
						break;
				}
			},
			content: homePanel
		});
		
		return mainShell;
	}
});
