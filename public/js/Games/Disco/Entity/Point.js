
Point.prototype = new Entity();

function Point(positionX, positionY, color)
{
    Entity.apply(this, arguments);

    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;
};

Point.prototype.render = function()
{
    return [
        {
            x: this.positionX,
            y: this.positionY,
            color:  this.color
        }
    ];
};
