
function GameEngine(inputController, menuEngine, gameFactory)
{
    this.inputController = inputController;
    this.menuEngine = menuEngine;
    this.gameFactory = gameFactory;

    this.fps = 30;
    this.waitTime = Math.ceil(1000 / this.fps);

    console.log('Draw every: ' + this.waitTime);

    this.game = undefined;
    this.state = GAME_ENGINE_STATES.MAIN_MENU;

    var self = this;

    this.mainMenu = this.menuEngine.create([
        {name: 'Disco', callback: function() {self.start('disco');}},
        {name: 'Snake', callback: function() {self.start('snake');}},
        {name: 'Snake the game', callback: function() {self.start('snake');}},
    ]);
};

GameEngine.prototype.loop = function()
{
    var start = new Date().getTime();

    switch (this.state) {
        case GAME_ENGINE_STATES.MAIN_MENU:
            this.runStateMainMenu();
            break;

        case GAME_ENGINE_STATES.GAME_RUNNING:
            this.runStateGameRunning();
            break;

        case GAME_ENGINE_STATES.GAME_PAUSED:
            throw 'In state paused';
            //this.runGameStateShowScore();
            break;
    }

    this.inputController.clearPresses();

    var self = this,
        end = new Date().getTime(),
        timePassed = end - start;

    setTimeout(function() {
        self.loop();
    }, (this.waitTime - timePassed));
};

GameEngine.prototype.start = function(gameName)
{
    var game = this.gameFactory.load(gameName);

    if ( ! (game instanceof Game)) {
        throw 'Can only run game types';
    }

    this.game = game;
    this.game.initialize();

    this.state = GAME_ENGINE_STATES.GAME_RUNNING;
};

GameEngine.prototype.runStateMainMenu = function()
{
    this.mainMenu.loop();
};

GameEngine.prototype.runStateGameRunning = function()
{
    if (this.inputController.isKeyDown(INPUTKEYS.START) && this.inputController.isKeyDown(INPUTKEYS.SELECT)) {

        this.game = undefined;
        this.state = GAME_ENGINE_STATES.MAIN_MENU;
        this.mainMenu.draw();

        return;
    }

    this.game.loop();
};
