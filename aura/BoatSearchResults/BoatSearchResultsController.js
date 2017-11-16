({
	doInit : function(component, event, helper) {
		helper.onSearch(component);
    },doSearch :function(component,event,helper){
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.boatTypeId;
            component.set("v.boatTypeId",param1);
        }
        helper.onSearch(component);
    },onBoatSelect:function(component,event,helper){
        var selectedBoatId=event.getParam("boatId");
        component.set("v.selectedBoatId",selectedBoatId);
    }
})