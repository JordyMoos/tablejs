
function CollisionDetector()
{

};

CollisionDetector.prototype.isColliding = function(PointListA, PointListB)
{
    // Simplify the B list
    var coordinatesListB = {};
    PointListB.forEach(function(point) {
        coordinatesListB[point.x + '-' + point.y] = true;
    });

    var coordinate;
    return PointListA.some(function(point) {
        coordinate = point.x + '-' + point.y;
        return (coordinate in coordinatesListB);
    });
};
