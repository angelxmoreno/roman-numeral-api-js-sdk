import 'mocha';
import chai = require('chai');
import { Client } from '../src/Client';

const LAST_PARAM = process.argv[process.argv.length - 1];
const API_KEY = LAST_PARAM.split('=')[1];
const expect = chai.expect;
const decimalNumber = 1234;
const romanNumber = 'MCCXXXIV';

describe('Client', () => {
    it('can convert decimal to roman numeral', async () => {
        const client = new Client(API_KEY);
        const returned = await client.toRomanNumeral(decimalNumber);

        expect(returned).to.equal(romanNumber);
    });

    it('can convert roman numeral to decimal', async () => {
        const client = new Client(API_KEY);
        const returned = await client.toDecimalNumber(romanNumber);

        expect(returned).to.equal(decimalNumber);
    });

    it('ignores casing when converting roman numeral to decimal', async () => {
        const client = new Client(API_KEY);
        const returned = await client.toDecimalNumber(romanNumber.toLowerCase());

        expect(returned).to.equal(decimalNumber);
    });
});
