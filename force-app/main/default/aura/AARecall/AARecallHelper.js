({
    showSuccessToast : function() {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Approvals Recalled',
            message: 'You will need to resubmit',
            duration:' 5000',
            key: 'info_alt',
            type: 'warning',
            mode: 'pester'
        });
        toastEvent.fire();
    },
    showErrorToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Error!',
            message:'Recall Failed',
            duration:' 5000',
            key: 'info_alt',
            type: 'error',
            mode: 'sticky'
        });
        toastEvent.fire();
    }
})
