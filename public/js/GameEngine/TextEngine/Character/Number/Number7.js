
Number7.prototype = new Character();

function Number7()
{
    Character.apply(this, arguments);

    this.positionList = [
        {x: 0, y: 0},

        {x: 1, y: 0},

        {x: 2, y: 0},
        {x: 2, y: 1},
        {x: 2, y: 2},
        {x: 2, y: 3},
        {x: 2, y: 4},
    ];
};
