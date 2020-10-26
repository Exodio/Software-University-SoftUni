(function game() {

    const gameStartEl = document.getElementById("game-start");
    const gameScoreValueEl = document.getElementById("score-value");
    const gameAreaEl = document.getElementById("game-area");
    const gameOverEl = document.getElementById("game-over");
    const gameWizardEl = document.getElementById("wizard");

    const pressedKeys = new Set();

    const config = {
        speed: 2,
        wizardMovingMultiplier: 4,
        fireballMovingMultiplier: 5,
        fireInterval: 1000,
        cloudSpanInterval: 3000,
        bugSpanInterval: 1000,
        bugKillScore: 2000,
    };

    const utils = {
        pxToNumber(val) {
            return +val.replace("px", "");
        },
        numberToPx(val) {
            return `${val}px`;
        },
        randomNumberBetween(min, max) {
            return Math.floor(Math.random() * max) + min;
        },
        hasCollision(firstEl, secondEl) {
            const firstElRect = firstEl.getBoundingClientRect();
            const secondElRect = secondEl.getBoundingClientRect();

            return !(
                firstElRect.top > secondElRect.bottom ||
                firstElRect.bottom < secondElRect.top ||
                firstElRect.right < secondElRect.left ||
                firstElRect.left > secondElRect.right
            );
        }
    };

    const scene = {

        get fireBalls() {
            return Array.from(document.querySelectorAll(".fire-ball"));
        },
        get clouds() {
            return Array.from(document.querySelectorAll(".cloud"));
        },
        get bugs() {
            return Array.from(document.querySelectorAll(".bug"));
        }
    };

    const wizardCoordinates = {
        wizard: gameWizardEl,
        set x(newX) {
            if (newX < 0) {
                newX = 0;
            } else if (newX + gameWizardEl.offsetWidth >= gameAreaEl.offsetWidth) {
                newX = gameAreaEl.offsetWidth - gameWizardEl.offsetWidth;
            }
            this.wizard.style.left = utils.numberToPx(newX);
        },
        get x() {
            return utils.pxToNumber(this.wizard.style.left);
        },
        set y(newY) {
            if (newY < 0) {
                newY = 0;
            } else if (newY + gameWizardEl.offsetHeight >= gameAreaEl.offsetHeight) {
                newY = gameAreaEl.offsetHeight - gameWizardEl.offsetHeight;
            }
            this.wizard.style.top = utils.numberToPx(newY);
        },
        get y() {
            return utils.pxToNumber(this.wizard.style.top);
        }
    };

    function createGameplay() {
        return {
            loopId: null,
            nextRenderQueue: [],
            lastFireBallTimestamp: 0,
            lastCouldTimestamp: 0,
            lastBugTimestamp: 0,
        };
    }

    let gameplay;
    function initialize() {
        gameplay = createGameplay();
        gameScoreValueEl.innerText = 0;
        wizardCoordinates.x = 200;
        wizardCoordinates.y = 200;
        gameWizardEl.classList.remove("hidden");
        gameOverEl.classList.add("hidden");
        gameLoop(0);
    }

    function gameOver() {
        window.cancelAnimationFrame(gameplay.loopId);
        gameOverEl.classList.remove("hidden");
        gameStartEl.classList.remove("hidden");
    }

    function addGameElementFactory(className) {
        return function addElement(x, y) {
            const e = document.createElement("div");
            e.classList.add(className);
            e.style.left = utils.numberToPx(x);
            e.style.top = utils.numberToPx(y);
            gameAreaEl.appendChild(e);
        };
    }

    const addFireBall = addGameElementFactory("fire-ball");
    const addCloud = addGameElementFactory("cloud");
    const addBug = addGameElementFactory("bug");

    const pressedKeyActionMap = {
        ArrowUp() {
            wizardCoordinates.y -= config.speed * config.wizardMovingMultiplier;
        },
        ArrowDown() {
            wizardCoordinates.y += config.speed * config.wizardMovingMultiplier;
        },
        ArrowLeft() {
            wizardCoordinates.x -= config.speed * config.wizardMovingMultiplier;
        },
        ArrowRight() {
            wizardCoordinates.x += config.speed * config.wizardMovingMultiplier;
        },
        Space(timestamp) {
            if (
                gameWizardEl.classList.contains("wizard-fire") || timestamp - gameplay.lastFireBallTimestamp < config.fireInterval
            ) {
                return;
            }
            addFireBall(wizardCoordinates.x + 50, wizardCoordinates.y);
            gameplay.lastFireBallTimestamp = timestamp;
            gameWizardEl.classList.add("wizard-fire");

            gameplay.nextRenderQueue = gameplay.nextRenderQueue.concat(function clearWizardFire() {
                if (pressedKeys.has("Space")) {
                    return false;
                }

                gameWizardEl.classList.remove("wizard-fire");
                return true;
            });
        }
    };

    function processFireBalls() {
        scene.fireBalls.forEach(fbe => {
            const newX = (config.speed * config.fireballMovingMultiplier) + utils.pxToNumber(fbe.style.left);
            if (newX + fbe.offsetWidth >= gameAreaEl.offsetWidth) {
                fbe.remove();
                return;
            }
            fbe.style.left = utils.numberToPx(newX);
        });
    }

    function processNextRenderQueue() {
        gameplay.nextRenderQueue = gameplay.nextRenderQueue.reduce((acc, currFn) => {
            if (currFn()) {
                return acc;
            }
            return acc.concat(currFn);
        }, []);
    }

    function processPressedKeys(timestamp) {
        pressedKeys.forEach(pressedKey => {
            const handler = pressedKeyActionMap[pressedKey];
            if (handler) {
                handler(timestamp);
            }
        });
    }

    function processGameElementFactory(
        addFn,
        elementWidth,
        gameplayTimestampName,
        sceneName,
        configName,
        additionalElementProcessor,
    ) {
        return function (timestamp) {
            if (timestamp - gameplay[gameplayTimestampName] > config[configName]) {
                const x = gameAreaEl.offsetWidth + elementWidth;
                const y = utils.randomNumberBetween(0, gameAreaEl.offsetHeight - elementWidth);
                addFn(x, y);
                gameplay[gameplayTimestampName] = timestamp;
            }
            scene[sceneName].forEach(el => {
                const newX = utils.pxToNumber(el.style.left) - config.speed;

                if (additionalElementProcessor && additionalElementProcessor(el)) {
                    return;
                }
                if (newX + 200 < 0) {
                    el.remove();
                }
                el.style.left = utils.numberToPx(newX);
            });
        }
    }

    const processClouds = processGameElementFactory(addCloud, 200, "lastCouldTimestamp", "clouds", "cloudSpanInterval");

    function bugElementProcessor(bugEl) {
        const fireball = scene.fireBalls.find(funcEl => utils.hasCollision(funcEl, bugEl));
        if (fireball) {
            fireball.remove();
            bugEl.remove();
            gameScoreValueEl.innerText = config.bugKillScore + +gameScoreValueEl.innerText;
            return true;
        }
        if (utils.hasCollision(bugEl, gameWizardEl)) {
            gameOver();
            return true;
        }
        return false;
    }

    const processBugs = processGameElementFactory(addBug, 60, "lastBugTimestamp", "bugs", "bugSpanInterval", bugElementProcessor);

    function applyGravity() {
        const isInAir = wizardCoordinates.y !== gameAreaEl.offsetHeight;
        if (isInAir) {
            wizardCoordinates.y += config.speed;
        }
    }

    function gameLoop(timestamp) {
        gameplay.loopId = window.requestAnimationFrame(gameLoop);
        processPressedKeys(timestamp);
        applyGravity(timestamp);
        processNextRenderQueue(timestamp);
        processFireBalls(timestamp);
        processClouds(timestamp);
        processBugs(timestamp);

        gameScoreValueEl.innerText++;
    }

    gameStartEl.addEventListener("click", function gameStartHandler() {
        gameStartEl.classList.add("hidden");
        initialize();
    });

    document.addEventListener("keydown", function keydownHandler(e) {
        pressedKeys.add(e.code);
    });

    document.addEventListener("keyup", function keyupHandler(e) {
        pressedKeys.delete(e.code);
    });

}());