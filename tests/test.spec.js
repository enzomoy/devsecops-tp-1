const { sum, multiply, divide, subtract } = require('../src/functions');

describe('Fonctions mathématiques', () => {
    describe('sum', () => {
        test('additionne correctement deux nombres positifs', () => {
            expect(sum(2, 3)).toBe(5);
        });

        test('gère correctement les nombres négatifs', () => {
            expect(sum(-1, -2)).toBe(-3);
            expect(sum(-1, 5)).toBe(4);
        });
    });

    describe('multiply', () => {
        test('multiplie correctement deux nombres positifs', () => {
            expect(multiply(2, 3)).toBe(6);
        });

        test('gère correctement les nombres négatifs', () => {
            expect(multiply(-2, 3)).toBe(-6);
            expect(multiply(-2, -3)).toBe(6);
        });

        test('gère correctement le zéro', () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        test('divise correctement deux nombres', () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(5, 2)).toBe(2.5);
        });

        test('gère correctement les nombres négatifs', () => {
            expect(divide(-6, 2)).toBe(-3);
            expect(divide(6, -2)).toBe(-3);
            expect(divide(-6, -2)).toBe(3);
        });

        test('lance une erreur lors d\'une division par zéro', () => {
            expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
        });
    });

    describe('subtract', () => {
        test('soustrait correctement deux nombres', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('gère correctement les nombres négatifs', () => {
            expect(subtract(-5, 3)).toBe(-8);
            expect(subtract(5, -3)).toBe(8);
            expect(subtract(-5, -3)).toBe(-2);
        });
    });
});