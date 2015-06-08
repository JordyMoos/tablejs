
Number1.prototype = new Character();

function Number1()
{
    Character.apply(this, arguments);

    this.width = 1;
    this.positionList = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},
    ];
};
