const { play, get_random_sign, get_turn_winner, signs, PIERRE, FEUILLE, CISEAUX } = require('../game');

const { winner, signs_history, score_history } = play();

describe('Last result', () => {
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

describe('Turns number in a party', () => {
    it('is equal or greater than 2', () => {
        expect(score_history.length).toBeGreaterThan(1);
    });
});

describe('Signs', () => {
    it('count = 3', () => {
        expect(signs.length).toBe(3);
    });
});


describe('Random sign', () => {
    it('is Pierre, Feuille or Ciseaux', () => {
        const a_sign = get_random_sign();
        expect(signs.indexOf(a_sign) > -1).toBeTruthy();
    });
});

describe('Check winner', () => {
    it('Pierre wins vs Ciseaux', () => {
        const result = get_turn_winner(PIERRE,CISEAUX);
        expect(result).toBe(1);
    });
    
    it('Ciseaux loose vs Pierre', () => {
        const result = get_turn_winner(CISEAUX,PIERRE);
        expect(result).toBe(2);
    });    
    
    
    it('Feuille wins vs Pierre', () => {
        const result = get_turn_winner(FEUILLE,PIERRE);
        expect(result).toBe(1);
    });

    it('Pierre loose vs Feuille', () => {
        const result = get_turn_winner(PIERRE,FEUILLE);
        expect(result).toBe(2);
    });
    
    it('Ciseaux wins vs Feuille', () => {
        const result = get_turn_winner(CISEAUX,FEUILLE);
        expect(result).toBe(1);
    });

    it('Feuille loose vs Ciseaux', () => {
        const result = get_turn_winner(FEUILLE,CISEAUX);
        expect(result).toBe(2);
    });
    
    it('Feuille loose vs Ciseaux', () => {
        const result = get_turn_winner(FEUILLE,CISEAUX);
        expect(result).toBe(2);
    });
    
    it('Feuille vs Feuille is draw', () => {
        const result = get_turn_winner(FEUILLE,FEUILLE);
        expect(result).toBe(0);
    });
    
    it('Ciseaux vs Ciseaux is draw', () => {
        const result = get_turn_winner(CISEAUX,CISEAUX);
        expect(result).toBe(0);
    });
    
    it('Pierre vs Pierre is draw', () => {
        const result = get_turn_winner(PIERRE,PIERRE);
        expect(result).toBe(0);
    });
});