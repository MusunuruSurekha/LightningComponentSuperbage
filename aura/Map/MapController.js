({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    } ,handleApplicationEvent : function(component,event,helper){
        var lat = event.getParam("lat"); 
        var long = event.getParam("long"); 
        
        var location={};
        location.lat= lat;
        location.long= long;
        
        // set the handler attributes based on event data
        component.set("v.location", location);
    } 
})