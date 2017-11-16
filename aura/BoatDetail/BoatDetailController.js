({
    doInit : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
                 
        if(!navEvt){
        	component.set("v.isNewdisplayed",false);
        }else{
            component.set("v.isNewdisplayed",true);
        }
    },onFullDetails : function(component, event, helper) {
        var boat=component.get("v.boat");
        
        var navEvt = $A.get("e.force:navigateToSObject");
                 
        if(navEvt){
            navEvt.setParams({
                "recordId": boat.Id,
                "slideDevName": "detail"
            });
            navEvt.fire();
        }
        
    }
})