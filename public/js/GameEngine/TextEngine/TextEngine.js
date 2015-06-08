
function TextEngine()
{

};

TextEngine.prototype.createLine = function(message, color)
{
    var textLine = new TextLine(),
        characterOffsetX = 0,
        letter;

    message += '';

    for (var index = 0; index < message.length; index++) {
        letter = this.getCharacter(message[index], color, characterOffsetX);

        textLine.addCharacter(letter);
        characterOffsetX += letter.getWidth() + 1;
    }

    return textLine;
};

TextEngine.prototype.drawLine = function(scene, message, color, offsetX, offsetY)
{
    var letter;
    message += '';

    for (var index = 0; index < message.length; index++) {
        letter = this.getCharacter(message[index], color, offsetX, offsetY);

        scene.add(letter);
        offsetX += letter.getWidth() + 1;
    }
};

TextEngine.prototype.drawText = function(message, color)
{
    message += '';

    var scene = new Scene(),
        max = Math.min(message.length, 16),
        offsetX = 0,
        offsetY = 0,
        letter;

    for (var index = 0; index < max; index++) {
        letter = this.getCharacter(message[index], color, offsetX, offsetY);

        scene.add(letter);
        offsetX += letter.getWidth() + 1;

        if (index == 3 || index == 7 || index == 11 || index == 15) {
            offsetY += 6;
            offsetX = 0;
        }
    }

    return scene;
};

TextEngine.prototype.getCharacter = function(character, color, offsetX, offsetY)
{
    return CharacterFactory.get(character.toUpperCase(), color, offsetX, offsetY);
};
