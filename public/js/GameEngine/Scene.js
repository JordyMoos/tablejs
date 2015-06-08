
function Scene()
{
    this.fullMatrix = [];
};

Scene.prototype.add = function(entity)
{
    if ( ! (entity instanceof Entity)) {
        throw 'Not instance of entity';
    }

    var self = this,
        entityMatrix = entity.render();

    entityMatrix.forEach(function(point) {
        self.fullMatrix.push(point);
    });
};

Scene.prototype.render = function()
{
    return this.fullMatrix;
};
