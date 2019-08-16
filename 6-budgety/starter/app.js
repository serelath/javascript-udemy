var budgetController = (function() {

})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add item to budget controller

        // 3. Add item to the UI

        // 4. Calculate Budget

        // 5. Display the budget on the UI


    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);