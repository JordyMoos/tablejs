
function GameFactory(graphicEngine, inputController, collisionDetector, textEngine)
{
    this.graphicEngine = graphicEngine;
    this.inputController = inputController;
    this.collisionDetector = collisionDetector;
    this.textEngine = textEngine;
};

GameFactory.prototype.load = function(gameName)
{
    switch (gameName) {
        case 'disco':
            return new DiscoGame(
                this.graphicEngine,
                this.inputController
            );

        case 'snake':
            return new SnakeGame(
                this.graphicEngine,
                this.inputController,
                this.collisionDetector,
                this.textEngine
            );
    }

    throw 'Unknown game "' + gameName + '"';
};
