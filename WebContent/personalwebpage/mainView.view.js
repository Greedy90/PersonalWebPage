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
			worksetItems: [new sap.ui.ux3.NavigationItem("navHome", {text: "Home"})],
			worksetItemSelected: function(oEvent) {
				var sId = oEvent.getParameter("id");
				var mainShellRef = oEvent.oSource;
				switch(sId) {
					case "navHome":
						mainShellRef.setContent(homePanel);
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
