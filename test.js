const check=require('./js');

const chai=require('chai').assert;

let expect=require('chai').expect

describe('Tests for StringBuilder Class', () => {

    describe('Tests for the Constructor', () => {

        it('Should not throw an error if the input is a 1-letter string', () => {
            let instance = new check('a');
            expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
            expect(instance.toString()).to.equal('a');
        });

        it('Should not throw an error if the input is a 3-letter string', () => {
            let instance = new check('abc');
            expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
            expect(instance.toString()).to.equal('abc');
        });

        it('Should not throw an error if the input is undefined', () => {
            let instance = new check();
            expect(() => instance).not.to.throw(TypeError, 'Argument must be a string');
            expect(instance.toString()).to.equal('');
        });

        it('Should throw an error if the input is not a string', () => {
            expect(() => new check(123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new check(['abc'])).to.throw(TypeError, 'Argument must be a string');
            expect(() => new check(null)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Tests for the append Method', () => {

        it('Should work as intended when the given input is a string', () => {
            let instance = new check('abc');
            instance.append('123');
            expect(instance.toString()).to.equal('abc123');
        });

        it('Should throw an error when the given input is not a string', () => {
            let instance1 = new check('abc');
            expect(() => instance1.append(undefined)).to.throw(TypeError, 'Argument must be a string');
            let instance2 = new check('abc');
            expect(() => instance2.append(123)).to.throw(TypeError, 'Argument must be a string');
            let instance3 = new check('abc');
            expect(() => instance3.append()).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Tests for the prepend Method', () => {

        it('Should work as intended when the given input is a string', () => {
            let instance = new check('abc');
            instance.prepend('123');
            expect(instance.toString()).to.equal('123abc');
        });

        it('Should throw an error when the given input is not a string', () => {
            let instance1 = new check('abc');
            expect(() => instance1.prepend(undefined)).to.throw(TypeError, 'Argument must be a string');
            let instance2 = new check('abc');
            expect(() => instance2.prepend(123)).to.throw(TypeError, 'Argument must be a string');
            let instance3 = new check('abc');
            expect(() => instance3.prepend()).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Tests for the insertAt Method', () => {

        it('Should work as intended when the first input is a string', () => {
            let instance1 = new check('abc');
            instance1.insertAt('123', 1);
            expect(instance1.toString()).to.equal('a123bc');
            let instance2 = new check('abc');
            instance2.insertAt('123', 4);
            expect(instance2.toString()).to.equal('abc123');
            let instance3 = new check('abc');
            instance3.insertAt('123');
            expect(instance3.toString()).to.equal('123abc');
            let instance4 = new check('abc');
            instance4.insertAt('123', -1);
            expect(instance4.toString()).to.equal('ab123c');
            let instance5 = new check('abc');
            instance5.insertAt('123', -4);
            expect(instance5.toString()).to.equal('123abc');
        });

        it('Should throw an error when the given input is not a string', () => {
            let instance1 = new check('abc');
            expect(() => instance1.insertAt(undefined)).to.throw(TypeError, 'Argument must be a string');
            let instance2 = new check('abc');
            expect(() => instance2.insertAt(123, 1)).to.throw(TypeError, 'Argument must be a string');
            let instance3 = new check('abc');
            expect(() => instance3.insertAt(123)).to.throw(TypeError, 'Argument must be a string');
            let instance4 = new check('abc');
            expect(() => instance4.insertAt()).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Tests for the remove Method', () => {

        it('Should work as intended when the input is as wanted', () => {
            let instance1 = new check('abc');
            instance1.remove(1, 0);
            expect(instance1.toString()).to.equal('abc');
            let instance2 = new check('abc');
            instance2.remove(0, 1);
            expect(instance2.toString()).to.equal('bc');
            let instance3 = new check('abc');
            instance3.remove(4, 1);
            expect(instance3.toString()).to.equal('abc');
            let instance4 = new check('abc');
            instance4.remove(1, 4);
            expect(instance4.toString()).to.equal('a');
            let instance5 = new check('abc');
            instance5.remove();
            expect(instance5.toString()).to.equal('abc');
        });
    });
});