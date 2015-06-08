
CanvasGraphicEngine.prototype = new GraphicEngine();

function CanvasGraphicEngine()
{
    GraphicEngine.apply(this, arguments);

    this.canvas = undefined;
    this.horizontalPointCount = 16;
    this.verticalPointCount = 16;
    this.pointWidth = 20;
    this.pointHeight = 20;
    this.borderSize = 3;
};

CanvasGraphicEngine.prototype.initialize = function()
{
    try {
        var containerElement = document.getElementsByTagName('body')[0];

        var canvasElement = document.createElement('canvas');
        canvasElement.width = this.getCanvasWidth();
        canvasElement.height = this.getCanvasHeight();

        containerElement.appendChild(canvasElement);

        this.canvas = canvasElement.getContext('2d');
    } catch (exception) {
        console.log('Exception while initializing CanvasGraphicEngine');
        console.log(exception);

        throw exception;
    }
};

CanvasGraphicEngine.prototype.draw = function(scene)
{
    GraphicEngine.prototype.draw.apply(this, arguments);

    this.clearCanvas();

    this.drawBorders();

    this.renderMatrix(scene.render());
};

CanvasGraphicEngine.prototype.clearCanvas = function()
{
    this.canvas.fillStyle = 'rgb(255,255,255)';
    this.canvas.fillRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
};

CanvasGraphicEngine.prototype.renderMatrix = function(matrix)
{
    var self = this;

    matrix.forEach(function(point) {
        self.drawPoint(
            point.x,
            point.y,
            point.color
        );
    });
};

CanvasGraphicEngine.prototype.drawPoint = function(positionX, positionY, color)
{
    this.canvas.fillStyle = color;
    this.canvas.fillRect(
        (positionX * this.pointWidth) + ((positionX + 1) * this.borderSize),
        (positionY * this.pointHeight) + ((positionY + 1) * this.borderSize),
        this.pointWidth,
        this.pointHeight
    );
};

CanvasGraphicEngine.prototype.drawBorders = function()
{
    this.canvas.fillStyle = 'rgb(0,0,0)';

    for (var horizontal = 0; horizontal <= this.horizontalPointCount; horizontal++) {
        this.canvas.fillRect(
            0,
            horizontal * (this.pointHeight + this.borderSize),
            this.getCanvasWidth(),
            this.borderSize
        );
    }

    for (var vertical = 0; vertical <= this.verticalPointCount; vertical++) {
        this.canvas.fillRect(
            vertical * (this.pointWidth + this.borderSize),
            0,
            this.borderSize,
            this.getCanvasHeight()
        );
    }
};

CanvasGraphicEngine.prototype.getCanvasWidth = function()
{
    return this.horizontalPointCount * this.pointWidth + this.getTotalHorizontalBorderSize();
};

CanvasGraphicEngine.prototype.getCanvasHeight = function()
{
    return this.verticalPointCount * this.pointHeight + this.getTotalVerticalBorderSize();
};

CanvasGraphicEngine.prototype.getTotalHorizontalBorderSize = function()
{
    return (this.horizontalPointCount + 1) * this.borderSize;
};

CanvasGraphicEngine.prototype.getTotalVerticalBorderSize = function()
{
    return (this.verticalPointCount + 1) * this.borderSize;
};
