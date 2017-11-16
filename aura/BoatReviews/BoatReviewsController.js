({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },onUserInfoClick: function(component, event, helper) {
        var userid=event.currentTarget.dataset.userid;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": userid,
            "slideDevName": "detail"
        });
        navEvt.fire();
    }
})