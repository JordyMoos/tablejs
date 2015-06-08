
var GraphicEngineFactory = {
    load: function () {
        var engine = new CanvasGraphicEngine();
        engine.initialize();

        return engine;
    }
};
