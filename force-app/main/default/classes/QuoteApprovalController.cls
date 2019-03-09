public with sharing class QuoteApprovalController {
	@AuraEnabled
	public static void onSubmit(Id quoteId) {
		if (quoteId != null) {
			SBAA.ApprovalAPI.submit(quoteId, SBAA__Approval__c.Quote__c);
		}
	}
	@AuraEnabled
	public static void onRecall(Id quoteId) {
		if (quoteId != null) {
			SBAA.ApprovalAPI.recall(quoteId, SBAA__Approval__c.Quote__c);
		}
	}
}