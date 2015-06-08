
TextLineAnimator.prototype = new Entity();

function TextLineAnimator(textLine)
{
    Entity.apply(this, []);

    this.textLine = textLine;

    this.lastTime = 0;
    this.renderDelay = 100;
};

TextLineAnimator.prototype.loop = function()
{
    if ( ! this.enoughTimePassed()) {
        return false;
    }

    this.textLine.setOffsetX(
        this.textLine.getOffsetX() - 1
    );

    this.lastTime = new Date().getTime();

    return true;
};

TextLineAnimator.prototype.enoughTimePassed = function()
{
    var now = new Date().getTime();

    return (this.lastTime + this.renderDelay <= now);
};

TextLineAnimator.prototype.render = function()
{
    return this.textLine.render();
};
