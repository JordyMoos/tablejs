
Snake.prototype = new Entity();

function Snake()
{
    Entity.apply(this, arguments);

    this.direction = SNAKE_DIRECTIONS.RIGHT;
    this.lastWalkedDirection = this.direction;

    this.body = [];
    this.body.push({x: 0, y: 0});
    this.body.push({x: 1, y: 0});
    this.body.push({x: 2, y: 0});
};

Snake.prototype.setDirection = function(direction)
{
    if (this.isOppositeDirection(direction)) {
        return;
    }

    this.direction = direction;
};

Snake.prototype.isOppositeDirection = function(direction)
{
    return (this.lastWalkedDirection % 2) == (direction % 2);
}

Snake.prototype.walk = function()
{
    var currentPosition = this.getHead(),
        nextPositionX = currentPosition.x,
        nextPositionY = currentPosition.y;

    switch (this.direction) {
        case SNAKE_DIRECTIONS.UP:
            nextPositionY--;
            this.lastWalkedDirection = SNAKE_DIRECTIONS.UP;
            break;
        case SNAKE_DIRECTIONS.RIGHT:
            nextPositionX++;
            this.lastWalkedDirection = SNAKE_DIRECTIONS.RIGHT;
            break;
        case SNAKE_DIRECTIONS.DOWN:
            nextPositionY++;
            this.lastWalkedDirection = SNAKE_DIRECTIONS.DOWN;
            break;
        case SNAKE_DIRECTIONS.LEFT:
            nextPositionX--;
            this.lastWalkedDirection = SNAKE_DIRECTIONS.LEFT;
            break;
    }

    this.body.push({
        x: nextPositionX,
        y: nextPositionY
    });

    this.previousEnding = this.body.shift();
};

Snake.prototype.eat = function()
{
    this.body.unshift(this.previousEnding);
}

Snake.prototype.render = function()
{
    var matrix = [];

    this.body.forEach(function(point){
        matrix.push({
            x: point.x,
            y: point.y,
            color: 'blue'
        });
    });

    return matrix;
};

Snake.prototype.getBody = function()
{
    return this.body.slice(0, -1);
};

Snake.prototype.getHead = function()
{
    return this.body.slice(-1)[0];
};
