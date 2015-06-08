
Food.prototype = new Entity();

function Food(positionX, positionY)
{
    this.positionX = positionX;
    this.positionY = positionY;

    Entity.apply(this, arguments);
};

Food.prototype.render = function()
{
    return [
        {x: this.positionX, y: this.positionY, color: '#ff0000'}
    ];
};

Food.prototype.getPosition = function()
{
    return {
        x: this.positionX,
        y: this.positionY
    };
};
