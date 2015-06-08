
Character.prototype = new Entity();

function Character(color, offsetX, offsetY)
{
    Entity.apply(this, arguments);

    this.positionList = [];
    this.color = color;

    this.width = 3;
    this.offsetX = offsetX | 0;
    this.offsetY = offsetY | 0;
};

Character.prototype.render = function()
{
    var matrix = [],
        self = this;

    this.positionList.forEach(function(position) {
        matrix.push({
            x: position.x + self.offsetX,
            y: position.y + self.offsetY,
            color: self.color
        });
    });

    return matrix;
};

Character.prototype.getWidth = function()
{
    return this.width;
};
