
function Menu(textEngine, graphicEngine, inputController, itemList)
{
    this.textEngine = textEngine;
    this.graphicEngine = graphicEngine;
    this.inputController = inputController;

    this.itemList = itemList;
    this.currentItem = 0;

    this.previousTextLine = undefined;
    this.currentTextLineAnimator = undefined;
    this.nextTextLine = undefined;

    this.setUp();
};

Menu.prototype.loop = function()
{
    this.handleInput();

    if (this.currentTextLineAnimator) {
        if (this.currentTextLineAnimator.loop()) {
            this.draw();
        }
    }
};

Menu.prototype.handleInput = function()
{
    if (this.inputController.isKeyPressed(INPUTKEYS.UP)) {
        this.selectPreviousItem();
        this.setUp();
    } else if (this.inputController.isKeyPressed(INPUTKEYS.DOWN)) {
        this.selectNextItem();
        this.setUp();
    } else if (this.inputController.isKeyPressed(INPUTKEYS.BUTTON_A)) {
        this.clickCurrentItem();
    }
};

Menu.prototype.setUp = function()
{
    var previousItem = this.getPreviousItem(),
        currentItem = this.getCurrentItem(),
        nextItem = this.getNextItem();

    this.previousTextLine = undefined;
    this.currentTextLineAnimator = undefined;
    this.nextTextLine = undefined;

    if (previousItem) {
        this.previousTextLine = this.textEngine.createLine(previousItem.name, 'red');
    }
    if (currentItem) {
        var textLine = this.textEngine.createLine(currentItem.name, 'blue');
        textLine.setOffset(2, 6);

        this.currentTextLineAnimator = new TextLineAnimator(textLine);
    }
    if (nextItem) {
        this.nextTextLine = this.textEngine.createLine(nextItem.name, 'red');
        this.nextTextLine.setOffset(0, 12);
    }
};

Menu.prototype.draw = function()
{
    var scene = new Scene();

    if (this.previousTextLine) {
        scene.add(this.previousTextLine);
    }
    if (this.currentTextLineAnimator) {
        scene.add(this.currentTextLineAnimator);
    }
    if (this.nextTextLine) {
        scene.add(this.nextTextLine);
    }

    this.graphicEngine.draw(scene);
};

Menu.prototype.getPreviousItem = function()
{
    return this.itemList[this.currentItem - 1];
};

Menu.prototype.getCurrentItem = function()
{
    return this.itemList[this.currentItem];
};

Menu.prototype.getNextItem = function()
{
    return this.itemList[this.currentItem + 1];
};

Menu.prototype.selectPreviousItem = function()
{
    this.currentItem--;

    if (this.currentItem < 0) {
        this.currentItem = 0;
    }
};

Menu.prototype.selectNextItem = function()
{
    this.currentItem++;

    if (this.currentItem >= this.itemList.length) {
        this.currentItem = this.itemList.length-1;
    }
};

Menu.prototype.clickCurrentItem = function()
{
    var item = this.getCurrentItem();

    item.callback();
};
