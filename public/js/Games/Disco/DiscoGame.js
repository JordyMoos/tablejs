
DiscoGame.prototype = new Game();

function DiscoGame()
{
    Game.apply(this, arguments);

    this.minPointCount = 1;
    this.maxPointCount = 16 * 16;

    this.lastTime = 0;
    this.renderDelay = 500;
    this.currentPointCount = 10;
};

DiscoGame.prototype.initialize = function()
{

};

DiscoGame.prototype.loop = function()
{
    this.handleInput();

    if ( ! this.enoughTimePassed()) {
        return;
    }

    var scene = new Scene(),
        point;

    for (var count = 0; count < this.currentPointCount; count++) {
        point = new Point(
            this.getRandomPosition(),
            this.getRandomPosition(),
            this.getRandomColor()
        );

        scene.add(point);
    }

    this.graphicEngine.draw(scene);

    this.lastTime = new Date().getTime();
};

DiscoGame.prototype.handleInput = function()
{
    if (this.inputController.isKeyPressed(INPUTKEYS.UP)) {
        this.addPoint();
    } else if (this.inputController.isKeyPressed(INPUTKEYS.DOWN)) {
        this.removePoint();
    } else if (this.inputController.isKeyPressed(INPUTKEYS.RIGHT)) {
        this.faster();
    } else if (this.inputController.isKeyPressed(INPUTKEYS.LEFT)) {
        this.slower();
    }
};

DiscoGame.prototype.enoughTimePassed = function()
{
    var now = new Date().getTime();

    return (this.lastTime + this.renderDelay <= now);
};

DiscoGame.prototype.getRandomPosition = function()
{
    return Math.floor(Math.random() * 16);
};

DiscoGame.prototype.getRandomColor = function()
{
    return 'rgb('
        + Math.floor(Math.random() * 255) + ','
        + Math.floor(Math.random() * 255) + ','
        + Math.floor(Math.random() * 255) + ')';
};

DiscoGame.prototype.addPoint = function()
{
    this.currentPointCount++;
    if (this.currentPointCount > this.maxPointCount) {
        this.currentPointCount = this.maxPointCount;
    }
};

DiscoGame.prototype.removePoint = function()
{
    this.currentPointCount--;
    if (this.currentPointCount < this.minPointCount) {
        this.currentPointCount = this.minPointCount;
    }
};

DiscoGame.prototype.faster = function()
{
    this.renderDelay -= 50;
};

DiscoGame.prototype.slower = function()
{
    this.renderDelay += 50;
};

