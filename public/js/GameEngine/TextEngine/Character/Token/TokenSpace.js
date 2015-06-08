
TokenSpace.prototype = new Character();

function TokenSpace()
{
    Character.apply(this, arguments);

    this.width = 2;
    this.positionList = [

    ];
};
