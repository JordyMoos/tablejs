
var InputControllerFactory = {
    load: function() {
        var inputController = new KeyboardInputController();
        inputController.initialize();

        return inputController
    }
};
