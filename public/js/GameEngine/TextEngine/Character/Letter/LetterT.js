
LetterT.prototype = new Character();

function LetterT()
{
    Character.apply(this, arguments);

    this.positionList = [
        {x: 0, y: 0},

        {x: 1, y: 0},
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: 1, y: 3},
        {x: 1, y: 4},

        {x: 2, y: 0},
    ];
};
