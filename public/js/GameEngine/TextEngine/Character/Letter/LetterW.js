
LetterW.prototype = new Character();

function LetterW()
{
    Character.apply(this, arguments);

    this.width = 5;
    this.positionList = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},

        {x: 1, y: 4},

        {x: 2, y: 2},
        {x: 2, y: 3},

        {x: 3, y: 4},

        {x: 4, y: 0},
        {x: 4, y: 1},
        {x: 4, y: 2},
        {x: 4, y: 3},
    ];
};
