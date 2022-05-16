const { play, get_random_sign, get_turn_winner, signs, PIERRE, FEUILLE, CISEAUX } = require('../game');

const { winner, signs_history, score_history } = play();

describe('last result', () => {
    const last_result = score_history[score_history.length - 1];

    it('has a winner', () => {
        expect(last_result.indexOf(2)).toBeGreaterThan(-1);
    });

    const possible_results = [
        [1, 2],
        [0, 2],
        [2, 1],
        [2, 0],
    ];

    it('is 1/2, 2/0, 0/2, 2/1', () => {
        expect(possible_results).toContainEqual(last_result);
    });

});

describe('turns number', () => {
    it('is equal or greater than 2', () => {
        expect(score_history.length).toBeGreaterThan(1);
    });
});

describe('random sign', () => {
    it('is Pierre, Feuille or Ciseaux', () => {
        const a_sign = get_random_sign();
        expect(signs.indexOf(a_sign) > -1).toBeTruthy();
    });
});