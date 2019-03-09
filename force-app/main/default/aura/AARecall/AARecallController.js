({
    clickSubmit : function(component, event, helper) {
        var action = component.get("c.onRecall");
        action.setParams({quoteId : component.get("v.recordId")});

        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                // Refresh the Record
                $A.get('e.force:refreshView').fire();
                // Close the Component
                $A.get("e.force:closeQuickAction").fire();
                // Optionally Alert user with Success Message
                helper.showSuccessToast();
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
                    // Refresh the Record
                    $A.get('e.force:refreshView').fire();
                    // Close the Component
                    $A.get("e.force:closeQuickAction").fire();
                    // Optionally Alert user with Success Message
                    helper.showErrorToast();
            }
        });
        $A.enqueueAction(action);
    }
})
