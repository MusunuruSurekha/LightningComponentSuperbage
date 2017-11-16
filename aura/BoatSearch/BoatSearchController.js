({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam("formData");
        console.log(formData.boatTypeId + '-------');
        
        var childCmp = component.find("searchresult");
        childCmp.search(formData.boatTypeId);
	}
})