
LetterG.prototype = new Character();

function LetterG()
{
    Character.apply(this, arguments);

    this.width = 4;
    this.positionList = [
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},

        {x: 1, y: 0},
        {x: 1, y: 4},

        {x: 2, y: 0},
        {x: 2, y: 2},
        {x: 2, y: 4},

        {x: 3, y: 0},
        {x: 3, y: 2},
        {x: 3, y: 3},
        {x: 3, y: 4},
    ];
};
