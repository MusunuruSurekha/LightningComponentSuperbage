({
	onInit : function(component, event, helper) {
		component.set('v.boatReview.Boat__c', component.get('v.boat').Id); //Need to set ID
		component.find("service").getNewRecord(
        	"BoatReview__c",
            null,
            false,
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                rec.Boat__c=component.get("v.boat");
                
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                
                component.set("v.boatReview",rec);
                console.log("Record template initialized: " + rec.sobjectType);
            })
        );
	}
})
