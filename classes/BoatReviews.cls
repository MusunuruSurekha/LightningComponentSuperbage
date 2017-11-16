public class BoatReviews {
    
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        List<BoatReview__c> boatReviews=[Select Id,
                                         Name,
                                         Comment__c,
                                         Rating__c,
                                         LastModifiedDate,
                                         CreatedDate,
                                         CreatedBy.Id,
                                         CreatedBy.Name,
                                         CreatedBy.SmallPhotoUrl,
                                         CreatedBy.CompanyName from BoatReview__c where Boat__c=:boatId];
        return boatReviews;
    }
}