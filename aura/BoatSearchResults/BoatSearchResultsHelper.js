({
	onSearch : function(component) {
        var bti=component.get("v.boatTypeId");
        
		var action=component.get("c.getBoats");
        action.setParams({"boatTypeId":bti});
        
        action.setCallback(this,function(response){
           var state=response.getState();
            console.log(response.getError());
            if(state==="SUCCESS"){
                component.set("v.boats",response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
	}
})