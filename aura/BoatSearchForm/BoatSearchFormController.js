({
    doInit : function(component, event, helper) {
        var createMyCustomObjRecEvent = $A.get("event.force:createRecord");
        if(!createMyCustomObjRecEvent){
            component.set("v.isNewdisplayed",false);
        }else{
            component.set("v.isNewdisplayed",true);
        }
        
        var action=component.get("c.getBoatTypes");
        action.setCallback(this,function(response){
            var state=response.getState();
            if (state === "SUCCESS") {
                component.set("v.boattypes",response.getReturnValue());
                console.log(response.getReturnValue()[0].Name);
            }else{
                console.log("Issue with boat types");
            }
        });
        
        $A.enqueueAction(action);
        
        
    },createRecord : function (component, event, helper) {
        
        var getType=component.get("v.selectedType");
        if(getType.startsWith('All Types')){
            getType='';
        }
        var createRecordEvent = $A.get("event.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
        		'BoatType__c' : getType
    		 }
        });
        createRecordEvent.fire();
    },onFormSubmit:function(component,event,helper){
        var getType=component.get("v.selectedType");
        
        var cmpEvent = component.getEvent("formsubmit");
        var formData={};
        formData.boatTypeId=getType;
        
        cmpEvent.setParams({
            "formData" : formData});
        cmpEvent.fire();
    }
})