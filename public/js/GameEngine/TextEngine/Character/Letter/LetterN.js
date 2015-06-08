
LetterN.prototype = new Character();

function LetterN()
{
    Character.apply(this, arguments);

    this.width = 4;
    this.positionList = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},

        {x: 1, y: 1},

        {x: 2, y: 2},

        {x: 3, y: 0},
        {x: 3, y: 1},
        {x: 3, y: 2},
        {x: 3, y: 3},
        {x: 3, y: 4},
    ];
};
