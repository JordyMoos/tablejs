
function Game(graphicEngine, inputController, collisionDetector, textEngine)
{
    this.graphicEngine = graphicEngine;
    this.inputController = inputController;
    this.collisionDetector = collisionDetector;
    this.textEngine = textEngine;
};

Game.prototype.initialize = function()
{
    throw 'Initialize function should be overwritten';
};

Game.prototype.loop = function()
{
    throw 'Initialize function should be overwritten';
};
