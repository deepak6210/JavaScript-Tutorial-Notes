let blackJackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'k', 'j', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'j': 11, 'Q': 12, 'k': 13, 'A': [1, 13] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const You = blackJackGame['you']
const dealer = blackJackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit);

document.querySelector('#blackjack-deal-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackDeal);

function blackjackhit() {
    if (blackJackGame['isStand'] === false) {
        let card = randomcard();
        showCards(card, You);
        updateScore(card, You);
        showScore(You);
    }
}

function randomcard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
};

function showCards(card, activeplayer) {
    if (activeplayer['score'] <= 28) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`
        document.querySelector(activeplayer['div']).appendChild(cardImage);
        hitSound.play();
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function blackjackDeal() {
    if (blackJackGame['turnsOver'] === true) {

        blackJackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        You['score'] = 0;
        dealer['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's Play..!";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackJackGame['turnsOver'] = true;
    }
};

function updateScore(card, activeplayer) {
    if (card == 'A') {
        // if adding 13 keeps me below 26, and 13. otherwise, add 1
        if (activeplayer['score'] + blackJackGame['cardsMap'][card][1] <= 28) {
            activeplayer['score'] += blackJackGame['cardsMap'][card][1];
        } else {
            activeplayer['score'] += blackJackGame['cardsMap'][card][0];
        }
    } else {
        activeplayer['score'] += blackJackGame['cardsMap'][card];
    }
};

function showScore(activeplayer) {
    if (activeplayer['score'] > 28) {
        document.querySelector(activeplayer['scoreSpan']).textContent = 'BUST'
        document.querySelector(activeplayer['scoreSpan']).style.color = 'red'
    } else {
        document.querySelector(activeplayer['scoreSpan']).textContent = activeplayer['score'];
    }
};

async function dealerLogic() {
        blackJackGame['isStand'] = true;
        while (dealer['score'] < 20 && blackJackGame['isStand'] === true) {
            blackJackGame['turnsOver'] = false;
            let card = randomcard();
            showCards(card, dealer);
            updateScore(card, dealer);
            showScore(dealer);
            await sleep(800);
        }
        blackJackGame['turnsOver'] = true;

        let Winner = ComputeWinner();
        showResult(Winner);
    }

    // Compute winner and return who just won 
    // update the wins, draws & losses 
    function ComputeWinner() {
        let Winner;

        if (You['score'] <= 28) {
            // condition higher score than dealer or when dealer bust but you are under 28
            if (You['score'] > dealer['score'] || (dealer['score'] > 28)) {
                blackJackGame['wins']++;
                Winner = You;
            } else if (You['score'] < dealer['score']) {
                blackJackGame['losses']++;
                Winner = dealer;
            } else if (You['score'] === dealer['score']) {
                blackJackGame['draws']++;
            }

            // condition: When user busts but dealer doesn't
        } else if (You['score'] > 28 && dealer['score'] <= 28) {
            console.log('You lost!');
            Winner = dealer;

            // condition when you and the dealer busts  
        } else if (You['score'] > 28 && dealer['score'] > 28) {
            console.log('You Drew!')
        }
        // console.log(blackJackGame);
        return Winner;
    }

    function showResult(Winner) {
        let message, messageColor;

        if (blackJackGame['turnsOver'] === true) {

            if (Winner === You) {
                document.querySelector('#wins').textContent = blackJackGame['wins'];
                message = 'You Won!';
                messageColor = 'green';
                winSound.play();
            } else if (Winner === dealer) {
                document.querySelector('#losses').textContent = blackJackGame['losses'];
                message = 'You Lost!'
                messageColor = 'red'
                lossSound.play();
            } else {
                document.querySelector('#draws').textContent = blackJackGame['draws'];
                message = 'You drew!'
                messageColor = 'black';
            }
            document.querySelector('#blackjack-result').textContent = message;
            document.querySelector('#blackjack-result').style.color = messageColor;
        }
    }