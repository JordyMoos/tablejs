
LetterL.prototype = new Character();

function LetterL()
{
    Character.apply(this, arguments);

    this.positionList = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},

        {x: 1, y: 4},

        {x: 2, y: 4},
    ];
};
