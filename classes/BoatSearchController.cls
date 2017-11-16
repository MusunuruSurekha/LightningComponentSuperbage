public class BoatSearchController {

    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> boatTypes=[Select Name from BoatType__c];
        return boatTypes;
    }
}