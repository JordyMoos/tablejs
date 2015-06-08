
KeyboardInputController.prototype = new InputController();

function KeyboardInputController()
{
    InputController.apply(this, arguments);
};

KeyboardInputController.prototype.initialize = function()
{
    try {
        var self = this;

        window.addEventListener('keydown', function(event){
            self.onKeyPress(event);
        }, false);
        window.addEventListener('keyup', function(event){
            self.onKeyRelease(event);
        }, false);

    } catch (exception) {
        console.log('Exception while initializing KeyboardInputController');
        console.log(exception);

        throw exception;
    }
};

KeyboardInputController.prototype.onKeyPress = function(event)
{
    var key = this.getKeyByEventCode(event.which);

    if ( ! key) {
        return;
    }

    if ( ! this.isKeyPressed(key)) {
        this.pressKey(key);
    }
};

KeyboardInputController.prototype.onKeyRelease = function(event)
{
    var key = this.getKeyByEventCode(event.which);

    if ( ! key) {
        return;
    }

    if (this.isKeyDown(key)) {
        this.releaseKey(key);
    }
};

KeyboardInputController.prototype.getKeyByEventCode = function(eventCode)
{
    switch (eventCode) {
        case 187:
            return INPUTKEYS.START;
        case 189:
            return INPUTKEYS.SELECT;
        case 38:
            return INPUTKEYS.UP;
        case 39:
            return INPUTKEYS.RIGHT;
        case 40:
            return INPUTKEYS.DOWN;
        case 37:
            return INPUTKEYS.LEFT;
        case 90:
            return INPUTKEYS.BUTTON_A;
        case 88:
            return INPUTKEYS.BUTTON_B;
        case 65:
            return INPUTKEYS.BUTTON_Z;
        case 83:
            return INPUTKEYS.BUTTON_Y;
    }

    return false;
};
