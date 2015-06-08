
function GraphicEngine()
{

};

GraphicEngine.prototype.initialize = function()
{
    console.log('GraphicEngines initialize not defined');
};

GraphicEngine.prototype.draw = function(scene)
{
    if ( ! (scene instanceof Scene)) {
        throw 'Invalid object to draw. Expecting a Scene';
    }
};
