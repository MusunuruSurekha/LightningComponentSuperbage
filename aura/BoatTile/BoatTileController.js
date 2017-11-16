({
	onBoatClick : function(component, event, helper) {
        var boat=component.get("v.boat");
		var cmpEvent = component.getEvent("boatselect");
        
        cmpEvent.setParams({
            "boatId" : boat.Id});
        cmpEvent.fire();
        
        //var boatSelection = component.getEvent("boatselected");
        var boatSelection = $A.get("e.c:BoatSelected");

        boatSelection.setParams({
            "boat" : boat});
        boatSelection.fire();
        
        var pmm = $A.get("e.c:PlotMapMarker");        
        pmm.setParams({"lat":boat.Geolocation__latitude__s,"long":boat.Geolocation__longitude__s});
        pmm.fire();
        
	}
})