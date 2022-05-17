const crypto = require('crypto');

const PIERRE = 'Pierre';
const FEUILLE = 'Feuille';
const CISEAUX = 'Ciseaux';

const signs = [PIERRE, FEUILLE, CISEAUX];

function play() {
    const signs_history = [];
    const score_history = [];

    let player1_score = 0;
    let player2_score = 0;

    let winner = null;

    while (player1_score < 2 && player2_score < 2) {
        const {
            player1_sign,
            player2_sign,
            turn_winner
        } = get_turn_result();

        signs_history.push([player1_sign, player2_sign]);

        if (turn_winner === 1) player1_score++;
        if (turn_winner === 2) player2_score++;


        score_history.push([player1_score, player2_score]);
    }

    winner = player1_score == 2 ? 1 : 2;

    return {
        signs_history,
        score_history,
        winner
    };

}

function get_random_sign() {
    const random = crypto.randomBytes(1); // Compliant for security-sensitive use cases
    return signs[random]
}

function get_turn_result() {

    const player1_sign = get_random_sign();

    const player2_sign = get_random_sign();


    const turn_winner = get_turn_winner(player1_sign, player2_sign);

    return {
        player1_sign,
        player2_sign,
        turn_winner
    };

}

function get_turn_winner(sign1, sign2) {
    if (sign1 === sign2) return 0;

    if (sign1 === PIERRE && sign2 === CISEAUX) {
        return 1;
    }

    if (sign1 === PIERRE && sign2 === FEUILLE) {
        return 2;
    }

    if (sign1 === CISEAUX && sign2 === FEUILLE) {
        return 1;
    }

    if (sign1 === CISEAUX && sign2 === PIERRE) {
        return 2;
    }

    if (sign1 === FEUILLE && sign2 === PIERRE) {
        return 1;
    }

    if (sign1 === FEUILLE && sign2 === CISEAUX) {
        return 2;
    }

}

module.exports = {
    play,
    get_random_sign,
    get_turn_winner,
    signs,
    PIERRE,
    FEUILLE,
    CISEAUX
};