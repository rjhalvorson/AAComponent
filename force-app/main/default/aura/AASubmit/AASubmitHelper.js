({
    showSuccessToast : function() {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Approval Submitted',
            message: 'Successfully Submitted for Approval',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();
    },
    showErrorToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Error Message',
            message:'Submitting for Approval Failed',
            duration:' 5000',
            key: 'info_alt',
            type: 'error',
            mode: 'sticky'
        });
        toastEvent.fire();
    }
})
