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
	
	var text = new sap.ui.commons.TextView({text: oController.getLoremIpsum()});
	aboutMePanelLayout.createRow(text);

	aboutMePanelRef.addContent(aboutMePanelLayout);
}

function setContentWorkExperiencePanel(oController) {
	var workExperiencePanelRef = sap.ui.getCore().byId("workExperiencePanelId");
	
	var workExperienceLayout = new sap.ui.commons.layout.MatrixLayout({width: "90%"});

	var twoCareSubPanel = new sap.ui.commons.Panel({
		collapsed: false,
		title: new sap.ui.core.Title({
			text: "Gruppo SAN|S2 - 2care",
			icon: "images/gruppo_sans2.png"
		})
	});
	var twoCareLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "90%",
		widths: ["80%", "20%"]
	});
	var twoCareDesc = new sap.ui.commons.TextView({text: oController.get2CareDesc()});
	var twoCareLogo = new sap.ui.commons.Image({
		alt: "2care",
		src: "images/2care-logo.png"
	});
	twoCareLayout.createRow(twoCareDesc, twoCareLogo);
	twoCareSubPanel.addContent(twoCareLayout);
	workExperienceLayout.createRow(twoCareSubPanel);
	
	var optetSubPanel = new sap.ui.commons.Panel({
		collapsed: false,
		title: new sap.ui.core.Title({
			text: "SAP Labs France - OPTET Project",
			icon: "images/SAP-Logo.png"
		})
	});
	var optetLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "100%",
		widths: ["70%", "30%"]
	});
	var optetDesc = new sap.ui.commons.TextView({text: oController.getOptetDesc()});
	var optetLogo = new sap.ui.commons.Image({
		alt: "OPTET Project",
		src: "images/optet-logo.png"
	});
	optetLayout.createRow(optetDesc, optetLogo);
	optetSubPanel.addContent(optetLayout);
	workExperienceLayout.createRow(optetSubPanel);
	
	workExperiencePanelRef.addContent(workExperienceLayout);
}

function setContentGitHubPanel(oController) {
	var gitHubPanelRef = sap.ui.getCore().byId("gitHubPanelId");

	var gitHubLayout = new sap.ui.commons.layout.MatrixLayout({
		columns: 2,
		width: "90%",
		widths: ["30%", "70%"]
	});
	
	var gitLinkLabel = new sap.ui.commons.TextView({text: "You can find all my public works on this Git repository: "});
	var gitLink = new sap.ui.commons.Link({
		text: "Greedy90",
		press: function(oEvent) {
			window.open("https://github.com/Greedy90", "_blank");
		}
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
		press: oController.getMailto
	});
	var firstMailField = new sap.ui.commons.TextView({
		text: oController.getMail(),
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
			var pubKeyString = new sap.ui.commons.TextView({
				design: sap.ui.commons.TextViewDesign.Monospace,
				text: oController.getPubKey()
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
			appIcon: "images/faviconOrange.ico",
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
