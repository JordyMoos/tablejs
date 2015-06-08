
SnakeGame.prototype = new Game();

function SnakeGame()
{
    Game.apply(this, arguments);

    this.maxX = 16;
    this.maxY = 16;

    this.snake = undefined;
    this.food = undefined;
    this.score = undefined;
};

SnakeGame.prototype.initialize = function()
{
    this.startGame();
};

SnakeGame.prototype.startGame = function()
{
    this.gameState = SNAKEGAMESTATES.PLAYING;
    this.walkingDelay = 250;
    this.lastTime = 0;

    this.snake = new Snake();
    this.food = new Food(5, 5);
    this.score = 0;
};

SnakeGame.prototype.loop = function()
{
    switch (this.gameState) {
        case SNAKEGAMESTATES.PLAYING:
            this.runGameStatePlaying();
            break;

        case SNAKEGAMESTATES.GAME_OVER:
            this.runGameStateGameOver();
            break;

        case SNAKEGAMESTATES.SHOW_SCORE:
            this.runGameStateShowScore();
            break;
    }
};

SnakeGame.prototype.runGameStatePlaying = function()
{
    this.handleInput();

    if ( ! this.enoughTimePassed()) {
        return;
    }

    this.snake.walk();

    if(this.isEatingFood()) {
        this.eatFood();
    }

    if(this.isSnakeCrashingToSelf() || this.isSnakeOutOfMap()) {
        this.gameOver();
        return;
    }

    var scene = new Scene();
    scene.add(this.food);
    scene.add(this.snake);

    this.graphicEngine.draw(scene);

    this.lastTime = new Date().getTime();
};

SnakeGame.prototype.handleInput = function()
{
    if (this.inputController.isKeyPressed(INPUTKEYS.UP)) {
        this.snake.setDirection(SNAKE_DIRECTIONS.UP);
    } else if (this.inputController.isKeyPressed(INPUTKEYS.RIGHT)) {
        this.snake.setDirection(SNAKE_DIRECTIONS.RIGHT);
    } else if (this.inputController.isKeyPressed(INPUTKEYS.DOWN)) {
        this.snake.setDirection(SNAKE_DIRECTIONS.DOWN);
    } else if (this.inputController.isKeyPressed(INPUTKEYS.LEFT)) {
        this.snake.setDirection(SNAKE_DIRECTIONS.LEFT);
    }
};

SnakeGame.prototype.isEatingFood = function()
{
    return this.collisionDetector.isColliding(
        [this.snake.getHead()],
        [this.food.getPosition()]
    );
};

SnakeGame.prototype.eatFood = function()
{
    this.snake.eat();
    this.food = new Food(
        Math.floor(Math.random() * this.maxX),
        Math.floor(Math.random() * this.maxY)
    );

    this.score++;
    this.walkingDelay -= 2;
};

SnakeGame.prototype.isSnakeCrashingToSelf = function()
{
    return this.collisionDetector.isColliding(
        [this.snake.getHead()],
        this.snake.getBody()
    );
};

SnakeGame.prototype.isSnakeOutOfMap = function()
{
    var head = this.snake.getHead();

    return head.x < 0 || head.x >= this.maxX
        || head.y < 0 || head.y >= this.maxY;
};

SnakeGame.prototype.gameOver = function()
{
    this.gameState = SNAKEGAMESTATES.GAME_OVER;

    var scene = this.textEngine.drawText('finished', 'red');
    this.graphicEngine.draw(scene);

    this.runGameStateGameOver();
};

SnakeGame.prototype.enoughTimePassed = function()
{
    var now = new Date().getTime();

    return (this.lastTime + this.walkingDelay <= now);
};

SnakeGame.prototype.runGameStateGameOver = function()
{
    if (this.inputController.isKeyPressed(INPUTKEYS.START)) {

        this.gameState = SNAKEGAMESTATES.SHOW_SCORE;

        var scene = this.textEngine.drawText(this.score, 'red');
        this.graphicEngine.draw(scene);
    }
};

SnakeGame.prototype.runGameStateShowScore = function()
{
    if (this.inputController.isKeyPressed(INPUTKEYS.START)) {
        this.startGame();
    }
};
