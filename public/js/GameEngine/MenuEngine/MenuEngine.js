
function MenuEngine(textEngine, graphicEngine, inputController)
{
    this.textEngine = textEngine;
    this.graphicEngine = graphicEngine;
    this.inputController = inputController;
};

MenuEngine.prototype.create = function(itemList)
{
    return new Menu(textEngine, graphicEngine, inputController, itemList);
};
