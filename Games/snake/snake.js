document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const gridSize = 20;
    const initialSnake = [{ x: 5, y: 5 }];
    let snake = [...initialSnake];
    let direction = 'right';
    let food = generateFood();

    function generateFood() {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        return { x, y };
    }

    function update() {
        // Move the snake
        const head = { ...snake[0] };
        switch (direction) {
            case 'up':
                head.y = (head.y - 1 + gridSize) % gridSize;
                break;
            case 'down':
                head.y = (head.y + 1) % gridSize;
                break;
            case 'left':
                head.x = (head.x - 1 + gridSize) % gridSize;
                break;
            case 'right':
                head.x = (head.x + 1) % gridSize;
                break;
        }

        // Check for collisions
        if (head.x === food.x && head.y === food.y) {
            snake.unshift({ ...food });
            food = generateFood();
        } else {
            snake.pop();
        }

        // Check for self-collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            resetGame();
            return;
        }

        snake.unshift(head);
    }

    function render() {
        // Clear the board
        board.innerHTML = '';

        // Render the snake
        snake.forEach(segment => {
            const snakeSegment = document.createElement('div');
            snakeSegment.className = 'snake';
            snakeSegment.style.left = `${segment.x * 20}px`;
            snakeSegment.style.top = `${segment.y * 20}px`;
            board.appendChild(snakeSegment);
        });

        // Render the food
        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.left = `${food.x * 20}px`;
        foodElement.style.top = `${food.y * 20}px`;
        board.appendChild(foodElement);
    }

    function resetGame() {
        snake = [...initialSnake];
        direction = 'right';
        food = generateFood();
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }

    document.addEventListener('keydown', handleKeyPress);

    function gameLoop() {
        update();
        render();
    }

    setInterval(gameLoop, 100);
});
