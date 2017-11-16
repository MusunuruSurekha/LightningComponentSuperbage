({
    onBoatSelected : function(component, event, helper) {
        var selectedBoat=event.getParam("boat");
        console.log('hrereerere');
        component.set("v.boat",selectedBoat);
        component.set("v.id",selectedBoat.Id);
        component.find("service").reloadRecord();
    },onRecordUpdated : function(component, event, helper) {
        var childcmp=component.find("refresh");
        childcmp.refresh();
    },onBoatReviewAdded :  function(component, event, helper) {
        var message = event.getParam("switchtab");
        if(message){
            component.find("detailstabset").set("v.selectedTabId","boatreviewtab");
        }
        
        var childcmp=component.find("refresh");
        childcmp.refresh();
    }
})