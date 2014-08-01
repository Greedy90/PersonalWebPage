function setContentHomePanel(oController) {
	var homePanelRef = sap.ui.getCore().byId("homePanelId");

	var constructionSiteImg = new sap.ui.commons.Image({
		src: "images/under_construction.jpg",
		tooltip: "Web page under construction, please come back later...",
		alt: "Web page under construction, please come back later..."
	});

	homePanelRef.addContent(constructionSiteImg);
}

function setContentAboutMePanel(oController) {
	var aboutMePanelRef = sap.ui.getCore().byId("aboutMePanelId");

	
	var abouMeDesc = new sap.ui.commons.TextView("abouMeDescId", {text: oController.getAboutMe()});
	var photo = new sap.ui.commons.Image("photoId", {
		src: "images/marco.jpg",
		tooltip: "Marco Terrinoni",
		alt: "My photo",
		width: "20%"
	});

	aboutMePanelRef.addContent(abouMeDesc);
	aboutMePanelRef.addContent(photo);
}

function setContentUniversityPanel(oController) {
	var universityPanelRef = sap.ui.getCore().byId("universityPanelId");
	
	var logoPolito = new sap.ui.commons.Image("logoPolitoId", {
		src: "images/polito-logo.png",
		tooltip: "Polytechnic University of Turin",
		alt: "Polytechnic University of Turin",
		width: "20%"
	});
	
	var logoEnsimag = new sap.ui.commons.Image("logoEnsimagId", {
		src: "images/ensimag-logo.png",
		tooltip: "École Nationale Supérieure d'Informatique et de Mathématiques Appliquées de Grenoble",
		alt: "École Nationale Supérieure d'Informatique et de Mathématiques Appliquées de Grenoble",
		width: "20%"
	});
	
	var logoUJF = new sap.ui.commons.Image("logoUJFId", {
		src: "images/ujf-logo.png",
		tooltip: "Université Joseph Fourier",
		alt: "Université Joseph Fourier",
		width: "20%"
	});
	
	universityPanelRef.addContent(logoPolito);
	universityPanelRef.addContent(logoEnsimag);
	universityPanelRef.addContent(logoUJF);
}

function setContentWorkExperiencePanel(oController) {
	var workExperiencePanelRef = sap.ui.getCore().byId("workExperiencePanelId");
	
	var twoCareSubPanel = new sap.ui.commons.Panel("twoCareSubPanelId", {
		collapsed: false,
		title: new sap.ui.core.Title({
			text: "Gruppo SAN|S2 - 2care",
			icon: "images/gruppo_sans2.png"
		})
	});
	var twoCareDesc = new sap.ui.commons.TextView("twoCareDescId", {text: oController.get2CareDesc()});
	var twoCareLogo = new sap.ui.commons.Image("twoCareLogoId", {
		alt: "2care",
		src: "images/2care-logo.png"
	});
	twoCareSubPanel.addContent(twoCareDesc);
	twoCareSubPanel.addContent(twoCareLogo);
	workExperiencePanelRef.addContent(twoCareSubPanel);
	
	var optetSubPanel = new sap.ui.commons.Panel("optetSubPanelId", {
		collapsed: false,
		title: new sap.ui.core.Title({
			text: "SAP Labs France - OPTET Project",
			icon: "images/SAP-Logo.png"
		})
	});
	var optetDesc = new sap.ui.commons.TextView("optetDescId", {text: oController.getOptetDesc()});
	var optetLogo = new sap.ui.commons.Image("optetLogoId", {
		alt: "OPTET Project",
		src: "images/optet-logo.png"
	});
	optetSubPanel.addContent(optetDesc);
	optetSubPanel.addContent(optetLogo);
	workExperiencePanelRef.addContent(optetSubPanel);
}

function setContentGitHubPanel(oController) {
	var gitHubPanelRef = sap.ui.getCore().byId("gitHubPanelId");

	var gitLinkLabel = new sap.ui.commons.TextView("gitLinkLabelId", {text: "You can find all my public works on this Git repository: "});
	var gitLink = new sap.ui.commons.Link("gitLinkId", {
		text: "Greedy90",
		press: function(oEvent) {
			window.open("https://github.com/Greedy90", "_blank");
		}
	});
	
	gitHubPanelRef.addContent(gitLinkLabel);
	gitHubPanelRef.addContent(gitLink);
}

function setContentContactsPanel(oController) {
	var contactsPanelRef = sap.ui.getCore().byId("contactsPanelId");

	var mailIcon = new sap.ui.commons.Image("mailIconId", {
		alt: "Mail icon",
		src: "images/Mail-icon.png",
		width: "25px",
		press: oController.getMailto
	});
	var mailAddress = new sap.ui.commons.TextView("mailAddressId", {
		text: oController.getMail(),
		design: sap.ui.commons.TextViewDesign.H6
	});
	var pubKeyBtn = new sap.ui.commons.Button("pubKeyBtnId", {
		text: "Get my Public Key (PGP)",
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function(oEvent) {
			var rsaKeyDialog = new sap.ui.commons.Dialog("rsaKeyDialogId", {
				modal: true,
				keepInWindow: true,
				applyContentPadding: true,
				//width: "40%",
				//height: "30%",
				title: "PGP - Public Key",
				content: [new sap.ui.commons.TextView({
					design: sap.ui.commons.TextViewDesign.Monospace,
					text: oController.getPubKey()
				})],
				closed: function(oEvent) {
					sap.ui.getCore().byId("rsaKeyDialogId").destroy();
				}
			});
			
			rsaKeyDialog.open();
		}
	});
	var facebookIcon = new sap.ui.commons.Image("facebookIconId", {
		alt: "Facebook Icon",
		src: "images/Facebook-logo.png",
		width: "20px",
		press: function(oEvent) {
			window.open("https://www.facebook.com/marco.terrinoni", "_blank");
		}
	});
	var twitterIcon = new sap.ui.commons.Image("twitterIconId", {
		alt: "Twitter Icon",
		src: "images/Twitter-logo.png",
		width: "20px",
		press: function(oEvent) {
			window.open("https://twitter.com/TerrinoniMarco", "_blank");
		}
	});
	var linkedInIcon = new sap.ui.commons.Image("linkedInIconId", {
		alt: "LinkedIn Icon",
		src: "images/linkedin-icon.png",
		width: "20px",
		press: function(oEvent) {
			window.open("http://fr.linkedin.com/pub/marco-terrinoni/79/a66/963/", "_blank");
		}
	});

	contactsPanelRef.addContent(mailIcon);
	contactsPanelRef.addContent(mailAddress);
	contactsPanelRef.addContent(pubKeyBtn);
	contactsPanelRef.addContent(facebookIcon);
	contactsPanelRef.addContent(twitterIcon);
	contactsPanelRef.addContent(linkedInIcon);
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
			width: "70%",
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Marco Terrinoni"})
		});
		setContentHomePanel(oController);
		
		var aboutMePanel = new sap.ui.commons.Panel("aboutMePanelId", {
			width: "70%",
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Personal Profile"})
		});
		setContentAboutMePanel(oController);
		
		var universityPanel = new sap.ui.commons.Panel("universityPanelId", {
			width: "70%",
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Available Material"})
		});;
		setContentUniversityPanel(oController);
		
		var workExperiencePanel = new sap.ui.commons.Panel("workExperiencePanelId", {
			width: "70%",
			showCollapseIcon: false,
			title: new sap.ui.core.Title({text: "Previous Work Experience"})
		});
		setContentWorkExperiencePanel(oController);
		
		var gitHubPanel = new sap.ui.commons.Panel("gitHubPanelId", {
			width: "70%",
			showCollapseIcon: false,
			title: new sap.ui.core.Title({
				text: "Personal Repository",
				icon: "images/github.png"
			})
		});
		setContentGitHubPanel(oController);
		
		var contactsPanel = new sap.ui.commons.Panel("contactsPanelId", {
			width: "70%",
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
			               new sap.ui.ux3.NavigationItem("navUniversity", {text: "University"}),
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
					case "navUniversity":
						mainShellRef.setContent(universityPanel);
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
