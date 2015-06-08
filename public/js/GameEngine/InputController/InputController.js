
function InputController()
{
    this.keyList = {};

    for (var key = 1; key <= 10; key++) {
        this.keyList[key] = {
            down: false,
            pressed: false
        };
    }
};

InputController.prototype.initialize = function()
{
    console.log('GraphicEngines initialize not defined');
};

InputController.prototype.isKeyPressed = function(key)
{
    return this.keyList[key].pressed;
};

InputController.prototype.isKeyDown = function(key)
{
    return this.keyList[key].down;
};

InputController.prototype.pressKey = function(key)
{
    this.keyList[key].pressed = true;
    this.keyList[key].down = true;
};

InputController.prototype.releaseKey = function(key)
{
    this.keyList[key].down = false;
};

InputController.prototype.clearPresses = function()
{
    var self = this;

    Object.keys(this.keyList).forEach(function(key) {
        self.keyList[key].pressed = false;
    });
};
