public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        
        List<Boat__c> boats=null;
        if(boatTypeId==null||boatTypeId.length()==0){
            boats=[Select Name,
                             Picture__c
                             from Boat__c ];
        }else{
            boats=[Select Name,BoatType__c,Contact__r.Name,
                             Description__c,Geolocation__c,Length__c,
                             Picture__c,Price__c,Year_Built__c
                             from Boat__c 
                             Where BoatType__c=:boatTypeId];
        }

        return boats;
    } 
    
}