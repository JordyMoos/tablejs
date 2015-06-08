
TextLine.prototype = new Entity();

function TextLine()
{
    Entity.apply(this, arguments);

    this.offsetX = 0;
    this.offsetY = 0;
    this.characterList = [];
};

TextLine.prototype.addCharacter = function(character)
{
    if ( ! (character instanceof Character)) {
        throw 'Can only add characters';
    }

    this.characterList.push(character);
};

TextLine.prototype.getOffsetX = function()
{
    return this.offsetX;
};

TextLine.prototype.setOffsetX = function(offsetX)
{
    this.offsetX = offsetX | 0;
};

TextLine.prototype.setOffset = function(offsetX, offsetY)
{
    this.offsetX = offsetX | 0;
    this.offsetY = offsetY | 0;
};

TextLine.prototype.render = function()
{
    var matrix = [],
        self = this,
        characterMatrix;

    this.characterList.forEach(function eachCharacter(character) {
        characterMatrix = character.render();

        characterMatrix.forEach(function eachPosition(position) {
            matrix.push({
                x: position.x + self.offsetX,
                y: position.y + self.offsetY,
                color: position.color
            });
        });
    });

    return matrix;
};
