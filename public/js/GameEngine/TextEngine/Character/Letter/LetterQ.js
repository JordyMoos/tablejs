
LetterQ.prototype = new Character();

function LetterQ()
{
    Character.apply(this, arguments);

    this.positionList = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},

        {x: 1, y: 0},
        {x: 1, y: 2},

        {x: 2, y: 0},
        {x: 2, y: 1},
        {x: 2, y: 2},
        {x: 2, y: 3},
        {x: 2, y: 4},
    ];
};
